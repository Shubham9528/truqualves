import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "CSV Strategy & Compliance", href: "/services#strategy" },
      { name: "21 CFR Part 11 Compliance", href: "/services#part11" },
      { name: "GAMP5 Validation", href: "/services#gamp5" },
      { name: "Data Integrity", href: "/services#data-integrity" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-gold-500/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="TruQualves Logo" 
              className="h-14 w-auto"
            />
            <div>
              <span className="text-xl font-display font-bold text-white">
                Tru<span className="text-gold-400">Qualves</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-100 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-navy-900 border border-gold-500/20 rounded-lg shadow-xl min-w-[240px] py-2 animate-in fade-in slide-in-from-top-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-100 hover:text-gold-400 hover:bg-navy-800 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-gold-400"
                      : "text-navy-100 hover:text-gold-400"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button className="btn-gold text-sm">
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold-500/10 pt-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-gold-400"
                      : "text-navy-100 hover:text-gold-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-4">
                <Button className="btn-gold w-full text-sm">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
