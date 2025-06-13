import * as React from "react";

import { cn } from "../../lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-md px-3.5 text-sm",
        "bg-secondary/20 dark:bg-input/10",
        "border border-input/40 hover:border-input/80",
        "shadow-xs shadow-input/5",
        "transition-all duration-150",
        "placeholder:text-muted-foreground/50",
        "focus:bg-transparent focus:border-ring/60 focus:ring-2 focus:ring-ring/10 focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-input/40",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "selection:bg-primary/10 selection:text-primary dark:selection:bg-primary/20",
        "aria-invalid:border-destructive/40 aria-invalid:hover:border-destructive/60",
        "aria-invalid:focus:border-destructive/80 aria-invalid:focus:ring-destructive/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
