import { industries } from "@/content/industries";
import Link from "next/link";

type Props = { params: Promise<{ locale: string }> };

const INDUSTRY_CONTENT: Record<string, { en: { title: string; summary: string }; zh: { title: string; summary: string } }> = {
  electron: {
    en: { title: "3C Consumer Electronics", summary: "Phones, laptops, wearables — appearance, dimension, and functional inspection at line speed." },
    zh: { title: "3C电子行业", summary: "手机、笔记本电脑、可穿戴设备 — 外观、尺寸、功能检测全速运行。" },
  },
  energy: {
    en: { title: "New Energy & Automotive", summary: "Battery cells, modules, glass, and drive components for high-mix, high-throughput EV lines." },
    zh: { title: "新能源/汽车行业", summary: "电池电芯、模组、玻璃和驱动组件 — 适用于多品种、高产能的电动车产线。" },
  },
  semiconductor: {
    en: { title: "Semiconductor", summary: "Wafer, die, and substrate-level inspection and assembly with sub-micron repeatability." },
    zh: { title: "半导体行业", summary: "晶圆、芯片和基板级检测与组装，亚微米级重复精度。" },
  },
  display: {
    en: { title: "Display Panels", summary: "Mini-LED, OLED, and LCD inspection from glue to backlight to lit-pixel." },
    zh: { title: "显示面板行业", summary: "Mini-LED、OLED、LCD检测，从胶水到背光到点亮像素全覆盖。" },
  },
  other: {
    en: { title: "Medical & Industrial", summary: "Surgical staplers, saline bottles, and precision mechanical parts to ISO standards." },
    zh: { title: "医疗及其他行业", summary: "医用吻合器、盐水瓶、精密机械零件，符合ISO标准。" },
  },
};

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy-500 text-white py-20">
        <div className="container-page">
          <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-4 inline-block">Industries</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {lang === "zh" ? "行业解决方案" : "Industry Solutions"}
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            {lang === "zh"
              ? "我们在消费电子、新能源、半导体、显示面板等领域拥有丰富的部署经验。"
              : "Extensive deployment experience across consumer electronics, new energy, semiconductors, and displays."}
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="container-page py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const content = INDUSTRY_CONTENT[ind.slug] || INDUSTRY_CONTENT.other;
            const colors: Record<string, string> = {
              electron: "from-blue-500 to-cyan-500",
              energy: "from-green-500 to-emerald-500",
              semiconductor: "from-purple-500 to-indigo-500",
              display: "from-orange-500 to-red-500",
              other: "from-teal-500 to-cyan-500",
            };
            return (
              <Link
                key={ind.slug}
                href={`/${locale}/industries/${ind.slug}`}
                className="card-white overflow-hidden group"
              >
                <div className={`h-2.5 bg-gradient-to-r ${colors[ind.slug] || colors.other}`} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-500 group-hover:text-brand-500 transition-colors">
                    {content[lang].title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {content[lang].summary}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-brand-500 group-hover:underline">
                    {lang === "zh" ? "了解更多 →" : "Learn more →"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
