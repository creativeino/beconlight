"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/motion/tilt-card";
import { staggerChild } from "@/components/motion/reveal";
import type { Programme } from "@/lib/content";

export function ProgramCard({ programme, index }: { programme: Programme; index: number }) {
  return (
    <motion.div variants={staggerChild} className="h-full">
      <Link
        href={`/${programme.slug}`}
        className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-2xl border border-navy/20 bg-navy p-7 text-white shadow-card transition-all duration-300 hover:border-gold/60 hover:shadow-glow"
      >
        <Image
          src={programme.image}
          alt={`${programme.name} at Beacon Light Academy`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-2 to-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-[0.7rem] font-display font-bold text-gold-2 backdrop-blur transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold-2">
            {programme.classes}
          </p>
          <h3 className="mt-2 font-display text-[1.75rem] font-bold leading-tight text-white">{programme.name}</h3>
          <p className="mt-1.5 text-sm text-white/70">{programme.tagline}</p>

          <div className="mt-4 grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-1.5 pb-1">
                {programme.focus.slice(0, 3).map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.62rem] text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold-3/80">
              {programme.board}
            </span>
            <span className="grid size-8 place-items-center rounded-full border border-gold/30 bg-white/10 transition-all group-hover:bg-gold group-hover:text-ink">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
