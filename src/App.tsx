import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/ScrollToTop";
import StickyMobileCTA from "./components/StickyMobileCTA";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Venue = lazy(() => import("./pages/Venue"));
const Packages = lazy(() => import("./pages/Packages"));
const Gallery = lazy(() => import("./pages/Gallery"));
const RealWeddings = lazy(() => import("./pages/RealWeddings"));
const WeddingStory = lazy(() => import("./pages/WeddingStory"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Contact = lazy(() => import("./pages/Contact"));
const Enchanted = lazy(() => import("./pages/Enchanted"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ChatWidget = lazy(() => import("./components/ChatWidget"));
const SanityVisualEditing = lazy(() => import("./components/SanityVisualEditing"));

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const App = () => {
  const [isChatWidgetReady, setIsChatWidgetReady] = useState(false);
  const [isSanityPreviewEnabled, setIsSanityPreviewEnabled] = useState(false);

  useEffect(() => {
    const hasPreviewCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .some((cookie) => cookie.startsWith("__sanity_preview=1"));
    const searchParams = new URLSearchParams(window.location.search);
    const hasPreviewFlag = searchParams.get("sanity-preview") === "1";
    setIsSanityPreviewEnabled(hasPreviewCookie || hasPreviewFlag);
  }, []);

  useEffect(() => {
    const windowWithIdle = window as WindowWithIdleCallback;
    let timeoutId: number | null = null;
    let idleId: number | null = null;

    const scheduleChatWidget = () => {
      if (typeof windowWithIdle.requestIdleCallback === "function") {
        idleId = windowWithIdle.requestIdleCallback(() => setIsChatWidgetReady(true), { timeout: 2500 });
      } else {
        timeoutId = window.setTimeout(() => setIsChatWidgetReady(true), 1200);
      }
    };

    if (document.readyState === "complete") {
      scheduleChatWidget();
    } else {
      window.addEventListener("load", scheduleChatWidget, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleChatWidget);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (idleId !== null && typeof windowWithIdle.cancelIdleCallback === "function") {
        windowWithIdle.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Toaster />
        <ScrollToTop />
        <StickyMobileCTA />
        {isChatWidgetReady && (
          <Suspense fallback={null}>
            <ChatWidget />
          </Suspense>
        )}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/real-weddings" element={<RealWeddings />} />
            <Route path="/real-weddings/:slug" element={<WeddingStory />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enchanted-wedding" element={<Enchanted />} />
            <Route path="/enchanted" element={<Navigate to="/enchanted-wedding" replace />} />
            <Route path="/enchated" element={<Navigate to="/enchanted-wedding" replace />} />
            <Route path="/rules" element={<Navigate to="/rustic-retreat-site-rules.html" replace />} />
            <Route path="/guidelines" element={<Navigate to="/rustic-retreat-site-rules.html" replace />} />
            {/* Redirects for old URLs */}
            <Route path="/cabin" element={<Navigate to="/venue" replace />} />
            <Route path="/decor" element={<Navigate to="/venue" replace />} />
            <Route path="/weddings" element={<Navigate to="/packages" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {isSanityPreviewEnabled && (
          <Suspense fallback={null}>
            <SanityVisualEditing />
          </Suspense>
        )}
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
