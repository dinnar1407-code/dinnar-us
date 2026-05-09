"use client";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TechPreview } from "@/components/sections/TechPreview";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight, Zap, Layers, CircuitBoard, Cpu, Brain, Eye, Workflow } from "lucide-react";

export default function TechnologyPage() {
  const tp = useTranslations("technologyPage");
  const t = useTranslations("ome");
  const tc = useTranslations("capabilities");

  return (
    <>
      <section className="relative isolate pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-tech-grid" />
        <div className="absolute inset-0 -z-10 bg-hero-spot" />
        <div className="container-page">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <SectionHeader
            title={tp("title")}
            subtitle={tp("subtitle")}
            align="left"
          />
        </div>
      </section>

      {/* OME section - full depth */}
      <section className="container-page pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {([
            { key: "optics", icon: Eye, accent: "from-accent-400 to-accent-600" },
            { key: "mechanics", icon: Layers, accent: "from-accent-300 to-signal-500" },
            { key: "electronics", icon: Cpu, accent: "from-signal-400 to-accent-500" },
          ] as const).map(({ key, icon: Icon, accent }, idx) => (
            <RevealOnScroll key={key} delay={idx * 0.1}>
              <div className="card-surface relative h-full p-8 transition hover:border-white/10 hover:bg-white/[0.04]">
                <div className={`mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${accent} text-ink-950`}>
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

      {/* Capabilities deep dive */}
      <section className="border-t border-white/5 py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow={tc("eyebrow")}
            title={tc("title")}
            subtitle={tc("subtitle")}
          />
        </div>
      </section>
    </>
  );
}
