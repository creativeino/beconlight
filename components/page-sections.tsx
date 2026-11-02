"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, FileText, Sparkles } from "lucide-react";
import type { PageSection } from "@/lib/pages";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PageSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {sections.map((section, index) => {
        if (section.type === "prose") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-3xl">
              {section.title ? (
                <h2 className="display-xl mb-6 text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">
                  {section.title}
                </h2>
              ) : null}
              <div className="prose-beacon">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          );
        }

        if (section.type === "cards") {
          return (
            <div key={index} className="mx-auto w-full max-w-6xl">
              {section.title ? (
                <Reveal>
                  <h2 className="display-xl text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">{section.title}</h2>
                  {section.intro ? <p className="mt-4 max-w-2xl text-muted">{section.intro}</p> : null}
                </Reveal>
              ) : null}
              <Stagger className={cn("mt-8 grid gap-4 sm:gap-5", section.columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3")}>
                {section.items.map((item) => {
                  const body = (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        {item.tag ? (
                          <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                            {item.tag}
                          </span>
                        ) : (
                          <Sparkles className="size-4 text-gold" />
                        )}
                        {item.href ? (
                          <ArrowUpRight className="size-4 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                        ) : null}
                      </div>
                      <h3 className="mt-5 font-display text-[1.45rem] leading-tight text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                    </>
                  );

                  return (
                    <motion.div key={item.title} variants={staggerChild}>
                      {item.href ? (
                        <SmartLink
                          href={item.href}
                          className="group flex h-full flex-col rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_18px_40px_-34px_rgba(7,26,47,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
                        >
                          {body}
                        </SmartLink>
                      ) : (
                        <div className="group flex h-full flex-col rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_18px_40px_-34px_rgba(7,26,47,0.45)]">
                          {body}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </Stagger>
            </div>
          );
        }

        if (section.type === "list") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-3xl">
              {section.title ? (
                <h2 className="display-xl text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">{section.title}</h2>
              ) : null}
              {section.intro ? <p className="mt-4 text-muted">{section.intro}</p> : null}
              {section.ordered ? (
                <ol className="mt-8 space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-4 rounded-2xl border border-navy/8 bg-white/70 p-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-gold-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-muted">{item}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="mt-8 space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      <p className="text-[0.95rem] leading-relaxed text-muted">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          );
        }

        if (section.type === "table") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-6xl">
              {section.title ? (
                <h2 className="display-xl text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">{section.title}</h2>
              ) : null}
              {section.intro ? <p className="mt-4 max-w-2xl text-muted">{section.intro}</p> : null}
              <div className="mt-8 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[36rem] text-left text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        {section.columns.map((column) => (
                          <th key={column} className="whitespace-nowrap px-5 py-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold-2">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={cn("border-t border-navy/8 transition-colors hover:bg-cream", rowIndex % 2 === 1 && "bg-mist/60")}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={cn("px-5 py-3.5 text-muted", cellIndex === 0 && "font-semibold text-navy")}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          );
        }

        if (section.type === "files") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-5xl">
              {section.title ? (
                <h2 className="display-xl text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">{section.title}</h2>
              ) : null}
              {section.intro ? <p className="mt-4 text-muted">{section.intro}</p> : null}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {section.items.map((file) => (
                  <a
                    key={file.href + file.label}
                    href={file.href}
                    className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-card"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sand text-navy transition-colors group-hover:bg-gold group-hover:text-ink">
                      <FileText className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-navy">{file.label}</span>
                      <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                        {file.meta ?? "PDF download"}
                      </span>
                    </span>
                    <Download className="size-4 shrink-0 text-muted transition-colors group-hover:text-gold" />
                  </a>
                ))}
              </div>
            </Reveal>
          );
        }

        if (section.type === "quote") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-4xl">
              <figure className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-sand via-cream to-white px-7 py-12 sm:px-12">
                <span className="pointer-events-none absolute -left-2 -top-8 font-display text-[10rem] leading-none text-gold/15">
                  &ldquo;
                </span>
                <blockquote className="relative font-display text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.4] text-navy">
                  {section.text}
                </blockquote>
                {section.name || section.role ? (
                  <figcaption className="relative mt-6 flex items-center gap-3">
                    <span className="h-px w-10 bg-gold" />
                    <span>
                      {section.name ? <span className="block text-sm font-bold text-navy">{section.name}</span> : null}
                      {section.role ? <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted">{section.role}</span> : null}
                    </span>
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          );
        }

        if (section.type === "faq") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-3xl">
              {section.title ? (
                <h2 className="display-xl text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">{section.title}</h2>
              ) : null}
              <div className="mt-8 rounded-3xl border border-navy/10 bg-white px-6 shadow-card sm:px-8">
                <Accordion type="single" collapsible>
                  {section.items.map((item, i) => (
                    <AccordionItem key={item.q} value={`item-${i}`} className="last:border-0">
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          );
        }

        if (section.type === "subjects") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-4xl">
              {section.title ? (
                <h2 className="display-xl text-[clamp(1.85rem,3.4vw,2.7rem)] text-ink">{section.title}</h2>
              ) : null}
              {section.intro ? <p className="mt-4 text-muted">{section.intro}</p> : null}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {section.items.map((subject, i) => (
                  <div
                    key={subject}
                    className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 transition-all hover:border-gold/50 hover:bg-cream"
                  >
                    <span className="text-[0.62rem] font-bold tracking-[0.14em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-navy">{subject}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        }

        if (section.type === "image") {
          return (
            <Reveal key={index} className="mx-auto w-full max-w-5xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
                <Image src={section.src} alt={section.alt} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
              </div>
              {section.caption ? <p className="mt-3 text-center text-xs text-muted">{section.caption}</p> : null}
            </Reveal>
          );
        }

        return (
          <Reveal key={index} className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-12 text-white sm:px-12">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h2 className="display-xl text-[clamp(1.7rem,3vw,2.4rem)] text-white">{section.title}</h2>
                  <p className="mt-3 text-sm text-white/60">{section.text}</p>
                </div>
                <SmartLink
                  href={section.href}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink transition-all hover:gap-3 hover:bg-gold-2"
                >
                  {section.label}
                  <ArrowRight className="size-4" />
                </SmartLink>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
