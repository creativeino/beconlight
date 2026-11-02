import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <Reveal>
          <p className={cn("eyebrow", tone === "dark" && "text-gold-2")}>{eyebrow}</p>
        </Reveal>
        <TextReveal
          as="h2"
          text={title}
          delay={0.05}
          className={cn(
            "font-display tracking-tight font-bold text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.12]",
            tone === "dark" ? "text-white" : "text-navy",
          )}
        />
        {description ? (
          <Reveal delay={0.15}>
            <p
              className={cn(
                "mt-5 max-w-xl text-[0.95rem] leading-relaxed sm:text-base",
                tone === "dark" ? "text-white/60" : "text-muted",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>

      {action ? (
        <Reveal delay={0.2}>
          <Link
            href={action.href}
            className={cn(
              "group inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all",
              tone === "dark"
                ? "border-white/20 text-white hover:border-gold hover:bg-gold hover:text-ink"
                : "border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-white",
            )}
          >
            {action.label}
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}
