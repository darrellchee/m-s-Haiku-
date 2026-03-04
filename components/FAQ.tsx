"use client";

import { useState } from "react";
import { businessConfig } from "@/lib/config";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FAQ() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white" ref={ref}>
      <div className="container-responsive max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Questions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently asked questions
          </h2>
          <p className="text-navy/60">
            Got a question? We've probably answered it. Can't find what you're looking for?{" "}
            <a href="#contact-form" className="font-semibold text-aqua hover:text-teal-700 transition-colors">
              Get in touch
            </a>
            .
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {businessConfig.faqItems.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-aqua/30"
              style={{
                animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 40}ms both` : "none",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-navy">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-aqua flex-shrink-0 transition-transform duration-300 ease-spring ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`max-h-0 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                  openIndex === idx ? "max-h-96 opacity-100" : "opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-navy/70 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-aqua/10 to-aqua/5 border border-aqua/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-navy mb-2">Still have questions?</h3>
          <p className="text-navy/70 mb-4">
            Our team is here to help. Give us a call or send a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
              className="btn-secondary inline-flex items-center justify-center"
            >
              📞 Call Us
            </a>
            <a href="#contact-form" className="btn-primary inline-flex items-center justify-center">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
