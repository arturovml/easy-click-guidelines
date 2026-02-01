const elevationLevels = [
  {
    name: "Inset",
    shadow: "shadow-inset",
    description: "Subtle inset depth for well boundaries.",
  },
  {
    name: "Card",
    shadow: "shadow-card",
    description: "Default elevation for cards and content blocks.",
  },
  {
    name: "Float",
    shadow: "shadow-float",
    description: "Floating panels, dropdowns, and overlays.",
  },
];

export default function ElevationPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Foundations / Elevation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Elevation system
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Shadows are subtle and functional. Use them to separate panels without
          heavy contrast, especially in dense operational views.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {elevationLevels.map((level) => (
          <div
            key={level.name}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <div className="text-sm font-semibold">{level.name}</div>
            <div className="mt-3 text-xs text-muted-foreground">
              {level.description}
            </div>
            <div
              className={`mt-6 flex h-28 items-center justify-center rounded-lg border border-border bg-surface-muted ${level.shadow}`}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {level.shadow}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Dark mode shadows
        </h2>
        <div
          data-theme="dark"
          className="rounded-xl border border-border bg-background p-6"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {elevationLevels.map((level) => (
              <div
                key={level.name}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <div className="text-sm font-semibold">{level.name}</div>
                <div
                  className={`mt-5 flex h-24 items-center justify-center rounded-md border border-border bg-surface-muted ${level.shadow}`}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {level.shadow}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
