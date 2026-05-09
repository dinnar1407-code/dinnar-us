"use client";
import { use, useMemo } from "react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter, Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Products as ProductsSection } from "@/components/sections/Products";
import { industries, industriesBySlug, type Industry } from "@/content/industries";
import { productsByIndustry } from "@/content/products";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export default function IndustryPage({ params }: Props) {
  const { slug } = use(params);
  const t = useTranslations("industries");
  const tc = useTranslations("common");
  const router = useRouter();

  const industry = industriesBySlug.get(slug as Industry["slug"]);
  if (!industry) notFound();

  const industryProducts = useMemo(() => productsByIndustry(slug), [slug]);
  const icon = industry.icon;
  const Icon = icon;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate pt-32 pb-16">
        <div className="absolute inset-0 -z-10 bg-tech-grid" />
        <div className="absolute inset-0 -z-10 bg-hero-spot" />
        <div className="container-page">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={16} /> {t("eyebrow")}
          </button>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-signal-500 text-ink-950">
                <Icon size={24} strokeWidth={2} />
              </div>
              <h1 className="text-display text-3xl md:text-5xl font-semibold text-white leading-[1.05]">
                {t(`${slug}.title` as "electron.title")}
              </h1>
            </div>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-3xl">
              {t(`${slug}.summary` as "electron.summary")}
            </p>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="container-page pb-8">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-base text-white/55 leading-relaxed">
              {t(`${slug}.longDescription` as "electron.longDescription")}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Highlights */}
      <section className="container-page pb-16">
        <RevealOnScroll>
          <p className="text-eyebrow mb-6">Key Capabilities</p>
        </RevealOnScroll>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          {(
            t.raw(`${slug}.highlights` as "electron.highlights") as string[]
          ).map((h, idx) => (
            <RevealOnScroll key={h} delay={idx * 0.06}>
              <div className="card-surface flex items-start gap-3 p-5 transition hover:border-white/10">
                <Check size={18} className="mt-0.5 text-accent-300 flex-shrink-0" />
                <span className="text-sm text-white/70">{h}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {industryProducts.length > 0 ? (
        <section className="container-page pb-24">
          <p className="text-eyebrow mb-8">Related equipment</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {industryProducts.slice(0, 9).map((p, idx) => (
              <RevealOnScroll key={p.slug} delay={idx * 0.04}>
                <Link
                  href={`/products/${p.slug}`}
                  className="card-surface block p-5 transition hover:border-white/15 group"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-400/70 mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-display text-base font-semibold text-white">
                    {/* Use English title as fallback */}
                    {p.title.en || p.title.zh}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-300 group-hover:translate-x-0.5 transition-transform">
                    View <ArrowRight size={14} />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      ) : null}

      {/* Other Industries */}
      <section className="border-t border-white/5 py-24">
        <div className="container-page">
          <p className="text-eyebrow mb-8 text-center">Other industries</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries
              .filter((i) => i.slug !== slug)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="btn-secondary text-xs"
                >
                  {t(`${ind.slug}.title` as "electron.title")} <ArrowRight size={14} />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
