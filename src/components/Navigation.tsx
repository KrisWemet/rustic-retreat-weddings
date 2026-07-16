import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import LeafIcon from "@/components/LeafIcon";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStylesOpen, setIsStylesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Venue", path: "/venue" },
    { name: "Packages", path: "/packages" },
    // { name: "Love Stories", path: "/real-weddings" }, // Hidden temporarily
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  const weddingStyles = [
    { name: "Camping Weddings", path: "/camping-wedding" },
    { name: "DIY Weddings", path: "/diy-wedding-venue-alberta" },
    { name: "Elopements & Small Weddings", path: "/elopements" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isStylesActive = weddingStyles.some((link) => location.pathname === link.path);

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

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
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-in-out pt-[env(safe-area-inset-top)]",
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
            <Link to="/" onClick={() => handleLinkClick("/")} className="text-primary">
              <h1
                className={cn(
                  "font-serif italic transition-all duration-300",
                  isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                )}
              >
                <div className="logo inline-flex items-center gap-2" style={{ color: "var(--brandText)" }}>
                  <LeafIcon
                    className={cn(
                      "leaf shrink-0",
                      isScrolled ? "h-8 w-6 md:h-10 md:w-8" : "h-10 w-8 md:h-12 md:w-9"
                    )}
                  />
                  <span>Rustic Retreat</span>
                </div>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
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

              {/* Wedding Styles Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className={cn(
                    "nav-link text-sm transition-colors py-1 inline-flex items-center gap-1",
                    isStylesActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-haspopup="true"
                >
                  The Experience
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 translate-y-1 pointer-events-none transition-all duration-200",
                    "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                    "group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
                  )}
                >
                  <div className="w-64 rounded-2xl border border-border/60 bg-background/98 backdrop-blur-lg shadow-lg py-2">
                    {weddingStyles.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => handleLinkClick(link.path)}
                        className={cn(
                          "block px-5 py-2.5 text-sm transition-colors",
                          isActive(link.path)
                            ? "text-foreground font-medium bg-secondary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
                <Button
                  className={cn(
                    "btn-shimmer bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105",
                    isScrolled ? "px-5 text-sm" : "px-6"
                  )}
                >
                  Schedule your tour
                </Button>
              </Link>
            </div>

            {/* Mobile CTA Button */}
            <Link to="/contact" onClick={() => handleLinkClick("/contact")} className="lg:hidden">
              <Button size="sm" className="btn-shimmer bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark text-white rounded-full px-4 shadow-md text-xs">
                Schedule your tour
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
          <Link to="/" onClick={() => handleLinkClick("/")} className="text-primary">
            <h2 className="font-serif italic text-xl">
              <div className="logo inline-flex items-center gap-2" style={{ color: "var(--brandText)" }}>
                <LeafIcon className="leaf h-10 w-8 md:h-12 md:w-9" />
                <span>Rustic Retreat</span>
              </div>
            </h2>
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
                onClick={() => handleLinkClick(link.path)}
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

            {/* Wedding Styles Expandable Group */}
            <button
              type="button"
              onClick={() => setIsStylesOpen((open) => !open)}
              aria-expanded={isStylesOpen}
              className={cn(
                "w-full flex items-center justify-between px-6 py-4 text-lg transition-colors border-l-4 text-left",
                isStylesActive
                  ? "text-primary font-medium border-secondary bg-secondary/5"
                  : "text-foreground hover:text-primary border-transparent hover:border-secondary/50 hover:bg-muted/50"
              )}
            >
              The Experience
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isStylesOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isStylesOpen ? "max-h-72" : "max-h-0"
              )}
            >
              {weddingStyles.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={cn(
                    "block pl-10 pr-6 py-3 text-base transition-colors border-l-4",
                    isActive(link.path)
                      ? "text-primary font-medium border-secondary bg-secondary/5"
                      : "text-muted-foreground hover:text-primary border-transparent hover:border-secondary/50 hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
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
            <Link to="/contact" onClick={() => handleLinkClick("/contact")} className="block">
              <Button
                size="lg"
                className="btn-shimmer w-full bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full shadow-elegant"
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
