import * as React from "react";
import { cn } from "../../lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          "inline-flex items-center cursor-pointer select-none space-x-2",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <span
          className={cn(
            "w-5 h-5 rounded-md border border-input-border bg-input-bg flex items-center justify-center transition-colors",
            "focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-primary-focus-ring",
            "hover:border-primary hover:bg-primary-hover",
            disabled
              ? "border-disabled-border bg-disabled-bg"
              : "border-input-border bg-input-bg"
          )}
        >
          <svg
            className="hidden w-4 h-4 text-primary-text pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            data-checkbox-icon=""
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        {label && (
          <span
            className={cn(
              "text-subtle-text select-none",
              disabled && "text-disabled-text"
            )}
          >
            {label}
          </span>
        )}

        <style>{`
          input:checked + span svg {
            display: block;
          }
          input:not(:checked) + span svg {
            display: none;
          }
          input:focus-visible + span {
            outline: 2px solid transparent;
            outline-offset: 2px;
            box-shadow: 0 0 0 3px hsl(var(--primary-focus-ring));
          }
        `}</style>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
