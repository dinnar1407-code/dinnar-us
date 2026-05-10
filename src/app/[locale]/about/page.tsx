import Link from "next/link";

type Props = { params: Promise<{ locale: string }> };

const CONTENT = {
  en: {
    title: "About Dinnar",
    subtitle: "Engineered in San Jose. Deployed worldwide.",
    body: "Dinnar Automatic Intelligence Inc. is the U.S. operating company building the lights-out manufacturing platform for the next generation of factories. Our team comes from the world's leading vision, robotics, and AI labs, and our systems run production lines for Fortune 500 consumer electronics, EV, battery, and semiconductor manufacturers across three continents.",
    mission: "Our mission is to build the platform that runs the world's first fully lights-out factories — safer, more accurate, and more sustainable than any human-led line.",
    timeline: [
      { year: "2010", text: "Founded in Suzhou, China as an automation technology startup." },
      { year: "2015", text: "First Fortune 500 consumer electronics OEM deploys Dinnar vision systems." },
      { year: "2018", text: "Launched Vision One — low-code visual development platform." },
      { year: "2020", text: "Expanded to EV battery and semiconductor sectors. 50+ production lines deployed." },
      { year: "2023", text: "Opened U.S. headquarters in San Jose, CA. Launched ACI-S1000 unified controller." },
      { year: "2025", text: "850+ production lines online. 120+ customers globally across 4 continents." },
    ],
    stats: [
      { value: "2010", label: "Founded" },
      { value: "120+", label: "Customers worldwide" },
      { value: "850+", label: "Lines deployed" },
      { value: "300+", label: "Engineers" },
    ],
    contact: {
      title: "Get in touch",
      subtitle: "Tell us about your production environment. An engineer will reply within one business day.",
      address: "1735 Technology Drive, Suite 720, San Jose, CA 95110",
      email: "hello@dinnar.us",
    },
  },
  zh: {
    title: "关于鼎纳",
    subtitle: "研发于硅谷。部署于全球。",
    body: "鼎纳自动智能（美国）公司是为下一代工厂构建无人工厂平台的在美运营公司。我们的团队来自全球顶尖的视觉、机器人和AI实验室，我们的系统运行着横跨三大洲的财富500强消费电子、电动车、电池和半导体制造商的生产线。",
    mission: "我们的使命是构建运行全球首个完全无人工厂的平台——比任何人工作业产线更安全、更精准、更可持续。",
    timeline: [
      { year: "2010", text: "在中国苏州成立，作为自动化技术创业公司。" },
      { year: "2015", text: "首家财富500强消费电子OEM部署鼎纳视觉系统。" },
      { year: "2018", text: "推出 Vision One —— 低代码视觉开发平台。" },
      { year: "2020", text: "扩展至电动车电池和半导体领域。50+条产线已部署。" },
      { year: "2023", text: "在美国加州圣何塞开设总部。推出ACI-S1000统一控制器。" },
      { year: "2025", text: "850+条产线在线运行。120+客户遍布全球四大洲。" },
    ],
    stats: [
      { value: "2010", label: "成立年份" },
      { value: "120+", label: "全球客户" },
      { value: "850+", label: "已部署产线" },
      { value: "300+", label: "工程师" },
    ],
    contact: {
      title: "联系我们",
      subtitle: "分享您的生产环境和需求。工程团队将在一个工作日内回复。",
      address: "1735 Technology Drive, Suite 720, San Jose, CA 95110",
      email: "hello@dinnar.us",
    },
  },
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";
  const t = CONTENT[lang];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy-500 text-white py-20">
        <div className="container-page">
          <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-4 inline-block">About</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t.title}</h1>
          <p className="mt-4 text-gray-300 text-xl">{t.subtitle}</p>
        </div>
      </section>

      {/* Body */}
      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">{t.body}</p>
          <div className="mt-8 p-6 bg-brand-50 rounded-xl border border-brand-100">
            <h3 className="text-sm font-semibold text-brand-600 uppercase mb-2">
              {lang === "zh" ? "我们的使命" : "Our mission"}
            </h3>
            <p className="text-gray-700 leading-relaxed">{t.mission}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {t.stats.map((stat, i) => (
              <div key={i} className="card-white p-6 text-center">
                <div className="text-3xl font-bold text-brand-500">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-16">
        <h2 className="text-2xl font-bold text-navy-500 text-center mb-12">
          {lang === "zh" ? "发展历程" : "Our Journey"}
        </h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {t.timeline.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-16 pt-1">
                <span className="text-lg font-bold text-brand-500">{item.year}</span>
              </div>
              <div className="flex-1 relative">
                {i < t.timeline.length - 1 && (
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-gray-200 -translate-x-[2.75rem]" />
                )}
                <div className="card-white p-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-600 text-white py-20">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">{t.contact.title}</h2>
            <p className="mt-4 text-white/80 text-lg">{t.contact.subtitle}</p>

            <form className="mt-10 space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={lang === "zh" ? "姓名" : "Full name"}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
                />
                <input
                  type="email"
                  placeholder={lang === "zh" ? "工作邮箱" : "Work email"}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
                />
              </div>
              <input
                type="text"
                placeholder={lang === "zh" ? "公司" : "Company"}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
              />
              <textarea
                rows={4}
                placeholder={lang === "zh" ? "描述您的生产环境和需求" : "Tell us about your production environment"}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm resize-none"
              />
              <button type="submit" className="btn-white w-full py-3.5 font-semibold text-brand-600">
                {lang === "zh" ? "发送咨询" : "Send inquiry"}
              </button>
            </form>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
              <p className="bg-white/10 rounded-lg px-4 py-3">{t.contact.address}</p>
              <p className="bg-white/10 rounded-lg px-4 py-3">{t.contact.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
