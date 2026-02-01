import Link from "next/link";
import { cn } from "@/lib/cn";

type FoundationCardProps = {
  title: string;
  description: string;
  href: string;
  className?: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

export function FoundationCard({
  title,
  description,
  href,
  className,
  eyebrow = "Foundation",
  children,
}: FoundationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-6 shadow-card transition",
        "hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-float",
        className
      )}
    >
      <div className="space-y-3">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {children ? (
        <div className="mt-6 rounded-md border border-border/70 bg-surface-muted p-4">
          {children}
        </div>
      ) : null}
    </Link>
  );
}
