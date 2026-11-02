import Link from "next/link";
import { Download, FileText, GraduationCap } from "lucide-react";
import { syllabi } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

export default function TestSyllabusPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions · Test syllabus"
        title="Prepare for the admission test"
        description="Official syllabus for the Beacon Light Academy admission test, class by class, for Session 2026–27."
        image="/media/images/secondary-beacon-light-school.jpg"
        alt="Beacon Light Academy"
      />

      <section className="shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Session 2026–27"
          title="Download your class syllabus"
          description="Prepare with confidence — the syllabus tells you exactly what the assessment covers."
        />

        <Reveal delay={0.1} className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-navy">
            <GraduationCap className="size-3.5 text-gold" /> {syllabi.length} class syllabi
          </span>
        </Reveal>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {syllabi.map((item) => (
            <StaggerItem key={item.href}>
              <a
                href={item.href}
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-[0_16px_40px_-36px_rgba(7,26,47,0.5)] transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-sand text-navy transition-colors group-hover:bg-gold group-hover:text-ink">
                  <FileText className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-lg text-navy">{item.label}</span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-muted">
                    <Download className="size-3" /> Download
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-10 rounded-3xl border border-navy/10 bg-navy p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl">Need the book list too?</h3>
              <p className="mt-1 max-w-xl text-sm text-white/60">
                Book lists for every class and stream are available for download as well.
              </p>
            </div>
            <Link
              href="/book-list-of-class-nursery-till-11-session-2025-26"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-gold px-6 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-2"
            >
              Book lists <Download className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaSection
        title="Ready to register?"
        text="Choose your campus and complete the online admission form in minutes."
        href="/admissions"
        label="Start application"
      />
    </>
  );
}
