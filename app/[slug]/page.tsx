import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPage, pages } from "@/lib/pages";
import { achievementSets, getAchievementSet } from "@/lib/achievements";
import { notices } from "@/lib/content";
import { noticeBodies } from "@/lib/notice-bodies";
import { PageHero } from "@/components/page-hero";
import { PageSections } from "@/components/page-sections";
import { CtaSection } from "@/components/cta-section";
import { AchievementExplorer } from "@/components/achievement-explorer";
import { NoticeArticle } from "@/components/notice-article";
import { Reveal } from "@/components/motion/reveal";

type Params = { slug: string };

export function generateStaticParams() {
  const pageParams = Object.keys(pages).map((slug) => ({ slug }));
  const achievementParams = achievementSets.map((set) => ({ slug: set.slug }));
  const noticeParams = notices.map((notice) => ({ slug: notice.slug }));
  return [...pageParams, ...achievementParams, ...noticeParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const page = getPage(slug);
  if (page) {
    return {
      title: page.title,
      description: page.description,
      openGraph: { title: page.title, description: page.description, images: [page.heroImage] },
    };
  }

  const achievement = getAchievementSet(slug);
  if (achievement) {
    return { title: achievement.title, description: achievement.description };
  }

  const notice = notices.find((item) => item.slug === slug);
  if (notice) {
    return { title: notice.title, description: notice.excerpt };
  }

  return { title: "Page not found" };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const page = getPage(slug);
  if (page) {
    return (
      <>
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          image={page.heroImage}
          alt={page.heroAlt}
          imagePosition={page.heroImagePosition}
          portrait={page.portrait}
          meta={page.meta}
          parent={page.parent}
        />

        <section className="shell py-14 sm:py-20">
          <PageSections sections={page.sections} />
        </section>

        {page.related?.length ? (
          <section className="shell pb-16">
            <div className="rounded-[2rem] border border-navy/10 bg-white p-7 shadow-card sm:p-9">
              <p className="eyebrow">Keep exploring</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {page.related.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className="group rounded-2xl border border-navy/10 bg-cream/60 p-5 transition-all hover:-translate-y-1 hover:border-gold/50 hover:bg-white"
                  >
                    <span className="flex items-center justify-between gap-3 text-sm font-bold text-navy">
                      {item.label}
                      <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
                    </span>
                    {item.text ? <span className="mt-1.5 block text-xs text-muted">{item.text}</span> : null}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CtaSection />
      </>
    );
  }

  const achievement = getAchievementSet(slug);
  if (achievement) {
    const index = achievementSets.findIndex((set) => set.slug === achievement.slug);
    const previous = index > 0 ? achievementSets[index - 1] : undefined;
    const next = index < achievementSets.length - 1 ? achievementSets[index + 1] : undefined;

    return (
      <>
        <PageHero
          eyebrow={`${achievement.scope} · High achievers`}
          title={achievement.title}
          description={achievement.description}
          image="/media/images/beacon-Accomplishment.jpg"
          alt="Beacon Light Academy achievements"
          parent={{ label: "Achievements", href: "/achievements" }}
        />

        <section className="shell py-14 sm:py-20">
          <Reveal>
            <AchievementExplorer set={achievement} />
          </Reveal>

          <div className="mt-12 grid gap-3 border-t border-navy/10 pt-8 sm:grid-cols-2">
            <Link
              href={previous ? `/${previous.slug}` : "/achievements"}
              className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-gold/40"
            >
              <span>
                <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-muted">
                  Previous
                </span>
                <span className="block truncate text-sm font-semibold text-navy">
                  {previous ? previous.shortTitle : "All achievements"}
                </span>
              </span>
            </Link>
            <Link
              href={next ? `/${next.slug}` : "/achievements"}
              className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-right transition-all hover:-translate-y-0.5 hover:border-gold/40"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-muted">
                  Next
                </span>
                <span className="block truncate text-sm font-semibold text-navy">
                  {next ? next.shortTitle : "All achievements"}
                </span>
              </span>
            </Link>
          </div>
        </section>

        <CtaSection
          title="Add your name to the honour roll"
          text="Great results begin with great teaching, great families and a great school. Join us for Session 2026–27."
          href="/admissions"
          label="Apply now"
        />
      </>
    );
  }

  const noticeIndex = notices.findIndex((item) => item.slug === slug);
  if (noticeIndex >= 0) {
    const notice = notices[noticeIndex];
    const body = noticeBodies[notice.slug] ?? [notice.excerpt];
    const previous = noticeIndex > 0 ? notices[noticeIndex - 1] : undefined;
    const next = noticeIndex < notices.length - 1 ? notices[noticeIndex + 1] : undefined;

    return (
      <>
        <PageHero
          eyebrow={`${notice.category} · ${notice.date}`}
          title={notice.title}
          description={notice.excerpt}
          image="/media/images/Beacon-light-Academy-Notice-Board.jpg"
          alt="Beacon Light Academy notice board"
          parent={{ label: "Notice Board", href: "/notice-board" }}
        />
        <NoticeArticle notice={notice} body={body} previous={previous} next={next} />
        <CtaSection
          title="Need a hand with admissions?"
          text="Our team can walk you through forms, test dates and campus choices."
          href="/contact-form"
          label="Ask a question"
        />
      </>
    );
  }

  notFound();
}
