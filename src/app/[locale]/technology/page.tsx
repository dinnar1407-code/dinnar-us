import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ locale: string }> };

const TECH_SECTION = {
  en: {
    title: "Core Technology",
    subtitle: "Why teams pick Dinnar for their most demanding lines.",
    stats: [
      { value: "99.93%", label: "Mean line uptime" },
      { value: "<800 ms", label: "Per-part cycle time" },
      { value: "99.97%", label: "Defect recall" },
      { value: "14 days", label: "Line audit to production" },
    ],
    items: [
      { title: "PatMax-Class Geometric Matching", body: "Sub-pixel edge detection and contour matching that maintains accuracy across lighting, scale, and rotation variations. Trained per SKU, deployed on the ACI-S1000." },
      { title: "Deep Learning Defect Classification", body: "Self-supervised models trained on proprietary production-line data. No cloud dependency — all inference runs at the edge with <10ms latency per part." },
      { title: "Multi-Spectral Imaging", body: "Custom telecentric optics with coaxial, ring, and structured lighting across UV to IR. Each channel is tuned for a specific defect class (scratch, dent, contamination, color shift)." },
      { title: "Real-Time Motion + Vision Fusion", body: "EtherCAT-synchronized motion and image acquisition at sub-millisecond cadence. The controller physically couples the encoder pulse to the camera trigger for zero-latency capture." },
      { title: "3D Point Cloud Processing", body: "Structured light and laser line triangulation fused with 2D imaging. Full surface inspection and volumetric measurement in one pass." },
      { title: "Production Data Fabric", body: "OPC-UA / MQTT backbone with full part-level lineage. Every measurement, every cycle, time-locked and queryable across the entire factory." },
    ],
  },
  zh: {
    title: "核心技术",
    subtitle: "为什么顶尖团队选择鼎纳来驱动最严苛的产线。",
    stats: [
      { value: "99.93%", label: "平均产线正常运行时间" },
      { value: "<800 ms", label: "单件节拍时间" },
      { value: "99.97%", label: "缺陷召回率" },
      { value: "14 天", label: "从产线审计到投产" },
    ],
    items: [
      { title: "PatMax 级几何匹配", body: "亚像素边缘检测和轮廓匹配，在光照、比例和旋转变化下保持精度。按SKU训练，部署于ACI-S1000。" },
      { title: "深度学习缺陷分类", body: "基于专有产线数据训练的自监督模型。无需云端依赖 — 所有推理在边缘运行，每件<10毫秒延迟。" },
      { title: "多光谱成像", body: "定制远心光学，同轴光、环形光和结构光覆盖紫外到红外。每个通道针对特定缺陷类型调校（划痕、凹陷、污染、色偏）。" },
      { title: "实时运动+视觉融合", body: "EtherCAT同步的运动和图像采集，亚毫秒节拍。控制器将编码器脉冲物理耦合到相机触发，实现零延迟捕获。" },
      { title: "3D 点云处理", body: "结构光和激光线三角测量与2D成像融合。一次扫描即可完成全表面检测和体积测量。" },
      { title: "生产数据架构", body: "OPC-UA/MQTT主干，具有完整的零件级谱系。每一次测量、每一个周期，时间锁定且可在整个工厂查询。" },
    ],
  },
};

export default async function TechnologyPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";
  const t = TECH_SECTION[lang];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="text-white py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/aboutus_html_images_1695026802.jpg')" }}
      >
        <div className="absolute inset-0 bg-navy-600/83" />
        <div className="container-page relative z-10">
          <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-4 inline-block">Technology</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t.title}</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">{t.subtitle}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-500">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology items */}
      <section className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="card-white p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                <span className="text-brand-500 font-bold text-sm">{(i + 1).toString().padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OME section */}
      <section className="bg-navy-500 text-white py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {lang === "zh" ? "光·机·电 一体化" : "Optics · Mechanics · Electronics"}
            </h2>
            <p className="mt-3 text-gray-400 text-lg">
              {lang === "zh" ? "我们自研核心光学、精密机械和电子控制系统 — 不拼装，只创造。" : "We engineer the core optics, precision mechanics, and control electronics — we create, not assemble."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: lang === "zh" ? "光学" : "Optics",
                body: lang === "zh" ? "定制远心镜头、多光谱同轴照明和专利偏振片堆叠，按SKU调校。自研设计，自主加工。" : "Custom telecentric lenses, multi-spectral coaxial lighting, and proprietary polariser stacks tuned per SKU. Designed in-house, ground in-house.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="20" cy="20" rx="9" ry="13" />
                    <ellipse cx="20" cy="20" rx="3.5" ry="5.5" />
                    <line x1="3" y1="17" x2="11" y2="17" /><line x1="3" y1="20" x2="11" y2="20" /><line x1="3" y1="23" x2="11" y2="23" />
                    <line x1="29" y1="17" x2="35" y2="20" /><line x1="29" y1="20" x2="37" y2="20" /><line x1="29" y1="23" x2="35" y2="20" />
                  </svg>
                ),
              },
              {
                title: lang === "zh" ? "机械" : "Mechanics",
                body: lang === "zh" ? "花岗岩平台、精密直线模组和隔振工作单元，专为8年使用寿命的亚微米级重复精度而设计。" : "Granite stages, precision linear modules, and vibration-isolated work cells engineered for sub-micron repeatability over 8-year service life.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="24" width="30" height="6" rx="1.5" />
                    <rect x="9" y="17" width="22" height="7" rx="1" />
                    <rect x="17" y="10" width="6" height="7" rx="1" />
                    <line x1="7" y1="24" x2="7" y2="17" /><line x1="33" y1="24" x2="33" y2="17" />
                    <line x1="14" y1="30" x2="14" y2="28" /><line x1="20" y1="30" x2="20" y2="27" /><line x1="26" y1="30" x2="26" y2="28" />
                    <line x1="14" y1="17" x2="14" y2="12" /><line x1="26" y1="17" x2="26" y2="12" />
                  </svg>
                ),
              },
              {
                title: lang === "zh" ? "电子" : "Electronics",
                body: lang === "zh" ? "ACI-S1000 基板、FPGA 图像采集卡和 EtherCAT 运动控制器。每块 PCBA 均由鼎纳自研自测。" : "ACI-S1000 baseboards, FPGA imaging cards, and EtherCAT motion controllers. Every PCBA is built and tested by Dinnar.",
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="5" width="30" height="30" rx="2" />
                    <rect x="13" y="13" width="14" height="14" rx="1.5" />
                    <line x1="5" y1="11" x2="13" y2="11" /><line x1="5" y1="20" x2="13" y2="20" /><line x1="5" y1="29" x2="13" y2="29" />
                    <line x1="27" y1="11" x2="35" y2="11" /><line x1="27" y1="20" x2="35" y2="20" /><line x1="27" y1="29" x2="35" y2="29" />
                    <line x1="11" y1="5" x2="11" y2="13" /><line x1="20" y1="5" x2="20" y2="13" /><line x1="29" y1="5" x2="29" y2="13" />
                    <line x1="11" y1="27" x2="11" y2="35" /><line x1="20" y1="27" x2="20" y2="35" /><line x1="29" y1="27" x2="29" y2="35" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-brand-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-brand-400 group-hover:bg-white/20 transition-colors">
                  <span className="w-7 h-7 [&>svg]:w-full [&>svg]:h-full [&>svg]:block">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
