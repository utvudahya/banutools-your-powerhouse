import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img src={logo} alt="BANU TOOLS" className="h-10 w-auto" />
            </a>
            <p className="font-body text-muted-foreground mb-6">
              Premium power tools engineered for professionals. Building the future, one tool at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Returns Policy</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-muted-foreground">123 Industrial Way, Tool City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919443242102" className="font-body text-muted-foreground hover:text-primary transition-colors">+91 94432 42102</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@banutools.com" className="font-body text-muted-foreground hover:text-primary transition-colors">info@banutools.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 BANUTOOLS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
