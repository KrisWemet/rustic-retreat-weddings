/**
 * Meta (Facebook) pixel and Google Ads tag.
 *
 * Both stay dormant until an ID is filled in at `@/config/analytics` — with no
 * ID, every function here returns immediately, so nothing loads and nothing is
 * sent. Google Analytics 4 is separate and keeps running from index.html.
 *
 * Loading is deferred to browser idle time, matching the GA4 pattern in
 * index.html, so tracking never competes with hero imagery for first paint.
 */

import {
  facebookPixelId,
  googleAdsId,
  googleAdsLeadLabel,
  isAnyAdTrackingEnabled,
  isFacebookEnabled,
  isGoogleAdsEnabled,
} from "@/config/analytics";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTAG_SRC = "https://www.googletagmanager.com/gtag/js";

let initialised = false;

const canRun = () => typeof window !== "undefined" && typeof document !== "undefined";

const onIdle = (fn: () => void) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(fn, { timeout: 4000 });
  } else {
    window.setTimeout(fn, 1200);
  }
};

/**
 * Meta's standard loader, minus the automatic first PageView — that is fired by
 * the router listener instead so navigations and the initial load are counted
 * the same way.
 */
const loadFacebookPixel = () => {
  if (window.fbq) return;

  const fbq: FbqFn = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue?.push(args);
    }
  };

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;

  window.fbq = fbq;
  window._fbq = window._fbq || fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", facebookPixelId);
};

/**
 * gtag.js serves every Google product, and index.html already loads it for GA4.
 * Commands queue on dataLayer, so `config` is safe to call before the script
 * finishes loading. The script is only injected if nothing else has done so,
 * which keeps Google Ads working even if GA4 is later removed from index.html.
 */
const loadGoogleAds = () => {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  if (!document.querySelector(`script[src^="${GTAG_SRC}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `${GTAG_SRC}?id=${encodeURIComponent(googleAdsId)}`;
    document.head.appendChild(script);
    window.gtag("js", new Date());
  }

  window.gtag("config", googleAdsId);
};

/** Loads whichever platforms have an ID. Safe to call more than once. */
export const initAdTracking = () => {
  if (initialised || !canRun() || !isAnyAdTrackingEnabled) return;
  initialised = true;

  onIdle(() => {
    if (isFacebookEnabled) loadFacebookPixel();
    if (isGoogleAdsEnabled) loadGoogleAds();
  });
};

/**
 * Fires a page view. This is a single-page app, so in-app navigation never
 * reloads the document — without this, every visit would report as one page
 * view of whatever page the visitor happened to land on.
 */
export const trackPageView = (path: string) => {
  if (!canRun() || !isAnyAdTrackingEnabled) return;

  onIdle(() => {
    window.fbq?.("track", "PageView");

    if (isGoogleAdsEnabled) {
      window.gtag?.("event", "page_view", {
        send_to: googleAdsId,
        page_path: path,
      });
    }
  });
};

/**
 * An enquiry or booking request was submitted successfully. This is the event
 * worth optimising ad delivery against — it means someone asked about a date,
 * not merely that they clicked an ad.
 */
export const trackLead = (details?: { source?: string }) => {
  if (!canRun() || !isAnyAdTrackingEnabled) return;

  window.fbq?.("track", "Lead", details?.source ? { content_name: details.source } : undefined);

  if (isGoogleAdsEnabled) {
    window.gtag?.("event", googleAdsLeadLabel ? "conversion" : "generate_lead", {
      send_to: googleAdsLeadLabel ? `${googleAdsId}/${googleAdsLeadLabel}` : googleAdsId,
      event_category: "engagement",
      event_label: details?.source,
    });
  }
};

/**
 * A high-intent page was viewed — pricing in particular. Useful as a warm
 * retargeting audience separate from general site traffic.
 */
export const trackViewContent = (name: string) => {
  if (!canRun() || !isAnyAdTrackingEnabled) return;

  // Deferred like the rest: gtag processes dataLayer in order, so an event sent
  // before its `config` command would be discarded. Idle callbacks run in the
  // order they were registered, and init registers first.
  onIdle(() => {
    window.fbq?.("track", "ViewContent", { content_name: name });

    if (isGoogleAdsEnabled) {
      window.gtag?.("event", "view_item", {
        send_to: googleAdsId,
        items: [{ item_name: name }],
      });
    }
  });
};
