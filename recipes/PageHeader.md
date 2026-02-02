# PageHeader

Standard header block with title, description, and primary action.

```tsx
import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <header className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Inventory
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Stock overview</h1>
          <p className="text-sm text-muted-foreground">
            Track availability across locations and adjust quickly.
          </p>
        </div>
        <Button>Request transfer</Button>
      </div>
    </header>
  );
}
```
