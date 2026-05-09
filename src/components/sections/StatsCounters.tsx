"use client";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsCounters() {
  const t = useTranslations("tech");

  return (
    <section className="relative isolate py-24 md:py-28">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-30" />
      <div className="container-page">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {(["uptime", "cycle", "recall", "deploy"] as const).map((k, idx) => (
            <RevealOnScroll key={k} delay={idx * 0.08}>
              <div className="card-surface relative p-6 md:p-8 text-center group transition hover:border-white/10 hover:bg-white/[0.04]">
                <div className="mb-3 h-1 w-10 mx-auto rounded-full bg-gradient-to-r from-accent-400 to-signal-500 opacity-80" />
                <p className="text-4xl md:text-5xl text-display font-semibold text-white tabular-nums">
                  {t(`items.${k}.value` as "items.uptime.value")}
                </p>
                <p className="mt-2 text-sm text-white/55">
                  {t(`items.${k}.label` as "items.uptime.label")}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
