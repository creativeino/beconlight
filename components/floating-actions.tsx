"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setVisible(latest > 600));

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-center gap-3">
      <AnimatePresence>
        {visible ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-navy/10 bg-white/90 text-navy shadow-soft backdrop-blur transition-colors hover:bg-white"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href={`https://wa.me/92${site.whatsapp.replace(/[^\d]/g, "").replace(/^0/, "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Beacon Light Academy on WhatsApp"
        className="group relative grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_-14px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-pulse-ring" />
        <MessageCircle className="relative size-5" />
      </a>
    </div>
  );
}
