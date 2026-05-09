"use client";
import { use } from "react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter, Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { products, productsBySlug } from "@/content/products";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const t = useTranslations("productsPage");
  const tc = useTranslations("common");
  const router = useRouter();

  const product = productsBySlug.get(slug);
  if (!product) notFound();

  // Get related products (same category, exclude self)
  const related = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 4);

  const categoryLabels = t.raw("categories") as Record<string, string> | undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate pt-32 pb-16">
        <div className="absolute inset-0 -z-10 bg-tech-grid" />
        <div className="absolute inset-0 -z-10 bg-hero-spot" />
        <div className="container-page">
          <button
            onClick={() => router.push("/products")}
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={16} /> Products
          </button>
          <div className="max-w-4xl">
            <p className="text-eyebrow mb-4">
              {categoryLabels?.[product.category] ?? product.category}
            </p>
            <h1 className="text-display text-3xl md:text-5xl font-semibold text-white leading-[1.05]">
              {product.title.en || product.title.zh}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-3xl">
              {product.summary.en || product.summary.zh}
            </p>
          </div>
        </div>
        {product.image && (
          <div className="container-page mt-10">
            <div className="max-w-2xl rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <img
                src={product.image}
                alt={product.title.en || product.title.zh}
                className="w-full object-contain"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Specs / Headings */}
      <section className="container-page pb-16">
        {product.headings.en.length > 0 || product.headings.zh.length > 0 ? (
          <>
            <RevealOnScroll>
              <p className="text-eyebrow mb-6">{t("specs")}</p>
            </RevealOnScroll>
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
              {(product.headings.en.length > 0 ? product.headings.en : product.headings.zh)
                .filter((h) => h && !h.includes("咨询"))
                .map((h, idx) => (
                  <RevealOnScroll key={`${h}-${idx}`} delay={idx * 0.05}>
                    <div className="card-surface flex items-start gap-3 p-5 transition hover:border-white/10">
                      <Check size={16} className="mt-0.5 text-accent-300 flex-shrink-0" />
                      <span className="text-sm text-white/65">{h}</span>
                    </div>
                  </RevealOnScroll>
                ))}
            </div>
          </>
        ) : null}
      </section>

      {/* Category badge & Industries */}
      <section className="container-page pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent-300">
            {product.category}
          </span>
          {product.industries.map((ind) => (
            <Link
              key={ind}
              href={`/industries/${ind}`}
              className="rounded-full border border-white/5 px-3 py-1 text-xs text-white/50 hover:text-white/80 hover:border-white/15 transition"
            >
              {ind}
            </Link>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 ? (
        <section className="border-t border-white/5 py-16">
          <div className="container-page">
            <p className="text-eyebrow mb-8">{t("related")}</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {related.map((rp, idx) => (
                <RevealOnScroll key={rp.slug} delay={idx * 0.06}>
                  <Link
                    href={`/products/${rp.slug}`}
                    className="card-surface block p-5 transition hover:border-white/15 group"
                  >
                    <p className="text-xs font-mono uppercase tracking-wider text-accent-400/70 mb-2">
                      {rp.category}
                    </p>
                    <h3 className="text-display text-sm font-semibold text-white">
                      {rp.title.en || rp.title.zh}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-accent-300 group-hover:translate-x-0.5 transition-transform">
                      View <ArrowRight size={12} />
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
