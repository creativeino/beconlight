import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        default: "bg-navy text-white",
        gold: "bg-gold/15 text-[#8d651b] ring-1 ring-gold/30",
        outline: "border border-navy/15 text-navy",
        white: "bg-white/15 text-white ring-1 ring-white/20 backdrop-blur",
        muted: "bg-sand text-navy",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
