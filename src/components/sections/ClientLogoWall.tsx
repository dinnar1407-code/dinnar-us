"use client";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const LOGOS = [
  "Fortune 500 Consumer Electronics Leader",
  "Global Leading EV Manufacturer",
  "Global Top Battery Manufacturer",
  "Global Display & Devices Leader",
  "Global Display Technology Leader",
  "Leading Display Panel Manufacturer",
  "Leading Telecom & Devices OEM",
  "Top Consumer Electronics OEM",
  "Tier-1 Mobile OEM",
  "Global Tier-1 Automotive Supplier",
  "Top EV & Battery Manufacturer",
  "Global Semiconductor Manufacturing Leader",
];

export function ClientLogoWall() {
  const t = useTranslations("about");

  return (
    <section className="relative isolate py-24 md:py-28">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-20" />
      <div className="container-page">
        <SectionHeader
          title="Trusted by industry leaders"
          align="center"
        />
        <RevealOnScroll>
          <p className="mx-auto mb-14 max-w-2xl text-center text-sm text-white/45">
            Deployed across the world&apos;s most demanding production environments.
            All customer identities are confidential.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-5">
          {LOGOS.map((name, idx) => (
            <RevealOnScroll key={name} delay={idx * 0.03}>
              <div className="card-surface group px-5 py-3 text-xs font-mono uppercase tracking-wider text-white/35 transition hover:text-white/60 hover:border-white/10 cursor-default">
                {name}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
