"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const HeroClient = dynamic(() => import("./HeroClient"), { ssr: false });

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
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
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">Core Capabilities</span>
          <h2>Six engines that make a lights-out line possible</h2>
          <p>Vision, robotics, and AI engineered together — not bolted on.</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Sub-pixel machine vision", body: "Custom optics, multi-spectral lighting, and PatMax-class geometric matching that resolves defects below 5 microns at line speed.", icon: "🔍" },
            { title: "On-device defect AI", body: "Self-supervised models trained per SKU, redeployed in minutes. Zero cloud dependency on the line.", icon: "🧠" },
            { title: "Closed-loop motion", body: "Six-axis robots, linear stages, and force-feedback grippers tuned to micrometer-level repeatability.", icon: "⚙️" },
            { title: "In-line metrology", body: "Confocal, structured light, and laser interferometry fused into one measurement record per part.", icon: "📐" },
            { title: "Factory data fabric", body: "Every part, every cycle, time-locked into an OPC-UA / MQTT data fabric with full lineage.", icon: "📊" },
            { title: "Lights-out operations", body: "Self-recovery, auto-rebalancing across stations, and zero-touch SKU changeover.", icon: "🌙" },
          ].map((cap, i) => (
            <div key={i} className="card-white p-6 hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">{cap.icon}</div>
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
  const industries = [
    { slug: "electron", title: "3C Consumer Electronics", summary: "Phones, laptops, wearables — appearance, dimension, and functional inspection at line speed.", color: "from-blue-500 to-cyan-500" },
    { slug: "energy", title: "New Energy & Automotive", summary: "Battery cells, modules, glass, and drive components for high-mix, high-throughput EV lines.", color: "from-green-500 to-emerald-500" },
    { slug: "semiconductor", title: "Semiconductor", summary: "Wafer, die, and substrate-level inspection and assembly with sub-micron repeatability.", color: "from-purple-500 to-indigo-500" },
    { slug: "display", title: "Display Panels", summary: "Mini-LED, OLED, and LCD inspection from glue to backlight to lit-pixel.", color: "from-orange-500 to-red-500" },
    { slug: "other", title: "Medical & Industrial", summary: "Surgical staplers, saline bottles, and precision mechanical parts to ISO standards.", color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <section className="section-pad bg-gray-50">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">Industries</span>
          <h2>Built for the world&apos;s hardest production problems</h2>
          <p>Deployed across consumer electronics, EV batteries, semiconductors, and displays.</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <a key={ind.slug} href={`/en/industries/${ind.slug}`} className="card-white overflow-hidden group block">
              <div className={`h-2 bg-gradient-to-r ${ind.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-500 mb-2 group-hover:text-brand-500 transition-colors">{ind.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.summary}</p>
                <span className="inline-block mt-4 text-sm font-medium text-brand-500 group-hover:underline">Learn more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="section-pad bg-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">Flagship Platform</span>
          <h2>ACI-S1000 + Vision One</h2>
          <p>One controller, one model trainer, every line.</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ACI-S1000 card */}
          <div className="card-white p-8 lg:p-10 flex flex-col">
            <span className="tag-accent bg-brand-50 text-brand-600 mb-4 w-fit">Hardware</span>
            <h3 className="text-2xl font-bold text-navy-500 mb-2">ACI-S1000</h3>
            <p className="text-sm text-brand-500 font-medium mb-4">Lights-out controller, factory edge</p>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              ACI-S1000 is the brain of every Dinnar line: a unified controller that orchestrates vision, motion, and AI inference at sub-millisecond cadence.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {["Sub-millisecond synchronous vision + motion", "16 GPU-accelerated inspection streams per node", "Hot-swap line modules with zero downtime", "OPC-UA / MQTT / EtherCAT native"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-brand-500 mt-1 flex-shrink-0">●</span> {item}
                </li>
              ))}
            </ul>
            <a href="/en/products" className="btn-primary w-fit">View product</a>
          </div>

          {/* Vision One card */}
          <div className="card-white p-8 lg:p-10 flex flex-col">
            <span className="tag-accent bg-brand-50 text-brand-600 mb-4 w-fit">Software</span>
            <h3 className="text-2xl font-bold text-navy-500 mb-2">Vision One</h3>
            <p className="text-sm text-brand-500 font-medium mb-4">Visual development platform</p>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Vision One is the development platform engineers use to design, train, and deploy inspection models without writing low-level code.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {["Drag-and-drop pipeline builder", "PatMax-class geometric matching, sub-pixel edge", "Self-supervised defect classifier", "Deploys to ACI-S1000 in one click"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-brand-500 mt-1 flex-shrink-0">●</span> {item}
                </li>
              ))}
            </ul>
            <a href="/en/products" className="btn-outline w-fit">View platform</a>
          </div>
        </div>

        {/* Browse all */}
        <div className="mt-12 text-center">
          <a href="/en/products" className="inline-flex items-center gap-2 text-brand-500 font-medium hover:underline">
            View the full equipment catalog
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function OMESection() {
  const items = [
    { title: "Optics", body: "Custom telecentric lenses, multi-spectral coaxial lighting, and proprietary polariser stacks tuned per SKU — designed in-house, ground in-house.", icon: "🔬" },
    { title: "Mechanics", body: "Granite stages, precision linear modules, and vibration-isolated work cells engineered for sub-micron repeatability over 8-year service life.", icon: "⚡" },
    { title: "Electronics", body: "ACI-S1000 baseboards, FPGA imaging cards, and EtherCAT motion controllers. Every PCBA is built and tested by Dinnar.", icon: "💻" },
  ];

  return (
    <section className="section-pad bg-navy-500 text-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30">Optics · Mechanics · Electronics</span>
          <h2 className="text-white">We build the stack other automation companies stop short of</h2>
          <p className="text-gray-400">Most vendors integrate. We engineer.</p>
          <div className="accent-line bg-brand-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-brand-500/30 transition-all group">
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
  const phases = [
    { title: "1 · Automate", body: "Replace manual inspection and measurement with deterministic vision systems." },
    { title: "2 · Connect", body: "Link every station into one data fabric. Every defect is correlated, every cycle is measured." },
    { title: "3 · Decide", body: "Closed-loop AI that resolves micro-stoppages, rebalances throughput, and orders re-work without an operator." },
    { title: "4 · Lights-Out", body: "Switch off the lights. Production continues, recovers, and reports — autonomously." },
  ];

  return (
    <section className="section-pad bg-gray-50">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">The Lights-Out Era</span>
          <h2>From automated inspection to fully autonomous production</h2>
          <p>Most factories still need humans every shift. Dinnar gives you the platform to remove them — safely, gradually, line by line.</p>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((phase, i) => (
            <div key={i} className="card-white p-6 relative group">
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
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent">About Dinnar</span>
          <h2>Engineered in San Jose. Deployed worldwide.</h2>
          <div className="accent-line" />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-500 text-lg leading-relaxed">
            Dinnar Automatic Intelligence Inc. is the U.S. operating company building the lights-out manufacturing platform for the next generation of factories. Our team comes from the world&apos;s leading vision, robotics, and AI labs, and our systems run production lines for Fortune 500 consumer electronics, EV, battery, and semiconductor manufacturers across three continents.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "2008", label: "Founded" },
            { value: "120+", label: "Customers worldwide" },
            { value: "850+", label: "Lines deployed" },
            { value: "300+", label: "Engineers" },
          ].map((stat, i) => (
            <div key={i} className="card-white p-6 text-center">
              <div className="text-3xl font-bold text-brand-500">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/en/about" className="btn-outline">Learn more about Dinnar</a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-gradient-to-br from-brand-500 to-brand-600 text-white">
      <div className="container-page">
        <div className="section-title">
          <span className="tag-accent bg-white/20 text-white border border-white/30">Talk to us</span>
          <h2 className="text-white">Bring lights-out to your line</h2>
          <p className="text-white/80">Tell us about your production environment. An engineer will reply within one business day.</p>
          <div className="accent-line bg-white" />
        </div>

        <form className="max-w-xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm" />
            <input type="email" placeholder="Work email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm" />
          </div>
          <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm" />
          <textarea rows={4} placeholder="Tell us about your production environment and what you need" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm resize-none" />
          <button type="submit" className="btn-white w-full py-3.5 font-semibold text-brand-600">Send inquiry</button>
        </form>
      </div>
    </section>
  );
}
