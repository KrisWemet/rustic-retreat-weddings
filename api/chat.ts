import fs from "fs";
import path from "path";
import {
  extractCitedSources,
  needsHumanFromAssistant,
  persistChatLog,
  type ChatLogRecord,
} from "./chat-analytics";
import { SITE_RULES_FALLBACK_TEXT } from "../src/content/siteRules";

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
  url?: string;
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
  model?: string;
  provider?: string | { name?: string };
  choices?: Array<{
    model?: string;
    message?: {
      content?: string;
    };
  }>;
};

type OpenRouterDebugInfo = {
  requestedModel: string;
  usedModel: string | null;
  provider: string | null;
};

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
const OPENROUTER_TIMEOUT_MS = 20_000;
const CLIENT_ERROR_DETAIL_MAX_LENGTH = 300;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const DEFAULT_KNOWLEDGE_BASE_URL = "https://rustic-retreat-weddings.vercel.app";
const KNOWLEDGE_CACHE_TTL_MS = 15 * 60 * 1000;
const MAX_KNOWLEDGE_CHARS_PER_PAGE = 16_000;
const CONTACT_FALLBACK_TEXT = `Rustic Retreat Contact
Phone: (780) 210-6252
Email: rusticretreatalberta@gmail.com`;
const ABOUT_FALLBACK_TEXT = `About Rustic Retreat Weddings
Rustic Retreat is an off-grid, events-focused wedding venue in Alberta.
For detailed venue background and current offerings, contact us directly at (780) 210-6252 or rusticretreatalberta@gmail.com.`;

const KNOWLEDGE_PAGE_PATHS = ["/rules", "/faqs", "/packages", "/venue", "/contact", "/about"] as const;
type KnowledgePath = (typeof KNOWLEDGE_PAGE_PATHS)[number];

type KnowledgeCacheEntry = {
  text: string;
  source: "remote" | "fallback";
  expiresAt: number;
};

const ipRequestLog = new Map<string, number[]>();
const knowledgeCache = new Map<KnowledgePath, KnowledgeCacheEntry>();

const readPublicFile = (filename: string) => {
  try {
    return fs.readFileSync(path.join(process.cwd(), "public", filename), "utf8");
  } catch {
    console.warn(`Missing ${filename}`);
    return "";
  }
};

const parseBody = (body: unknown): ChatRequestBody => {
  if (!body) return {};

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
  if (!Array.isArray(rawMessages)) return [] as ChatMessage[];

  return rawMessages
    .flatMap((message) => {
      if (!message || typeof message !== "object") return [];

      const rawRole = (message as { role?: unknown }).role;
      const rawContent = (message as { content?: unknown }).content;

      if ((rawRole !== "user" && rawRole !== "assistant") || typeof rawContent !== "string") return [];

      const content = rawContent.trim();
      if (!content) return [];

      return [{ role: rawRole, content }];
    })
    .slice(-30);
};

const writeStreamChunk = (line: string, res: ApiResponse) => {
  if (!line.startsWith("data:")) return "";

  const payload = line.slice(5).trim();
  if (!payload || payload === "[DONE]") return "";

  try {
    const parsed = JSON.parse(payload) as OpenRouterStreamChunk;
    const content = parsed.choices?.[0]?.delta?.content;
    if (typeof content === "string" && content.length > 0) {
      res.write(content);
      return content;
    }
  } catch {
    // Ignore malformed or partial chunks.
  }

  return "";
};

