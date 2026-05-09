"use client";
import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="container-page py-24 md:py-32">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <RevealOnScroll>
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="card-surface p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-400/10">
                <CheckCircle size={28} className="text-accent-300" />
              </div>
              <h3 className="mt-5 text-display text-xl font-semibold text-white">
                {t("successTitle")}
              </h3>
              <p className="mt-2 text-sm text-white/55">
                {t("successBody")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-surface p-8 md:p-10 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/30 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/30 transition"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    {t("company")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/30 transition"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                    {t("industry")}
                  </label>
                  <select
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/30 transition appearance-none"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select industry
                    </option>
                    <option value="electron">Consumer Electronics</option>
                    <option value="energy">New Energy / Automotive</option>
                    <option value="semiconductor">Semiconductor</option>
                    <option value="display">Display Panels</option>
                    <option value="other">Medical / Industrial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                  {t("message")}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/30 transition resize-none"
                  placeholder="Describe your production environment, current inspection process, and what you're looking for."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                {t("submit")} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
}
