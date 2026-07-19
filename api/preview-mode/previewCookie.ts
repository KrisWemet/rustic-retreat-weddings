import { createHmac, timingSafeEqual } from "crypto";

// Shared helper (not an HTTP endpoint) used by the preview-mode enable/disable
// routes and the Sanity homepage route to issue and verify a tamper-evident
// preview cookie. Draft content must only be served when the cookie carries a
// valid signature, otherwise anyone could forge `__sanity_preview=1` and read
// unpublished content.

export const PREVIEW_COOKIE_NAME = "__sanity_preview";
const PREVIEW_TTL_SECONDS = 60 * 60; // 1 hour

// Sign with a dedicated secret when provided, otherwise fall back to the viewer
// token. That fallback is safe: without the viewer token there is no draft
// access to gate, so a forged cookie grants nothing.
const getPreviewSecret = () =>
  process.env.SANITY_PREVIEW_SECRET || process.env.SANITY_VIEWER_TOKEN || "";

const sign = (payload: string, secret: string) =>
  createHmac("sha256", secret).update(payload).digest("hex");

const safeEqual = (a: string, b: string) => {
  const aBuffer = Buffer.from(a, "utf8");
  const bBuffer = Buffer.from(b, "utf8");
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
};

// Produces a self-expiring token: "<expiryEpochSeconds>.<hmac>".
export const createPreviewToken = (ttlSeconds = PREVIEW_TTL_SECONDS): string | null => {
  const secret = getPreviewSecret();
  if (!secret) return null;

  const expiry = Math.floor(Date.now() / 1000) + ttlSeconds;
  const payload = String(expiry);
  return `${payload}.${sign(payload, secret)}`;
};

// Returns true only for a correctly signed, unexpired token.
export const verifyPreviewToken = (value: string | undefined | null): boolean => {
  if (!value) return false;

  const secret = getPreviewSecret();
  if (!secret) return false;

  const separatorIndex = value.lastIndexOf(".");
  if (separatorIndex <= 0) return false;

  const payload = value.slice(0, separatorIndex);
  const signature = value.slice(separatorIndex + 1);
  if (!/^\d+$/.test(payload) || !signature) return false;

  if (!safeEqual(signature, sign(payload, secret))) return false;

  const expiry = Number.parseInt(payload, 10);
  return Number.isFinite(expiry) && expiry * 1000 > Date.now();
};

const isLocalHost = (host: string) => host.includes("localhost") || host.startsWith("127.0.0.1");

// Builds the Set-Cookie value. Pass a token to enable preview, or `null`/clear
// to expire it. Intentionally not HttpOnly: the client reads this flag only to
// decide whether to load the visual-editing overlay; the security boundary is
// server-side signature verification.
export const buildPreviewCookie = (
  host: string,
  token: string | null,
  { clear = false }: { clear?: boolean } = {},
): string => {
  const sameSite = isLocalHost(host) ? "Lax" : "None";
  const secureFlag = isLocalHost(host) ? "" : " Secure;";
  const enabled = Boolean(token) && !clear;
  const value = enabled ? token : "";
  const maxAge = enabled ? PREVIEW_TTL_SECONDS : 0;
  return `${PREVIEW_COOKIE_NAME}=${value}; Path=/; Max-Age=${maxAge}; SameSite=${sameSite};${secureFlag}`;
};

// Only allow root-relative, same-origin redirect targets. Rejects absolute
// URLs, protocol-relative ("//evil.com") and backslash tricks to prevent
// open-redirect abuse.
export const sanitizeRedirectPath = (value: unknown): string => {
  if (typeof value !== "string" || !value) return "/";
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) return "/";
  return value;
};
