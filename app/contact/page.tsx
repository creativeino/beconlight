import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { campuses } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the right person, first time"
        description="Campus heads, department contacts and accounts — plus a direct line to our admissions desk."
        image="/media/images/beacon-contact-form.jpg"
        alt="Contact Beacon Light Academy"
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Phone, label: "Main switchboard", value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
            { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: site.whatsapp,
              href: `https://wa.me/92${site.whatsapp.replace(/[^\d]/g, "").replace(/^0/, "")}`,
            },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 0.07}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full items-center gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-navy text-gold-2 transition-colors group-hover:bg-gold group-hover:text-ink">
                  <item.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-navy">{item.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <SectionHeading
          eyebrow="Campus directory"
          title="Branch contacts"
          description="Find the head of section for your child's class and reach them directly."
          className="mt-16"
        />

        <Stagger className="mt-9 space-y-4">
          {campuses.map((campus) => (
            <StaggerItem key={campus.name}>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-navy/8 pb-5">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold">
                      {campus.area}
                    </p>
                    <h3 className="mt-1.5 font-display text-[1.6rem] text-navy">{campus.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                      {campus.classes}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {campus.phone ? (
                      <a
                        href={`tel:${campus.phone.replace(/[^\d+]/g, "")}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-sand px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-gold"
                      >
                        <Phone className="size-3" /> {campus.phone}
                      </a>
                    ) : null}
                    {campus.formHref ? (
                      <a
                        href={campus.formHref}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-navy-2"
                      >
                        Admission form
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {campus.people.map((person) => (
                    <div key={person.name} className="rounded-2xl bg-cream/70 p-4">
                      <p className="text-sm font-bold text-navy">{person.name}</p>
                      <p className="mt-0.5 text-[0.72rem] text-muted">{person.role}</p>
                      {person.email ? (
                        <a
                          href={`mailto:${person.email}`}
                          className="mt-2 flex items-center gap-1.5 break-all text-[0.72rem] font-semibold text-navy-2 transition-colors hover:text-gold"
                        >
                          <Mail className="size-3 shrink-0" /> {person.email}
                        </a>
                      ) : null}
                      {person.phone ? (
                        <a
                          href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                          className="mt-1 flex items-center gap-1.5 text-[0.72rem] font-semibold text-navy-2 transition-colors hover:text-gold"
                        >
                          <Phone className="size-3" /> {person.phone}
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>

                {campus.address ? (
                  <p className="mt-5 flex items-start gap-2 text-xs text-muted">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold" /> {campus.address}
                  </p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-navy p-6 text-white">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold-2">
              Accounts department
            </p>
            <a
              href="mailto:accounts@beaconlightacademy.edu.pk"
              className="mt-3 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gold-2"
            >
              <Mail className="size-4" /> accounts@beaconlightacademy.edu.pk
            </a>
            <a
              href="tel:+922134969179"
              className="mt-2 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gold-2"
            >
              <Phone className="size-4" /> 021-34969179
            </a>
            <a
              href="https://wa.me/923343219836"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gold-2"
            >
              <MessageCircle className="size-4" /> WhatsApp 0334-3219836
            </a>
          </div>

          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold">
              Prefer a form?
            </p>
            <h3 className="mt-3 font-display text-xl text-navy">Write to us instead</h3>
            <p className="mt-2 text-sm text-muted">
              Comments, complaints or suggestions — we would love to hear from you and will get in
              touch shortly.
            </p>
            <Link
              href="/contact-form"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-2"
            >
              Open contact form
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
