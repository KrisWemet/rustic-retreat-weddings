import fs from 'fs';
import path from 'path';

export const maxDuration = 30; // 30 seconds limit

export default async function handler(req: any, res: any) {
    // CORS headers for local dev vs production
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { messages } = req.body;

        // Load available information documents built into the repo via public folder
        const publicDir = path.join(process.cwd(), 'public');
        let faqs = '';
        let venue = '';
        let packages = '';

        try { faqs = fs.readFileSync(path.join(publicDir, 'faqs.txt'), 'utf8'); } catch (e) { console.warn("Missing faqs.txt"); }
        try { venue = fs.readFileSync(path.join(publicDir, 'venue.txt'), 'utf8'); } catch (e) { console.warn("Missing venue.txt"); }
        try { packages = fs.readFileSync(path.join(publicDir, 'packages.txt'), 'utf8'); } catch (e) { console.warn("Missing packages.txt"); }

        const systemPrompt = `You are a helpful, warm, friendly, and rustic-style assistant for Rustic Retreat Weddings, a beautiful 65-acre off-grid wedding venue in Alberta.

Answer the user's questions based strictly on the provided information below.

IMPORTANT STRICT RULE: If you do not explicitly know the answer, or if the information is not provided in the text below, you MUST gracefully tell them you don't know and immediately direct the user to contact (780) 210-6252 or rusticretreatalberta@gmail.com. Do not make up answers.

Keep your answers minimal but warm, like a friendly, relaxed host.

=== FAQs ===
${faqs}

=== VENUE INFO ===
${venue}

=== PACKAGES INFO ===
${packages}
`;

        // Make sure API key exists
        const apiKey = process.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;
        if (!apiKey) {
            console.warn("OpenRouter API key is not set. Generating mock response for development...");
            // For local development without API keys, wait 1 sec and return mock
            setTimeout(() => {
                const stream = "[Mock Mode] The VITE_OPENROUTER_API_KEY is missing, so I can't generate a real reply. Check the .env or deployment settings!";
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end(stream);
            }, 1000);
            return;
        }

        const model = process.env.VITE_OPENROUTER_MODEL || process.env.OPENROUTER_MODEL || 'anthropic/claude-3.5-sonnet:beta';

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": "https://rustic-retreat.vercel.app", // Required by OpenRouter: your site URL
                "X-Title": "Rustic Retreat Venue Chatbot", // Optional: your site name
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: model,
                stream: true,
                messages: [
                    { role: "system", content: systemPrompt },
                    ...messages
                ],
            })
        });

        if (!response.ok) {
            console.error("OpenRouter Error:", await response.text());
            return res.status(500).json({ error: 'Failed to communicate with OpenRouter' });
        }

        res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
        res.setHeader('Cache-Control', 'no-cache, no-transform');
        res.setHeader('Connection', 'keep-alive');

        // Simple passthrough of the stream
        if (!response.body) {
            throw new Error("No response body from OpenRouter");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });

            // Extract the content chunks here directly and just pass standard text.
            const lines = chunk.split('\n');
            for (const line of lines) {
                if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                    try {
                        const data = JSON.parse(line.trim().slice(6));
                        if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
                            res.write(data.choices[0].delta.content);
                        }
                    } catch (e) { /* ignore partial JSON objects from chunking */ }
                }
            }
        }

        res.end();
    } catch (err) {
        console.error('Error generating chat response:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
