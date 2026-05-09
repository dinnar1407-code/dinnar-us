import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const tc = useTranslations("common");
  const tn = useTranslations("nav");
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-white/5 bg-ink-950">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-300 to-signal-500 text-ink-950 font-display font-bold">
              D
            </span>
            <span className="text-display text-lg font-semibold tracking-tight">
              Dinnar
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/55 leading-relaxed">
            {tc("footer.tagline")}
          </p>
          <p className="mt-6 text-xs font-mono uppercase tracking-wider text-white/40">
            {tc("company")}
          </p>
          <p className="mt-1 text-xs text-white/40">{tc("footer.address")}</p>
          <p className="mt-1 text-xs text-white/40">{tc("footer.email")}</p>
        </div>

        <nav className="text-sm">
          <p className="text-eyebrow mb-3">Site</p>
          <ul className="space-y-2">
            {["industries", "products", "technology", "about"].map((k) => (
              <li key={k}>
                <Link href={`/${k}`} className="text-white/65 hover:text-white">
                  {tn(k as "industries" | "products" | "technology" | "about")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="text-sm">
          <p className="text-eyebrow mb-3">Contact</p>
          <ul className="space-y-2 text-white/65">
            <li>{tc("footer.email")}</li>
            <li>{tc("city")}</li>
          </ul>
        </nav>
      </div>
      <div className="container-page border-t border-white/5 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/40">
        <p>© {year} {tc("company")}. {tc("footer.rights")}</p>
        <p className="font-mono uppercase tracking-wider">DNAI · Lights-Out Platform</p>
      </div>
    </footer>
  );
}
