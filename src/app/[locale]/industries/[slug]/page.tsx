import { productsByIndustry } from "@/content/products";
import { industriesBySlug } from "@/content/industries";
import { desensitize } from "@/lib/desensitize";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

const DETAILS: Record<string, { en: { title: string; summary: string; longDesc: string; highlights: string[] }; zh: { title: string; summary: string; longDesc: string; highlights: string[] } }> = {
  electron: {
    en: {
      title: "3C Consumer Electronics",
      summary: "Phones, laptops, wearables — appearance, dimension, and functional inspection at line speed.",
      longDesc: "From the world's largest consumer electronics OEMs to their tier-one suppliers, Dinnar systems inspect mobile camera modules, laptop housings, watch back covers, PCB assemblies, and microphone cavities. We sustain >99.97% recall on cosmetic defects below 30 microns while keeping cycle time under one second per part.",
      highlights: ["Camera module color and full-dimension inspection", "Laptop appearance and BC/TC/DH dimension measurement", "PCB / Phone Board 2D AOI", "Watch back cover light-pass and bonding inspection"],
    },
    zh: {
      title: "3C电子行业",
      summary: "手机、笔记本电脑、可穿戴设备 — 外观、尺寸、功能检测全速运行。",
      longDesc: "从全球顶级消费电子OEM到其一级供应商，鼎纳系统检测手机摄像头模组、笔记本电脑外壳、手表后盖、PCB组件和麦克风腔体。我们在30微米以下的美观缺陷上保持>99.97%的召回率，同时保持每个零件一秒钟以内的节拍时间。",
      highlights: ["摄像头模组色差全尺寸检测", "笔记本外观及BC/TC/DH尺寸测量", "PCB/Phone Board 2D AOI", "手表后盖透光及贴合检测"],
    },
  },
  energy: {
    en: {
      title: "New Energy & Automotive",
      summary: "Battery cells, modules, glass, and drive components for high-mix, high-throughput EV lines.",
      longDesc: "EV battery cells, prismatic and pouch, demand zero-defect appearance and dimension control. Dinnar lines handle composite separator film, H1H2 lithium cells, windshield-to-PVD-film alignment, and door-lock assembly with deterministic guarantees.",
      highlights: ["Prismatic and pouch cell appearance inspection", "Composite battery film defect detection", "Windshield + PVD film high-precision alignment", "Door-lock and small-component assembly"],
    },
    zh: {
      title: "新能源/汽车行业",
      summary: "电池电芯、模组、玻璃和驱动组件 — 适用于多品种、高产能的电动车产线。",
      longDesc: "电动车电池电芯（方形和软包）要求零缺陷的外观和尺寸控制。鼎纳产线可处理复合隔膜、H1H2锂电池、挡风玻璃与PVD膜对位以及门锁组装，具有确定性保障。",
      highlights: ["方形及软包电池外观检测", "电池复合薄膜缺陷检测", "挡风玻璃+PVD膜高精度对位", "门锁及小件组装"],
    },
  },
  semiconductor: {
    en: {
      title: "Semiconductor",
      summary: "Wafer, die, and substrate-level inspection and assembly with sub-micron repeatability.",
      longDesc: "Wafer cutting blade inspection, sensor assembly, and motor-housing tap-and-drill systems handle the most demanding tolerances in the industry. Our integrated thermal and vibration compensation keeps measurements stable through full shifts.",
      highlights: ["Monocrystalline wafer cutting blade inspection", "Micro-sensor assembly line", "Motor housing drill / tap integration", "Sub-micron metrology with thermal compensation"],
    },
    zh: {
      title: "半导体行业",
      summary: "晶圆、芯片和基板级检测与组装，亚微米级重复精度。",
      longDesc: "晶圆切割片检测、传感器组装和电机壳钻攻系统可处理行业中最严苛的公差。我们集成的热补偿和振动补偿使测量在整个班次中保持稳定。",
      highlights: ["单晶元切割片缺陷检测", "微型传感器组装线", "电机壳钻攻一体机", "亚微米计量与热补偿"],
    },
  },
  display: {
    en: {
      title: "Display Panels",
      summary: "Mini-LED, OLED, and LCD inspection from glue to backlight to lit-pixel.",
      longDesc: "End-to-end coverage from Mini-LED glue defect detection through backlight contour measurement to LCD lit-screen metrology. Custom optics suppress moiré and resolve sub-pixel anomalies at production line speed.",
      highlights: ["Mini-LED glue defect detection", "Backlight panel size + contour inspection", "LCD lit-screen full-area metrology", "Tablet appearance defect general platform"],
    },
    zh: {
      title: "显示面板行业",
      summary: "Mini-LED、OLED、LCD检测，从胶水到背光到点亮像素全覆盖。",
      longDesc: "端到端覆盖，从Mini-LED胶水缺陷检测到背光轮廓测量再到LCD点亮屏幕计量。定制光学抑制莫尔纹，以产线速度解决亚像素异常。",
      highlights: ["Mini-LED胶水缺陷检测", "背光板尺寸+轮廓检测", "LCD点亮屏幕全区域计量", "平板外观缺陷通用平台"],
    },
  },
  other: {
    en: {
      title: "Medical & Industrial",
      summary: "Surgical staplers, saline bottles, and precision mechanical parts to ISO standards.",
      longDesc: "Medical surgical-stapler staple cartridge inspection, saline-bottle defect detection, and universal-joint cross-shaft appearance inspection — engineered to ISO 13485 / GMP grade with full audit trail per part.",
      highlights: ["Medical stapler cartridge inspection", "Medical saline bottle defect detection", "Universal cross-shaft appearance inspection", "Full per-part audit trail"],
    },
    zh: {
      title: "医疗及其他行业",
      summary: "医用吻合器、盐水瓶、精密机械零件，符合ISO标准。",
      longDesc: "医用吻合器仓订检测、盐水瓶缺陷检测和万向十字轴外观检测 — 按ISO 13485/GMP级别设计，每个零件都有完整的审计追踪。",
      highlights: ["医用吻合器仓订检测", "医用盐水瓶缺陷检测", "万向十字轴外观检测", "零件级全审计追踪"],
    },
  },
};

