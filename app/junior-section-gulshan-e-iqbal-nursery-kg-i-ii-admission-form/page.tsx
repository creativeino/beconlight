import { AdmissionForm } from "@/components/forms/admission-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export default function JuniorSectionIqbalFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission form · Junior section"
        title="Gulshan-e-Iqbal — Nursery, KG, I & II"
        description="Register your child for the upcoming admission test at our Block 7 campus, Gulshan-e-Iqbal."
        image="/media/images/primary-beacon-light-school.jpg"
        alt="Junior section students"
        parent={{ label: "Admissions", href: "/admissions" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <AdmissionForm
              campus="Gulshan-e-Iqbal (Junior Section)"
              classes="Nursery, KG, Class I & II"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <FormAside
              title="Junior section admissions"
              text="Our junior campus is home to the Pre-Primary and Junior Primary years — the gentlest start to school life."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
