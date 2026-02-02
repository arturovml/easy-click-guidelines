"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 text-sm text-foreground">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            "h-4 w-4 rounded border border-border bg-surface text-brand focus-visible:ring-2 focus-visible:ring-brand/40",
            "accent-brand",
            className
          )}
          {...props}
        />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
