"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerChild } from "@/components/motion/reveal";
import type { EventStory } from "@/lib/content";
import { cn } from "@/lib/utils";

export function EventCard({ story, large = false }: { story: EventStory; large?: boolean }) {
  return (
    <motion.article variants={staggerChild} className="h-full">
      <Link
        href={`/${story.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white shadow-[0_18px_50px_-40px_rgba(7,26,47,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-card",
          large && "lg:flex-row",
        )}
      >
        <div className={cn("relative overflow-hidden", large ? "aspect-[4/3] lg:aspect-auto lg:w-[54%]" : "aspect-[4/3]")}>
          <Image
            src={story.image}
            alt={story.title}
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 700px" : "(max-width: 768px) 100vw, 400px"}
            className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-navy backdrop-blur">
            {story.category}
          </span>
        </div>

        <div className={cn("flex flex-1 flex-col justify-between p-6", large && "lg:p-8")}>
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">{story.date}</p>
            <h3 className={cn("mt-3 font-display leading-tight text-navy transition-colors group-hover:text-navy-2", large ? "text-[1.8rem] sm:text-[2.2rem]" : "text-[1.35rem]")}>
              {story.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{story.excerpt}</p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy">
            Read the story
            <span className="grid size-7 place-items-center rounded-full bg-sand transition-all group-hover:bg-gold group-hover:text-ink">
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
