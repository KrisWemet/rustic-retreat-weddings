import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import StickyMobileCTA from "./components/StickyMobileCTA";
import ChatbotWidget from "./components/ChatbotWidget";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Venue = lazy(() => import("./pages/Venue"));
const Packages = lazy(() => import("./pages/Packages"));
const Gallery = lazy(() => import("./pages/Gallery"));
const RealWeddings = lazy(() => import("./pages/RealWeddings"));
const WeddingStory = lazy(() => import("./pages/WeddingStory"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <StickyMobileCTA />
        <ChatbotWidget />
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
            {/* Redirects for old URLs */}
            <Route path="/cabin" element={<Navigate to="/venue" replace />} />
            <Route path="/decor" element={<Navigate to="/venue" replace />} />
            <Route path="/weddings" element={<Navigate to="/packages" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
