import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8fafc]",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(120deg,#2563eb,#6366f1)] text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(79,70,229,0.62)] focus-visible:ring-[var(--ai-blue)]",
        secondary:
          "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-300",
        outline:
          "border border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-300",
        emerald:
          "bg-emerald-ai text-white shadow-lg shadow-emerald-ai/20 hover:bg-emerald-600",
        ghost: "text-slate-700 hover:bg-slate-100"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-2xl px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
