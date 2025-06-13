import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive " +
    "shadow-xs hover:shadow-sm " +
    "focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary/90 text-primary-foreground hover:bg-primary hover:ring-primary/20 focus-visible:ring-primary/30",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary/30",
        ghost:
          "hover:bg-accent/20 hover:text-accent-foreground dark:hover:bg-accent/10",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        outlined:
          "border border-input/50 hover:border-input bg-transparent text-foreground hover:bg-secondary/20 focus-visible:ring-ring/20 dark:hover:bg-secondary/10",

        // semantic variants
        info: "bg-info/90 text-info-foreground hover:bg-info focus-visible:ring-info/30",
        success:
          "bg-success/90 text-success-foreground hover:bg-success focus-visible:ring-success/30",
        warning:
          "bg-warning/90 text-warning-foreground hover:bg-warning focus-visible:ring-warning/30",
        error:
          "bg-error/90 text-error-foreground hover:bg-error focus-visible:ring-error/30",

        // Disabled is already handled by disabled:pointer-events-none and opacity-50
        // but you could add a variant for a nuanced disabled style if you want.
        // ive implemented a prototype disabled variant here for reference (UNCOMMENT TO USE):
        // disabled:
        //   "bg-muted text-muted-foreground border border-border cursor-not-allowed",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3.5",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-md px-6 has-[>svg]:px-5",
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
