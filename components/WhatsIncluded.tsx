"use client";

import { Check } from "lucide-react";
import { businessConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhatsIncluded() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="section-padding bg-slate-50" ref={ref}>
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Standards</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            What's included in your clean
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Our comprehensive approach ensures every room is spotless and ready to live in.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {businessConfig.whatsIncluded.map((section, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-8 card-shadow hover:border-aqua/30 hover:-translate-y-1 transition-all duration-300"
              style={{
                animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms both` : "none",
              }}
            >
              <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                <span
                  className="inline-block w-8 h-8 rounded-lg bg-aqua/10 text-aqua flex items-center justify-center"
                  style={{
                    animation: isVisible ? `scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100 + 50}ms both` : "none",
                  }}
                >
                  ✓
                </span>
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{
                      animation: isVisible ? `slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100 + 150 + i * 60}ms both` : "none",
                    }}
                  >
                    <Check size={18} className="text-aqua flex-shrink-0 mt-0.5" />
                    <span className="text-navy/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 bg-aqua/5 border border-aqua/20 rounded-2xl p-6">
          <p className="text-sm text-navy/70 text-center">
            <span className="font-semibold text-navy">Tailored to your needs:</span> Specific details (e.g., bond return checklists, post-construction debris) are confirmed during booking and included in your quote.
          </p>
        </div>
      </div>
    </section>
  );
}
