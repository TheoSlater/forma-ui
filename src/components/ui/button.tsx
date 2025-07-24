import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:bg-[hsl(var(--disabled-bg))] disabled:text-[hsl(var(--disabled-text))] disabled:border disabled:border-[hsl(var(--disabled-border))]",
  {
    variants: {
      variant: {
        primary:
          "bg-[hsl(var(--primary))] text-[hsl(var(--primary-text))] hover:bg-[hsl(var(--primary-hover))] active:bg-[hsl(var(--primary-active))]",
        secondary:
          "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-text))] hover:bg-[hsl(var(--secondary-hover))] active:bg-[hsl(var(--secondary-active))]",
        outline:
          "border bg-[hsl(var(--outline-bg))] text-[hsl(var(--outline-text))] border-[hsl(var(--outline-border))] hover:bg-[hsl(var(--outline-hover))] hover:text-[hsl(var(--outline-text-hover))] hover:border-[hsl(var(--outline-border-hover))] active:bg-[hsl(var(--outline-active))] active:border-[hsl(var(--outline-border-active))]",
        ghost:
          "bg-[hsl(var(--ghost-bg))] text-[hsl(var(--ghost-text))] hover:bg-[hsl(var(--ghost-hover))] hover:text-[hsl(var(--ghost-text-hover))] active:bg-[hsl(var(--ghost-active))] active:text-[hsl(var(--ghost-text-active))]",
        subtle:
          "bg-[hsl(var(--subtle))] text-[hsl(var(--subtle-text))] hover:bg-[hsl(var(--subtle-hover))] hover:text-[hsl(var(--subtle-text-hover))] active:bg-[hsl(var(--subtle-active))] active:text-[hsl(var(--subtle-text-active))]",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
