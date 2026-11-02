import Link from "next/link";
import { ArrowRight, Award, Globe, Map, Mountain, Trophy } from "lucide-react";
import { achievementSets, achievementHighlights } from "@/lib/achievements";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  World: Globe,
  Pakistan: Trophy,
  Province: Map,
  Asia: Mountain,
  "All records": Award,
  "A Levels": Award,
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="A roll of honour, decade after decade"
        description="Regional, countrywide and worldwide subject toppers — the proof of what great teaching and great families can do together."
        image="/media/images/beacon-Accomplishment.jpg"
        alt="Beacon Light Academy achievements"
      />

      <section className="shell py-14 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievementHighlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.07}>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 text-center shadow-card">
                <p className="font-display text-[clamp(2.2rem,4vw,3rem)] leading-none text-navy">
                  {item.value}
                </p>
                <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHeading
          eyebrow="Browse by scope"
          title="Explore the records"
          description="Every list is searchable by name, subject and year."
          className="mt-16"
        />

        <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievementSets.map((set) => {
            const Icon = icons[set.scope] ?? Award;
            const count = set.groups.reduce((total, group) => total + group.rows.length, 0);
            return (
              <StaggerItem key={set.slug}>
                <Link
                  href={`/${set.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-navy text-gold-2 transition-colors group-hover:bg-gold group-hover:text-ink">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-sand px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-navy">
                      {count} records
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.45rem] leading-tight text-navy">
                    {set.shortTitle}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{set.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy">
                    View list
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <CtaSection
        title="Results start with the right school"
        text="Join a community that has produced world, country and province toppers for four decades."
        href="/admissions"
        label="Apply for 2026–27"
      />
    </>
  );
}
