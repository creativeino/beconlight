import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { HeroBackdrop } from "@/components/motion/hero-backdrop";
import { cn } from "@/lib/utils";

type Portrait = {
  src: string;
  alt: string;
  name: string;
  role: string;
  position?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  imagePosition,
  portrait,
  meta,
  parent,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  alt: string;
  imagePosition?: string;
  portrait?: Portrait;
  meta?: string;
  parent?: { label: string; href: string };
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-navy text-white">
      {image ? (
        <HeroBackdrop src={image} alt={alt} imagePosition={imagePosition} />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(214,162,61,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-navy-3/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full bg-gold/10 blur-3xl animate-float" />
      {portrait ? (
        <>
          <div className="pointer-events-none absolute -right-24 top-1/4 size-80 rounded-full border border-gold/15" />
          <div className="pointer-events-none absolute -right-10 top-[18%] size-44 rounded-full border border-dashed border-gold/15 animate-spin-slow" />
        </>
      ) : null}

      <div
        className={cn(
          "shell relative flex flex-col",
          portrait
            ? "gap-8 py-12 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-12 lg:py-16"
            : "justify-center pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-14 lg:pt-24",
        )}
      >
        <div className={cn("max-w-4xl", align === "center" && !portrait && "mx-auto text-center")}>
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "mb-3.5 flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/50",
                align === "center" && !portrait && "justify-center",
              )}
            >
              <Link href="/" className="transition-colors hover:text-gold-2">
                Home
              </Link>
              {parent ? (
                <>
                  <ChevronRight className="size-3" />
                  <Link href={parent.href} className="transition-colors hover:text-gold-2">
                    {parent.label}
                  </Link>
                </>
              ) : null}
              <ChevronRight className="size-3" />
              <span className="text-gold-2">{eyebrow}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold-2 backdrop-blur">
              <FaGraduationCap className="size-3 text-gold-2" />
              {eyebrow}
            </span>
          </Reveal>

          <TextReveal
            as="h1"
            text={title}
            delay={0.1}
            className={cn(
              "display-xl mt-4 max-w-3xl text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-white tracking-tight leading-[1.15]",
              align === "center" && !portrait && "mx-auto",
            )}
          />

          <Reveal delay={0.28}>
            <p
              className={cn(
                "mt-3.5 max-w-2xl text-[0.92rem] leading-relaxed text-white/70 sm:text-base",
                align === "center" && !portrait && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>

          {meta ? (
            <Reveal delay={0.34}>
              <p className="mt-5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white/40">
                {meta}
              </p>
            </Reveal>
          ) : null}

          {children ? <Reveal delay={0.4}>{children}</Reveal> : null}

          <div className="mt-6 hidden items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/35 lg:flex">
            <span className="h-px w-14 bg-gold/60" />
            Beacon Light Academy · Since 1986
          </div>
        </div>

        {portrait ? (
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[24rem]">
            <div className="absolute -inset-2.5 rounded-[2rem] border border-gold/25" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-navy-2 shadow-soft">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-cover"
                style={{ objectPosition: portrait.position ?? "50% 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
            <div className="relative mx-4 -mt-11 rounded-2xl border border-gold/20 bg-cream px-5 py-4 shadow-card">
              <p className="font-display text-[1.3rem] leading-tight text-navy">{portrait.name}</p>
              <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-gold">
                {portrait.role}
              </p>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
