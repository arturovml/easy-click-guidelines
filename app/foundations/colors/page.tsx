const brandColors = [
  { name: "Brand Primary", token: "bg-brand", description: "Easy Click Orange" },
  { name: "Brand Hover", token: "bg-brand-hover", description: "Hover / focus" },
  { name: "Brand Muted", token: "bg-brand-muted", description: "Subtle emphasis" },
];

const neutralColors = [
  { name: "Background", token: "bg-background", description: "App canvas" },
  { name: "Surface", token: "bg-surface", description: "Cards, panels" },
  { name: "Surface Muted", token: "bg-surface-muted", description: "Subtle panels" },
  { name: "Border", token: "bg-border", description: "Dividers & strokes" },
  { name: "Foreground", token: "bg-foreground", description: "Primary text" },
  { name: "Muted", token: "bg-muted", description: "Secondary text" },
];

const semanticColors = [
  { name: "Success", token: "bg-success", description: "Positive states" },
  { name: "Warning", token: "bg-warning", description: "Attention states" },
  { name: "Danger", token: "bg-danger", description: "Critical states" },
  { name: "Info", token: "bg-info", description: "Informational states" },
];

function Swatch({
  name,
  token,
  description,
}: {
  name: string;
  token: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4 shadow-card">
      <div className={`h-12 w-12 rounded-md border border-border ${token}`} />
      <div>
        <div className="text-sm font-semibold tracking-tight">{name}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function SwatchGrid({
  title,
  description,
  colors,
}: {
  title: string;
  description: string;
  colors: { name: string; token: string; description: string }[];
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {colors.map((color) => (
          <Swatch key={color.name} {...color} />
        ))}
      </div>
    </section>
  );
}

export default function ColorsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Foundations / Colors
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Easy Click color system
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Orange drives emphasis and actions, while neutrals keep the interface
          balanced and professional. Semantic colors support operational clarity
          across status-driven workflows.
        </p>
      </header>

      <div className="space-y-10">
        <SwatchGrid
          title="Brand"
          description="Primary accent used for highlights and key actions."
          colors={brandColors}
        />
        <SwatchGrid
          title="Neutrals"
          description="Core surfaces, text, and structure."
          colors={neutralColors}
        />
        <SwatchGrid
          title="Semantic"
          description="Use sparingly to signal system status."
          colors={semanticColors}
        />
      </div>

      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Dark mode</h2>
          <p className="text-sm text-muted-foreground">
            Dark surfaces are tuned to preserve contrast and keep orange
            focused.
          </p>
        </div>
        <div
          data-theme="dark"
          className="rounded-xl border border-border bg-background p-6 shadow-card"
        >
          <div className="space-y-6">
            <SwatchGrid
              title="Brand"
              description="Primary accents on dark surfaces."
              colors={brandColors}
            />
            <SwatchGrid
              title="Neutrals"
              description="Dark canvas and surface steps."
              colors={neutralColors}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
