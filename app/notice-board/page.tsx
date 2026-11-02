import Link from "next/link";
import { BookOpen, Download } from "lucide-react";
import { notices } from "@/lib/content";
import { NoticeSearch } from "@/components/notice-search";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export default function NoticeBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Notice Board"
        title="Announcements, results & downloads"
        description="Admission test results, book lists, session notices and government announcements — all in one place."
        image="/media/images/secondary-beacon-light-school.jpg"
        alt="Beacon Light Academy notice board"
      />

      <section className="shell py-14 sm:py-20">
        <Reveal>
          <NoticeSearch notices={notices} />
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <div className="grid gap-4 rounded-3xl border border-navy/10 bg-navy p-6 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-gold-2">
                <BookOpen className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-2xl">Book lists for Session 2026–27</h2>
                <p className="mt-1 max-w-xl text-sm text-white/60">
                  Every book list from Nursery to Grade 11 — IGCSE, AKU-EB and BLA streams —
                  available as instant downloads.
                </p>
              </div>
            </div>
            <Link
              href="/book-list-of-class-nursery-till-11-session-2025-26"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-gold px-6 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-2"
            >
              <Download className="size-4" /> Book lists
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
