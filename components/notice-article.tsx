import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Download, FileText } from "lucide-react";
import type { Notice } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function NoticeArticle({
  notice,
  body,
  previous,
  next,
}: {
  notice: Notice;
  body: string[];
  previous?: Notice;
  next?: Notice;
}) {
  return (
    <>
      <section className="shell py-14 sm:py-16">
        <Reveal>
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-sand px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-navy">
                {notice.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-muted">
                <CalendarDays className="size-3.5 text-gold" /> {notice.date}
              </span>
            </div>

            <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-3xl">
              <Image
                src="/media/images/Beacon-light-Academy-Notice-Board.jpg"
                alt="Beacon Light Academy notice board"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>

            <div className="prose-beacon mt-9">
              {body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        {notice.files?.length ? (
          <Reveal className="mx-auto mt-12 w-full max-w-3xl">
            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-display text-2xl text-navy">
                {notice.files.length > 1 ? "Downloads" : "Download"}
              </h2>
              <div className="mt-5 space-y-3">
                {notice.files.map((file) => (
                  <a
                    key={file.href}
                    href={file.href}
                    className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-cream/50 p-4 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                      <FileText className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-navy">{file.label}</span>
                      <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
                        PDF document
                      </span>
                    </span>
                    <Download className="size-4 shrink-0 text-muted transition-colors group-hover:text-gold" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}
      </section>

      <section className="shell pb-16">
        <div className="mx-auto grid w-full max-w-3xl gap-3 border-t border-navy/10 pt-8 sm:grid-cols-2">
          <Link
            href={previous ? `/${previous.slug}` : "/notice-board"}
            className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-gold/40"
          >
            <ArrowLeft className="size-4 shrink-0 text-gold" />
            <span>
              <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-muted">
                Previous
              </span>
              <span className="block truncate text-sm font-semibold text-navy">
                {previous ? previous.title : "All notices"}
              </span>
            </span>
          </Link>
          <Link
            href={next ? `/${next.slug}` : "/notice-board"}
            className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-right transition-all hover:-translate-y-0.5 hover:border-gold/40"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-muted">
                Next
              </span>
              <span className="block truncate text-sm font-semibold text-navy">
                {next ? next.title : "All notices"}
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-gold" />
          </Link>
        </div>
      </section>
    </>
  );
}
