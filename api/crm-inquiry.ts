import { createHash } from "node:crypto";

type ApiRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};
type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
};

const allowedFields = [
  "submissionId", "partner1FirstName", "partner2FirstName", "email", "phone",
  "weddingDate", "guestCount", "preferredContact", "tourDates", "inquiryType",
  "landingSource", "message", "website", "preferredEmail",
] as const;

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const origin = req.headers.origin;
  const host = req.headers.host;
  let matchesOrigin = false;
  try {
    matchesOrigin = Boolean(origin && host && new URL(Array.isArray(origin) ? origin[0] : origin).host === (Array.isArray(host) ? host[0] : host));
  } catch {
    matchesOrigin = false;
  }
  if (!matchesOrigin) {
    return res.status(403).json({ error: "Origin not allowed" });
  }
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) return res.status(400).json({ error: "Invalid payload" });
  const payload = body as Record<string, unknown>;
  if (JSON.stringify(payload).length > 12000 || allowedFields.some(field => payload[field] !== undefined && typeof payload[field] !== "string")) {
    return res.status(400).json({ error: "Invalid fields" });
  }
  if (payload.website) return res.status(200).json({ accepted: true }); // honeypot
  if (!payload.submissionId || !payload.partner1FirstName || !payload.email ||
    ![undefined, "", "email", "text", "phone"].includes(payload.preferredContact as string | undefined) ||
    (["text", "phone"].includes(String(payload.preferredContact)) && !payload.phone)) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const url = process.env.CRM_SUPABASE_URL;
  const key = process.env.CRM_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(503).json({ error: "CRM intake unavailable" });
  const forwarded = req.headers["x-forwarded-for"];
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0]?.trim() || "unknown";
  const ipHash = createHash("sha256").update(ip).digest("hex");
  try {
    const result = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/import_website_inquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: key, Authorization: `Bearer ${key}` },
      body: JSON.stringify({ payload, request_ip_hash: ipHash }),
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) {
      console.error("CRM intake RPC failed", result.status);
      return res.status(result.status === 400 ? 429 : 503).json({ error: "CRM intake unavailable" });
    }
    return res.status(200).json({ accepted: true });
  } catch {
    return res.status(503).json({ error: "CRM intake unavailable" });
  }
}
