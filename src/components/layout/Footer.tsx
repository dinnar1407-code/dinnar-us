"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("common");
  const locale = useLocale();

  const navColumns = [
    {
      title: { en: "Products", zh: "产品" },
      links: [
        { en: "ACI-S1000", zh: "ACI-S1000", href: "/products/p-1098" },
        { en: "Vision One", zh: "Vision One", href: "/products/p-1072" },
        { en: "All Equipment", zh: "全部设备", href: "/products" },
      ],
    },
    {
      title: { en: "Industries", zh: "行业" },
      links: [
        { en: "3C Electronics", zh: "3C电子", href: `/${locale}/industries/electron` },
        { en: "New Energy", zh: "新能源", href: `/${locale}/industries/energy` },
        { en: "Semiconductor", zh: "半导体", href: `/${locale}/industries/semiconductor` },
        { en: "Display", zh: "显示面板", href: `/${locale}/industries/display` },
      ],
    },
    {
      title: { en: "Company", zh: "公司" },
      links: [
        { en: "About", zh: "关于我们", href: `/${locale}/about` },
        { en: "Technology", zh: "技术", href: `/${locale}/technology` },
        { en: "Contact", zh: "联系我们", href: `/${locale}/about` },
      ],
    },
  ];

  const lang = (locale === "zh" ? "zh" : "en") as "en" | "zh";

  return (
    <footer className="bg-navy-500 text-white">
      {/* Top */}
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-bold text-brand-400">
              {t("shortName")}
            </Link>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 space-y-1 text-sm text-gray-400">
              <p>{t("footer.address")}</p>
              <p>{t("footer.email")}</p>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title.en}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title[lang]}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.en}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                    >
                      {link[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {t("company")}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>Dinnar Automatic Intelligence Inc., San Jose, CA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
