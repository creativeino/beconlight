import { BookOpen, Mail } from "lucide-react";
import { ALevelRegistrationForm } from "@/components/forms/a-level-registration-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

const subjects = [
  "Urdu",
  "Physics",
  "Information Technology",
  "Chemistry",
  "Biology",
  "Mathematics",
  "Business Studies",
  "Accounting",
  "Economics",
  "Psychology",
];

export default function ALevelRegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions · A-Level registration"
        title="Register with Beacon Light Academy College"
        description="Registrations are open for Session 2026–27 at Gulshan-e-Maymar. Complete the form and our team will book your interview."
        image="/media/images/A-level-banner.jpg"
        alt="A Level registration"
        parent={{ label: "Admissions", href: "/admissions" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4">
                <Mail className="size-4 shrink-0 text-[#8d651b]" />
                <p className="text-sm text-[#7a5718]">
                  To book your interview slot directly, email{" "}
                  <a
                    href="mailto:college@beaconlightacademy.edu.pk"
                    className="font-bold underline decoration-gold underline-offset-4"
                  >
                    college@beaconlightacademy.edu.pk
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ALevelRegistrationForm />
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="grid size-11 place-items-center rounded-2xl bg-sand text-navy">
                  <BookOpen className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl text-navy">Subjects offered</h3>
                <p className="mt-1 text-xs text-muted">Pearson Edexcel International A Level</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-cream px-3 py-1.5 text-[0.65rem] font-semibold text-navy ring-1 ring-navy/8"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <FormAside
                title="College admissions desk"
                text="A2 classes commence 6 August 2026; AS & HSSC-I classes commence 10 August 2026."
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="What happens next" title="After you register" />
          <Stagger className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Form review", text: "Our team reviews your academic record and subject choices." },
              { title: "Interview", text: "We schedule a campus interview to understand your goals." },
              { title: "Enrolment", text: "Confirmation, fee formalities and your seat at BLAC." },
            ].map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                  <span className="text-[0.6rem] font-bold tracking-[0.16em] text-gold">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
