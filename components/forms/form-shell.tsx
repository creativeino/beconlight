"use client";

import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function FormProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-navy/10">
        <motion.div
          className="h-full rounded-full bg-gold"
          initial={false}
          animate={{ width: `${((step + 1) / total) * 100}%` }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
        {step + 1} / {total}
      </span>
    </div>
  );
}

export function SuccessPanel({
  title,
  text,
  onReset,
}: {
  title: string;
  text: string;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[28rem] flex-col items-center justify-center rounded-3xl border border-navy/10 bg-white px-6 py-12 text-center shadow-card"
    >
      <span className="relative grid size-16 place-items-center rounded-full bg-gold/15">
        <span className="absolute inset-0 animate-pulse-ring rounded-full border border-gold/40" />
        <Check className="size-7 text-gold" />
      </span>
      <h3 className="mt-6 font-display text-3xl text-navy">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{text}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 rounded-full border border-navy/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-white"
      >
        Submit another response
      </button>
    </motion.div>
  );
}

export function SubmitButton({
  pending,
  children,
  className,
}: {
  pending: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-navy-2 disabled:opacity-60",
        className,
      )}
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : null}
      {children}
    </button>
  );
}

export function Field({
  label,
  required,
  hint,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="flex items-center gap-1 text-[0.78rem] font-semibold text-navy">
        {label}
        {required ? <span className="text-gold">*</span> : null}
      </span>
      {children}
      {hint ? <span className="block text-[0.68rem] text-muted">{hint}</span> : null}
    </label>
  );
}

export function StepHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-7">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl text-navy">{title}</h3>
      {text ? <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{text}</p> : null}
    </div>
  );
}
