import fs from "fs";
import path from "path";

export const maxDuration = 30;

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ApiRequest = {
  method?: string;
  headers: Record<string, string | undefined>;
  body?: unknown;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
  setHeader: (key: string, value: string) => void;
  end: (body?: string) => void;
  write: (body: string) => void;
};

type ChatRequestBody = {
  messages?: unknown;
};

type OpenRouterStreamChunk = {
  choices?: Array<{
    delta?: {
      content?: string;
    };
  }>;
};

type OpenRouterCompletion = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

const readPublicFile = (filename: string) => {
  try {
    return fs.readFileSync(path.join(process.cwd(), "public", filename), "utf8");
  } catch {
    console.warn(`Missing ${filename}`);
    return "";
  }
};

const parseBody = (body: unknown): ChatRequestBody => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      const parsed = JSON.parse(body);
      if (parsed && typeof parsed === "object") {
        return parsed as ChatRequestBody;
      }
    } catch {
      return {};
    }
    return {};
  }

  if (typeof body === "object") {
    return body as ChatRequestBody;
  }

  return {};
};

const normalizeMessages = (rawMessages: unknown) => {
  if (!Array.isArray(rawMessages)) {
    return [] as ChatMessage[];
  }

  return rawMessages
    .flatMap((message) => {
      if (!message || typeof message !== "object") {
        return [];
      }

      const rawRole = (message as { role?: unknown }).role;
      const rawContent = (message as { content?: unknown }).content;

      if ((rawRole !== "user" && rawRole !== "assistant") || typeof rawContent !== "string") {
        return [];
      }

      const content = rawContent.trim();
      if (!content) {
        return [];
      }

      return [{ role: rawRole, content }];
    })
    .slice(-20);
};

const writeStreamChunk = (line: string, res: ApiResponse) => {
  if (!line.startsWith("data:")) {
    return;
  }

  const payload = line.slice(5).trim();
  if (!payload || payload === "[DONE]") {
    return;
  }

  try {
    const parsed = JSON.parse(payload) as OpenRouterStreamChunk;
    const content = parsed.choices?.[0]?.delta?.content;
    if (typeof content === "string" && content.length > 0) {
      res.write(content);
    }
  } catch {
    // Ignore malformed or partial chunks
  }
};

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = parseBody(req.body);
    const messages = normalizeMessages(body.messages);

    if (messages.length === 0) {
      return res.status(400).json({ error: "At least one valid message is required." });
    }

    const faqs = readPublicFile("faqs.txt");
    const venue = readPublicFile("venue.txt");
    const packages = readPublicFile("packages.txt");

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

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "OPENROUTER_API_KEY missing" });
    }

    const model = process.env.OPENROUTER_MODEL || "anthropic/claude-3.5-sonnet:beta";
    const siteUrl = process.env.OPENROUTER_SITE_URL || "https://rustic-retreat-weddings.vercel.app";
    const requestBody = {
      model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    };

    const requestHeaders: Record<string, string> = {
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": siteUrl,
      "X-Title": "Rustic Retreat Venue Chatbot",
      "Content-Type": "application/json",
    };

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({
        ...requestBody,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error:", errorText);

      if (response.status === 429) {
        const fallbackResponse = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify({
            ...requestBody,
            stream: false,
          }),
        });

        if (fallbackResponse.ok) {
          const data = (await fallbackResponse.json()) as OpenRouterCompletion;
          const content = data.choices?.[0]?.message?.content;
          if (typeof content === "string" && content.length > 0) {
            res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
            res.setHeader("Cache-Control", "no-cache, no-transform");
            res.setHeader("Connection", "keep-alive");
            res.write(content);
            return res.end();
          }
        } else {
          console.error("OpenRouter fallback error:", await fallbackResponse.text());
        }
      }

      const statusCode = response.status === 429 ? 429 : 500;
      const errorMessage = response.status === 429
        ? "The chatbot is temporarily busy. Please try again in a moment."
        : "Failed to communicate with OpenRouter";
      return res.status(statusCode).json({ error: errorMessage });
    }

    if (!response.body) {
      throw new Error("No response body from OpenRouter");
    }

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      buffer += decoder.decode(value, { stream: true });

      let newLineIndex = buffer.indexOf("\n");
      while (newLineIndex !== -1) {
        const line = buffer.slice(0, newLineIndex).trim();
        buffer = buffer.slice(newLineIndex + 1);
        writeStreamChunk(line, res);
        newLineIndex = buffer.indexOf("\n");
      }
    }

    const tail = buffer.trim();
    if (tail) {
      writeStreamChunk(tail, res);
    }

    res.end();
  } catch (error) {
    console.error("Error generating chat response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