const truncateForClient = (value: string, maxLength = CLIENT_ERROR_DETAIL_MAX_LENGTH) => {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength)}...`;
};

const extractOpenRouterMessage = (rawText: string) => {
  const trimmed = rawText.trim();
  if (!trimmed) return "OpenRouter returned an empty error response.";

  try {
    const parsed = JSON.parse(trimmed) as {
      error?: { message?: string };
      message?: string;
      detail?: string;
    };
    return parsed.error?.message || parsed.message || parsed.detail || trimmed;
  } catch {
    return trimmed;
  }
};

const isDebugRequest = (req: ApiRequest) => {
  if (!req.url) return false;

  try {
    const parsedUrl = new URL(req.url, "http://localhost");
    return parsedUrl.searchParams.get("debug") === "1";
  } catch {
    return false;
  }
};

const getHeaderValue = (headers: Headers, names: string[]) => {
  for (const name of names) {
    const value = headers.get(name);
    if (value && value.trim()) return value.trim();
  }
  return null;
};

const extractDebugFromHeaders = (headers: Headers) => {
  const usedModel = getHeaderValue(headers, ["x-openrouter-model", "openrouter-model", "x-model", "model"]);
  const provider = getHeaderValue(headers, [
    "x-openrouter-provider",
    "openrouter-provider",
    "x-provider",
    "provider",
  ]);

  const modelProviderHeaders = Object.fromEntries(
    [...headers.entries()].filter(([key]) => key.includes("model") || key.includes("provider")),
  );

  if (Object.keys(modelProviderHeaders).length > 0) {
    console.info("OpenRouter response model/provider headers:", modelProviderHeaders);
  }

  return { usedModel, provider };
};

const extractDebugFromJson = (data: OpenRouterCompletion) => {
  const modelFromTopLevel = typeof data.model === "string" ? data.model : null;
  const modelFromChoice = typeof data.choices?.[0]?.model === "string" ? data.choices[0].model : null;

  let provider: string | null = null;
  if (typeof data.provider === "string") {
    provider = data.provider;
  } else if (data.provider && typeof data.provider === "object" && typeof data.provider.name === "string") {
    provider = data.provider.name;
  }

  return {
    usedModel: modelFromTopLevel || modelFromChoice,
    provider,
  };
};

const buildDebugInfo = (
  requestedModel: string,
  headerInfo: { usedModel: string | null; provider: string | null },
  jsonInfo?: { usedModel: string | null; provider: string | null },
): OpenRouterDebugInfo => {
  return {
    requestedModel,
    usedModel: jsonInfo?.usedModel || headerInfo.usedModel || null,
    provider: jsonInfo?.provider || headerInfo.provider || null,
  };
};

const getClientIp = (req: ApiRequest) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers["x-real-ip"] || req.headers["cf-connecting-ip"] || "unknown";
};

const isRateLimited = (ip: string, now = Date.now()) => {
  const requests = ipRequestLog.get(ip) || [];
  const recentRequests = requests.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recentRequests.push(now);
  ipRequestLog.set(ip, recentRequests);
  return recentRequests.length > RATE_LIMIT_MAX_REQUESTS;
};

const fetchWithTimeout = async (url: string, init: RequestInit, timeoutMs: number) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
};

const resolveKnowledgeBaseUrl = () => {
  const candidate = process.env.KNOWLEDGE_BASE_URL?.trim();
  if (candidate && /^https?:\/\//i.test(candidate)) {
    return candidate.replace(/\/+$/, "");
  }

  return DEFAULT_KNOWLEDGE_BASE_URL;
};

const decodeHtmlEntities = (value: string) => {
  const namedEntityMap: Record<string, string> = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&quot;": "\"",
    "&apos;": "'",
    "&#39;": "'",
    "&lt;": "<",
    "&gt;": ">",
  };

  let output = value;
  Object.entries(namedEntityMap).forEach(([entity, replacement]) => {
    output = output.replace(new RegExp(entity, "g"), replacement);
  });

  output = output.replace(/&#(\d+);/g, (_, codePoint) => {
    const parsed = Number.parseInt(codePoint, 10);
    return Number.isNaN(parsed) ? _ : String.fromCharCode(parsed);
  });

  output = output.replace(/&#x([0-9a-fA-F]+);/g, (_, codePointHex) => {
    const parsed = Number.parseInt(codePointHex, 16);
    return Number.isNaN(parsed) ? _ : String.fromCharCode(parsed);
  });

  return output;
};

const htmlToKnowledgeText = (html: string) => {
  let text = html;

  text = text.replace(/<\s*(script|style|noscript|svg)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "");
  text = text.replace(/<\s*(header|footer|nav)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "");
  text = text.replace(/<\s*h[1-6][^>]*>/gi, "\n## ");
  text = text.replace(/<\/\s*h[1-6]\s*>/gi, "\n");
  text = text.replace(/<\s*li[^>]*>/gi, "\n- ");
  text = text.replace(/<\/\s*li\s*>/gi, "\n");
  text = text.replace(/<\s*br\s*\/?>/gi, "\n");
  text = text.replace(/<\/\s*p\s*>/gi, "\n\n");
  text = text.replace(/<\/\s*(div|section|article|main|ul|ol)\s*>/gi, "\n");
  text = text.replace(/<[^>]+>/g, " ");
  text = decodeHtmlEntities(text);

  const lines = text
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const deduped: string[] = [];
  for (const line of lines) {
    if (deduped[deduped.length - 1] !== line) {
      deduped.push(line);
    }
  }

  return deduped.join("\n");
};

const truncateKnowledgeContext = (text: string) => {
  if (text.length <= MAX_KNOWLEDGE_CHARS_PER_PAGE) return text;
  return `${text.slice(0, MAX_KNOWLEDGE_CHARS_PER_PAGE)}\n\n[Context truncated for size.]`;
};

const fetchKnowledgePage = async (pathKey: KnowledgePath, fallbackText: string) => {
  const knowledgeBaseUrl = resolveKnowledgeBaseUrl();
  const now = Date.now();
  const cached = knowledgeCache.get(pathKey);
  if (cached && cached.expiresAt > now) {
    return { path: pathKey, text: cached.text, source: cached.source };
  }

  try {
    const response = await fetchWithTimeout(
      `${knowledgeBaseUrl}${pathKey}`,
      {
        method: "GET",
        headers: { Accept: "text/html,application/xhtml+xml" },
      },
      OPENROUTER_TIMEOUT_MS,
    );

    if (!response.ok) {
      throw new Error(`Knowledge fetch failed for ${pathKey} with status ${response.status}`);
    }

    const html = await response.text();
    const parsed = htmlToKnowledgeText(html);
    if (!parsed || parsed.length < 120) {
      throw new Error(`Knowledge parse failed for ${pathKey}: content too short.`);
    }

    const text = truncateKnowledgeContext(parsed);
    knowledgeCache.set(pathKey, {
      text,
      source: "remote",
      expiresAt: now + KNOWLEDGE_CACHE_TTL_MS,
    });

    return { path: pathKey, text, source: "remote" as const };
  } catch (error) {
    console.warn(`Knowledge fetch failed for ${pathKey}; using fallback.`, error);
    const fallback = truncateKnowledgeContext(fallbackText);

    knowledgeCache.set(pathKey, {
      text: fallback,
      source: "fallback",
      expiresAt: now + KNOWLEDGE_CACHE_TTL_MS,
    });

    return { path: pathKey, text: fallback, source: "fallback" as const };
  }
};

const getKnowledgeContext = async (fallbackByPath: Record<KnowledgePath, string>) => {
  const pages = await Promise.all(
    KNOWLEDGE_PAGE_PATHS.map((pathKey) => fetchKnowledgePage(pathKey, fallbackByPath[pathKey] || "")),
  );

  return {
    context: pages.map((page) => `SOURCE: ${page.path}\n${page.text}`).join("\n\n"),
    pages,
  };
};

const getSessionId = (req: ApiRequest, clientIp: string) => {
  const fromHeader = req.headers["x-session-id"]?.trim();
  if (fromHeader) return fromHeader;

  return `${clientIp}:${Date.now().toString(36)}`;
};

const getLatestUserMessage = (messages: ChatMessage[]) => {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i].role === "user") {
      return messages[i].content;
    }
  }

  return messages[messages.length - 1]?.content || "";
};

const logExchange = async ({
  sessionId,
  userMessage,
  assistantMessage,
  debugInfo,
}: {
  sessionId: string;
  userMessage: string;
  assistantMessage: string;
  debugInfo: OpenRouterDebugInfo;
}) => {
  const cleanAssistant = assistantMessage.trim();
  const cleanUser = userMessage.trim();
  if (!cleanAssistant || !cleanUser) return;

  const record: ChatLogRecord = {
    session_id: sessionId,
    user_message: cleanUser,
    assistant_message: cleanAssistant,
    cited_sources: extractCitedSources(cleanAssistant),
    needs_human: needsHumanFromAssistant(cleanAssistant),
    timestamp: new Date().toISOString(),
    requested_model: debugInfo.requestedModel,
    used_model: debugInfo.usedModel,
    provider: debugInfo.provider,
  };

  await persistChatLog(record);
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Session-Id");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: "rate_limited",
      detail: "Too many chat requests. Please wait a few minutes and try again.",
    });
  }

  try {
    const body = parseBody(req.body);
    const messages = normalizeMessages(body.messages);
    if (messages.length === 0) {
      return res.status(400).json({ error: "At least one valid message is required." });
    }

    const sessionId = getSessionId(req, clientIp);
    const latestUserMessage = getLatestUserMessage(messages);
    const debugMode = isDebugRequest(req);
    const model = "openrouter/free";
    const siteUrl = process.env.OPENROUTER_SITE_URL || "https://rustic-retreat-weddings.vercel.app";

    const fallbackByPath: Record<KnowledgePath, string> = {
      "/rules": SITE_RULES_FALLBACK_TEXT,
      "/faqs": readPublicFile("faqs.txt"),
      "/packages": readPublicFile("packages.txt"),
      "/venue": readPublicFile("venue.txt"),
      "/contact": CONTACT_FALLBACK_TEXT,
      "/about": ABOUT_FALLBACK_TEXT,
    };

    const knowledgeResult = await getKnowledgeContext(fallbackByPath);
    const knowledgeContext = knowledgeResult.context;
    if (debugMode) {
      const remotePages = knowledgeResult.pages.filter((page) => page.source === "remote").map((page) => page.path);
      const fallbackPages = knowledgeResult.pages.filter((page) => page.source === "fallback").map((page) => page.path);
      console.info("Knowledge fetch status", {
        baseUrl: resolveKnowledgeBaseUrl(),
        fetchedSuccessfully: remotePages,
        usedFallback: fallbackPages,
      });
    }

    const systemPrompt = `You are Rustic Retreat Chatbot (AI) for Rustic Retreat Weddings.

