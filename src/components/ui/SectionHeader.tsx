import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <RevealOnScroll
      className={cn(
        "mb-14 md:mb-20",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? <p className="text-eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-display text-3xl md:text-5xl font-semibold leading-[1.05] text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
