import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTAButton } from "./ui/cta-button";
import { cn } from "@/lib/utils";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on contact page (already has form)
  const hideOnPages = ["/contact"];
  const shouldHide = hideOnPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHide) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-gradient-to-t from-background via-background to-transparent transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <Link to="/contact" className="block">
        <CTAButton className="w-full text-base py-6">
          Book Your Tour
        </CTAButton>
      </Link>
    </div>
  );
};

export default StickyMobileCTA;
