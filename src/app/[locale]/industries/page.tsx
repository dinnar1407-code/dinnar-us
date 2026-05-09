"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Industries as IndustriesSection } from "@/components/sections/Industries";

export default function IndustriesPage() {
  const t = useTranslations("industriesPage");

  return (
    <>
      <section className="relative isolate pt-32 pb-8">
        <div className="absolute inset-0 -z-10 bg-tech-grid" />
        <div className="absolute inset-0 -z-10 bg-hero-spot" />
        <div className="container-page">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <div className="mb-10">
            <h1 className="text-display text-3xl md:text-5xl font-semibold text-white leading-[1.05]">
              {t("title")}
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/55 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>
      <IndustriesSection showHeader={false} />
    </>
  );
}
