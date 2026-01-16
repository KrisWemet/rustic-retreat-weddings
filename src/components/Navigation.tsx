import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Venue", path: "/venue" },
    { name: "Packages", path: "/packages" },
    { name: "Love Stories", path: "/real-weddings" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQs", path: "/faqs" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Scroll detection for navbar shrink/blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        isScrolled 
          ? "bg-background/98 backdrop-blur-lg border-border/50 shadow-sm" 
          : "bg-background/95 backdrop-blur-md border-border/30"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-14" : "h-16"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 
              className={cn(
                "font-serif italic text-primary transition-all duration-300",
                isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              )}
            >
              Rustic Retreat
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link text-sm transition-colors py-1",
                  isActive(link.path)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
            <Link to="/contact">
              <Button 
                className={cn(
                  "bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105",
                  isScrolled ? "px-5 text-sm" : "px-6"
                )}
              >
                Walk the Land With Us
              </Button>
            </Link>
          </div>

          {/* Mobile CTA Button */}
          <Link to="/contact" className="lg:hidden">
            <Button size="sm" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] text-primary-foreground rounded-full px-4 shadow-md text-xs">
              Book Tour
            </Button>
          </Link>
        </div>

        {/* Mobile Page Links - Horizontal Scroll */}
        <div 
          className={cn(
            "lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide transition-all duration-300",
            isScrolled ? "pb-1.5" : "pb-2"
          )}
        >
          <div className="flex gap-4 min-w-max">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm whitespace-nowrap py-1 transition-colors relative",
                  isActive(link.path)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;