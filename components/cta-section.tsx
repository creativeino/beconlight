import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { RevealImage } from "@/components/motion/reveal-image";

export function CtaSection({
  title = "Your child's next chapter starts here",
  text = "Admissions for Session 2026–27 are open across our campuses. Talk to our team, book a visit or apply online today.",
  href = "/admissions",
  label = "Apply now",
  image = "/media/images/admission-banner-Beacon-light.jpg",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
  image?: string;
}) {
  return (
    <section className="shell py-16 sm:py-20">
      <div className="grain relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16">
        <RevealImage
          src={image}
          alt=""
          sizes="(max-width: 768px) 100vw, 1200px"
          className="absolute inset-0"
          imageClassName="opacity-20"
          parallax={6}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/45" />
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-24 left-1/3 size-64 rounded-full bg-navy-3/25 blur-3xl animate-aurora" />

        <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-gold-2">Join the community</p>
            </Reveal>
            <TextReveal
              as="h2"
              text={title}
              className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4.4vw,3.6rem)] font-bold tracking-tight text-white leading-tight"
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">{text}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={href}
              className="group shine inline-flex h-13 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink transition-all hover:gap-3 hover:bg-gold-2"
            >
              {label}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-13 items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" />
              Contact us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
