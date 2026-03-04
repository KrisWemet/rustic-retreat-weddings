import { computeChatStats } from "./chat-analytics";

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

  const requiredKey = process.env.CHATSTATS_API_KEY;
  if (requiredKey) {
    const provided = req.headers["x-api-key"] || getQueryParam(req, "key");
    if (provided !== requiredKey) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }

  try {
    const stats = await computeChatStats();
    return res.status(200).json(stats);
  } catch (error) {
    console.error("Failed to compute chat stats", error);
    return res.status(500).json({ error: "Failed to compute chat stats" });
  }
}
