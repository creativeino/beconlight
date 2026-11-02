import Link from "next/link";
import { ArrowUpRight, CalendarDays, Download } from "lucide-react";
import type { Notice } from "@/lib/content";
import { cn } from "@/lib/utils";

export function NoticeRow({ notice, index }: { notice: Notice; index: number }) {
  return (
    <Link
      href={`/${notice.slug}`}
      className="group grid gap-3 border-b border-navy/10 py-5 transition-colors hover:bg-cream/60 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:px-3"
    >
      <span className="hidden text-[0.62rem] font-bold tracking-[0.16em] text-gold sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sand px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-navy">
            {notice.category}
          </span>
          {notice.urgent ? (
            <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#8d651b]">
              Latest
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1 text-[0.62rem] text-muted">
            <CalendarDays className="size-3" /> {notice.date}
          </span>
        </div>
        <h3 className="mt-2 font-display text-lg leading-snug text-navy transition-colors group-hover:text-navy-2">
          {notice.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{notice.excerpt}</p>
      </div>
      <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted">
        {notice.files?.length ? (
          <span className="inline-flex items-center gap-1">
            <Download className="size-3.5" /> {notice.files.length} file{notice.files.length > 1 ? "s" : ""}
          </span>
        ) : null}
        <span className={cn("grid size-8 place-items-center rounded-full bg-sand text-navy transition-all group-hover:bg-gold group-hover:text-ink")}>
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
