import { Download, FileText, Layers } from "lucide-react";
import { bookLists } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

export default function BookListPage() {
  return (
    <>
      <PageHero
        eyebrow="Book lists · Session 2026–27"
        title="Book lists, Nursery to Grade 11"
        description="Every required book list for the current session — BLA, IGCSE and AKU-EB streams — available as instant PDF downloads."
        image="/media/images/secondary-beacon-light-school.jpg"
        alt="Beacon Light Academy students"
      />

      <section className="shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Downloads"
          title="Choose your class"
          description="Tap any list to download the PDF. Printed copies are also available at every campus."
        />

        <Reveal delay={0.1} className="mt-5 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-navy">
            <Layers className="size-3.5 text-gold" /> {bookLists.length} book lists
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-navy">
            <FileText className="size-3.5 text-gold" /> PDF documents
          </span>
        </Reveal>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bookLists.map((item) => (
            <StaggerItem key={item.href + item.label}>
              <a
                href={item.href}
                className="group flex h-full items-center gap-4 rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_16px_40px_-36px_rgba(7,26,47,0.5)] transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-card"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                  <FileText className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-navy">{item.label}</span>
                  <span className="block truncate text-[0.7rem] text-muted">{item.detail}</span>
                </span>
                <Download className="size-4 shrink-0 text-muted transition-colors group-hover:text-gold" />
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaSection
        title="Looking for the admission test syllabus?"
        text="Prepare your child with the official syllabus for KG through Class 9."
        href="/test-syllabus"
        label="View syllabus"
      />
    </>
  );
}
