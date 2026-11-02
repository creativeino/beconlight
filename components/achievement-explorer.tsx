"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import type { AchievementSet } from "@/lib/achievements";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function AchievementExplorer({ set }: { set: AchievementSet }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [groupIndex, setGroupIndex] = useState(0);

  const activeGroup = set.groups[Math.min(groupIndex, set.groups.length - 1)];

  const years = useMemo(() => {
    const values = new Set<string>();
    set.groups.forEach((group) => group.rows.forEach((row) => values.add(row.year)));
    return Array.from(values).sort((a, b) => Number(b) - Number(a));
  }, [set]);

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return activeGroup.rows.filter((row) => {
      const matchesQuery =
        !needle ||
        row.name.toLowerCase().includes(needle) ||
        row.subject.toLowerCase().includes(needle) ||
        row.year.includes(needle);
      const matchesYear = !year || row.year === year;
      return matchesQuery && matchesYear;
    });
  }, [activeGroup, query, year]);

  return (
    <div>
      {set.groups.length > 1 ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {set.groups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              onClick={() => setGroupIndex(index)}
              className={`rounded-full px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all ${
                index === groupIndex
                  ? "bg-navy text-white shadow-md"
                  : "border border-navy/12 bg-white text-muted hover:border-gold hover:text-navy"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-[1fr_12rem]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, subject or year…"
            className="pl-11"
            aria-label="Search achievers"
          />
        </div>
        <Select value={year} onChange={(event) => setYear(event.target.value)} aria-label="Filter by year">
          <option value="">All years</option>
          {years.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="whitespace-nowrap px-5 py-4 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold-2">
                  Student
                </th>
                <th className="whitespace-nowrap px-5 py-4 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold-2">
                  Year
                </th>
                <th className="whitespace-nowrap px-5 py-4 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold-2">
                  Subject
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {rows.map((row, index) => (
                  <motion.tr
                    key={`${row.name}-${row.year}-${row.subject}-${index}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`border-t border-navy/8 transition-colors hover:bg-cream ${
                      index % 2 === 1 ? "bg-mist/60" : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-navy">{row.name}</td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-gold">{row.year}</td>
                    <td className="px-5 py-3.5 text-muted">{row.subject}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {rows.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="font-display text-xl text-navy">No matching records</p>
            <p className="mt-2 text-sm text-muted">Try another name, subject or year.</p>
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-xs text-muted">
        Showing {rows.length} of {activeGroup.rows.length} records
        {year ? ` · ${year}` : ""}
        {query ? ` · matching “${query}”` : ""}.
      </p>
    </div>
  );
}
