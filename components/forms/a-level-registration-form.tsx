"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Field, FormProgress, StepHeading, SubmitButton, SuccessPanel } from "@/components/forms/form-shell";

const steps = ["Student", "Academic record", "Parents", "Review"];

const ialSubjects = [
  "Urdu",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Information Technology",
  "Biology",
  "Business",
  "Accounting",
  "Economics",
  "Psychology",
];

const skills = [
  "Debating / Public Speaking",
  "Creative / Content Writing",
  "Athletics",
  "Social Media Marketing",
  "Graphic Designing",
  "Photography / Film Making",
  "Journalism",
];

export function ALevelRegistrationForm() {
  const [step, setStep] = useState(0);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    programme: "",
    blaStudent: "",
    grNumber: "",
    previousSchool: "",
    lastClass: "",
    student: "",
    bform: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    board: "",
    grades: "",
    group: "",
    percentage: "",
    subjects: [] as string[],
    skills: [] as string[],
    statement: "",
    father: "",
    fatherPhone: "",
    fatherCnic: "",
    fatherOccupation: "",
    fatherEmail: "",
    mother: "",
    motherPhone: "",
    motherCnic: "",
    motherOccupation: "",
    motherEmail: "",
    address: "",
    declaration: false,
  });

  const update = (key: keyof typeof data, value: string | boolean | string[]) =>
    setData((current) => ({ ...current, [key]: value }));

  if (done) {
    return (
      <SuccessPanel
        title="Registration received"
        text="Thank you for applying to Beacon Light Academy College. Our admissions team will contact you to arrange your interview."
        onReset={() => {
          setDone(false);
          setStep(0);
        }}
      />
    );
  }

  const canContinue =
    step === 0
      ? data.programme && data.student && data.email && data.phone
      : step === 1
        ? data.board && data.subjects.length > 0
        : step === 2
          ? data.father && data.mother && data.address
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
              body: JSON.stringify({ type: "a-level-registration", ...data }),
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
            <motion.div key="a-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 1" title="Join Beacon Light Academy College" text="Session 2026–27 · Gulshan-e-Maymar" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Which programme are you applying for?" required>
                  <Select value={data.programme} onChange={(e) => update("programme", e.target.value)} required>
                    <option value="" disabled>Select a programme</option>
                    <option>AKU-EB — HSSC-I</option>
                    <option>Pearson Edexcel — IAL</option>
                  </Select>
                </Field>
                <Field label="Are you a Beacon Light Academy student?" required>
                  <Select value={data.blaStudent} onChange={(e) => update("blaStudent", e.target.value)} required>
                    <option value="" disabled>Select an option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Select>
                </Field>
                {data.blaStudent === "Yes" ? (
                  <Field label="GR number">
                    <Input value={data.grNumber} onChange={(e) => update("grNumber", e.target.value)} />
                  </Field>
                ) : (
                  <Field label="Previous school">
                    <Input value={data.previousSchool} onChange={(e) => update("previousSchool", e.target.value)} />
                  </Field>
                )}
                <Field label="Last class attended" required>
                  <Input value={data.lastClass} onChange={(e) => update("lastClass", e.target.value)} placeholder="e.g. O Level / Matric" />
                </Field>
                <Field label="Student's full name" required>
                  <Input value={data.student} onChange={(e) => update("student", e.target.value)} required />
                </Field>
                <Field label="NIC / B-form">
                  <Input value={data.bform} onChange={(e) => update("bform", e.target.value)} />
                </Field>
                <Field label="Personal contact number" required>
                  <Input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} required />
                </Field>
                <Field label="Email address" required>
                  <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} required />
                </Field>
                <Field label="Gender" required>
                  <Select value={data.gender} onChange={(e) => update("gender", e.target.value)} required>
                    <option value="" disabled>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </Field>
                <Field label="Date of birth" required>
                  <Input type="date" value={data.dob} onChange={(e) => update("dob", e.target.value)} required />
                </Field>
              </div>
            </motion.div>
          ) : null}

          {step === 1 ? (
            <motion.div key="a-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 2" title="Your academic record" text="Tell us about your results, subject choices and interests." />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name of school" required>
                  <Input value={data.previousSchool} onChange={(e) => update("previousSchool", e.target.value)} required />
                </Field>
                <Field label="Which board did you qualify from?" required>
                  <Select value={data.board} onChange={(e) => update("board", e.target.value)} required>
                    <option value="" disabled>Select a board</option>
                    <option>O Levels / IGCSE — Pearson Edexcel or Cambridge</option>
                    <option>AKU-EB — Matriculation / SSC</option>
                  </Select>
                </Field>
                <Field label="Grades secured" hint="e.g. 5A*s, 3As" className="sm:col-span-2">
                  <Input value={data.grades} onChange={(e) => update("grades", e.target.value)} />
                </Field>
                {data.board.includes("AKU") ? (
                  <>
                    <Field label="Group">
                      <Input value={data.group} onChange={(e) => update("group", e.target.value)} placeholder="Pre-Medical / Pre-Engineering / Science General" />
                    </Field>
                    <Field label="Percentage">
                      <Input value={data.percentage} onChange={(e) => update("percentage", e.target.value)} />
                    </Field>
                  </>
                ) : null}
              </div>

              <div className="mt-6">
                <p className="text-[0.78rem] font-semibold text-navy">Subject selection <span className="text-gold">*</span></p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ialSubjects.map((subject) => {
                    const active = data.subjects.includes(subject);
                    return (
                      <button
                        key={subject}
                        type="button"
                        onClick={() =>
                          update("subjects", active ? data.subjects.filter((s) => s !== subject) : [...data.subjects, subject])
                        }
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                          active
                            ? "border-navy bg-navy text-white"
                            : "border-navy/15 bg-white text-navy hover:border-gold"
                        }`}
                      >
                        {subject}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[0.78rem] font-semibold text-navy">Skills you possess</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const active = data.skills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() =>
                          update("skills", active ? data.skills.filter((s) => s !== skill) : [...data.skills, skill])
                        }
                        className={`rounded-full border px-3.5 py-1.5 text-[0.7rem] transition-all ${
                          active ? "border-gold bg-gold/15 text-[#8d651b]" : "border-navy/12 text-muted hover:border-gold"
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Field label="Personal statement" hint="About 200 words on your academic interests, achievements, skills, activities and future goals." className="mt-6">
                <Textarea value={data.statement} onChange={(e) => update("statement", e.target.value)} rows={6} maxLength={2400} />
              </Field>
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div key="a-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 3" title="Parent details" text="We keep parents closely involved throughout the college journey." />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Father's name" required>
                  <Input value={data.father} onChange={(e) => update("father", e.target.value)} required />
                </Field>
                <Field label="Father's contact number" required>
                  <Input type="tel" value={data.fatherPhone} onChange={(e) => update("fatherPhone", e.target.value)} required />
                </Field>
                <Field label="Father's CNIC">
                  <Input value={data.fatherCnic} onChange={(e) => update("fatherCnic", e.target.value)} />
                </Field>
                <Field label="Father's occupation">
                  <Input value={data.fatherOccupation} onChange={(e) => update("fatherOccupation", e.target.value)} />
                </Field>
                <Field label="Father's email">
                  <Input type="email" value={data.fatherEmail} onChange={(e) => update("fatherEmail", e.target.value)} />
                </Field>
                <Field label="Mother's name" required>
                  <Input value={data.mother} onChange={(e) => update("mother", e.target.value)} required />
                </Field>
                <Field label="Mother's contact number">
                  <Input type="tel" value={data.motherPhone} onChange={(e) => update("motherPhone", e.target.value)} />
                </Field>
                <Field label="Mother's CNIC">
                  <Input value={data.motherCnic} onChange={(e) => update("motherCnic", e.target.value)} />
                </Field>
                <Field label="Mother's occupation">
                  <Input value={data.motherOccupation} onChange={(e) => update("motherOccupation", e.target.value)} />
                </Field>
                <Field label="Mother's email">
                  <Input type="email" value={data.motherEmail} onChange={(e) => update("motherEmail", e.target.value)} />
                </Field>
                <Field label="Home address" required className="sm:col-span-2">
                  <Input value={data.address} onChange={(e) => update("address", e.target.value)} required />
                </Field>
              </div>
            </motion.div>
          ) : null}

          {step === 3 ? (
            <motion.div key="a-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <StepHeading eyebrow="Step 4" title="Review & submit" text="Check your details and accept the admission rules." />
              <dl className="grid gap-3 rounded-2xl border border-navy/10 bg-cream/60 p-5 sm:grid-cols-2">
                {[
                  ["Programme", data.programme],
                  ["Student", data.student],
                  ["Email", data.email],
                  ["Phone", data.phone],
                  ["Board", data.board],
                  ["Subjects", data.subjects.join(", ")],
                  ["Parent", data.father],
                  ["Address", data.address],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-navy">{value || "—"}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-2xl border border-navy/10 bg-white p-4 text-xs leading-relaxed text-muted">
                <p className="font-semibold text-navy">Rules for admission</p>
                <p className="mt-2">
                  Admission Fee and Security Deposit apply to all students applying to BLAC.
                  Timely payment of school fee is mandatory; the total monthly fee must be paid by
                  the 10th of every month, after which late payment charges of Rs. 500 apply.
                  Unpaid fees for longer than 30 days render enrolment suspended. The security
                  deposit is refundable after one complete academic year with one month&apos;s notice.
                  Reapplying is treated as a fresh enrolment with readmission charges of Rs. 1,000.
                </p>
                <label className="mt-4 flex items-start gap-3 font-medium text-navy">
                  <input
                    type="checkbox"
                    checked={data.declaration}
                    onChange={(e) => update("declaration", e.target.checked)}
                    className="mt-0.5 size-4 accent-[#d6a23d]"
                    required
                  />
                  <span>I understand and accept the admission rules.</span>
                </label>
              </div>
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
              Submit registration <ArrowRight className="size-4" />
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}
