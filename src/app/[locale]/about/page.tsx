"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowLeft, Target, MapPin, Users, Factory } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const router = useRouter();

  const stats = [
    {
      key: "stat1", icon: MapPin, value: t("stat1.value"), label: t("stat1.label")
    },
    {
      key: "stat2", icon: Factory, value: t("stat2.value"), label: t("stat2.label")
    },
    {
      key: "stat3", icon: Users, value: t("stat3.value"), label: t("stat3.label")
    },
    {
      key: "stat4", icon: Target, value: t("stat4.value"), label: t("stat4.label")
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-tech-grid" />
        <div className="absolute inset-0 -z-10 bg-hero-spot" />
        <div className="container-page">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            align="left"
          />
        </div>
      </section>

      {/* Body */}
      <section className="container-page pb-24">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-white/65 leading-relaxed">
              {t("body")}
            </p>
          </div>
        </RevealOnScroll>

        {/* Mission */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-16 card-surface p-8 md:p-10 max-w-3xl">
            <p className="text-eyebrow mb-3">{t("missionTitle")}</p>
            <p className="text-base text-white/65 leading-relaxed">
              {t("missionBody")}
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <RevealOnScroll key={s.key} delay={idx * 0.08}>
                <div className="card-surface p-6 text-center transition hover:border-white/10 hover:bg-white/[0.04]">
                  <Icon size={20} className="mx-auto mb-3 text-accent-300" />
                  <p className="text-3xl md:text-4xl text-display font-semibold text-white">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs text-white/50">
                    {s.label}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
}
