import { products, productsBySlug } from "@/content/products";
import { desensitize } from "@/lib/desensitize";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

const CATEGORY_NAMES: Record<string, { en: string; zh: string }> = {
  inspection: { en: "Visual Inspection Equipment", zh: "视觉检测设备" },
  measurement: { en: "Visual Measurement Equipment", zh: "视觉量测设备" },
  function: { en: "Functional Test Equipment", zh: "功能检测设备" },
  assembly: { en: "Smart Assembly Equipment", zh: "智能组装设备" },
  intelligence: { en: "Smart Inspection Equipment", zh: "智能检测设备" },
  software: { en: "Software", zh: "软件" },
};

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const product = productsBySlug.get(slug);
  if (!product) notFound();

  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";
  const title = desensitize(product.title[lang]);
  const summary = desensitize(product.summary[lang].slice(0, 300));
  const catName = CATEGORY_NAMES[product.category]?.[lang] || product.category;
  const headings = product.headings[lang] || [];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-500 text-white py-16">
        <div className="container-page">
          <Link href={`/${locale}/products`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {lang === "zh" ? "返回产品列表" : "Back to products"}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30">{catName}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-3xl leading-relaxed">{summary}</p>
        </div>
      </section>

      {/* Specs */}
      <section className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Product image */}
          <div className="lg:col-span-1">
            <div className="card-white overflow-hidden aspect-square bg-gray-100">
              {product.image ? (
                <img src={product.image} alt={title} className="w-full h-full object-contain" />
              ) : (
                <span className="text-7xl text-gray-300 flex items-center justify-center h-full">🏭</span>
              )}
            </div>
          </div>

          {/* Specs list */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-500 mb-6">
              {lang === "zh" ? "规格参数" : "Specifications"}
            </h2>
            {headings.length > 0 ? (
              <div className="space-y-4">
                {headings.map((h, i) => (
                  <div key={i} className="card-white p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy-500">{desensitize(h)}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                {lang === "zh" ? "请联系我们获取详细规格参数。" : "Please contact us for detailed specifications."}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {lang === "zh" ? "对该产品感兴趣？" : "Interested in this product?"}
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            {lang === "zh" ? "联系我们的工程团队，获取详细报价和技术方案。" : "Contact our engineering team for pricing and technical details."}
          </p>
          <Link href={`/${locale}/about`} className="btn-white mt-6 inline-flex">
            {lang === "zh" ? "联系我们" : "Contact us"}
          </Link>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
