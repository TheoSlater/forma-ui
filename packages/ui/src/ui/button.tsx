import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all  disabled:pointer-events-none disabled:opacity-50 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive " +
    "shadow-sm hover:shadow-md focus-visible:shadow-lg " +
    "focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hover:ring-primary/40 focus-visible:ring-primary/60",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 focus-visible:ring-secondary/40",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        // outlined:
        //   "bg-transparent text-foreground border border-ring hover:bg-muted/40 focus-visible:ring-ring/40", // removed outlined variant for now. stupid outline looks like crap

        // semantic variants
        info: "bg-info text-info-foreground shadow-xs hover:bg-info/90 focus-visible:ring-info/40",
        success:
          "bg-success text-success-foreground shadow-xs hover:bg-success/90 focus-visible:ring-success/40",
        warning:
          "bg-warning text-warning-foreground shadow-xs hover:bg-warning/90 focus-visible:ring-warning/40",
        error:
          "bg-error text-error-foreground shadow-xs hover:bg-error/90 focus-visible:ring-error/40",

        // Disabled is already handled by disabled:pointer-events-none and opacity-50
        // but you could add a variant for a nuanced disabled style if you want.
        // ive implemented a prototype disabled variant here for reference (UNCOMMENT TO USE):
        // disabled:
        //   "bg-muted text-muted-foreground border border-border cursor-not-allowed",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-7 has-[>svg]:px-5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
