import Link from "next/link";
import { ArrowUpRight, BookOpen, FileCheck2, Route } from "lucide-react";
import { programmes } from "@/lib/content";
import { ProgramCard } from "@/components/program-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

const pathway = [
  { stage: "Nursery & KG", label: "Pre-Primary", href: "/pre-primary" },
  { stage: "Classes I–VI", label: "Primary", href: "/primary" },
  { stage: "Classes VI–X", label: "Secondary", href: "/secondary" },
  { stage: "Classes IX–X", label: "O Levels", href: "/o-levels" },
  { stage: "AS & A2", label: "A Levels", href: "/a-levels" },
];

const resources = [
  {
    title: "Book lists 2026–27",
    text: "Downloads for every grade, from Nursery to Grade 11, including IGCSE and AKU-EB streams.",
    href: "/book-list-of-class-nursery-till-11-session-2025-26",
    icon: BookOpen,
  },
  {
    title: "Test syllabus",
    text: "Prepare your child for the admission test with the official syllabus for KG through Class 9.",
    href: "/test-syllabus",
    icon: FileCheck2,
  },
  {
    title: "The College (BLAC)",
    text: "A Levels and Intermediate at Gulshan-e-Maymar, with university guidance built in.",
    href: "/college",
    icon: Route,
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A pathway for every ambition"
        description="From a child's first classroom to independent A-Level thinking — six programmes, two examination boards and four decades of results."
        image="/media/images/international-day-education-futuristic-style.jpg"
        alt="Students learning at Beacon Light Academy"
      />

      <section className="shell py-16 sm:py-24">
        <SectionHeading
          eyebrow="Our programmes"
          title="Choose the stage. We will build the rest."
          description="Every programme shares the same DNA: expert teaching, continuous feedback, modern facilities and a genuine care for the whole child."
        />
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme, index) => (
            <ProgramCard key={programme.slug} programme={programme} index={index} />
          ))}
        </Stagger>
      </section>

      <section className="bg-sand/70 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="The journey"
            title="One continuous pathway"
            description="Your child can begin with us in Nursery and stay with us all the way to university applications."
            align="center"
          />

          <div className="relative mt-12">
            <div className="absolute left-6 top-0 h-full w-px bg-navy/15 sm:left-1/2 sm:h-px sm:w-full sm:-translate-x-1/2" />
            <div className="space-y-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:space-y-0">
              {pathway.map((step, index) => (
                <Reveal key={step.label} delay={index * 0.07} className="relative">
                  <Link
                    href={step.href}
                    className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50 sm:flex-col sm:text-center"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-[0.6rem] font-bold text-gold-2 transition-colors group-hover:bg-gold group-hover:text-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-gold">
                        {step.stage}
                      </span>
                      <span className="mt-0.5 block font-display text-lg text-navy">{step.label}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <SectionHeading eyebrow="Resources" title="Everything you need to get ready" />
        <Stagger className="mt-9 grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <StaggerItem key={resource.href}>
              <Link
                href={resource.href}
                className="group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-sand text-navy transition-colors group-hover:bg-gold group-hover:text-ink">
                  <resource.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-[1.4rem] text-navy">{resource.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{resource.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy">
                  Open <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaSection
        title="See learning in action"
        text="Book a campus visit and sit in on what a Beacon Light classroom really feels like."
        href="/contact"
        label="Arrange a visit"
      />
    </>
  );
}
