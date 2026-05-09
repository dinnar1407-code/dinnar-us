"use client";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" },
  { href: "/industries", key: "industries" },
  { href: "/products", key: "products" },
  { href: "/technology", key: "technology" },
  { href: "/about", key: "about" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale = locale === "en" ? "zh" : "en";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-ink-950/70 border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent-300 to-signal-500 text-ink-950 font-display font-bold">
            D
          </span>
          <span className="text-display text-base font-semibold tracking-tight">
            Dinnar
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                pathname === item.href
                  ? "text-white bg-white/10"
                  : "text-white/65 hover:text-white hover:bg-white/5",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href={pathname}
            locale={otherLocale}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white hover:border-white/20"
          >
            <Globe size={14} />
            {otherLocale === "en" ? "EN" : "中"}
          </Link>
          <Link href="/#contact" className="btn-primary">
            {tc("contactUs")}
          </Link>
        </div>

        <button
          aria-label="menu"
          className="md:hidden rounded-md p-2 text-white/80"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur">
          <div className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-white/80 hover:bg-white/5"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href={pathname}
              locale={otherLocale}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-mono uppercase tracking-wider text-accent-300 hover:bg-white/5"
            >
              {otherLocale === "en" ? "Switch to English" : "切换到中文"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
