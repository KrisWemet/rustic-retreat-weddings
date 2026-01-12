import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Index from "./pages/Index";
import About from "./pages/About";
import Venue from "./pages/Venue";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
import RealWeddings from "./pages/RealWeddings";
import WeddingStory from "./pages/WeddingStory";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <StickyMobileCTA />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
