"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Field, StepHeading, SubmitButton, SuccessPanel } from "@/components/forms/form-shell";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <SuccessPanel
        title="Message received"
        text="Thank you for reaching out. Our team will get in touch with you shortly."
        onReset={() => setDone(false)}
      />
    );
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setPending(true);
        try {
          await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(form))),
          });
          setDone(true);
        } finally {
          setPending(false);
        }
      }}
      className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card sm:p-8"
    >
      <StepHeading
        eyebrow="Contact form"
        title="How can we help?"
        text="Share a comment, concern or suggestion. We will route your message to the right campus."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <Input name="name" autoComplete="name" required placeholder="Your full name" />
        </Field>
        <Field label="Email address" required>
          <Input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </Field>
        <Field label="Phone number">
          <Input name="phone" type="tel" autoComplete="tel" placeholder="03xx-xxxxxxx" />
        </Field>
        <Field label="What is this about?" required>
          <Select name="topic" required defaultValue="">
            <option value="" disabled>Select a topic</option>
            <option>Admissions</option>
            <option>Fees & accounts</option>
            <option>Academics</option>
            <option>Transport</option>
            <option>Careers</option>
            <option>General enquiry</option>
          </Select>
        </Field>
        <Field label="Your message" required className="sm:col-span-2">
          <Textarea name="message" required rows={5} placeholder="Tell us what you would like help with…" />
        </Field>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-xs text-[0.68rem] leading-relaxed text-muted">
          By submitting, you agree to be contacted about your enquiry.
        </p>
        <SubmitButton pending={pending}>
          Send message <ArrowRight className="size-4" />
        </SubmitButton>
      </div>
    </form>
  );
}
