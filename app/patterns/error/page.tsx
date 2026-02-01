import { PatternPage } from "@/components/patterns/PatternPage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";

export default function ErrorPattern() {
  return (
    <PatternPage
      title="Error pattern"
      description="Errors should preserve context, explain what happened, and offer recovery."
      eyebrow="Pattern / Error"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <div className="text-sm font-semibold">Inline error</div>
          <Alert
            variant="error"
            title="Payment failed"
            description="We could not reach the processor. Try again or switch payment method."
          />
          <div className="flex gap-3">
            <Button>Retry payment</Button>
            <Button variant="secondary">Change method</Button>
          </div>
        </Card>
        <Card className="space-y-4">
          <div className="text-sm font-semibold">Page-level error</div>
          <div className="rounded-md border border-border bg-surface-muted p-4 text-sm text-muted-foreground">
            We couldn’t load the dispatch board. The service may be offline.
          </div>
          <div className="flex gap-3">
            <Button>Reload</Button>
            <Button variant="ghost">Contact support</Button>
          </div>
        </Card>
      </div>
    </PatternPage>
  );
}
