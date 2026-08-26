import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initAdTracking, trackPageView } from "@/lib/analytics";

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
    }

    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
};

export default AnalyticsTracker;
