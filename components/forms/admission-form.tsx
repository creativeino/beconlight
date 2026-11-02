"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Field, FormProgress, StepHeading, SubmitButton, SuccessPanel } from "@/components/forms/form-shell";

const steps = ["Student", "Parent / guardian", "Review"];

export function AdmissionForm({
  campus,
  classes = "Nursery – Class IX",
}: {
  campus: string;
  classes?: string;
}) {
  const [step, setStep] = useState(0);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    student: "",
    dob: "",
    classApplying: "",
    previousSchool: "",
    parent: "",
    relationship: "Father",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    message: "",
    declaration: false,
  });

  if (done) {
    return (
      <SuccessPanel
        title="Application submitted"
        text={`Thank you. Our ${campus} admissions team will review your details and contact you to arrange the assessment and interview.`}
        onReset={() => {
          setDone(false);
          setStep(0);
        }}
      />
    );
  }

  const canContinue =
    step === 0
      ? data.student && data.dob && data.classApplying
      : step === 1
        ? data.parent && data.email && data.phone
        : data.declaration;

  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
      <FormProgress step={step} total={steps.length} />

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (step < steps.length - 1) {
            if (canContinue) setStep((current) => current + 1);
            return;
          }
          setPending(true);
          try {
            await fetch("/api/forms", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ type: "admission", campus, ...data }),
            });
            setDone(true);
          } finally {
            setPending(false);
          }
        }}
        className="mt-7"
      >
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepHeading
                eyebrow="Step 1"
                title="Tell us about your child"
                text={`Applying to ${campus} · ${classes}`}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Student's full name" required className="sm:col-span-2">
                  <Input value={data.student} onChange={(e) => setData({ ...data, student: e.target.value })} required placeholder="As per B-form" />
                </Field>
                <Field label="Date of birth" required>
                  <Input type="date" value={data.dob} onChange={(e) => setData({ ...data, dob: e.target.value })} required />
                </Field>
                <Field label="Class applying for" required>
                  <Select value={data.classApplying} onChange={(e) => setData({ ...data, classApplying: e.target.value })} required>
                    <option value="" disabled>Select a class</option>
                    {["Nursery", "Kindergarten", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Previous school" className="sm:col-span-2">
                  <Input value={data.previousSchool} onChange={(e) => setData({ ...data, previousSchool: e.target.value })} placeholder="If applicable" />
                </Field>
              </div>
            </motion.div>
          ) : null}

          {step === 1 ? (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepHeading
                eyebrow="Step 2"
                title="Parent or guardian details"
                text="We will use these details to contact you about the assessment and interview."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Parent / guardian name" required>
                  <Input value={data.parent} onChange={(e) => setData({ ...data, parent: e.target.value })} required />
                </Field>
                <Field label="Relationship" required>
                  <Select value={data.relationship} onChange={(e) => setData({ ...data, relationship: e.target.value })}>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Guardian</option>
                  </Select>
                </Field>
                <Field label="Email address" required>
                  <Input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
                </Field>
                <Field label="Mobile number" required>
                  <Input type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} required placeholder="03xx-xxxxxxx" />
                </Field>
                <Field label="CNIC / B-form">
                  <Input value={data.cnic} onChange={(e) => setData({ ...data, cnic: e.target.value })} />
                </Field>
                <Field label="Home address" className="sm:col-span-2">
                  <Input value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                </Field>
                <Field label="Anything we should know?" className="sm:col-span-2">
                  <Textarea value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} rows={4} />
                </Field>
              </div>
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StepHeading eyebrow="Step 3" title="Review your application" text="Please check the details before submitting." />
              <dl className="grid gap-3 rounded-2xl border border-navy/10 bg-cream/60 p-5 sm:grid-cols-2">
                {[
                  ["Campus", campus],
                  ["Student", data.student],
                  ["Date of birth", data.dob],
                  ["Class", data.classApplying],
                  ["Parent", data.parent],
                  ["Email", data.email],
                  ["Phone", data.phone],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-navy">{value || "—"}</dd>
                  </div>
                ))}
              </dl>

              <label className="mt-5 flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-xs leading-relaxed text-muted">
                <input
                  type="checkbox"
                  checked={data.declaration}
                  onChange={(e) => setData({ ...data, declaration: e.target.checked })}
                  className="mt-0.5 size-4 accent-[#d6a23d]"
                  required
                />
                <span>
                  I confirm that the information provided is accurate and I agree to comply with
                  the school&apos;s admission requirements and rules.
                </span>
              </label>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-7 flex items-center justify-between gap-3 border-t border-navy/10 pt-5">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            disabled={step === 0}
            className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-navy/5 disabled:invisible"
          >
            <ArrowLeft className="size-4" /> Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="submit"
              disabled={!canContinue}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-2 disabled:opacity-40"
            >
              Continue <ArrowRight className="size-4" />
            </button>
          ) : (
            <SubmitButton pending={pending}>
              Submit application <ArrowRight className="size-4" />
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}
