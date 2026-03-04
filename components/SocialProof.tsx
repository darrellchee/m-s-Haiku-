"use client";

import { Star } from "lucide-react";
import { businessConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SocialProof() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="reviews" className="section-padding bg-white border-b border-slate-200" ref={ref}>
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Trusted by Sydney renters, owners & businesses
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            From bond returns to commercial spaces, Spotlessify delivers consistent, detail-focused cleaning.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {businessConfig.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 card-shadow hover:-translate-y-1 hover:border-aqua/30 transition-all duration-300"
              style={{
                animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms both` : "none",
              }}
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-aqua/10 font-serif leading-none">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-aqua text-aqua transition-transform duration-300"
                    style={{
                      animation: isVisible ? `scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${50 + i * 50}ms both` : "none",
                    }}
                  />
                ))}
              </div>
              <p className="text-navy/80 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-navy text-sm">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-navy/60">
            Need references? <span className="font-semibold text-navy">Ask us for more details</span> when you get your quote.
          </p>
        </div>
      </div>
    </section>
  );
}
