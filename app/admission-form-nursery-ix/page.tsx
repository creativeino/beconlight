import Link from "next/link";
import { ArrowUpRight, FileText, MapPin } from "lucide-react";
import { campuses } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

const formLinks = [
  {
    title: "Gulshan-e-Maymar",
    detail: "Primary Section · Nursery – Class V",
    href: "/primary-section-gulshan-e-maymar-admission-form",
  },
  {
    title: "Gulshan-e-Maymar",
    detail: "Secondary Section · Classes VI – X",
    href: "/secondary-section-gulshan-e-maymar-admission-form",
  },
  {
    title: "Gulzar-e-Hijri (KDA)",
    detail: "Senior Section · Classes III – VIII",
    href: "/senior-section-gulzar-e-hijri-iii-viii-admission-form",
  },
  {
    title: "Gulshan-e-Iqbal",
    detail: "Junior Section · Nursery, KG, I & II",
    href: "/junior-section-gulshan-e-iqbal-nursery-kg-i-ii-admission-form",
  },
];

export default function AdmissionFormNurseryIxPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions · Nursery to IX"
        title="Choose your preferred campus"
        description="Register your child for the upcoming admission test using the relevant online form below. You can also collect a registration form from any campus."
        image="/media/images/beacon-light-academy-main-banner1.jpg"
        alt="Beacon Light Academy students"
        parent={{ label: "Admissions", href: "/admissions" }}
      />

      <section className="shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Campus forms"
          title="Pick the right section"
          description="Each form opens a guided three-step flow — student details, parent details and review."
          align="center"
        />

        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2">
          {formLinks.map((form) => (
            <StaggerItem key={form.href}>
              <Link
                href={form.href}
                className="group flex h-full items-center justify-between gap-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold">
                    {form.title}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.4rem] text-navy">{form.detail}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy">
                    Fill the form <FileText className="size-3.5" />
                  </span>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sand text-navy transition-all group-hover:bg-gold group-hover:text-ink">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10">
          <div className="rounded-3xl border border-navy/10 bg-sand/70 p-6 sm:p-8">
            <p className="eyebrow">Also available</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">
                <h3 className="font-display text-lg text-navy">A-Level registration</h3>
                <p className="mt-1 text-sm text-muted">
                  For Pearson Edexcel IAL or AKU-EB HSSC-I at Gulshan-e-Maymar.
                </p>
                <Link
                  href="/a-level-registration-form"
                  className="mt-3 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
                >
                  Register <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <h3 className="font-display text-lg text-navy">Test syllabus</h3>
                <p className="mt-1 text-sm text-muted">
                  Official admission test syllabus for KG through Class 9.
                </p>
                <Link
                  href="/test-syllabus"
                  className="mt-3 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-navy hover:text-gold"
                >
                  Download <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {campuses.map((campus) => (
            <Reveal key={campus.name} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-5 shadow-card">
                <p className="flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-gold">
                  <MapPin className="size-3" /> {campus.area}
                </p>
                <h3 className="mt-2 font-display text-lg text-navy">{campus.name}</h3>
                <p className="mt-1 text-xs text-muted">{campus.classes}</p>
                {campus.phone ? (
                  <a
                    href={`tel:${campus.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-auto pt-4 text-sm font-semibold text-navy-2 hover:text-gold"
                  >
                    {campus.phone}
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Not sure which campus to choose?"
        text="Tell us your child's age and area — our admissions desk will point you in the right direction."
        href="/contact-form"
        label="Ask admissions"
      />
    </>
  );
}
