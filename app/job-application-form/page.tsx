import { ArrowRight, FileUp, Users } from "lucide-react";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";

export default function JobApplicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Job application"
        title="Submit your profile"
        description="If you wish to apply for a position at Beacon Light Academy, please fill out this form and we will get in touch with you shortly."
        image="/media/images/beacon-light-banner-4.jpg"
        alt="Careers at Beacon Light Academy"
        parent={{ label: "Career", href: "/career" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <JobApplicationForm />
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="grid size-11 place-items-center rounded-2xl bg-sand text-navy">
                  <FileUp className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl text-navy">Before you begin</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  <li>• Keep your CV / resume ready (PDF or Word, max 10 MB).</li>
                  <li>• Have your educational records and employment history at hand.</li>
                  <li>• Passport-size photograph, max 2 MB, if available.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="rounded-3xl border border-navy/10 bg-navy p-6 text-white">
                <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-gold-2">
                  <Users className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl">Prefer to email?</h3>
                <p className="mt-2 text-sm text-white/60">
                  Send your CV with your name and the position in the subject line.
                </p>
                <Link
                  href="/career"
                  className="mt-4 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-2 transition-colors hover:text-white"
                >
                  Career details <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <FormAside
                title="HR & Recruitment"
                text="Beacon Light Academy · Gulshan-e-Iqbal, Gulzar-e-Hijri and Gulshan-e-Maymar campuses."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
