"use client";

import { businessConfig } from "@/lib/config";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" ref={ref}>
      <div className="container-responsive section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div
            style={{
              animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)` : "none",
            }}
          >
            <h3 className="text-2xl font-bold mb-2">{businessConfig.name}</h3>
            <p className="text-white/70 text-sm mb-6">
              Professional cleaning services for Sydney's inner west. Detail-focused. Reliable. Trustworthy.
            </p>
          </div>

          {/* Contact Info */}
          <div
            style={{
              animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 50ms both` : "none",
            }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/80 hover:text-aqua transition-colors"
              >
                <Phone size={16} />
                {businessConfig.phone}
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>{businessConfig.serviceArea}</span>
              </div>
              <p className="text-white/70">
                <strong>Hours:</strong> {businessConfig.hours}
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div
            style={{
              animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 100ms both` : "none",
            }}
          >
            <h4 className="font-semibold mb-4">Service Area</h4>
            <p className="text-sm text-white/80 mb-4">
              {businessConfig.serviceRadiusText}
            </p>
            <div className="flex flex-wrap gap-2">
              {businessConfig.suburbs.slice(0, 5).map((suburb, idx) => (
                <span
                  key={suburb}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/70 hover:bg-white/20 transition-colors"
                  style={{
                    animation: isVisible ? `scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + idx * 30}ms both` : "none",
                  }}
                >
                  {suburb}
                </span>
              ))}
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/70">
                + more
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} {businessConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
