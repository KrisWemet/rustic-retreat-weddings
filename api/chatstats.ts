import { timingSafeEqual } from "crypto";
import { computeChatStats } from "./chat-analytics";

const safeEqual = (a: string, b: string) => {
  const aBuffer = Buffer.from(a, "utf8");
  const bBuffer = Buffer.from(b, "utf8");
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
};

type ApiRequest = {
  method?: string;
  headers: Record<string, string | undefined>;
  url?: string;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
};

const getQueryParam = (req: ApiRequest, key: string) => {
  if (!req.url) return null;

  try {
    const parsed = new URL(req.url, "http://localhost");
    return parsed.searchParams.get(key);
  } catch {
    return null;
  }
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Fail closed: chat stats include verbatim user messages, so refuse to serve
  // them unless an API key is configured and matches.
  const requiredKey = process.env.CHATSTATS_API_KEY;
  if (!requiredKey) {
    console.error("CHATSTATS_API_KEY is not configured; refusing to serve chat stats.");
    return res.status(500).json({ error: "Server not configured" });
  }

  const provided = req.headers["x-api-key"] || getQueryParam(req, "key");
  if (typeof provided !== "string" || !safeEqual(provided, requiredKey)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const stats = await computeChatStats();
    return res.status(200).json(stats);
  } catch (error) {
    console.error("Failed to compute chat stats", error);
    return res.status(500).json({ error: "Failed to compute chat stats" });
  }
}
