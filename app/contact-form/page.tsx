import { ContactForm } from "@/components/forms/contact-form";
import { FormAside } from "@/components/form-aside";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export default function ContactFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact form"
        title="We would love to hear from you"
        description="If you have any comments, complaints or suggestions, please fill out this form and we will get in touch with you shortly."
        image="/media/images/beacon-contact-form.jpg"
        alt="Contact Beacon Light Academy"
        parent={{ label: "Contact", href: "/contact" }}
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.12}>
            <FormAside
              title="Talk to a human"
              text="Prefer to call or message? Our team is happy to help with admissions, fees, academics and general enquiries."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
