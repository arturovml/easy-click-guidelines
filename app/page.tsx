import { FoundationCard } from "@/components/FoundationCard";
import { Section } from "@/components/Section";

const foundations = [
  {
    title: "Colors",
    description:
      "Primary, neutral, and semantic palettes balanced around Easy Click Orange.",
    href: "/foundations/colors",
    preview: (
      <div className="grid grid-cols-6 gap-2">
        <div className="h-10 rounded-md bg-brand" />
        <div className="h-10 rounded-md bg-brand-muted" />
        <div className="h-10 rounded-md bg-surface-muted" />
        <div className="h-10 rounded-md bg-border" />
        <div className="h-10 rounded-md bg-success" />
        <div className="h-10 rounded-md bg-danger" />
      </div>
    ),
  },
  {
    title: "Typography",
    description:
      "Clear, modern type styles optimized for dashboards and product flows.",
    href: "/foundations/typography",
    preview: (
      <div className="space-y-2">
        <div className="text-2xl font-semibold tracking-tight">
          Speed meets clarity
        </div>
        <div className="text-sm text-muted-foreground">
          Operational insights at a glance.
        </div>
      </div>
    ),
  },
  {
    title: "Spacing",
    description: "A consistent rhythm for layouts, grids, and content blocks.",
    href: "/foundations/spacing",
    preview: (
      <div className="flex items-end gap-2">
        <div className="h-6 w-6 rounded bg-surface-muted" />
        <div className="h-6 w-10 rounded bg-surface-muted" />
        <div className="h-6 w-16 rounded bg-surface-muted" />
        <div className="h-6 w-24 rounded bg-surface-muted" />
      </div>
    ),
  },
  {
    title: "Radius",
    description: "Consistent rounding across cards, panels, and inputs.",
    href: "/foundations/radius",
    preview: (
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xs border border-border bg-surface shadow-inset" />
        <div className="h-10 w-10 rounded-md border border-border bg-surface shadow-card" />
        <div className="h-10 w-10 rounded-xl border border-border bg-surface shadow-float" />
      </div>
    ),
  },
  {
    title: "Elevation",
    description: "Subtle SaaS shadows for layered content and overlays.",
    href: "/foundations/elevation",
    preview: (
      <div className="grid gap-2">
        <div className="h-8 rounded-md border border-border bg-surface shadow-card" />
        <div className="h-8 rounded-md border border-border bg-surface shadow-float" />
      </div>
    ),
  },
  {
    title: "Patterns",
    description: "UX patterns translated into live, reusable examples.",
    href: "/patterns",
    preview: (
      <div className="space-y-2">
        <div className="h-2 w-24 rounded-full bg-surface-muted" />
        <div className="h-2 w-32 rounded-full bg-surface-muted" />
        <div className="h-2 w-20 rounded-full bg-surface-muted" />
      </div>
    ),
    eyebrow: "UX Patterns",
  },
  {
    title: "Components",
    description: "Core UI components and interaction patterns.",
    href: "/components",
    preview: (
      <div className="flex items-center gap-3">
        <div className="h-8 w-16 rounded-md border border-border bg-surface" />
        <div className="h-8 w-10 rounded-md bg-brand" />
      </div>
    ),
    eyebrow: "Library",
  },
  {
    title: "QA",
    description: "Validation and release checklists.",
    href: "/qa",
    preview: (
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-success" />
        <div className="h-3 w-3 rounded-full bg-warning" />
        <div className="h-3 w-3 rounded-full bg-danger" />
      </div>
    ),
    eyebrow: "Process",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Foundations
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Easy Click Design System
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A brand-level system that defines the visual language for Easy POS,
            Easy Parking, Easy Production, and future Easy Click tools. Built
            for clarity, speed, and operational confidence.
          </p>
        </div>
      </section>

      <Section
        title="Navigation cards"
        description="Jump straight into the shared system resources."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {foundations.map((foundation) => (
            <FoundationCard
              key={foundation.title}
              title={foundation.title}
              description={foundation.description}
              href={foundation.href}
              eyebrow={foundation.eyebrow}
            >
              {foundation.preview}
            </FoundationCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
