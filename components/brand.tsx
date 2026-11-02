import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  inverse = false,
  className,
  compact = false,
  showText = false,
}: {
  inverse?: boolean;
  className?: string;
  compact?: boolean;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Beacon Light Academy home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <div
        className={cn(
          "relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
          compact ? "h-14 w-14" : "h-20 w-20"
        )}
      >
        <Image
          src="/media/images/bla-footer-logo.png"
          alt="Beacon Light Academy"
          width={120}
          height={120}
          priority
          className={cn(
            "h-full w-full object-contain",
            inverse ? "brightness-0 invert" : "brightness-0"
          )}
        />
      </div>

      {showText ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.35rem] tracking-tight",
              compact && "text-lg",
              inverse ? "text-white" : "text-navy"
            )}
          >
            Beacon Light
          </span>
          <span
            className={cn(
              "mt-1 text-[0.58rem] font-bold uppercase tracking-[0.32em]",
              inverse ? "text-gold-2" : "text-gold"
            )}
          >
            Academy
          </span>
        </span>
      ) : null}
    </Link>
  );
}
