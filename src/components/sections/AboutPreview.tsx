"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  const t = useTranslations("about");

  return (
    <section id="about" className="container-page py-24 md:py-32">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
      />

      <div className="grid gap-8 md:grid-cols-2">
        <RevealOnScroll>
          <div>
            <p className="text-base md:text-lg text-white/65 leading-relaxed">
              {t("body")}
            </p>
            <div className="mt-8">
              <p className="text-eyebrow mb-3">{t("missionTitle")}</p>
              <p className="text-sm text-white/55 leading-relaxed">
                {t("missionBody")}
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn-secondary">
                {t("eyebrow")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i18nKey: "stat1", format: (n: number) => Math.round(n).toString() },
              { i18nKey: "stat2", format: (n: number) => `${Math.round(n)}+` },
              { i18nKey: "stat3", format: (n: number) => `${Math.round(n)}+` },
              { i18nKey: "stat4", format: (n: number) => `${Math.round(n)}+` },
            ].map((s) => (
              <div
                key={s.i18nKey}
                className="card-surface p-5 text-center transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <p className="text-3xl md:text-4xl text-display font-semibold text-accent-300 tabular-nums">
                  {/* Use static values from translations, not numeric counters */}
                  {t(`${s.i18nKey}.value` as "stat1.value")}
                </p>
                <p className="mt-1.5 text-xs text-white/50">
                  {t(`${s.i18nKey}.label` as "stat1.label")}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
