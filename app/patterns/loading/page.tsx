import { PatternPage } from "@/components/patterns/PatternPage";
import { Card } from "@/components/ui/card";

export default function LoadingPattern() {
  return (
    <PatternPage
      title="Loading pattern"
      description="Use skeletons to preserve layout and avoid blank screens."
      eyebrow="Pattern / Loading"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <div className="space-y-3">
            <div className="h-4 w-24 animate-pulse rounded bg-surface-muted" />
            <div className="h-10 w-full animate-pulse rounded bg-surface-muted" />
            <div className="h-10 w-full animate-pulse rounded bg-surface-muted" />
          </div>
        </Card>
        <Card>
          <div className="space-y-4">
            <div className="h-4 w-32 animate-pulse rounded bg-surface-muted" />
            <div className="h-24 w-full animate-pulse rounded bg-surface-muted" />
            <div className="h-3 w-20 animate-pulse rounded bg-surface-muted" />
          </div>
        </Card>
        <Card>
          <div className="space-y-3">
            <div className="h-4 w-28 animate-pulse rounded bg-surface-muted" />
            <div className="h-8 w-full animate-pulse rounded bg-surface-muted" />
            <div className="h-8 w-full animate-pulse rounded bg-surface-muted" />
            <div className="h-8 w-full animate-pulse rounded bg-surface-muted" />
          </div>
        </Card>
      </div>
    </PatternPage>
  );
}
