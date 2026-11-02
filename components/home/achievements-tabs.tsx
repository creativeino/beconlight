"use client";

import Link from "next/link";
import { ArrowUpRight, Award, Globe, Medal, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { achievementSets } from "@/lib/achievements";

const featured = [
  { slug: "high-achiever-top-in-the-world", icon: Globe },
  { slug: "list-of-high-achievers-top-in-pakistan", icon: Trophy },
  { slug: "list-of-high-achievers-top-in-province", icon: Medal },
];

export function AchievementsTabs() {
  const sets = featured
    .map((item) => {
      const data = achievementSets.find((set) => set.slug === item.slug);
      return data ? { ...data, icon: item.icon } : null;
    })
    .filter((set): set is NonNullable<typeof set> => Boolean(set));

  return (
    <Tabs defaultValue={sets[0].slug} className="w-full">
      {/* Pill Switcher */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TabsList className="h-auto flex-wrap gap-2 rounded-2xl border border-navy/15 bg-white p-1.5 shadow-sm">
          {sets.map((set) => {
            const Icon = set.icon;
            return (
              <TabsTrigger
                key={set.slug}
                value={set.slug}
                className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-muted transition-all data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Icon className="size-3.5 text-gold" />
                {set.shortTitle}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <span className="text-xs font-semibold text-muted">
          Showing official Cambridge & Pearson Edexcel distinction holders
        </span>
      </div>

      {sets.map((set) => {
        const rows = set.groups.flatMap((group) => group.rows);

        return (
          <TabsContent key={set.slug} value={set.slug} className="mt-6">
            <div className="overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-card">
              {/* Table header bar */}
              <div className="flex items-center justify-between border-b border-navy/10 bg-sand/40 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-gold" />
                  <span className="font-display text-sm font-bold text-navy">
                    {set.title}
                  </span>
                </div>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#8d651b]">
                  {rows.length} Achievers Recorded
                </span>
              </div>

              {/* Table Body */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <thead>
                    <tr className="border-b border-navy/10 bg-mist/60 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy">
                      <th className="px-6 py-3.5">#</th>
                      <th className="px-6 py-3.5">Student Name</th>
                      <th className="px-6 py-3.5">Session / Year</th>
                      <th className="px-6 py-3.5">Distinction Subject</th>
                      <th className="px-6 py-3.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    {rows.slice(0, 10).map((row, index) => (
                      <tr
                        key={`${row.name}-${index}`}
                        className="transition-colors hover:bg-sky/30"
                      >
                        <td className="px-6 py-4 font-mono text-xs text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </td>
                        <td className="px-6 py-4 font-display font-bold text-navy">
                          {row.name}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-lg bg-sand px-2.5 py-1 font-mono text-xs font-semibold text-navy">
                            {row.year}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-medium text-navy-2">
                          {row.subject}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#8d651b]">
                            Verified
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="flex flex-col gap-3 border-t border-navy/10 bg-mist/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-medium text-muted">
                  Showing top 10 records of <strong>{rows.length}</strong> total {set.shortTitle.toLowerCase()} achievers
                </p>
                <Link
                  href={`/${set.slug}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-navy-2"
                >
                  <span>View All {rows.length} Records</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
