import { products } from "@/content/products";
import Link from "next/link";

type Props = { params: Promise<{ locale: string }> };

const CATEGORY_NAMES: Record<string, { en: string; zh: string }> = {
  inspection: { en: "Visual Inspection", zh: "视觉检测" },
  measurement: { en: "Visual Measurement", zh: "视觉量测" },
  function: { en: "Functional Test", zh: "功能检测" },
  assembly: { en: "Smart Assembly", zh: "智能组装" },
  intelligence: { en: "Smart Inspection", zh: "智能检测" },
  software: { en: "Software", zh: "软件" },
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";

  const grouped = new Map<string, typeof products>();
  for (const p of products) {
    const list = grouped.get(p.category) || [];
    list.push(p);
    grouped.set(p.category, list);
  }

  const categoryOrder = ["inspection", "measurement", "function", "assembly", "intelligence", "software"];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy-500 text-white py-20">
        <div className="container-page">
          <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-4 inline-block">Products</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {lang === "zh" ? "产品中心" : "Product Catalog"}
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            {lang === "zh"
              ? "ACI-S1000 + Vision One 统一平台，覆盖检测、量测、功能测试、智能组装全场景。"
              : "ACI-S1000 + Vision One unified platform covering inspection, measurement, functional testing, and smart assembly."}
          </p>
        </div>
      </section>

      {/* Category sections */}
      <div className="container-page py-16">
        {categoryOrder.map((cat) => {
          const items = grouped.get(cat);
          if (!items || items.length === 0) return null;
          return (
            <section key={cat} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-bold text-navy-500">{CATEGORY_NAMES[cat]?.[lang] || cat}</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${locale}/products/${p.slug}`}
                    className="card-white overflow-hidden group"
                  >
                    <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                      {p.image ? (
                        <img src={p.image} alt={p.title[lang]} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-6xl">🏭</div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-semibold text-navy-500 group-hover:text-brand-500 transition-colors line-clamp-2">
                        {p.title[lang]}
                      </h3>
                      <p className="mt-2 text-xs text-gray-400 line-clamp-2">
                        {p.summary[lang].slice(0, 100)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
