"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Notice } from "@/lib/content";
import { NoticeRow } from "@/components/notice-row";
import { Input } from "@/components/ui/input";

export function NoticeSearch({ notices }: { notices: Notice[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const values = new Set<string>();
    notices.forEach((notice) => values.add(notice.category));
    return ["All", ...Array.from(values)];
  }, [notices]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return notices.filter((notice) => {
      const matchesCategory = category === "All" || notice.category === category;
      const matchesQuery =
        !needle ||
        notice.title.toLowerCase().includes(needle) ||
        notice.excerpt.toLowerCase().includes(needle) ||
        notice.date.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [notices, query, category]);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search notices, results and announcements…"
            className="pl-11"
            aria-label="Search notices"
          />
        </div>
        <div className="hide-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:max-w-[50%]">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] transition-all ${
                item === category
                  ? "bg-navy text-white"
                  : "border border-navy/12 bg-white text-muted hover:border-gold hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-navy/10 bg-white px-4 shadow-card sm:px-6">
        {filtered.length ? (
          filtered.map((notice, index) => <NoticeRow key={notice.slug} notice={notice} index={index} />)
        ) : (
          <div className="px-4 py-16 text-center">
            <p className="font-display text-2xl text-navy">Nothing found</p>
            <p className="mt-2 text-sm text-muted">Try a different search term or category.</p>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-muted">
        Showing {filtered.length} of {notices.length} notices.
      </p>
    </div>
  );
}
