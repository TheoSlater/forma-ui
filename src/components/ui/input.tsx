import * as React from "react";
import { cn } from "../../lib/utils";
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-input px-3 py-1 text-base text-muted-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-text shadow-xs transition outline-none",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:bg-disabledBg disabled:text-disabledText disabled:border-disabledBorder disabled:cursor-not-allowed disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}
export { Input };
