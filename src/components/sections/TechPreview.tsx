"use client";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Zap, Layers, CircuitBoard } from "lucide-react";

export function TechPreview() {
  const t = useTranslations("ome");

  const cards = [
    { key: "optics", icon: Zap },
    { key: "mechanics", icon: Layers },
    { key: "electronics", icon: CircuitBoard },
  ] as const;

  return (
    <section id="technology" className="container-page py-24 md:py-32">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(({ key, icon: Icon }, idx) => (
          <RevealOnScroll key={key} delay={idx * 0.08}>
            <div className="card-surface relative h-full p-7 transition hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-ink-950">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="text-display text-xl font-semibold text-white">
                {t(`${key}.title` as "optics.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t(`${key}.body` as "optics.body")}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
