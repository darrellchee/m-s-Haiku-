"use client";

import { businessConfig } from "@/lib/config";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServiceArea() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="service-area" className="section-padding bg-white border-b border-slate-200" ref={ref}>
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Coverage</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            We service Sydney's inner west
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Serving {businessConfig.serviceArea} and suburbs within ~20km of Marrickville. Can't find your suburb? Get in touch—we may still cover you.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Map Placeholder */}
          <div
            className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 aspect-square flex items-center justify-center overflow-hidden"
            style={{
              animation: isVisible ? `slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)` : "none",
            }}
          >
            {/* Replace src with your Google Maps embed code */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <MapPin size={48} className="text-aqua/30 mb-4 animate-bounce" />
              <p className="text-navy/40 text-sm">
                <strong>Developer note:</strong> Replace this with Google Maps embed<br />
                (Get your embed code from your Google My Business listing)
              </p>
            </div>
          </div>

          {/* Suburbs List */}
          <div
            style={{
              animation: isVisible ? `slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)` : "none",
            }}
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Service suburbs (examples)</h3>
            <div className="grid grid-cols-2 gap-3">
              {businessConfig.suburbs.map((suburb, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-aqua/30 hover:bg-aqua/5 hover:-translate-y-0.5 transition-all duration-300"
                  style={{
                    animation: isVisible ? `scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 30}ms both` : "none",
                  }}
                >
                  <MapPin size={16} className="text-aqua flex-shrink-0" />
                  <span className="text-sm font-medium text-navy">{suburb}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-navy/60 mt-6">
              + Many more suburbs across Sydney's inner west. Let us know your location!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-aqua/5 border border-aqua/20 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-navy mb-2">Outside the usual service area?</h3>
          <p className="text-navy/70 mb-4">
            Send us a message—we'll let you know if we can accommodate your location.
          </p>
          <a href="#contact-form" className="inline-block font-semibold text-aqua hover:text-teal-700 transition-colors">
            Check availability →
          </a>
        </div>
      </div>
    </section>
  );
}
