"use client";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { products, type Product } from "@/content/products";

const categoryI18nKeys = {
  inspection: "inspection",
  measurement: "measurement",
  function: "function",
  assembly: "assembly",
  intelligence: "intelligence",
  software: "software",
} as const;

type CategoryKey = keyof typeof categoryI18nKeys;

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-surface block overflow-hidden transition hover:border-white/15 group"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title.en || product.title.zh}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-accent-400/70 mb-2">
          {product.category}
        </p>
        <h3 className="text-display text-base font-semibold text-white leading-snug">
          {product.title.en || product.title.zh}
        </h3>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-300 group-hover:translate-x-0.5 transition-transform">
          View <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const t = useTranslations("products");
  const tp = useTranslations("productsPage");
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") as CategoryKey | null;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const categories = [
    "inspection", "measurement", "function", "assembly", "intelligence", "software"
  ] as const;

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
              {tp("title")}
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/55 max-w-2xl">
              {tp("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          <Link
            href="/products"
            className={`rounded-full border px-4 py-2 text-sm transition ${
              !activeCategory
                ? "border-accent-400/50 bg-accent-400/10 text-accent-300"
                : "border-white/10 text-white/55 hover:text-white hover:border-white/20"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={{ pathname: "/products", query: { category: cat } }}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === cat
                  ? "border-accent-400/50 bg-accent-400/10 text-accent-300"
                  : "border-white/10 text-white/55 hover:text-white hover:border-white/20"
              }`}
            >
              {t(`categories.${cat}` as "categories.inspection")}
            </Link>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <RevealOnScroll key={p.slug} delay={idx * 0.03}>
              <ProductCard product={p} />
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-white/40 py-16">No products found in this category.</p>
        ) : null}
      </section>
    </>
  );
}
