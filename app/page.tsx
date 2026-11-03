import { FaGraduationCap, FaHeart, FaBookOpen, FaFlask, FaTrophy, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Megaphone, Phone } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { AchievementsTabs } from "@/components/home/achievements-tabs";
import { ProgramCard } from "@/components/program-card";
import { EventCard } from "@/components/event-card";
import { NoticeRow } from "@/components/notice-row";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { StaggerItem } from "@/components/stagger-item";
import { Counter } from "@/components/motion/counter";
import { RevealImage } from "@/components/motion/reveal-image";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { TiltCard } from "@/components/motion/tilt-card";
import { LeadershipQuotes } from "@/components/leadership-quotes";
import { stats, campuses, differentiators, events, notices, programmes } from "@/lib/content";

const quickLinks = [
  {
    title: "Nursery – IX",
    subtitle: "Session 2026–27",
    text: "Online admission forms for every campus.",
    href: "/admission-form-nursery-ix",
    image: "/media/images/admission-banner-Beacon-light.jpg",
    cta: "Apply online",
  },
  {
    title: "A Levels",
    subtitle: "Session 2026–27",
    text: "Register with Beacon Light Academy College.",
    href: "/a-level-registration-form",
    image: "/media/images/A-level-banner.jpg",
    cta: "Register now",
  },
  {
    title: "Notice Board",
    subtitle: "Announcements · Book lists",
    text: "Test results, downloads and updates.",
    href: "/notice-board",
    image: "/media/images/Beacon-light-Academy-Notice-Board.jpg",
    cta: "View notices",
  },
];

