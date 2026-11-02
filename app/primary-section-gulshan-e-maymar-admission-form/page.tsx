import { AdmissionForm } from "@/components/forms/admission-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export default function PrimarySectionMaymarFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission form · Primary"
        title="Gulshan-e-Maymar — Primary Section"
        description="Register your child for the upcoming admission test. You may also collect a physical form from any Beacon Light Academy campus."
        image="/media/images/primary-beacon-light-school.jpg"
        alt="Primary section students"
        parent={{ label: "Admissions", href: "/admissions" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <AdmissionForm campus="Gulshan-e-Maymar (Primary Section)" classes="Nursery – Class V" />
          </Reveal>
          <Reveal delay={0.12}>
            <FormAside
              title="Primary admissions"
              text="Please ensure all provided information is accurate. Our team will contact you to confirm the assessment schedule."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
