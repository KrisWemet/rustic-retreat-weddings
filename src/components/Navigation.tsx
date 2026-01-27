import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logoDark from "@/assets/logo/rustic-retreat-logo-dark.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Venue", path: "/venue" },
    { name: "Packages", path: "/packages" },
    // { name: "Love Stories", path: "/real-weddings" }, // Hidden temporarily
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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 pt-[env(safe-area-inset-top)]",
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
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-foreground hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoDark}
                alt="Rustic Retreat logo"
                className={cn(
                  "h-6 w-6 object-contain brightness-0",
                  isScrolled ? "md:h-6 md:w-6" : "md:h-7 md:w-7"
                )}
                loading="eager"
                decoding="async"
              />
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
                    "bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105",
                    isScrolled ? "px-5 text-sm" : "px-6"
                  )}
                >
                  Discover Your Venue
                </Button>
              </Link>
            </div>

            {/* Mobile CTA Button */}
            <Link to="/contact" className="lg:hidden">
              <Button size="sm" className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark text-white rounded-full px-4 shadow-md text-xs">
                Book Tour
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Out Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-background z-[70] lg:hidden transform transition-transform duration-300 ease-out shadow-xl",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <img
              src={logoDark}
              alt="Rustic Retreat logo"
              className="h-6 w-6 object-contain brightness-0"
              loading="eager"
              decoding="async"
            />
            <h2 className="font-serif italic text-xl text-primary">Rustic Retreat</h2>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 -mr-2 text-foreground hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-64px)] overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-6 py-4 text-lg transition-colors border-l-4",
                  isActive(link.path)
                    ? "text-primary font-medium border-secondary bg-secondary/5"
                    : "text-foreground hover:text-primary border-transparent hover:border-secondary/50 hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block px-6 py-4 text-lg transition-colors border-l-4",
                isActive("/contact")
                  ? "text-primary font-medium border-secondary bg-secondary/5"
                  : "text-foreground hover:text-primary border-transparent hover:border-secondary/50 hover:bg-muted/50"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="border-t border-border p-6 bg-muted/30">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Get in Touch</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+17802106252"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  (780) 210-6252
                </a>
              </li>
              <li>
                <a
                  href="mailto:rusticretreatalberta@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  rusticretreatalberta@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>99 km NW of Edmonton<br />near Lac La Nonne, Alberta</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="p-4 border-t border-border">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full shadow-elegant"
              >
                Discover Your Venue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