const news = events.filter((story) => story.featured || story.category !== "Competition").slice(0, 3);
const previewNotices = notices.slice(0, 5);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Welcome */}
      <section id="welcome" className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Welcome to Beacon Light"
              title="An institute that has stood the test of time"
            />
            <Reveal delay={0.1}>
              <div className="prose-beacon mt-6">
                <p>
                  Beacon Light Academy is an O & A Levels school — an institute buoyed by the
                  determination and drive to provide quality education to students, with a
                  complementing team of dedicated and sincere faculty that ensures children do not
                  just gain academic knowledge but also learn how to navigate life with compassion,
                  kindness and morality.
                </p>
                <p>
                  Our aims are supported by modern resources such as science and robotics
                  laboratories, libraries for different levels and multimedia-equipped classrooms.
                  The Academy is a Registered Participating Institution for International GCSE and
                  A Levels in affiliation with Pearson Edexcel International (UK Qualification), and
                  now also offers Matriculation and Intermediate with the Aga Khan University
                  Examination Board.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-navy/15 bg-white p-7 shadow-card">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy" />
                  <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#8d651b]">
                    Vision
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    To excel dynamically in value-based education, utilising the latest resources
                    and methodologies — and in turn provide society an honest, able and dedicated
                    leadership.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-navy/15 bg-white p-7 shadow-card">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-navy to-gold" />
                  <span className="inline-flex rounded-full bg-navy/10 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-navy">
                    Mission
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    To provide, in partnership with parents, a quality education where every
                    individual is cared for spiritually, morally, intellectually, physically,
                    socially and emotionally.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative">
            <RevealImage
              src="/media/images/secondary-beacon-light-school.jpg"
              alt="Students learning together in a Beacon Light Academy classroom"
              sizes="(max-width: 1024px) 100vw, 600px"
              className="aspect-[4/3] rounded-[2rem] shadow-soft"
            />
            <Reveal delay={0.25} className="absolute -bottom-8 -left-4 w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-card sm:-left-10 sm:w-52">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/media/images/beacon-light-school-maymar-group-image.jpg"
                  alt="Students at Gulshan-e-Maymar campus"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.35} className="absolute -right-3 top-6 hidden rounded-2xl bg-navy px-5 py-4 text-white shadow-card sm:block">
              <p className="font-display text-3xl leading-none">
                <Counter value={40} suffix="+" />
              </p>
              <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-gold-2">
                Years since inception
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Admissions & Quick Access */}
      <section className="bg-sky/40 border-y border-navy/10 py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Quick Admissions & Portals"
            title="Essential pathways for students & parents"
            description="Direct registration forms for the 2026–27 academic session alongside official school notices."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <StaggerItem key={link.href}>
                <TiltCard className="h-full" max={5} rounded="rounded-2xl">
                  <Link href={link.href} className="group block h-full">
                    <div className="relative flex h-full min-h-[16rem] flex-col justify-end overflow-hidden rounded-2xl border border-navy/15 bg-navy p-7 text-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_20px_50px_-20px_rgba(241,199,109,0.35)]">
                    <Image
                      src={link.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-35 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-transparent" />
                    <div className="relative">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold-2">
                        {link.subtitle}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">{link.title}</h3>
                      <p className="mt-1.5 text-sm text-white/70">{link.text}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-3 transition-all group-hover:gap-3 group-hover:text-gold-2">
                        {link.cta}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-sand/70 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Our programmes"
            title="A complete pathway, from first steps to launchpad"
            description="Six programmes, one community — each designed for the stage your child is in, and the future they are building toward."
            action={{ label: "All academics", href: "/academics" }}
          />
          <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme, index) => (
              <ProgramCard key={programme.slug} programme={programme} index={index} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats band */}
      <section className="grain relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-24 size-72 rounded-full bg-navy-2/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="shell relative">
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-none text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <div className="mt-4 h-px w-12 bg-gold" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-xs text-white/50">{stat.detail}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What makes us different */}
      <section className="shell py-16 sm:py-24">
        <SectionHeading
          eyebrow="Why Beacon Light"
          title="What makes us different?"
          description="Six commitments that have shaped generations of confident, capable and compassionate learners."
          align="center"
        />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <SpotlightCard className="h-full rounded-3xl">
                <div className="group h-full rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_18px_40px_-38px_rgba(7,26,47,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_24px_50px_-25px_rgba(7,26,47,0.35)]">
                  <span className="grid size-11 place-items-center rounded-2xl bg-navy text-gold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gold group-hover:text-navy group-hover:shadow-md">
                    <DifferentiatorIcon name={item.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.4rem] leading-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Campus life gallery */}
      <section className="shell py-16 sm:py-24">
        <SectionHeading
          eyebrow="Campus life"
          title="A day at Beacon Light"
          description="Carnivals, science festivals, laboratories and classrooms — this is what our community looks like in motion."
          action={{ label: "All events", href: "/events" }}
        />

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13rem]">
          {[
            {
              src: "/media/images/Grand-Carnival.jpg",
              alt: "Students and families at the Beacon Light Academy carnival",
              category: "Community",
              title: "Carnival Festival",
              className: "sm:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto lg:h-full",
            },
            {
              src: "/media/images/Spark-Sphere-event-Beacon.jpg",
              alt: "Young researchers at the Science Spark Sphere festival",
              category: "Festival",
              title: "Science Spark Sphere",
              className: "sm:col-span-2 aspect-[16/10] lg:aspect-auto",
            },
            {
              src: "/media/images/primary-beacon-light-school.jpg",
              alt: "Pre-primary children learning through play",
              category: "Pre-Primary",
              title: "Learning through play",
              className: "aspect-[4/3] lg:aspect-auto",
            },
            {
              src: "/media/images/O-Level-beacon-light.jpg",
              alt: "O Level students working in the science laboratory",
              category: "O Levels",
              title: "Inside our laboratories",
              className: "aspect-[4/3] lg:aspect-auto",
            },
          ].map((shot, index) => (
            <StaggerItem key={shot.src} hFull={false} className={shot.className}>
              <figure className="group relative h-full overflow-hidden rounded-[1.5rem] bg-navy">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-gold-2">
                      {shot.category}
                    </p>
                    <p className="mt-1.5 font-display text-xl leading-tight text-white">
                      {shot.title}
                    </p>
                  </div>
                  <ArrowRight className="mb-1 size-4 shrink-0 -translate-x-2 text-white/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-gold-2" />
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Achievements */}
      <section className="relative overflow-hidden bg-cream border-y border-navy/10 py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-sky/40 blur-3xl" />
        <div className="shell relative">
          <SectionHeading
            eyebrow="Achievements"
            title="Toppers, year after year"
            description="Beacon Light Academy students have placed among the highest achievers in their subjects — regionally, nationally and around the world."
            action={{ label: "All achievements", href: "/achievements" }}
            tone="light"
          />
          <div className="mt-10">
            <AchievementsTabs />
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="shell py-16 sm:py-24">
        <SectionHeading
          eyebrow="Words of wisdom"
          title="The voices that keep us going"
          description="From our founding father to our principal — the belief that shapes every classroom."
        />
        <LeadershipQuotes />
      </section>

      {/* Latest news */}
      <section className="bg-sand/70 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Latest news & events"
            title="Stories from campus"
            description="Competitions, festivals and student voices from across our community."
            action={{ label: "All events", href: "/events" }}
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {news.map((story) => (
              <EventCard key={story.slug} story={story} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* Notices */}
      <section className="shell py-16 sm:py-24">
        <SectionHeading
          eyebrow="Notice board"
          title="Results, downloads & announcements"
          action={{ label: "All notices", href: "/notice-board" }}
        />
        <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-3xl border border-navy/10 bg-white px-4 shadow-card sm:px-6">
          {previewNotices.map((notice, index) => (
            <NoticeRow key={notice.slug} notice={notice} index={index} />
          ))}
        </Reveal>
        <Reveal delay={0.2} className="mt-6 flex justify-center">
          <Link
            href="/notice-board"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-navy/15 px-7 text-xs font-bold uppercase tracking-[0.14em] text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
          >
            <Megaphone className="size-4" />
            Visit the notice board
          </Link>
        </Reveal>
      </section>

      {/* Branch contacts */}
      <section className="bg-sky/60 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Branch contacts"
            title="Find your campus"
            description="Three campuses, one standard of care. Reach the head of section directly."
            action={{ label: "Full directory", href: "/contact" }}
          />
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {campuses.map((campus) => (
              <StaggerItem key={campus.name}>
                <SpotlightCard className="h-full rounded-3xl">
                <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-gold">
                    {campus.area}
                  </p>
                  <h3 className="mt-2 font-display text-[1.4rem] leading-tight text-navy">
                    {campus.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    {campus.classes}
                  </p>

                  <div className="mt-5 space-y-2.5 border-t border-navy/8 pt-5">
                    {campus.people.slice(0, 2).map((person) => (
                      <div key={person.name}>
                        <p className="text-sm font-semibold text-navy">{person.name}</p>
                        <p className="text-[0.7rem] text-muted">{person.role}</p>
                        {person.phone ? (
                          <a
                            href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                            className="mt-1 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-navy-2 transition-colors hover:text-gold"
                          >
                            <Phone className="size-3" /> {person.phone}
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {campus.phone ? (
                      <a
                        href={`tel:${campus.phone.replace(/[^\d+]/g, "")}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-gold"
                      >
                        <Phone className="size-3" /> Call
                      </a>
                    ) : null}
                    {campus.formHref ? (
                      <Link
                        href={campus.formHref}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-navy-2"
                      >
                        Admission form <ArrowRight className="size-3" />
                      </Link>
                    ) : null}
                  </div>
                </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function DifferentiatorIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    graduation: <FaGraduationCap className="size-5 text-current transition-colors" />,
    heart: <FaHeart className="size-5 text-current transition-colors" />,
    bookOpen: <FaBookOpen className="size-5 text-current transition-colors" />,
    flask: <FaFlask className="size-5 text-current transition-colors" />,
    trophy: <FaTrophy className="size-5 text-current transition-colors" />,
    shield: <FaShieldAlt className="size-5 text-current transition-colors" />,
  };
  return icons[name] ?? <FaBookOpen className="size-5 text-current transition-colors" />;
}
