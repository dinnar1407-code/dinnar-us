"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Link } from "@/i18n/routing";
import { NodeNetwork } from "@/components/ui/NodeNetwork";
import { ScrollAnimations } from "@/components/ui/ScrollAnimations";

const HeroClient = dynamic(() => import("./HeroClient"), { ssr: false });

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <>
      <ScrollAnimations />
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700">
        {/* Animated node network background */}
        <div className="absolute inset-0 opacity-25">
          <NodeNetwork />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/50 to-transparent" />
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <HeroClient />
        </div>
        {/* Content overlay */}
        <div className="container-page relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-6 inline-block">
              {t("eyebrow")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="btn-primary bg-brand-500 hover:bg-brand-400 text-white px-8 py-3.5 rounded-lg font-semibold">
                {t("cta")}
              </a>
              <a href="#contact" className="btn-white px-8 py-3.5 rounded-lg font-semibold">
                {t("ctaSecondary")}
              </a>
            </div>
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {(["stat1", "stat2", "stat3", "stat4"] as const).map((key) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-brand-400">
                    {t(`${key}Value`)}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">
                    {t(`${key}Label`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <CapabilitiesSection />
      {/* Industries */}
      <IndustriesSection />
      {/* Products */}
      <ProductsSection />
      {/* OME - Optics Mechanics Electronics */}
      <OMESection />
      {/* Lights Out */}
      <LightsOutSection />
      {/* About / Stats */}
      <AboutSection />
      {/* Contact */}
      <ContactSection />
    </>
  );
}

function CapabilitiesSection() {
  const t = useTranslations("capabilities");
  const caps = [
    {
      key: "vision",
      title: t("items.vision.title"),
      body: t("items.vision.body"),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 20Q20 7 35 20Q20 33 5 20z" />
          <circle cx="20" cy="20" r="5.5" />
          <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
          <line x1="20" y1="4" x2="20" y2="7" />
          <line x1="20" y1="33" x2="20" y2="36" />
          <line x1="4" y1="20" x2="7" y2="20" />
          <line x1="33" y1="20" x2="36" y2="20" />
        </svg>
      ),
    },
    {
      key: "ai",
      title: t("items.ai.title"),
      body: t("items.ai.body"),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="11" width="18" height="18" rx="2" />
          <rect x="15" y="15" width="10" height="10" rx="1" />
          <line x1="6" y1="16" x2="11" y2="16" /><line x1="6" y1="20" x2="11" y2="20" /><line x1="6" y1="24" x2="11" y2="24" />
          <line x1="29" y1="16" x2="34" y2="16" /><line x1="29" y1="20" x2="34" y2="20" /><line x1="29" y1="24" x2="34" y2="24" />
          <line x1="16" y1="6" x2="16" y2="11" /><line x1="20" y1="6" x2="20" y2="11" /><line x1="24" y1="6" x2="24" y2="11" />
          <line x1="16" y1="29" x2="16" y2="34" /><line x1="20" y1="29" x2="20" y2="34" /><line x1="24" y1="29" x2="24" y2="34" />
        </svg>
      ),
    },
    {
      key: "motion",
      title: t("items.motion.title"),
      body: t("items.motion.body"),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 9a11 11 0 1 0 7.778 3.222" />
          <polyline points="26,8 28,12 24,12" />
          <circle cx="20" cy="20" r="4" />
          <line x1="20" y1="16" x2="20" y2="24" />
          <line x1="16" y1="20" x2="24" y2="20" />
        </svg>
      ),
    },
    {
      key: "metrology",
      title: t("items.metrology.title"),
      body: t("items.metrology.body"),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="17" width="32" height="9" rx="1.5" />
          <line x1="9" y1="17" x2="9" y2="21" />
          <line x1="14" y1="17" x2="14" y2="21" />
          <line x1="20" y1="17" x2="20" y2="13" />
          <line x1="26" y1="17" x2="26" y2="21" />
          <line x1="31" y1="17" x2="31" y2="21" />
          <line x1="6" y1="13" x2="34" y2="13" />
          <polyline points="8,11 6,13 8,15" />
          <polyline points="32,11 34,13 32,15" />
        </svg>
      ),
    },
    {
      key: "data",
      title: t("items.data.title"),
      body: t("items.data.body"),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="20" r="3" />
          <circle cx="7" cy="10" r="2.5" />
          <circle cx="33" cy="10" r="2.5" />
          <circle cx="7" cy="30" r="2.5" />
          <circle cx="33" cy="30" r="2.5" />
          <circle cx="20" cy="5" r="2.5" />
          <line x1="9.2" y1="11.8" x2="17.5" y2="18" />
          <line x1="30.8" y1="11.8" x2="22.5" y2="18" />
          <line x1="9.2" y1="28.2" x2="17.5" y2="22" />
          <line x1="30.8" y1="28.2" x2="22.5" y2="22" />
          <line x1="20" y1="7.5" x2="20" y2="17" />
        </svg>
      ),
    },
    {
      key: "ops",
      title: t("items.ops.title"),
      body: t("items.ops.body"),
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 33V21l8 0V27l8-6V27l8-6V33Z" />
          <line x1="4" y1="33" x2="36" y2="33" />
          <rect x="9" y="14" width="3" height="7" />
          <line x1="10.5" y1="12" x2="10.5" y2="10" strokeDasharray="1.5 2" />
          <rect x="17" y="26" width="6" height="7" />
          <circle cx="27" cy="10" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="32" cy="6" r="1" fill="currentColor" stroke="none" />
          <circle cx="35" cy="13" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caps.map((cap) => (
            <div key={cap.key} className="card-white p-6 hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-4 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-200">
                <span className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:block">{cap.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const t = useTranslations("industries");
  const tc = useTranslations("common");
  const industries = [
    { slug: "electron", title: t("electron.title"), summary: t("electron.summary"), color: "from-blue-500 to-cyan-500" },
    { slug: "energy", title: t("energy.title"), summary: t("energy.summary"), color: "from-green-500 to-emerald-500" },
    { slug: "semiconductor", title: t("semiconductor.title"), summary: t("semiconductor.summary"), color: "from-purple-500 to-indigo-500" },
    { slug: "display", title: t("display.title"), summary: t("display.summary"), color: "from-orange-500 to-red-500" },
    { slug: "other", title: t("other.title"), summary: t("other.summary"), color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <section className="section-pad bg-gray-50">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}` as any} className="card-white overflow-hidden group block">
              <div className={`h-2 bg-gradient-to-r ${ind.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-500 mb-2 group-hover:text-brand-500 transition-colors">{ind.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.summary}</p>
                <span className="inline-block mt-4 text-sm font-medium text-brand-500 group-hover:underline">{tc("learnMore")} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const t = useTranslations("products");

  const aciHighlights = t.raw("aciHighlights") as string[];
  const visionHighlights = t.raw("visionHighlights") as string[];

  return (
    <section id="products" className="section-pad bg-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ACI-S1000 card */}
          <div className="card-white p-8 lg:p-10 flex flex-col">
            <span className="tag-accent bg-brand-50 text-brand-600 mb-4 w-fit">Hardware</span>
            <h3 className="text-2xl font-bold text-navy-500 mb-2">{t("aciTitle")}</h3>
            <p className="text-sm text-brand-500 font-medium mb-6">{t("aciTagline")}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {aciHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-brand-500 mt-1 flex-shrink-0">●</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/products" className="btn-primary w-fit">{t("viewAll")}</Link>
          </div>

          {/* Vision One card */}
          <div className="card-white p-8 lg:p-10 flex flex-col">
            <span className="tag-accent bg-brand-50 text-brand-600 mb-4 w-fit">Software</span>
            <h3 className="text-2xl font-bold text-navy-500 mb-2">{t("visionTitle")}</h3>
            <p className="text-sm text-brand-500 font-medium mb-6">{t("visionTagline")}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {visionHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-brand-500 mt-1 flex-shrink-0">●</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/products" className="btn-outline w-fit">{t("viewAll")}</Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 text-brand-500 font-medium hover:underline">
            {t("viewAll")} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function OMESection() {
  const t = useTranslations("ome");
  const items = [
    { key: "optics", icon: "🔬", title: t("optics.title"), body: t("optics.body") },
    { key: "mechanics", icon: "⚡", title: t("mechanics.title"), body: t("mechanics.body") },
    { key: "electronics", icon: "💻", title: t("electronics.title"), body: t("electronics.body") },
  ];

  return (
    <section
      className="section-pad text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/aboutus_html_images_1695026727.jpg')" }}
    >
      {/* Dark navy overlay preserves original color tone while letting the factory photo bleed through */}
      <div className="absolute inset-0 bg-navy-600/82" />
      <div className="container-page relative z-10">
        <div className="section-title">
          <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30">{t("eyebrow")}</span>
          <h2 className="text-white">{t("title")}</h2>
          <p className="text-gray-400">{t("subtitle")}</p>
          <div className="accent-line bg-brand-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.key} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-brand-500/30 transition-all group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LightsOutSection() {
  const t = useTranslations("lightsOut");
  const phases = [
    { key: "phaseAutomate", title: t("phaseAutomate.title"), body: t("phaseAutomate.body") },
    { key: "phaseConnect", title: t("phaseConnect.title"), body: t("phaseConnect.body") },
    { key: "phaseDecide", title: t("phaseDecide.title"), body: t("phaseDecide.body") },
    { key: "phaseLightsOut", title: t("phaseLightsOut.title"), body: t("phaseLightsOut.body") },
  ];

  return (
    <section
      className="section-pad relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner_1695379304.png')" }}
    >
      {/* Very light overlay so white cards remain readable while factory texture shows through */}
      <div className="absolute inset-0 bg-gray-50/96" />
      <div className="container-page relative z-10">
        <div className="section-title">
          <span className="tag-accent">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((phase, i) => (
            <div key={phase.key} className="card-white p-6 relative group">
              <div className="text-3xl font-bold text-brand-100 mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-base font-semibold text-navy-500 mb-2">{phase.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{phase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const t = useTranslations("about");
  const tc = useTranslations("common");

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <div className="accent-line" />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-500 text-lg leading-relaxed">{t("body")}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {(["stat1", "stat2", "stat3", "stat4"] as const).map((key) => (
            <div key={key} className="card-white p-6 text-center">
              <div className="text-3xl font-bold text-brand-500">{t(`${key}.value`)}</div>
              <div className="text-sm text-gray-500 mt-1">{t(`${key}.label`)}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/about" className="btn-outline">{tc("learnMore")}</Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="section-pad bg-gradient-to-br from-brand-500 to-brand-600 text-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent bg-white/20 text-white border border-white/30">{t("eyebrow")}</span>
          <h2 className="text-white">{t("title")}</h2>
          <p className="text-white/80">{t("subtitle")}</p>
          <div className="accent-line bg-white" />
        </div>

        <form className="max-w-xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder={t("name")} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm" />
            <input type="email" placeholder={t("email")} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm" />
          </div>
          <input type="text" placeholder={t("company")} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm" />
          <textarea rows={4} placeholder={t("message")} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm resize-none" />
          <button type="submit" className="btn-white w-full py-3.5 font-semibold text-brand-600">{t("submit")}</button>
        </form>
      </div>
    </section>
  );
}
