"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ProductScene = dynamic(
  () => import("@/components/three/ProductScene").then((m) => m.ProductScene),
  { ssr: false, loading: () => null },
);

export function Products() {
  const t = useTranslations("products");
  const tc = useTranslations("common");
  const aciHighlights = t.raw("aciHighlights") as string[];
  const visionHighlights = t.raw("visionHighlights") as string[];

  return (
    <section id="products" className="container-page py-24 md:py-32">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <RevealOnScroll>
        <p className="mx-auto mb-14 max-w-3xl text-center text-base text-white/60 leading-relaxed">
          {t("flagshipBody")}
        </p>
      </RevealOnScroll>

      <div className="grid gap-6 md:grid-cols-2">
        <RevealOnScroll>
          <div className="card-surface relative flex h-full flex-col overflow-hidden p-7">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-ink-900">
              <ProductScene />
            </div>
            <p className="mt-6 text-eyebrow">{t("aciTagline")}</p>
            <h3 className="mt-2 text-display text-2xl font-semibold text-white">
              {t("aciTitle")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {aciHighlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Check size={16} className="mt-0.5 text-accent-300" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="card-surface relative flex h-full flex-col overflow-hidden p-7">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-ink-900 bg-card-glow">
              <div className="absolute inset-0 bg-tech-grid opacity-50" />
              <div className="absolute left-6 top-6 right-6 font-mono text-[11px] leading-relaxed text-accent-200/80">
                <p>$ vision deploy --line A4</p>
                <p>building pipeline ...</p>
                <p className="text-accent-300">ok 16 streams online</p>
                <p>recall: 99.97% · cycle: 780ms</p>
                <p className="text-signal-400">status: lights-out</p>
              </div>
            </div>
            <p className="mt-6 text-eyebrow">{t("visionTagline")}</p>
            <h3 className="mt-2 text-display text-2xl font-semibold text-white">
              {t("visionTitle")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {visionHighlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Check size={16} className="mt-0.5 text-accent-300" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/products" className="btn-secondary">
          {t("viewAll")} <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {(
          ["inspection", "measurement", "function", "assembly", "intelligence", "software"] as const
        ).map((cat) => (
          <Link
            key={cat}
            href={{ pathname: "/products", query: { category: cat } }}
            className="card-surface block px-4 py-5 text-center text-sm text-white/75 transition hover:border-white/15 hover:text-white"
          >
            {t(`categories.${cat}` as "categories.inspection")}
          </Link>
        ))}
      </div>

      <p className="mt-6 text-center text-xs font-mono uppercase tracking-wider text-white/40">
        {tc("company")}
      </p>
    </section>
  );
}
