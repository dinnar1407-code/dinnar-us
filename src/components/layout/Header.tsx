"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { key: "home", href: "/" },
  { key: "industries", href: "/industries" },
  { key: "products", href: "/products" },
  { key: "technology", href: "/technology" },
  { key: "about", href: "/about" },
];

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentLocale = pathname.startsWith("/zh") ? "zh" : "en";
  const otherLocale = currentLocale === "zh" ? "en" : "zh";
  const otherPath = pathname.replace(/^\/(zh|en)/, `/${otherLocale}`);

  function isActive(href: string) {
    const p = `/${currentLocale}${href === "/" ? "" : href}`;
    if (href === "/") return pathname === p || pathname === `/${currentLocale}`;
    return pathname.startsWith(p);
  }

  function getHref(itemHref: string) {
    return itemHref === "/" ? `/${currentLocale}` : `/${currentLocale}${itemHref}`;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-page flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center gap-2 flex-shrink-0">
          <img src="/images/logo.png" alt="Dinnar" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getHref(item.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-brand-500 bg-brand-50"
                  : "text-gray-600 hover:text-navy-500 hover:bg-gray-50"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Lang switcher */}
          <Link
            href={otherPath}
            className="text-xs font-medium text-gray-400 hover:text-brand-500 transition-colors uppercase"
          >
            {otherLocale}
          </Link>

          {/* Contact CTA */}
          <Link
            href={`/${currentLocale}/about`}
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
          >
            {tc("contactUs")}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600 hover:text-navy-500"
            aria-label={tc("menu")}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={getHref(item.href)}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-500 bg-brand-50"
                    : "text-gray-600 hover:text-navy-500 hover:bg-gray-50"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href={`/${currentLocale}/about`}
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
            >
              {tc("contactUs")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
