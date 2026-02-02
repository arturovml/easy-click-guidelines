# SectionCard

Lightweight container for secondary content or quick context.

```tsx
import { Card } from "@/components/ui/card";

export function SectionCard() {
  return (
    <Card className="space-y-2">
      <div className="text-sm font-semibold">Notes</div>
      <p className="text-sm text-muted-foreground">
        Use this area for contextual guidance or alerts.
      </p>
    </Card>
  );
}
```
