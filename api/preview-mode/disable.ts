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
const isLocalHost = (host: string) => host.includes("localhost") || host.startsWith("127.0.0.1");

const buildPreviewCookie = (host: string) => {
  const sameSite = isLocalHost(host) ? "Lax" : "None";
  const secureFlag = isLocalHost(host) ? "" : " Secure;";
  return `__sanity_preview=0; Path=/; Max-Age=0; SameSite=${sameSite};${secureFlag}`;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const host = parseHost(req);
  const redirectTo = typeof req.query?.redirect === "string" ? req.query.redirect : "/";

  res.setHeader("Set-Cookie", buildPreviewCookie(host));
  res.setHeader("Location", redirectTo);
  return res.status(307).end();
}
