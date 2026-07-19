import { createClient } from "@sanity/client";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { buildPreviewCookie, createPreviewToken, sanitizeRedirectPath } from "./previewCookie";

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

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
  const apiVersion = process.env.SANITY_API_VERSION || process.env.VITE_SANITY_API_VERSION || "2024-10-01";
  const viewerToken = process.env.SANITY_VIEWER_TOKEN;

  if (!projectId || !viewerToken) {
    return res.status(500).json({
      error: "Missing SANITY_PROJECT_ID or SANITY_VIEWER_TOKEN in environment.",
    });
  }

  const client = createClient({ projectId, dataset, apiVersion, useCdn: false, token: viewerToken });
  const host = parseHost(req);
  const protocol = parseProtocol(req);
  const absoluteUrl = `${protocol}://${host}${req.url}`;

  try {
    const { isValid, redirectTo = "/" } = await validatePreviewUrl(client, absoluteUrl);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid preview URL secret." });
    }

    const previewToken = createPreviewToken();
    if (!previewToken) {
      return res.status(500).json({ error: "Preview signing secret is not configured." });
    }

    res.setHeader("Set-Cookie", buildPreviewCookie(host, previewToken));
    res.setHeader("Location", sanitizeRedirectPath(redirectTo));
    return res.status(307).end();
  } catch (error) {
    console.error("Failed to enable preview mode", error);
    return res.status(500).json({ error: "Failed to enable preview mode." });
  }
}
