import { AdmissionForm } from "@/components/forms/admission-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export default function SecondarySectionMaymarFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission form · Secondary"
        title="Gulshan-e-Maymar — Secondary Section"
        description="Beacon Light Academy, registered with Edexcel Examination Board, Pearson, UK & AKU-EB. Registration & admission form to be completed by parent/guardian."
        image="/media/images/secondary-Beacon-light.jpg"
        alt="Secondary section students"
        parent={{ label: "Admissions", href: "/admissions" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <AdmissionForm campus="Gulshan-e-Maymar (Secondary Section)" classes="Classes VI – X" />
          </Reveal>
          <Reveal delay={0.12}>
            <FormAside
              title="Secondary admissions"
              text="Choose O Levels or AKU-EB after Class VIII — our team can help you compare the two pathways."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
