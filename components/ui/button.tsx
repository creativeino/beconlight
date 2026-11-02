import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white shadow-[0_12px_30px_-12px_rgba(10,35,66,0.65)] hover:bg-navy-2 hover:shadow-[0_18px_40px_-14px_rgba(10,35,66,0.7)]",
        gold:
          "bg-gold text-ink shadow-[0_12px_30px_-12px_rgba(214,162,61,0.75)] hover:bg-gold-2",
        outline:
          "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
        white:
          "bg-white text-navy shadow-[0_12px_30px_-16px_rgba(0,0,0,0.4)] hover:bg-cream",
        ghost:
          "text-navy hover:bg-navy/5",
        link:
          "rounded-none p-0 text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-[0.95rem]",
        icon: "size-11",
        iconSm: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
