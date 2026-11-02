import { events } from "@/lib/content";
import { EventCard } from "@/components/event-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Stagger } from "@/components/motion/reveal";

export default function EventsPage() {
  const [featured, ...rest] = events;

  return (
    <>
      <PageHero
        eyebrow="Events & News"
        title="Stories from campus"
        description="Festivals, competitions, student reflections and college reviews — the moments that make Beacon Light feel like home."
        image="/media/images/Grand-Carnival.jpg"
        alt="Beacon Light Academy events"
      />

      <section className="shell py-14 sm:py-20">
        {featured ? (
          <div className="mb-6">
            <EventCard story={featured} large />
          </div>
        ) : null}

        <SectionHeading
          eyebrow="More stories"
          title="Latest from the community"
          action={{ label: "Notice board", href: "/notice-board" }}
        />

        <Stagger className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((story) => (
            <EventCard key={story.slug} story={story} />
          ))}
        </Stagger>
      </section>

      <CtaSection
        title="Be part of the next story"
        text="From carnivals to competitions, there is always something happening at Beacon Light."
        href="/admissions"
        label="Join us"
      />
    </>
  );
}
