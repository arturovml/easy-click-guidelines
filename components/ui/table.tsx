"use client";

import { cn } from "@/lib/cn";

export function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-surface-muted text-left text-xs uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </thead>
  );
}

export function TableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr
      className={cn(
        "border-b border-border last:border-b-0 hover:bg-surface-muted/70",
        className
      )}
    >
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <td
      className={cn(
        "px-4 py-3 text-foreground",
        align === "right" ? "text-right tabular-nums" : "text-left"
      )}
    >
      {children}
    </td>
  );
}

export function TableEmpty({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface-muted p-6 text-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}
