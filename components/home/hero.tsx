"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { MdSchool } from "react-icons/md";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";

const slides = [
  {
    src: "/media/images/beacon-light-academy-main-banner1.jpg",
    caption: "The World of World Class Achievers",
  },
  {
    src: "/media/images/beacon-light-banner-4.jpg",
    caption: "Play. Explore. Discover.",
  },
  {
    src: "/media/images/beacon-light-school-maymar-group-image.jpg",
    caption: "One community, six campuses",
  },
  {
    src: "/media/images/international-day-education-futuristic-style.jpg",
    caption: "Preparing for tomorrow, today",
  },
];

const heroStats = [
  { value: 40, suffix: "+", label: "Years of excellence" },
  { value: 4500, suffix: "+", label: "Alumni worldwide" },
  { value: 6, suffix: "", label: "Campuses in Karachi" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % slides.length), 5200);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="grain relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-ink text-white lg:min-h-[calc(100svh-4.5rem)]">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <Image
              src={slides[index].src}
              alt={slides[index].caption}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,162,61,0.24),transparent_42%)]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 size-72 rounded-full bg-navy-3/30 blur-3xl animate-float-slow" />
        <div className="absolute -right-16 bottom-24 size-60 rounded-full bg-gold/15 blur-3xl animate-float" />
        <div className="absolute left-[42%] top-[9%] size-40 rounded-full bg-gold/10 opacity-60 blur-3xl animate-aurora-slow" />
      </div>

      <div className="pointer-events-none absolute right-[7%] top-[16%] hidden size-44 rounded-full border border-dashed border-gold/20 animate-spin-slow lg:block" />
      <div className="pointer-events-none absolute right-[13%] top-[24%] hidden size-24 rounded-full border border-gold/15 animate-spin-slow lg:block" />

      <div className="shell relative flex flex-1 flex-col justify-center pb-10 pt-24 sm:pt-28">
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/60 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold-2 backdrop-blur">
              <MdSchool className="size-3.5 text-gold" />
              Admissions Open · Session 2026–27
            </span>
          </Reveal>

          <TextReveal
            as="h1"
            text="Beacon Light Academy"
            delay={0.08}
            className="display-xl mt-6 max-w-2xl font-display text-[clamp(2.3rem,4.8vw,4.1rem)] font-bold tracking-tight text-white leading-[1.08]"
          />

          <TextReveal
            as="p"
            text="The World of World Class Achievers"
            delay={0.25}
            className="display-xl mt-2.5 max-w-2xl font-display text-[clamp(1.2rem,2.3vw,1.9rem)] font-semibold tracking-tight text-gradient-gold"
          />

          <Reveal delay={0.35}>
            <p className="mt-5 max-w-xl text-[0.92rem] font-normal leading-relaxed text-white/70 sm:text-[1.05rem]">
              A prestigious O & A Levels institution grounded in four decades of academic distinction —
              cultivating intellectual rigor, moral consciousness, and visionary leadership in every student.
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/admissions"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-gold/60 bg-gold px-6 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink shadow-[0_14px_36px_-12px_rgba(201,151,56,0.65)] transition-all hover:gap-3.5 hover:bg-gold-2"
            >
              Apply for 2026–27
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/academics"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur transition-all hover:border-gold/50 hover:bg-white/10"
            >
              Explore Academics
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all hover:border-gold hover:text-gold-2"
            >
              <Play className={`size-3.5 ${paused ? "" : "translate-x-0.5"}`} />
            </button>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-gold/20 pt-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-8 sm:gap-12">
            {heroStats.map((stat) => (
              <div key={stat.label} className="relative pl-4 border-l border-gold/30">
                <p className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-none text-white font-bold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold-3/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}: ${slide.caption}`}
                className="group relative h-1.5 overflow-hidden rounded-full bg-white/20 transition-all"
                style={{ width: slideIndex === index ? "4rem" : "1.75rem" }}
              >
                {slideIndex === index ? (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 rounded-full bg-gold"
                    initial={{ width: paused ? "100%" : "0%" }}
                    animate={{ width: paused ? "100%" : "100%" }}
                    transition={{ duration: paused ? 0 : 5.2, ease: "linear" }}
                  />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
