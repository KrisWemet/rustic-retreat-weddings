import { createClient } from "@sanity/client";

type ApiRequest = {
  method?: string;
  headers: Record<string, string | undefined>;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
  setHeader: (key: string, value: string) => void;
};

const HOMEPAGE_QUERY = `*[_type == "homepageContent"][0]{
  _id,
  _type,
  heroKicker,
  heroHeadlinePart1,
  heroHeadlinePart2,
  heroHeadlineHighlight,
  heroSubheadline,
  heroPrimaryCtaText,
  heroPrimaryCtaHref,
  heroSecondaryCtaText,
  heroSecondaryCtaHref,
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": heroImageAlt,
  "introCards": coalesce(introCards, []),
  "pageBuilder": coalesce(pageBuilder, []){
    _key,
    _type,
    heading,
    body,
    ctaLabel,
    ctaHref,
    "imageUrl": image.asset->url,
    "imageAlt": altText
  }
}`;

const parseCookies = (cookieHeader = "") => {
  return cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .filter(Boolean)
    .reduce((acc: Record<string, string>, cookie) => {
      const separatorIndex = cookie.indexOf("=");
      if (separatorIndex === -1) {
        return acc;
      }
      const key = cookie.slice(0, separatorIndex);
      const value = cookie.slice(separatorIndex + 1);
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
  const apiVersion = process.env.SANITY_API_VERSION || process.env.VITE_SANITY_API_VERSION || "2024-10-01";
  const studioUrl = process.env.SANITY_STUDIO_URL || process.env.VITE_SANITY_STUDIO_URL || "http://localhost:3333";
  const token = process.env.SANITY_VIEWER_TOKEN;

  if (!projectId) {
    return res.status(200).json({ result: null, preview: false, hasDraftAccess: false });
  }

  const cookies = parseCookies(req.headers.cookie || "");
  const previewEnabled = cookies.__sanity_preview === "1";
  const hasDraftAccess = previewEnabled && Boolean(token);

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewEnabled,
    token: hasDraftAccess ? token : undefined,
    perspective: hasDraftAccess ? "drafts" : "published",
    stega: previewEnabled ? { studioUrl } : false,
  });

  try {
    const result = await client.fetch(HOMEPAGE_QUERY);
    if (previewEnabled) {
      res.setHeader("Cache-Control", "private, no-store");
    } else {
      res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    }

    return res.status(200).json({ result, preview: previewEnabled, hasDraftAccess });
  } catch (error) {
    console.error("Failed to query homepage content", error);
    return res.status(500).json({ error: "Failed to query homepage content" });
  }
}
