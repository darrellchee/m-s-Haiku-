"use client";

import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "1",
    title: "Request a Quote",
    description: "Tell us about your property, cleaning needs, and preferred date. It takes just 2 minutes.",
    details: ["Fill out our form", "Or call us directly", "No obligation"],
  },
  {
    number: "2",
    title: "Choose Your Time",
    description: "We confirm availability and lock in your cleaning date. Flexible scheduling to fit your life.",
    details: ["Same-week bookings available", "Weekday & weekend slots", "Evening appointments"],
  },
  {
    number: "3",
    title: "We Clean Thoroughly",
    description: "Our team arrives with all supplies and delivers detail-focused, meticulous cleaning.",
    details: ["Professional equipment", "Eco-friendly products", "Checklist-based approach"],
  },
];

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="how-it-works" className="section-padding bg-white" ref={ref}>
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            How it works
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Three simple steps from quote to spotless. No hassle, no surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative"
              style={{
                animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms both` : "none",
              }}
            >
              {/* Step Number Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex-shrink-0 w-12 h-12 bg-aqua text-white rounded-full flex items-center justify-center font-bold text-lg ring-4 ring-aqua/20"
                  style={{
                    animation: isVisible ? `scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150 + 50}ms both` : "none",
                  }}
                >
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute left-20 top-6 w-16 h-1 bg-gradient-to-r from-aqua to-aqua/20 origin-left"
                    style={{
                      animation: isVisible ? `drawLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150 + 100}ms both` : "none",
                    }}
                  />
                )}
              </div>

              {/* Step Content */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-aqua/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-navy/70 mb-6">{step.description}</p>

                {/* Details List */}
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{
                        animation: isVisible ? `slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150 + 200 + i * 80}ms both` : "none",
                      }}
                    >
                      <CheckCircle size={18} className="text-aqua flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact-form" className="btn-primary inline-block">
            Start Your Quote
          </a>
        </div>
      </div>
    </section>
  );
}
