import { AdmissionForm } from "@/components/forms/admission-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export default function SeniorSectionGulzarFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission form · Senior section"
        title="Gulzar-e-Hijri (KDA) — Admission Form"
        description="Register your child for the upcoming admission test at our KDA Housing Society campus, Scheme 33."
        image="/media/images/AKU-Board.jpg"
        alt="Gulzar-e-Hijri campus"
        parent={{ label: "Admissions", href: "/admissions" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <AdmissionForm campus="Gulzar-e-Hijri (KDA)" classes="Classes III – VIII" />
          </Reveal>
          <Reveal delay={0.12}>
            <FormAside
              title="KDA campus admissions"
              text="The KDA campus serves primary and lower secondary classes. Forms can also be collected on site."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
