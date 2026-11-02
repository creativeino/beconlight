"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!email) return;
        setDone(true);
      }}
      className="relative"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className="h-12 w-full rounded-full border border-white/15 bg-white/10 px-5 pr-14 text-sm text-white placeholder:text-white/45 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/15"
      />
      <button
        type="submit"
        aria-label="Subscribe to the newsletter"
        className="absolute right-1.5 top-1.5 grid size-9 place-items-center rounded-full bg-gold text-ink transition-colors hover:bg-gold-2"
      >
        {done ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
      </button>
      {done ? (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-gold-2"
        >
          Thank you — we&apos;ll keep you posted.
        </motion.p>
      ) : null}
    </form>
  );
}
