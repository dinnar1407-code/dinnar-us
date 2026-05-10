"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";

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
  // next-intl usePathname returns path WITHOUT locale prefix for both en and zh
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "zh" ? "en" : "zh";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-white/60 backdrop-blur-sm border-white/20"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/images/logo.png" alt="Dinnar" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href as any}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-brand-500 bg-brand-50"
                  : "text-gray-600 hover:text-navy-500 hover:bg-gray-50"
              }`}
            >
              {t(item.key as any)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher — same path, other locale */}
          <Link
            href={pathname as any}
            locale={otherLocale as any}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 text-xs font-semibold text-gray-500 hover:border-brand-500 hover:text-brand-500 transition-all"
          >
            <Globe className="w-3 h-3" />
            {otherLocale.toUpperCase()}
          </Link>

          {/* Contact CTA */}
          <Link
            href="/about"
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
                href={item.href as any}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-500 bg-brand-50"
                    : "text-gray-600 hover:text-navy-500 hover:bg-gray-50"
                }`}
              >
                {t(item.key as any)}
              </Link>
            ))}
            <Link
              href="/about"
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
