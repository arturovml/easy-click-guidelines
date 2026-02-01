const typographyStyles = [
  {
    label: "Display",
    className: "text-5xl font-semibold tracking-tight",
    copy: "Operational clarity at the speed of work.",
  },
  {
    label: "H1",
    className: "text-4xl font-semibold tracking-tight",
    copy: "Command center for your daily operations.",
  },
  {
    label: "H2",
    className: "text-3xl font-semibold tracking-tight",
    copy: "See performance signals in one glance.",
  },
  {
    label: "H3",
    className: "text-2xl font-semibold tracking-tight",
    copy: "Action-ready dashboards for teams.",
  },
  {
    label: "Body",
    className: "text-base text-foreground",
    copy: "Easy Click keeps every workflow precise, responsive, and organized.",
  },
  {
    label: "Small",
    className: "text-sm text-foreground",
    copy: "Use for annotations, metadata, and compact labels.",
  },
  {
    label: "Muted",
    className: "text-sm text-muted-foreground",
    copy: "Supporting text that maintains hierarchy and focus.",
  },
];

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Foundations / Typography
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Typography system
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A clean, modern type system built for dashboards, operational insights,
          and fast scanning. Use the hierarchy below to maintain clarity and
          consistent voice across products.
        </p>
      </header>

      <section className="space-y-6">
        {typographyStyles.map((style) => (
          <div
            key={style.label}
            className="rounded-lg border border-border bg-surface p-6 shadow-card"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {style.label}
            </div>
            <div className={`mt-3 ${style.className}`}>{style.copy}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
