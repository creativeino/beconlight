import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, FileText } from "lucide-react";
import { admissionDates, admissionSteps } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

const campusForms = [
  {
    title: "Primary Section",
    campus: "Gulshan-e-Maymar",
    detail: "Nursery – Class V",
    href: "/primary-section-gulshan-e-maymar-admission-form",
  },
  {
    title: "Secondary Section",
    campus: "Gulshan-e-Maymar",
    detail: "Classes VI – X",
    href: "/secondary-section-gulshan-e-maymar-admission-form",
  },
  {
    title: "Senior Section (KDA)",
    campus: "Gulzar-e-Hijri",
    detail: "Classes III – VIII",
    href: "/senior-section-gulzar-e-hijri-iii-viii-admission-form",
  },
  {
    title: "Junior Section",
    campus: "Gulshan-e-Iqbal",
    detail: "Nursery, KG, I & II",
    href: "/junior-section-gulshan-e-iqbal-nursery-kg-i-ii-admission-form",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026–27"
        title="Admissions are now open"
        description="Choose your preferred campus, fill the relevant form and our Admissions Department will contact you to arrange an interview and assessment."
        image="/media/images/admission-banner-Beacon-light.jpg"
        alt="Beacon Light Academy admissions"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/admission-form-nursery-ix"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-2"
          >
            Nursery – IX form <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/a-level-registration-form"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
          >
            A-Level registration
          </Link>
        </div>
      </PageHero>

      {/* Important dates */}
      <section className="shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Important dates"
          title="Mark your calendar"
          description="Key dates for Session 2026–27 registration and assessment."
        />
        <Stagger className="mt-9 grid gap-4 md:grid-cols-3">
          {admissionDates.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="grid size-10 place-items-center rounded-full bg-gold/15 text-[#8d651b]">
                  <CalendarDays className="size-5" />
                </span>
                <p className="mt-5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                  {item.day}
                </p>
                <p className="mt-1 font-display text-2xl text-navy">{item.date}</p>
                <p className="mt-2 text-sm text-muted">{item.title}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process */}
      <section className="bg-sand/70 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="How it works"
            title="Four simple steps"
            description="From your first click to your child's first day."
            align="center"
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                  <span className="absolute right-4 top-2 font-display text-[3.5rem] leading-none text-navy/[0.06]">
                    {step.step}
                  </span>
                  <p className="relative text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                    Step {step.step}
                  </p>
                  <h3 className="relative mt-3 font-display text-xl text-navy">{step.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Campus forms */}
      <section className="shell py-16 sm:py-24">
        <SectionHeading
          eyebrow="Choose your campus"
          title="Find the right form"
          description="Select the campus and section that matches your child. Every form opens in a guided three-step flow."
          action={{ label: "Nursery – IX overview", href: "/admission-form-nursery-ix" }}
        />

        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2">
          {campusForms.map((form) => (
            <StaggerItem key={form.href}>
              <Link
                href={form.href}
                className="group flex h-full items-center justify-between gap-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold">
                    {form.campus}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.45rem] text-navy">{form.title}</h3>
                  <p className="mt-1 text-sm text-muted">{form.detail}</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sand text-navy transition-all group-hover:bg-gold group-hover:text-ink">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-6 rounded-3xl border border-navy/10 bg-navy p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-gold-2">
                <FileText className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-xl">A-Level & College registration</h3>
                <p className="mt-1 max-w-xl text-sm text-white/60">
                  Join Beacon Light Academy College for Pearson Edexcel IAL or AKU-EB HSSC-I at
                  Gulshan-e-Maymar.
                </p>
              </div>
            </div>
            <Link
              href="/a-level-registration-form"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-gold px-6 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-2"
            >
              Register <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Why apply */}
      <section className="bg-sky/60 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="After you apply"
            title="What happens next"
            description="Our Admissions Department assesses your form to confirm fulfilment of our admission criteria, then contacts you by call or email."
            align="center"
          />
          <div className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              "Form reviewed by the Admissions Department",
              "Interview and age-appropriate assessment",
              "Confirmation and enrolment formalities",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-navy/10 bg-white p-5">
                  <CheckCircle2 className="size-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25} className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/test-syllabus"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-2"
            >
              Test syllabus <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-navy/15 px-6 text-xs font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Admissions FAQ
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Not sure which campus is right?"
        text="Talk to our admissions team and we will help you choose the best fit for your child."
        href="/contact-form"
        label="Ask us"
      />
    </>
  );
}
