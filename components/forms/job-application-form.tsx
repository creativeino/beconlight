"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Field, FormProgress, StepHeading, SubmitButton, SuccessPanel } from "@/components/forms/form-shell";

const steps = ["Position", "Experience", "Referees"];

export function JobApplicationForm() {
  const [step, setStep] = useState(0);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    role: "",
    classes: "",
    subjects: "",
    name: "",
    father: "",
    gender: "",
    marital: "",
    mobile: "",
    email: "",
    address: "",
    nationality: "",
    religion: "",
    cnic: "",
    degree: "",
    institution: "",
    year: "",
    grade: "",
    experience: "",
    capabilities: "",
    activities: "",
    academicRef: "",
    academicRefContact: "",
    personalRef: "",
    personalRefContact: "",
    salary: "",
    declaration: false,
  });

  const update = (key: keyof typeof data, value: string | boolean) =>
    setData((current) => ({ ...current, [key]: value }));

  if (done) {
    return (
      <SuccessPanel
        title="Profile submitted"
        text="Thank you for your interest in Beacon Light Academy. Our HR team will review your profile and contact you if there is a suitable opportunity."
        onReset={() => {
          setDone(false);
          setStep(0);
        }}
      />
    );
  }

  const canContinue =
    step === 0
      ? data.role && data.name && data.email && data.mobile
      : step === 1
        ? data.degree && data.experience
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
              body: JSON.stringify({ type: "job-application", ...data }),
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
            <motion.div key="j-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 1" title="The role & you" text="Tell us what you would like to teach or the position you are applying for." />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Which job are you applying for?" required>
                  <Select value={data.role} onChange={(e) => update("role", e.target.value)} required>
                    <option value="" disabled>Select a role</option>
                    <option>Teaching</option>
                    <option>Lab Incharge</option>
                    <option>Office Work</option>
                    <option>Other</option>
                  </Select>
                </Field>
                <Field label="Which classes would you like to teach?">
                  <Select value={data.classes} onChange={(e) => update("classes", e.target.value)}>
                    <option value="">Select</option>
                    <option>Primary</option>
                    <option>Secondary</option>
                    <option>Higher Secondary</option>
                  </Select>
                </Field>
                <Field label="Subjects applying for" className="sm:col-span-2">
                  <Input value={data.subjects} onChange={(e) => update("subjects", e.target.value)} placeholder="e.g. Physics, Mathematics" />
                </Field>
                <Field label="Full name" required>
                  <Input value={data.name} onChange={(e) => update("name", e.target.value)} required />
                </Field>
                <Field label="Father's name">
                  <Input value={data.father} onChange={(e) => update("father", e.target.value)} />
                </Field>
                <Field label="Gender">
                  <Select value={data.gender} onChange={(e) => update("gender", e.target.value)}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </Field>
                <Field label="Marital status">
                  <Select value={data.marital} onChange={(e) => update("marital", e.target.value)}>
                    <option value="">Select</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widow / Widower</option>
                  </Select>
                </Field>
                <Field label="Mobile number" required>
                  <Input type="tel" value={data.mobile} onChange={(e) => update("mobile", e.target.value)} required />
                </Field>
                <Field label="Email address" required>
                  <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} required />
                </Field>
                <Field label="CNIC / identity card">
                  <Input value={data.cnic} onChange={(e) => update("cnic", e.target.value)} />
                </Field>
                <Field label="Nationality">
                  <Input value={data.nationality} onChange={(e) => update("nationality", e.target.value)} />
                </Field>
                <Field label="Religion">
                  <Input value={data.religion} onChange={(e) => update("religion", e.target.value)} />
                </Field>
                <Field label="Home address" className="sm:col-span-2">
                  <Input value={data.address} onChange={(e) => update("address", e.target.value)} />
                </Field>
              </div>
            </motion.div>
          ) : null}

          {step === 1 ? (
            <motion.div key="j-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 2" title="Education & experience" text="Share your qualifications, teaching experience and strengths." />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Highest degree" required>
                  <Select value={data.degree} onChange={(e) => update("degree", e.target.value)} required>
                    <option value="" disabled>Select</option>
                    <option>Matriculation</option>
                    <option>Intermediate</option>
                    <option>Graduation</option>
                    <option>Post Graduation</option>
                    <option>Other</option>
                  </Select>
                </Field>
                <Field label="University / institution">
                  <Input value={data.institution} onChange={(e) => update("institution", e.target.value)} />
                </Field>
                <Field label="Year of graduation">
                  <Input value={data.year} onChange={(e) => update("year", e.target.value)} placeholder="e.g. 2021" />
                </Field>
                <Field label="Grade / GPA">
                  <Input value={data.grade} onChange={(e) => update("grade", e.target.value)} />
                </Field>
                <Field label="Employment history" required className="sm:col-span-2" hint="Institution, role, duration and reason for leaving.">
                  <Textarea value={data.experience} onChange={(e) => update("experience", e.target.value)} rows={4} required />
                </Field>
                <Field label="Subjects & classes you can teach" className="sm:col-span-2">
                  <Textarea value={data.capabilities} onChange={(e) => update("capabilities", e.target.value)} rows={3} />
                </Field>
                <Field label="Co-curricular interests or activities" className="sm:col-span-2">
                  <Textarea value={data.activities} onChange={(e) => update("activities", e.target.value)} rows={3} />
                </Field>
                
              </div>
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div key="j-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 3" title="Referees & final details" text="Two references help us understand your work and character." />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Academic referee name">
                  <Input value={data.academicRef} onChange={(e) => update("academicRef", e.target.value)} />
                </Field>
                <Field label="Referee contact (address, phone, email)">
                  <Input value={data.academicRefContact} onChange={(e) => update("academicRefContact", e.target.value)} />
                </Field>
                <Field label="Personal referee name">
                  <Input value={data.personalRef} onChange={(e) => update("personalRef", e.target.value)} />
                </Field>
                <Field label="Personal referee contact">
                  <Input value={data.personalRefContact} onChange={(e) => update("personalRefContact", e.target.value)} />
                </Field>
                <Field label="Minimum expected salary (Rs.)">
                  <Input value={data.salary} onChange={(e) => update("salary", e.target.value)} />
                </Field>
                <Field label="Upload resume" hint="PDF or Word document, maximum 10 MB.">
                  <label className="flex h-12 cursor-pointer items-center gap-2 rounded-2xl border border-dashed border-navy/20 bg-cream/50 px-4 text-xs font-semibold text-muted transition-colors hover:border-gold">
                    <Upload className="size-4 text-gold" />
                    Choose a file
                    <input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                  </label>
                </Field>
              </div>

              <label className="mt-5 flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-xs leading-relaxed text-muted">
                <input
                  type="checkbox"
                  checked={data.declaration}
                  onChange={(e) => update("declaration", e.target.checked)}
                  className="mt-0.5 size-4 accent-[#d6a23d]"
                  required
                />
                <span>
                  I confirm that the information provided is true and complete. I understand that
                  any false information may disqualify my application.
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