You must answer only from the GROUNDED KNOWLEDGE provided below.
Do not guess. Do not invent prices, policies, amenities, or availability.

Required answer format:
1) Give a concise factual answer.
2) End with a source line in this exact format: Source: /path
Use one or more source paths from the provided context.

If the answer cannot be found in the provided context:
- Start with exactly: I'm not sure.
- Then write: Here's how to confirm:
- Include the most relevant page path (for example /faqs, /packages, /venue, /contact, /rules, or /about).
- Include contact details: (780) 210-6252 and rusticretreatalberta@gmail.com.
- Do not guess.

Core constraints you must always honor:
- Maximum 80 guests for ceremony/reception.
- Maximum 60 guests camping on-site.
- Up to 15 RVs on-site.
- Events-only venue bookings (no camping-only bookings).
- $500 damage deposit is due on check-in day.
- Wedding inquiries require direct conversation with the venue team before booking.

GROUNDED KNOWLEDGE:
${knowledgeContext}
`;

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "OPENROUTER_API_KEY missing" });
    }

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

    let response: Response;
    const shouldStream = !debugMode;

    try {
      response = await fetchWithTimeout(
        `${OPENROUTER_BASE_URL}/chat/completions`,
        {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify({
            ...requestBody,
            stream: shouldStream,
          }),
        },
        OPENROUTER_TIMEOUT_MS,
      );
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return res.status(504).json({
          error: "openrouter_timeout",
          detail: "The assistant is taking longer than expected. Please try again in a moment.",
        });
      }
      throw error;
    }

    if (!response.ok) {
      const openrouterStatus = response.status;
      const errorText = await response.text();
      const headerDebug = extractDebugFromHeaders(response.headers);
      const debugInfo = buildDebugInfo(model, headerDebug);

      console.error("OpenRouter non-200 response:", {
        status: openrouterStatus,
        body: errorText,
        requestedModel: debugInfo.requestedModel,
        usedModel: debugInfo.usedModel,
        provider: debugInfo.provider,
      });

      if (openrouterStatus === 429 && shouldStream) {
        let fallbackResponse: Response;

        try {
          fallbackResponse = await fetchWithTimeout(
            `${OPENROUTER_BASE_URL}/chat/completions`,
            {
              method: "POST",
              headers: requestHeaders,
              body: JSON.stringify({
                ...requestBody,
                stream: false,
              }),
            },
            OPENROUTER_TIMEOUT_MS,
          );
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return res.status(504).json({
              error: "openrouter_timeout",
              detail: "The assistant is taking longer than expected. Please try again in a moment.",
            });
          }
          throw error;
        }

        if (fallbackResponse.ok) {
          const data = (await fallbackResponse.json()) as OpenRouterCompletion;
          const fallbackHeaderDebug = extractDebugFromHeaders(fallbackResponse.headers);
          const fallbackJsonDebug = extractDebugFromJson(data);
          const fallbackDebugInfo = buildDebugInfo(model, fallbackHeaderDebug, fallbackJsonDebug);

          console.info("OpenRouter completion model info:", fallbackDebugInfo);

          const content = data.choices?.[0]?.message?.content;
          if (typeof content !== "string" || !content.trim()) {
            return res.status(502).json({
              error: "openrouter_error",
              detail: "OpenRouter returned an empty completion.",
            });
          }

          await logExchange({
            sessionId,
            userMessage: latestUserMessage,
            assistantMessage: content,
            debugInfo: fallbackDebugInfo,
          });

          res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
          res.setHeader("Cache-Control", "no-cache, no-transform");
          res.setHeader("Connection", "keep-alive");
          res.write(content);
          return res.end();
        }

        const fallbackErrorText = await fallbackResponse.text();
        const fallbackHeaderDebug = extractDebugFromHeaders(fallbackResponse.headers);
        const fallbackDebugInfo = buildDebugInfo(model, fallbackHeaderDebug);
        console.error("OpenRouter fallback non-200 response:", {
          status: fallbackResponse.status,
          body: fallbackErrorText,
          requestedModel: fallbackDebugInfo.requestedModel,
          usedModel: fallbackDebugInfo.usedModel,
          provider: fallbackDebugInfo.provider,
        });

        return res.status(fallbackResponse.status).json({
          error: "openrouter_error",
          detail: truncateForClient(extractOpenRouterMessage(fallbackErrorText)),
          ...(debugMode ? { debug: fallbackDebugInfo } : {}),
        });
      }

      return res.status(openrouterStatus).json({
        error: "openrouter_error",
        detail: truncateForClient(extractOpenRouterMessage(errorText)),
        ...(debugMode ? { debug: debugInfo } : {}),
      });
    }

    const headerDebug = extractDebugFromHeaders(response.headers);
    const successDebugInfo = buildDebugInfo(model, headerDebug);
    console.info("OpenRouter stream model info:", {
      requestedModel: successDebugInfo.requestedModel,
      usedModel: successDebugInfo.usedModel,
      provider: successDebugInfo.provider,
    });

    if (!response.body) {
      throw new Error("No response body from OpenRouter");
    }

    if (debugMode) {
      const completion = (await response.json()) as OpenRouterCompletion;
      const jsonDebug = extractDebugFromJson(completion);
      const debugInfo = buildDebugInfo(model, headerDebug, jsonDebug);
      console.info("OpenRouter completion model info:", debugInfo);

      const content = completion.choices?.[0]?.message?.content;
      if (typeof content !== "string" || !content.trim()) {
        return res.status(502).json({
          error: "openrouter_error",
          detail: "OpenRouter returned an empty completion.",
          debug: debugInfo,
        });
      }

      await logExchange({
        sessionId,
        userMessage: latestUserMessage,
        assistantMessage: content,
        debugInfo,
      });

      return res.status(200).json({ content, debug: debugInfo });
    }

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    let assistantOutput = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let newLineIndex = buffer.indexOf("\n");
      while (newLineIndex !== -1) {
        const line = buffer.slice(0, newLineIndex).trim();
        buffer = buffer.slice(newLineIndex + 1);
        assistantOutput += writeStreamChunk(line, res);
        newLineIndex = buffer.indexOf("\n");
      }
    }

    const tail = buffer.trim();
    if (tail) {
      assistantOutput += writeStreamChunk(tail, res);
    }

    await logExchange({
      sessionId,
      userMessage: latestUserMessage,
      assistantMessage: assistantOutput,
      debugInfo: successDebugInfo,
    });

    res.end();
  } catch (error) {
    console.error("Error generating chat response:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
