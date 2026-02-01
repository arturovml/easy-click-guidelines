const radiusScale = [
  { label: "xs", className: "rounded-xs", value: "4px" },
  { label: "sm", className: "rounded-sm", value: "6px" },
  { label: "md", className: "rounded-md", value: "8px" },
  { label: "lg", className: "rounded-lg", value: "12px" },
  { label: "xl", className: "rounded-xl", value: "16px" },
];

export default function RadiusPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Foundations / Radius
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Radius tokens</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Rounded corners soften operational interfaces without sacrificing
          precision. Use tokens consistently across cards, panels, and inputs.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {radiusScale.map((radius) => (
          <div
            key={radius.label}
            className="rounded-lg border border-border bg-surface p-6 shadow-card"
          >
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>{radius.label}</span>
              <span className="text-muted-foreground">{radius.value}</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div
                className={`h-16 w-16 border border-border bg-surface-muted ${radius.className}`}
              />
              <div className="text-sm text-muted-foreground">
                Apply <span className="font-medium text-foreground">{radius.className}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
