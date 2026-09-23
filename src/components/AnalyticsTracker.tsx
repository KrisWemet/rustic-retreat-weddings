import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initAdTracking, trackPageView } from "@/lib/analytics";
import { rememberInquirySource, trackTourClick } from "@/lib/tour-analytics";

/**
 * Loads the ad pixels once, then reports a page view on every route change.
 * Renders nothing. Does nothing at all until a tracking ID is set in
 * `@/config/analytics`.
 */
const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();
  const started = useRef(false);

  useEffect(() => {
    if (!started.current) {
      started.current = true;
      initAdTracking();
      rememberInquirySource();
    }

    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  useEffect(() => {
    const handleInquiryClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!anchor) return;
      const url = new URL(anchor.getAttribute("href") || "", window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/contact") return;
      trackTourClick(url.searchParams.get("intent") === "question" ? "question" : "tour", window.location.pathname);
    };
    document.addEventListener("click", handleInquiryClick);
    return () => document.removeEventListener("click", handleInquiryClick);
  }, []);

  return null;
};

export default AnalyticsTracker;
