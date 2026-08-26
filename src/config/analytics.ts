/**
 * Ad-platform tracking IDs.
 *
 * ── HOW TO TURN TRACKING ON ────────────────────────────────────────────────
 * Paste your ID between the quotes below and redeploy. That is the only edit
 * needed — everything else (script loading, page views on navigation, and the
 * lead events on the enquiry and booking forms) is already wired up.
 *
 * While an ID is left empty, that platform stays completely switched off: no
 * script is loaded, no cookie is set, and no request is made. So it is safe to
 * fill in one and leave the other blank.
 *
 * Each value can also be supplied as an environment variable in Vercel instead
 * of being committed here. The environment variable wins when both are set.
 * ───────────────────────────────────────────────────────────────────────────
 */

/**
 * Meta (Facebook) pixel ID — a ~15-digit number.
 * Find it in Meta Events Manager → Data Sources → your pixel, under the name.
 * Example: "1234567890123456"
 * Env var: VITE_FACEBOOK_PIXEL_ID
 */
const FACEBOOK_PIXEL_ID = "";

/**
 * Google Ads conversion ID — starts with "AW-".
 * Find it in Google Ads → Goals → Conversions → Google tag.
 * This is what powers Google Ads remarketing audiences.
 * Example: "AW-123456789"
 * Env var: VITE_GOOGLE_ADS_ID
 *
 * Note: Google Analytics 4 (G-SFRXXKP748) is separate and already running from
 * index.html. This ID is only for Google Ads.
 */
const GOOGLE_ADS_ID = "";

/**
 * Google Ads conversion label for enquiry submissions — optional.
 * In Google Ads, create a conversion action for "Submit lead form", then copy
 * the label from its tag snippet (the part after the slash in send_to).
 * Example: "AbC-D_efGhIjKlMnOp"
 * Env var: VITE_GOOGLE_ADS_LEAD_LABEL
 *
 * Leave empty and lead submissions still report to Google Ads as a
 * "generate_lead" event; adding the label reports them as a true conversion
 * you can bid against.
 */
const GOOGLE_ADS_LEAD_LABEL = "";

const fromEnv = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export const facebookPixelId =
  fromEnv(import.meta.env.VITE_FACEBOOK_PIXEL_ID) || FACEBOOK_PIXEL_ID.trim();

export const googleAdsId =
  fromEnv(import.meta.env.VITE_GOOGLE_ADS_ID) || GOOGLE_ADS_ID.trim();

export const googleAdsLeadLabel =
  fromEnv(import.meta.env.VITE_GOOGLE_ADS_LEAD_LABEL) || GOOGLE_ADS_LEAD_LABEL.trim();

export const isFacebookEnabled = facebookPixelId.length > 0;
export const isGoogleAdsEnabled = googleAdsId.length > 0;
export const isAnyAdTrackingEnabled = isFacebookEnabled || isGoogleAdsEnabled;
