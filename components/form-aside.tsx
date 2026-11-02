import { Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const tips = [
  "Keep your child's B-form and previous school records ready.",
  "The admission test is age-appropriate and usually lasts under an hour.",
  "You can also collect a physical registration form from any campus.",
];

export function FormAside({
  title = "Need help?",
  text = "Our admissions team is available Monday to Thursday, 7:50 am – 1:50 pm and Friday until 12:20 pm.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <aside className="space-y-4">
      <div className="rounded-3xl border border-navy/10 bg-navy p-6 text-white shadow-card">
        <p className="eyebrow text-gold-2">Admissions desk</p>
        <h3 className="mt-3 font-display text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>

        <div className="mt-5 space-y-2.5">
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm transition-colors hover:bg-white/15"
          >
            <Phone className="size-4 shrink-0 text-gold" /> {site.phone}
          </a>
          <a
            href={`mailto:${site.admissionsEmail}`}
            className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm transition-colors hover:bg-white/15"
          >
            <Mail className="size-4 shrink-0 text-gold" />
            <span className="truncate">{site.admissionsEmail}</span>
          </a>
          <a
            href={`https://wa.me/92${site.whatsapp.replace(/[^\d]/g, "").replace(/^0/, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm transition-colors hover:bg-white/15"
          >
            <MessageCircle className="size-4 shrink-0 text-gold" /> WhatsApp {site.whatsapp}
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card">
        <p className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
          <Sparkles className="size-3.5" /> Good to know
        </p>
        <ul className="mt-4 space-y-3">
          {tips.map((tip) => (
            <li key={tip} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
