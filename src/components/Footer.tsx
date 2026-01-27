import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logoLight from "@/assets/logo/rustic-retreat-logo-light.png";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H8.08V12h2.36V9.8c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46V12h2.59l-.41 2.88h-2.18v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoLight}
                alt="Rustic Retreat logo"
                className="h-7 w-7 object-contain"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-xl font-bold font-serif">Rustic Retreat Weddings</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your intimate 65-acre Alberta retreat where celebrations unfold naturally, just 50 minutes north of Edmonton.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/venue" className="hover:text-secondary transition-colors">
                  The Venue
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-secondary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-secondary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Schedule a Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  99 km NW of Edmonton, near Lac La Nonne, Alberta
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="sms:+17802106252" aria-label="Text Rustic Retreat">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                </a>
                <a href="tel:+17802106252" className="hover:text-secondary transition-colors text-primary-foreground/80">
                  (780) 210-6252
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:rusticretreatalberta@gmail.com" className="hover:text-secondary transition-colors text-primary-foreground/80">
                  rusticretreatalberta@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FacebookIcon className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://www.facebook.com/share/1J4ztXhiSk/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors text-primary-foreground/80"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Rustic Retreat Weddings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
