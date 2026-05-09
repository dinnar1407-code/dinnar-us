"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { industries } from "@/content/industries";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

export function Industries({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("industries");
  const tc = useTranslations("common");

  return (
    <section id="industries" className={showHeader ? "container-page py-24 md:py-32" : "container-page pb-24"}>
      {showHeader ? (
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <RevealOnScroll key={ind.slug} delay={idx * 0.05}>
              <TiltCard className="group h-full">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="card-surface relative block h-full overflow-hidden p-6 transition hover:border-white/15"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={ind.image}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-6 flex items-start gap-3">
                    <Icon className="mt-0.5 text-accent-300" size={22} />
                    <div className="flex-1">
                      <h3 className="text-display text-xl font-semibold text-white">
                        {t(`${ind.slug}.title` as "electron.title")}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {t(`${ind.slug}.summary` as "electron.summary")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300">
                    {tc("viewIndustry")} <ArrowUpRight size={14} />
                  </div>
                </Link>
              </TiltCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
