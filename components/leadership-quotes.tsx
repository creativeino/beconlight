import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const leaders = [
  {
    name: "Sir Sanaullah Kazi",
    suffix: "(Late)",
    role: "Founding father · 1986",
    eyebrow: "From our founding father",
    image: "/media/images/founder-message-beacon-light.jpg",
    position: "50% 22%",
    href: "/about-bla",
    cta: "Read our story",
    quote:
      "Our core purpose is to impart the highest quality of education to young people and empower them to take their place in the world outside — never forgetting our responsibility towards less-privileged children. Education, games and art come together in a glorious kaleidoscope that will shape the future of your child.",
    tone: "light" as const,
  },
  {
    name: "Mrs. Azra Anwar Ahmed",
    role: "Principal · Beacon Light Academy",
    eyebrow: "Message from the Principal",
    image: "/media/images/Miss-Azra-Beacon-Light-School.jpg",
    position: "50% 32%",
    href: "/principal-message",
    cta: "Read her message",
    quote:
      "Children need their mother to pat them in appreciation, comfort them in distress, console them when they lose. Let us be motherly mothers — spend time not only with them but for them too. Let us make this a generation the world should be proud of.",
    tone: "dark" as const,
  },
];

export function LeadershipQuotes() {
  return (
    <div className="mt-12 space-y-4 lg:space-y-5">
      {leaders.map((leader, index) => {
        const dark = leader.tone === "dark";
        const imageFirst = index === 0;

        return (
          <Reveal key={leader.name} delay={index * 0.12} y={36}>
          <article
            className={[
              "group relative grid overflow-hidden rounded-[2rem] border shadow-card md:grid-cols-[0.82fr_1.18fr]",
              dark ? "border-white/10 bg-navy text-white" : "border-navy/10 bg-white",
            ].join(" ")}
          >
            <div
              className={[
                "relative min-h-[19rem] overflow-hidden md:min-h-[24rem]",
                imageFirst ? "md:order-1" : "md:order-2",
              ].join(" ")}
            >
              <Image
                src={leader.image}
                alt={`${leader.name}, ${leader.role}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: leader.position }}
              />
              <div
                className={[
                  "absolute inset-0",
                  dark
                    ? "bg-gradient-to-t from-navy via-navy/10 to-transparent"
                    : "bg-gradient-to-t from-ink/80 via-ink/5 to-transparent",
                ].join(" ")}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-gold-2">
                  {leader.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-[1.7rem] leading-tight text-white">
                  {leader.name}
                  {leader.suffix ? (
                    <span className="ml-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/55">
                      {leader.suffix}
                    </span>
                  ) : null}
                </h3>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/55">
                  {leader.role}
                </p>
              </div>
            </div>

            <div
              className={[
                "flex flex-col justify-between gap-7 p-6 sm:p-8 lg:p-10",
                imageFirst ? "md:order-2" : "md:order-1",
              ].join(" ")}
            >
              <div>
                <Quote
                  className={["size-8", dark ? "text-gold-2/80" : "text-gold/80"].join(" ")}
                />
                <blockquote
                  className={[
                    "mt-5 font-display text-[1.32rem] italic leading-[1.5] sm:text-[1.5rem]",
                    dark ? "text-white/85" : "text-ink/85",
                  ].join(" ")}
                >
                  &ldquo;{leader.quote}&rdquo;
                </blockquote>
              </div>

              <div
                className={[
                  "flex items-center justify-between gap-4 border-t pt-5",
                  dark ? "border-white/10" : "border-navy/10",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-px w-12",
                    dark ? "bg-gold-2/60" : "bg-gold/70",
                  ].join(" ")}
                />
                <Link
                  href={leader.href}
                  className={[
                    "group/link inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] transition-colors",
                    dark
                      ? "text-gold-2 hover:text-white"
                      : "text-navy hover:text-gold",
                  ].join(" ")}
                >
                  {leader.cta}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>
          </Reveal>
        );
      })}
    </div>
  );
}
