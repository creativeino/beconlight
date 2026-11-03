import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { NewsletterForm } from "@/components/newsletter-form";

type IconProps = { className?: string };

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.52l.38-2.93H13.5V8.7c0-.85.24-1.43 1.45-1.43h1.55V4.65c-.27-.04-1.19-.12-2.26-.12-2.24 0-3.77 1.37-3.77 3.88v2.16H8v2.93h2.47V21h3.03Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H4.1V20h2.84V8.5ZM5.52 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20 13.57c0-3.4-1.82-4.98-4.24-4.98-1.96 0-2.84 1.08-3.33 1.84V8.5H9.6V20h2.83v-6.42c0-1.7.32-3.34 2.42-3.34 2.07 0 2.1 1.94 2.1 3.45V20H20v-6.43Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
    </svg>
  );
}

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -left-40 top-0 size-[30rem] rounded-full bg-navy-2/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[26rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="shell relative">
        <div className="flex flex-col gap-10 border-b border-white/10 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-2">Admissions 2026–27</p>
            <h2 className="display-xl mt-4 text-4xl text-white sm:text-5xl">
              The next chapter begins with a visit.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Come and feel the difference for yourself. Meet our teachers, walk through our
              campuses and see how four decades of care shape confident learners.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-ink transition-colors hover:bg-gold-2"
            >
              Apply now <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a visit
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Brand inverse />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              A community of learners, educators and families committed to value-based
              education and world-class achievement since 1986.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/65">
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="flex items-start gap-3 transition-colors hover:text-gold-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition-colors hover:text-gold-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.address}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label.toLowerCase() as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold-2">
                  {group.title}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 py-8 md:grid-cols-[1fr_20rem] md:items-center">
          <div>
            <p className="font-display text-2xl text-white/90">Stay in the loop</p>
            <p className="mt-1 text-xs text-white/45">
              Notices, results and stories — sent occasionally, never noisy.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Beacon Light Academy. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/notice-board" className="transition-colors hover:text-white">
              Notice Board
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">
              Sitemap
            </Link>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              Est. 1986 · Karachi
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
