import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-accent-gold rounded-lg">
                <MapPin className="w-5 h-5 text-accent-gold-foreground" />
              </div>
              <span className="text-xl font-bold">SmartInfra</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Black-led, Newark-rooted. Modernizing infrastructure through equity, innovation, 
              and intelligent compliance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="/solutions#cities" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Cities & Transit</a></li>
              <li><a href="/solutions#developers" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Developers & Investors</a></li>
              <li><a href="/solutions#engineering" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Engineering Firms</a></li>
              <li><a href="/platform" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Platform Overview</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/resources#whitepapers" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Whitepapers</a></li>
              <li><a href="/resources#webinars" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Webinars</a></li>
              <li><a href="/case-studies" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Case Studies</a></li>
              <li><a href="/compliance" className="text-primary-foreground/80 hover:text-accent-gold transition-colors text-sm">Compliance & Standards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contact@smartinfra.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+1 (973) 555-0123</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>Newark, NJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} SmartInfra. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-primary-foreground/60 hover:text-accent-gold transition-colors text-sm">Privacy Policy</a>
            <a href="/terms" className="text-primary-foreground/60 hover:text-accent-gold transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;