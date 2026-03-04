"use client";

import { businessConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Package,
  Home,
  Briefcase,
  Hammer,
  AlertTriangle,
  Wind,
  Filter,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  AlertTriangle: <AlertTriangle className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  Filter: <Filter className="w-8 h-8" />,
};

export default function Services() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const featuredService = businessConfig.services.find((s) => s.id === "bond");
  const otherServices = businessConfig.services.filter((s) => s.id !== "bond");

  return (
    <section id="services" className="section-padding bg-slate-50" ref={ref}>
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Cleaning for every need
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            From routine house cleaning to specialized commercial services, we deliver exceptional results.
          </p>
        </div>

        {/* Featured Service */}
        {featuredService && (
          <div className="mb-16 relative bg-gradient-to-br from-aqua/10 to-aqua/5 border border-aqua/20 rounded-2xl p-8 sm:p-12 overflow-hidden group" style={{
            animation: isVisible ? "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
          }}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                animation: "shimmer 3s infinite",
                backgroundSize: "200% 100%",
              }}
            />
            {/* Most Popular Badge */}
            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-aqua text-white text-xs font-bold rounded-full">
              <Sparkles size={14} />
              Most Popular
            </div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="flex-shrink-0 p-3 bg-aqua/20 rounded-lg text-aqua">
                {iconMap[featuredService.icon] || <Package className="w-8 h-8" />}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                  {featuredService.title}
                </h3>
                <p className="text-navy/70 mb-4">
                  {featuredService.description}
                </p>
                <a href="#contact-form" className="inline-block font-semibold text-aqua hover:text-teal-700 transition-colors">
                  Get your bond clean quote →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 card-shadow hover:border-aqua/30 hover:-translate-y-1 transition-all duration-300 group"
              style={{
                animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 50}ms both` : "none",
              }}
            >
              <div className="mb-4 p-3 bg-slate-50 rounded-lg text-navy w-fit group-hover:bg-aqua/10 group-hover:text-aqua transition-all duration-300 group-hover:scale-110">
                {iconMap[service.icon] || <Package className="w-8 h-8" />}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-navy/60 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
