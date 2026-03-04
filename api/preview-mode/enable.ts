import { createClient } from "@sanity/client";
import { validatePreviewUrl } from "@sanity/preview-url-secret";

type ApiRequest = {
  method?: string;
  headers: Record<string, string | undefined>;
  url?: string;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
  setHeader: (key: string, value: string) => void;
  end: () => void;
};

const parseHost = (req: ApiRequest) => req.headers["x-forwarded-host"] || req.headers.host || "localhost";
const parseProtocol = (req: ApiRequest) => req.headers["x-forwarded-proto"] || "https";
const isLocalHost = (host: string) => host.includes("localhost") || host.startsWith("127.0.0.1");

const buildPreviewCookie = (enabled: boolean, host: string) => {
  const sameSite = isLocalHost(host) ? "Lax" : "None";
  const secureFlag = isLocalHost(host) ? "" : " Secure;";
  const maxAge = enabled ? 60 * 60 : 0;
  return `__sanity_preview=${enabled ? "1" : "0"}; Path=/; Max-Age=${maxAge}; SameSite=${sameSite};${secureFlag}`;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
  const apiVersion = process.env.SANITY_API_VERSION || process.env.VITE_SANITY_API_VERSION || "2024-10-01";
  const token = process.env.SANITY_VIEWER_TOKEN;

  if (!projectId || !token) {
    return res.status(500).json({
      error: "Missing SANITY_PROJECT_ID or SANITY_VIEWER_TOKEN in environment.",
    });
  }

  const client = createClient({ projectId, dataset, apiVersion, useCdn: false, token });
  const host = parseHost(req);
  const protocol = parseProtocol(req);
  const absoluteUrl = `${protocol}://${host}${req.url}`;

  try {
    const { isValid, redirectTo = "/" } = await validatePreviewUrl(client, absoluteUrl);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid preview URL secret." });
    }

    res.setHeader("Set-Cookie", buildPreviewCookie(true, host));
    res.setHeader("Location", redirectTo);
    return res.status(307).end();
  } catch (error) {
    console.error("Failed to enable preview mode", error);
    return res.status(500).json({ error: "Failed to enable preview mode." });
  }
}