const COLORS: Record<string, string> = {
  electron: "from-blue-600 to-blue-400",
  energy: "from-green-600 to-emerald-400",
  semiconductor: "from-purple-600 to-indigo-400",
  display: "from-orange-600 to-red-400",
  other: "from-teal-600 to-cyan-400",
};

type IndustrySlug = "electron" | "energy" | "semiconductor" | "display" | "other";

export default async function IndustryDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const industry = industriesBySlug.get(slug as IndustrySlug);
  const detail = DETAILS[slug as IndustrySlug];
  if (!industry || !detail) notFound();

  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";
  const d = detail[lang];
  const color = COLORS[slug] || COLORS.other;

  const relatedProducts = productsByIndustry(slug).slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${color} text-white py-20`}>
        <div className="container-page">
          <Link href={`/${locale}/industries`} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {lang === "zh" ? "返回行业列表" : "Back to industries"}
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{d.title}</h1>
          <p className="mt-4 text-white/80 text-lg max-w-3xl">{d.summary}</p>
        </div>
      </section>

      {/* Description */}
      <section className="container-page py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-500 mb-6">
            {lang === "zh" ? "行业概述" : "Industry Overview"}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{d.longDesc}</p>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          {d.highlights.map((h, i) => (
            <div key={i} className="card-white p-5 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
              <span className="text-sm font-medium text-navy-500">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-navy-500 mb-8">
              {lang === "zh" ? "相关产品" : "Related Products"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <Link key={p.slug} href={`/${locale}/products/${p.slug}`} className="card-white p-5 group">
                  <h3 className="text-sm font-semibold text-navy-500 group-hover:text-brand-500 transition-colors line-clamp-2">
                    {desensitize(p.title[lang])}
                  </h3>
                  <span className="inline-block mt-3 text-xs font-medium text-brand-500">
                    {lang === "zh" ? "查看详情 →" : "View details →"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-500 text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {lang === "zh" ? "需要定制化行业方案？" : "Need a custom industry solution?"}
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            {lang === "zh" ? "分享您的生产环境和需求，我们的工程团队将在一个工作日内回复。" : "Share your production environment and requirements. An engineer will reply within one business day."}
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
  return ["electron", "energy", "semiconductor", "display", "other"].map((slug) => ({ slug }));
}
