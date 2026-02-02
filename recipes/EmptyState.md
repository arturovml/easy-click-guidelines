# EmptyState

Explains what the section is, why it is empty, and what to do next.

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EmptyStateCard() {
  return (
    <Card className="space-y-3">
      <div className="text-sm font-semibold">Orders</div>
      <p className="text-sm text-muted-foreground">
        There are no orders yet. Create your first order to start tracking fulfillment.
      </p>
      <Button size="sm">Create order</Button>
    </Card>
  );
}
```
