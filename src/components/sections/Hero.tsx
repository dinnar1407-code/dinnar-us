"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-tech-grid" />
      <div className="absolute inset-0 -z-10 bg-hero-spot" />

      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-eyebrow mb-6"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-white max-w-3xl"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link href="/products" className="btn-primary">
              {t("cta")} <ArrowRight size={16} />
            </Link>
            <Link href="/#contact" className="btn-secondary">
              {t("ctaSecondary")} <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 max-w-2xl"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <dt className="text-xs font-mono uppercase tracking-wider text-white/45">
                  {t(`stat${i}Label` as "stat1Label")}
                </dt>
                <dd className="mt-2 text-2xl md:text-3xl text-display font-semibold text-white tabular-nums">
                  {t(`stat${i}Value` as "stat1Value")}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-square w-full max-w-[560px] mx-auto rounded-[28px] overflow-hidden ring-glow card-surface">
            <HeroScene />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink-950 via-transparent to-transparent opacity-60" />
            <div className="pointer-events-none absolute bottom-4 left-5 text-[11px] font-mono uppercase tracking-wider text-white/55">
              ACI-S1000 · Lights-Out Controller
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
