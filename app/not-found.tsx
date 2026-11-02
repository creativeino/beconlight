import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const suggestions = [
  { label: "Home", href: "/", text: "Back to the start." },
  { label: "Notice Board", href: "/notice-board", text: "Latest results & announcements." },
  { label: "Admissions", href: "/admissions", text: "Session 2026–27 is open." },
  { label: "Contact", href: "/contact", text: "Find your campus." },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 · Page not found"
        title="This path doesn't lead anywhere"
        description="The page you are looking for may have moved. Let us guide you back to somewhere useful."
        image="/media/images/about-Beacon.jpg"
        alt="Beacon Light Academy campus"
      />

      <section className="shell py-16">
        <SectionHeading
          eyebrow="Explore instead"
          title="Where would you like to go?"
          description="Here are the pages families visit most."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div>
                <span className="grid size-10 place-items-center rounded-full bg-sand text-navy transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Compass className="size-4" />
                </span>
                <h3 className="mt-5 font-display text-xl text-navy">{item.label}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-navy">
                Go there
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-2"
          >
            <Home className="size-4" /> Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
