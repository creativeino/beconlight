"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { nav, site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[70]">
      <div
        className={cn(
          "hidden overflow-hidden border-b border-white/10 bg-navy text-white transition-all duration-500 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="shell flex h-10 items-center justify-between text-[0.72rem]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-2 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-gold" />
              </span>
              Admissions open for Session 2026–27
            </span>
            <Link href="/notice-board" className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-gold-2">
              <Sparkles className="size-3" />
              Latest notices & results
            </Link>
          </div>
          <div className="flex items-center gap-6 text-white/70">
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold-2">
              <Phone className="size-3" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold-2">
              <Mail className="size-3" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-navy/8 bg-cream/85 shadow-[0_18px_40px_-30px_rgba(7,26,47,0.5)] backdrop-blur-xl"
            : "bg-cream/55 backdrop-blur-md",
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-4">
          <Brand compact={scrolled} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasMenu = Boolean(item.groups?.length);

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && setOpenMenu(item.label)}
                  onMouseLeave={() => hasMenu && setOpenMenu(null)}
                >
                  {hasMenu ? (
                    <button
                      type="button"
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.82rem] font-semibold text-navy/75 transition-colors hover:bg-navy/5 hover:text-navy",
                        active && "text-navy",
                        openMenu === item.label && "bg-navy/5 text-navy",
                      )}
                      aria-expanded={openMenu === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-300",
                          openMenu === item.label && "rotate-180",
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center rounded-full px-3.5 py-2 text-[0.82rem] font-semibold text-navy/75 transition-colors hover:bg-navy/5 hover:text-navy",
                        active && "text-navy",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                        />
                      ) : null}
                    </Link>
                  )}

                  <AnimatePresence>
                    {hasMenu && openMenu === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.985 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-50 w-[min(42rem,calc(100vw-3rem))] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white p-2 shadow-[0_40px_90px_-40px_rgba(7,26,47,0.45)]">
                          <div className={cn("grid gap-2", item.groups && item.groups.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
                            {item.groups?.map((group) => (
                              <div key={group.title} className="rounded-2xl p-4 transition-colors hover:bg-cream/70">
                                <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold">
                                  {group.title}
                                </p>
                                <ul className="space-y-1">
                                  {group.links.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        className="group/link flex items-start gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-white"
                                      >
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold/60 transition-transform group-hover/link:scale-150" />
                                        <span>
                                          <span className="block text-sm font-semibold text-navy">{link.label}</span>
                                          {link.description ? (
                                            <span className="mt-0.5 block text-[0.72rem] leading-snug text-muted">{link.description}</span>
                                          ) : null}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          {item.featured ? (
                            <Link
                              href={item.featured.href}
                              className="group/featured mt-2 flex items-center justify-between gap-4 rounded-2xl bg-navy px-5 py-4 text-white"
                            >
                              <span>
                                <span className="block font-display text-lg">{item.featured.title}</span>
                                <span className="block text-xs text-white/65">{item.featured.text}</span>
                              </span>
                              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-2">
                                {item.featured.cta}
                                <ArrowRight className="size-3.5 transition-transform group-hover/featured:translate-x-1" />
                              </span>
                            </Link>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/admissions"
              className="shine hidden h-11 items-center gap-2 rounded-full bg-navy px-5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_-14px_rgba(10,35,66,0.65)] transition-all hover:bg-navy-2 hover:shadow-[0_18px_36px_-14px_rgba(10,35,66,0.65)] sm:inline-flex"
            >
              Apply now
              <ArrowRight className="size-3.5" />
            </Link>

            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="grid size-11 place-items-center rounded-full border border-navy/12 bg-white/70 text-navy transition-colors hover:bg-white lg:hidden"
                >
                  <Menu className="size-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/45 backdrop-blur-sm data-[state=open]:animate-in" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-[81] flex w-[min(24rem,92vw)] flex-col bg-cream shadow-2xl outline-none">
                  <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
                  <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
                    <Brand compact />
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="grid size-10 place-items-center rounded-full border border-navy/12 bg-white text-navy"
                      >
                        <X className="size-4" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="hide-scrollbar flex-1 overflow-y-auto px-5 py-5">
                    <nav aria-label="Mobile navigation" className="space-y-1">
                      {nav.map((item) => (
                        <div key={item.label} className="border-b border-navy/8 py-2 last:border-0">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between py-2 font-display text-xl text-navy"
                          >
                            {item.label}
                            <ArrowRight className="size-4 text-gold" />
                          </Link>
                          {item.groups ? (
                            <div className="mt-1 space-y-3 pb-3 pl-1">
                              {item.groups.map((group) => (
                                <div key={group.title}>
                                  <p className="mb-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-gold">
                                    {group.title}
                                  </p>
                                  <ul className="space-y-0.5">
                                    {group.links.map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          className="block rounded-lg py-1.5 text-sm text-muted transition-colors hover:text-navy"
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </nav>
                  </div>
                  <div className="space-y-3 border-t border-navy/10 p-5">
                    <Link
                      href="/admissions"
                      onClick={() => setMobileOpen(false)}
                      className="flex h-12 items-center justify-center gap-2 rounded-full bg-navy text-sm font-bold uppercase tracking-[0.12em] text-white"
                    >
                      Apply for 2026–27 <ArrowRight className="size-4" />
                    </Link>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-1.5">
                        <Phone className="size-3.5 text-gold" /> {site.phone}
                      </a>
                      <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5">
                        <Mail className="size-3.5 text-gold" /> Email
                      </a>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  );
}
