"use client";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  const t = useTranslations("capabilities");

  return (
    <section id="capabilities" className="container-page py-24 md:py-32">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <RevealOnScroll key={cap.key} delay={idx * 0.05}>
              <div className="card-surface relative h-full p-7 transition hover:border-white/10 hover:bg-white/[0.04]">
                <div
                  className={`mb-6 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${cap.accent} text-ink-950`}
                >
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="text-display text-xl font-semibold text-white">
                  {t(`items.${cap.key}.title` as "items.vision.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(`items.${cap.key}.body` as "items.vision.body")}
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
