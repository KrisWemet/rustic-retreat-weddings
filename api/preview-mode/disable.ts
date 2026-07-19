import { buildPreviewCookie, sanitizeRedirectPath } from "./previewCookie";

type ApiRequest = {
  method?: string;
  headers: Record<string, string | undefined>;
  query?: Record<string, string | string[] | undefined>;
};

type ApiResponse = {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
  setHeader: (key: string, value: string) => void;
  end: () => void;
};

const parseHost = (req: ApiRequest) => req.headers["x-forwarded-host"] || req.headers.host || "localhost";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const host = parseHost(req);
  const redirectTo = sanitizeRedirectPath(req.query?.redirect);

  res.setHeader("Set-Cookie", buildPreviewCookie(host, null, { clear: true }));
  res.setHeader("Location", redirectTo);
  return res.status(307).end();
}
