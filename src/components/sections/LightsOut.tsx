"use client";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const phases = ["phaseAutomate", "phaseConnect", "phaseDecide", "phaseLightsOut"] as const;

export function LightsOut() {
  const t = useTranslations("lightsOut");

  return (
    <section className="relative isolate py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-40" />
      <div className="container-page">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-400/40 to-transparent md:block" />
          <ol className="grid gap-5 md:grid-cols-4">
            {phases.map((p, idx) => (
              <RevealOnScroll key={p} delay={idx * 0.08}>
                <li className="card-surface relative h-full p-6 backdrop-blur-md">
                  <span className="text-eyebrow">
                    {t(`${p}.title` as "phaseAutomate.title")}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    {t(`${p}.body` as "phaseAutomate.body")}
                  </p>
                  <div className="mt-6 inline-flex h-2 w-12 rounded-full bg-gradient-to-r from-accent-400 to-signal-500 opacity-80" />
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
