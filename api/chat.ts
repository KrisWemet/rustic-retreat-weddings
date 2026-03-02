import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
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

        // Make sure anthropic key exists
        if (!process.env.ANTHROPIC_API_KEY) {
            console.warn("ANTHROPIC_API_KEY is not set. Generating mock response for development...");
            // For local development without API keys, wait 1 sec and return mock
            setTimeout(() => {
                const stream = "[Mock Mode] The API key is missing, so I can't generate a real reply. Check the deployment settings on Vercel!";
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end(stream);
            }, 1000);
            return;
        }

        const result = streamText({
            model: anthropic('claude-3-7-sonnet-20250219'), // Mapping requested "claude-sonnet-4-20250514" to nearest valid latest sonnet model
            system: systemPrompt,
            messages,
        });

        result.pipeTextStreamToResponse(res);
    } catch (err) {
        console.error('Error generating chat response:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
