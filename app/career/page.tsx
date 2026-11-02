import Link from "next/link";
import { ArrowRight, HeartHandshake, Mail, Users } from "lucide-react";
import { careerTracks } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

const whyJoin = [
  "Teaching is a noble profession with the power to transform lives and make a genuine difference.",
  "At Beacon Light Academy, teachers cultivate strong bonds with students, imparting knowledge as well as life lessons with lasting impact.",
  "Every application goes through a rigorous process with strict scrutiny. Every applicant has an equal opportunity — we do not discriminate.",
  "Applicants are evaluated on merit, experience and communication / language skills.",
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Teach. Lead. Grow with us."
        description="Securing a place at Beacon Light Academy is competitive — but for the right people, it is also the start of something meaningful."
        image="/media/images/beacon-light-academy-main-banner1.jpg"
        alt="Careers at Beacon Light Academy"
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Open applications"
              title="Where you could fit in"
              description="We welcome applications across teaching and non-teaching roles on all campuses."
            />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {careerTracks.map((track) => (
                <StaggerItem key={track.title}>
                  <Link
                    href="/job-application-form"
                    className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden rounded-3xl bg-navy p-5 text-white shadow-card"
                  >
                    <span
                      className="absolute inset-0 bg-cover bg-center opacity-55 transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${track.image})` }}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                    <span className="relative">
                      <span className="block font-display text-xl">{track.title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-white/65">
                        {track.text}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-gold-2">
                        Apply <ArrowRight className="size-3.5" />
                      </span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card sm:p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-sand text-navy">
                  <HeartHandshake className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-navy">Why join our team?</h3>
                <ul className="mt-4 space-y-3">
                  {whyJoin.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-4 rounded-3xl border border-navy/10 bg-navy p-6 text-white sm:p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-gold-2">
                  <Mail className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl">Send us your CV</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Walk into your nearest campus, or email us with your name and the position you
                  are applying for in the subject line.
                </p>
                <a
                  href={`mailto:${site.hrEmail}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-2"
                >
                  <Mail className="size-4" /> {site.hrEmail}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="grid size-11 place-items-center rounded-2xl bg-sand text-navy">
                  <Users className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-navy">How to apply</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Complete the job application form with your personal, educational and employment
                  history. It takes about ten minutes.
                </p>
                <Link
                  href="/job-application-form"
                  className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-2"
                >
                  Start application <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        title="Not the right role today?"
        text="Submit your profile anyway — we keep applications on file when opportunities open up."
        href="/job-application-form"
        label="Submit profile"
      />
    </>
  );
}
