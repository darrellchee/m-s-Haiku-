"use client";

import { useState, useEffect } from "react";
import { businessConfig } from "@/lib/config";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-slate-200 transition-all duration-300 ${
      isScrolled ? "shadow-md backdrop-blur-sm bg-white/95" : "shadow-sm"
    }`}>
      <div className="container-responsive flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-navy hover:text-aqua transition-colors">
            Spotlessify
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy hover:text-aqua transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-navy hover:text-aqua transition-colors"
          >
            📞 {businessConfig.phone}
          </a>
          <a href="#contact-form" className="btn-primary text-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`text-navy absolute transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100"
              }`}
            />
            <X
              size={24}
              className={`text-navy absolute transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100" : "opacity-0 -rotate-90"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-slate-200 bg-slate-50 max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-300 ease-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : ""
        }`}
      >
          <div className="container-responsive py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-navy hover:text-aqua transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-200 pt-4 space-y-3">
              <a
                href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
                className="block text-sm font-semibold text-aqua"
              >
                📞 {businessConfig.phone}
              </a>
              <a href="#contact-form" className="btn-primary block text-center text-sm">
                Get a Quote
              </a>
            </div>
          </div>
      </div>
    </nav>
  );
}
