const spacingScale = [
  { label: "4", className: "p-1", px: "4px" },
  { label: "8", className: "p-2", px: "8px" },
  { label: "12", className: "p-3", px: "12px" },
  { label: "16", className: "p-4", px: "16px" },
  { label: "24", className: "p-6", px: "24px" },
  { label: "32", className: "p-8", px: "32px" },
  { label: "48", className: "p-12", px: "48px" },
];

export default function SpacingPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Foundations / Spacing
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Spacing scale</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A 4px-based scale that keeps layouts consistent across cards, panels,
          forms, and dashboards.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        {spacingScale.map((space) => (
          <div
            key={space.label}
            className="rounded-lg border border-border bg-surface p-6 shadow-card"
          >
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>{space.label}</span>
              <span className="text-muted-foreground">{space.px}</span>
            </div>
            <div className="mt-4 rounded-md border border-dashed border-border bg-surface-muted">
              <div className={`${space.className}`}>
                <div className="h-8 rounded bg-brand-muted" />
              </div>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Use {space.px} steps for padding and spacing alignment.
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
