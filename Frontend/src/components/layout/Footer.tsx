import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "CSV Strategy", href: "/services#strategy" },
    { name: "21 CFR Part 11", href: "/services#part11" },
    { name: "GAMP5 Validation", href: "/services#gamp5" },
    { name: "Data Integrity", href: "/services#data-integrity" },
    { name: "Vendor Audits", href: "/services#audits" },
  ],
  industries: [
    { name: "Pharmaceutical", href: "/industries#pharma" },
    { name: "Biotechnology", href: "/industries#biotech" },
    { name: "Medical Devices", href: "/industries#medical" },
    { name: "Clinical Research", href: "/industries#clinical" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-950 font-display font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-display font-bold text-white">
                Tru<span className="text-gold-400">qualves</span>
              </span>
            </Link>
            <p className="text-navy-200 mb-6 max-w-sm">
              Your trusted partner for Computer System Validation. Ensuring regulatory compliance 
              with precision and expertise across FDA, EMA, and global standards.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-navy-200 hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-navy-200 hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-navy-200 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-navy-200 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-navy-200 text-sm">
                  123 Compliance Drive<br />
                  Boston, MA 02101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="text-navy-200 hover:text-gold-400 text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@truqualves.com" className="text-navy-200 hover:text-gold-400 text-sm">
                  info@truqualves.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Truqualves. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-navy-400 hover:text-gold-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-navy-400 hover:text-gold-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
