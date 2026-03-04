"use client";

import { useState } from "react";
import { businessConfig } from "@/lib/config";
import { QuoteFormData, ValidationErrors } from "@/lib/types";
import { Loader } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactForm() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    serviceType: "",
    propertySize: "",
    datePreference: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.suburb.trim()) newErrors.suburb = "Suburb is required";
    if (!formData.serviceType) newErrors.serviceType = "Service type is required";
    if (!formData.propertySize) newErrors.propertySize = "Property size is required";
    if (!formData.datePreference) newErrors.datePreference = "Date preference is required";

    // Basic phone validation
    const phoneRegex = /^[\d\s\-()]{8,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          suburb: "",
          serviceType: "",
          propertySize: "",
          datePreference: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Connection error. Please call us: " + businessConfig.phone);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-slate-50" ref={ref}>
      <div className="container-responsive max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-aqua font-semibold text-sm uppercase tracking-wide mb-2">Get a Quote</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Tell us about your cleaning
          </h2>
          <p className="text-navy/60">
            Quick form. No obligations. We'll respond within 24 hours.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center animate-fade-slide-down">
            <p className="font-semibold text-green-900">✓ Quote request received!</p>
            <p className="text-sm text-green-700">We'll be in touch shortly.</p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-8 card-shadow"
          style={{
            animation: isVisible ? "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-all ${
                  errors.name ? "border-red-500 animate-shake" : ""
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 animate-fade-slide-down">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-all ${
                  errors.phone ? "border-red-500 animate-shake" : ""
                }`}
                placeholder="0494 095 927"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 animate-fade-slide-down">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email (optional)
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua"
                placeholder="you@example.com"
              />
            </div>

            {/* Suburb */}
            <div>
              <label htmlFor="suburb" className="block text-sm font-semibold text-navy mb-2">
                Suburb/Location *
              </label>
              <input
                id="suburb"
                type="text"
                value={formData.suburb}
                onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua"
                placeholder="e.g., Marrickville, Newtown"
              />
              {errors.suburb && <p className="text-red-500 text-xs mt-1">{errors.suburb}</p>}
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-semibold text-navy mb-2">
                Service Type *
              </label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua"
              >
                <option value="">Select a service</option>
                {businessConfig.services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
            </div>

            {/* Property Size */}
            <div>
              <label htmlFor="propertySize" className="block text-sm font-semibold text-navy mb-2">
                Property Size *
              </label>
              <select
                id="propertySize"
                value={formData.propertySize}
                onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua"
              >
                <option value="">Select size</option>
                <option value="1-bed">1 Bedroom</option>
                <option value="2-bed">2 Bedrooms</option>
                <option value="3-bed">3 Bedrooms</option>
                <option value="4-plus">4+ Bedrooms</option>
                <option value="apartment">Apartment</option>
                <option value="office">Office/Commercial</option>
                <option value="other">Other</option>
              </select>
              {errors.propertySize && <p className="text-red-500 text-xs mt-1">{errors.propertySize}</p>}
            </div>

            {/* Date Preference */}
            <div className="md:col-span-2">
              <label htmlFor="datePreference" className="block text-sm font-semibold text-navy mb-2">
                Preferred Cleaning Date/Timeframe *
              </label>
              <select
                id="datePreference"
                value={formData.datePreference}
                onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua"
              >
                <option value="">Select timeframe</option>
                <option value="asap">ASAP (this week)</option>
                <option value="week2">Next week</option>
                <option value="flexible">Flexible (no rush)</option>
                <option value="specific">Specific date (let me know)</option>
              </select>
              {errors.datePreference && <p className="text-red-500 text-xs mt-1">{errors.datePreference}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
              Additional Details (optional)
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua resize-none"
              placeholder="Tell us anything else we should know..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Get Your Free Quote"
            )}
          </button>

          <p className="text-xs text-navy/60 text-center mt-4">
            We respect your privacy. No spam, just cleaning expertise.
          </p>
        </form>

        {/* Quick Contact Cards */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div
            className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:border-aqua/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            style={{
              animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 100ms both` : "none",
            }}
          >
            <p className="text-sm text-navy/60 mb-2">Prefer to call?</p>
            <a
              href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
              className="text-xl font-bold text-aqua hover:text-teal-700 transition-colors"
            >
              📞 {businessConfig.phone}
            </a>
          </div>
          <div
            className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:border-aqua/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            style={{
              animation: isVisible ? `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 150ms both` : "none",
            }}
          >
            <p className="text-sm text-navy/60 mb-2">Hours</p>
            <p className="text-sm font-semibold text-navy">{businessConfig.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
