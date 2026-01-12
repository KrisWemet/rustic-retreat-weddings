import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
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
        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full shadow-elegant text-base py-6"
        >
          Book Your Tour
        </Button>
      </Link>
    </div>
  );
};

export default StickyMobileCTA;
