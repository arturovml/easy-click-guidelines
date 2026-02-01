export default function QAPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Quality Assurance
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Release QA</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Track readiness checks for Easy Click releases and product updates.
        </p>
      </header>

      <div className="rounded-lg border border-border bg-surface p-6 shadow-card">
        <div className="text-sm font-semibold">Checklist snapshot</div>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Theme regression pass (light + dark)</li>
          <li>Core component usage review</li>
          <li>Accessibility sweep on navigation</li>
          <li>Performance pass for dashboards</li>
        </ul>
      </div>
    </div>
  );
}
