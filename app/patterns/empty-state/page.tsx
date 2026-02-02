import { PatternPage } from "@/components/patterns/PatternPage";
import { Button } from "@/recipes/snippets/ui/button";
import { Card } from "@/recipes/snippets/ui/card";
import { TableEmpty } from "@/recipes/snippets/ui/table";

export default function EmptyStatePattern() {
  return (
    <PatternPage
      title="Empty state pattern"
      description="Every empty state explains what this section is, why it is empty, and what to do next."
      eyebrow="Pattern / Empty State"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-3">
            <div className="text-sm font-semibold">Orders</div>
            <div className="rounded-md border border-border bg-surface-muted p-4 text-sm text-muted-foreground">
              There are no orders yet. Create your first order to start tracking
              fulfillment.
            </div>
            <Button size="sm">Create order</Button>
          </div>
        </Card>
        <div className="space-y-3">
          <div className="text-sm font-semibold">Table empty state</div>
          <TableEmpty>
            No orders found for this date range. Adjust filters or create a new
            order.
          </TableEmpty>
          <Button variant="secondary" size="sm">
            Add order
          </Button>
        </div>
      </div>
    </PatternPage>
  );
}
