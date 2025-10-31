import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Rustic Retreat Weddings</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your intimate 65-acre Alberta retreat where celebrations unfold naturally on 65 private acres near Edmonton.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/weddings" className="hover:text-secondary transition-colors">
                  Wedding Packages
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
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cabin" className="hover:text-secondary transition-colors">
                  The Cabin
                </Link>
              </li>
              <li>
                <Link to="/decor" className="hover:text-secondary transition-colors">
                  Décor House
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
                <a href="tel:+15879990000" className="hover:text-secondary transition-colors text-primary-foreground/80">
                  (587) 999-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@rusticretreatalberta.ca" className="hover:text-secondary transition-colors text-primary-foreground/80">
                  info@rusticretreatalberta.ca
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
