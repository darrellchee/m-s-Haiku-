"use client";

import { businessConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white pt-20 pb-16 sm:pt-32 sm:pb-24">
      {/* Decorative background elements - animated orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/5 rounded-full blur-3xl -mr-48 -mt-48 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aqua/5 rounded-full blur-3xl -ml-48 -mb-48 animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-navy/3 rounded-full blur-3xl -mr-36 opacity-40 animate-float" />

      <div className="container-responsive relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight animate-slide-up">
            Spotless cleaning, zero stress.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-navy/70 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Professional end-of-lease, house, and commercial cleaning across Sydney's inner west. Fast response, meticulous attention to detail, flexible bookings.
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["✓ Fast response", "✓ Flexible bookings", "✓ Detail-focused"].map((chip, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-navy shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {chip}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center justify-center relative group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-aqua/20 to-aqua/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get a Free Quote</span>
            </a>
            <a
              href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
              className="btn-secondary inline-flex items-center justify-center relative"
            >
              <span className="absolute -inset-1 bg-aqua/20 rounded-lg opacity-0 animate-pulse" />
              <span className="relative">📞 Call Now: {businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
