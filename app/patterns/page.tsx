import { Section } from "@/components/Section";
import { FoundationCard } from "@/components/FoundationCard";

const patterns = [
  {
    title: "Screen Layout",
    description: "Standard screen hierarchy for operational clarity.",
    href: "/patterns/screen-layout",
  },
  {
    title: "Primary Action",
    description: "Button hierarchy and do/don’t guidance.",
    href: "/patterns/primary-action",
  },
  {
    title: "Empty State",
    description: "Guidance for empty cards and tables.",
    href: "/patterns/empty-state",
  },
  {
    title: "Loading",
    description: "Skeleton-driven loading behaviors.",
    href: "/patterns/loading",
  },
  {
    title: "Form",
    description: "Defaults, inline validation, and clear errors.",
    href: "/patterns/form",
  },
  {
    title: "Modal vs Page",
    description: "When to use modals versus full pages.",
    href: "/patterns/modal-vs-page",
  },
  {
    title: "Error",
    description: "Inline and page-level recovery patterns.",
    href: "/patterns/error",
  },
];

export default function PatternsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          UX Patterns
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Patterns library</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Live implementations of the Easy Click UX Rules, ready to reuse across
          products.
        </p>
      </header>

      <Section
        title="Pattern pages"
        description="Each pattern includes rules and live, accessible examples."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {patterns.map((pattern) => (
            <FoundationCard
              key={pattern.title}
              title={pattern.title}
              description={pattern.description}
              href={pattern.href}
              eyebrow="Pattern"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
