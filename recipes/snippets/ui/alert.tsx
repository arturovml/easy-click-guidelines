"use client";

import { cn } from "@/lib/cn";

type AlertVariant = "info" | "success" | "warning" | "error";

const variantStyles: Record<AlertVariant, string> = {
  info: "border-info/40 bg-info-muted text-foreground",
  success: "border-success/40 bg-success-muted text-foreground",
  warning: "border-warning/40 bg-warning-muted text-foreground",
  error: "border-danger/40 bg-danger-muted text-foreground",
};

const variantIcon: Record<AlertVariant, React.ReactNode> = {
  info: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01" />
      <path d="M11 12h1v4h1" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.2 2.2 4.8-5" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l9 16H3l9-16z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-6 6" />
      <path d="M9 9l6 6" />
    </svg>
  ),
};

export function Alert({
  title,
  description,
  variant = "info",
  className,
}: {
  title: string;
  description: string;
  variant?: AlertVariant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border px-4 py-3 text-sm shadow-card",
        variantStyles[variant],
        className
      )}
    >
      <div className="mt-0.5 text-foreground">{variantIcon[variant]}</div>
      <div className="space-y-1">
        <div className="font-semibold">{title}</div>
        <div className="text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
