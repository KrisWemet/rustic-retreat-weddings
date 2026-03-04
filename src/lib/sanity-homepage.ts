import { createClient } from "@sanity/client";
import { HomepageCmsResponse } from "@/types/homepage-cms";

const SANITY_HOMEPAGE_QUERY = `*[_type == "homepageContent"][0]{
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

export const toSanityImageUrl = (url?: string, width = 2200) => {
  if (!url) {
    return null;
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}auto=format&w=${width}`;
};

export const fetchSanityHomepageContent = async (): Promise<HomepageCmsResponse> => {
  try {
    const response = await fetch("/api/sanity/homepage", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Sanity API route failed: ${response.status}`);
    }

    const payload = await response.json();
    return {
      result: payload?.result || null,
      preview: Boolean(payload?.preview),
      hasDraftAccess: Boolean(payload?.hasDraftAccess),
    };
  } catch {
    // Vite dev doesn't host /api routes; fall back to direct published query.
  }

  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const dataset = import.meta.env.VITE_SANITY_DATASET;
  if (!projectId || !dataset) {
    return { result: null, preview: false, hasDraftAccess: false };
  }

  const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-10-01";
  const useCdn = import.meta.env.VITE_SANITY_USE_CDN !== "false";
  const studioUrl = import.meta.env.VITE_SANITY_STUDIO_URL || "http://localhost:3333";

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
    stega: { studioUrl },
  });

  const result = await client.fetch(SANITY_HOMEPAGE_QUERY);
  return { result: result || null, preview: false, hasDraftAccess: false };
};
