import { PatternPage } from "@/components/patterns/PatternPage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogExample } from "@/components/examples/DialogExample";

export default function ModalVsPagePattern() {
  return (
    <PatternPage
      title="Modal vs page pattern"
      description="Use modals for short, contained actions. Use pages for multi-step workflows."
      eyebrow="Pattern / Modal vs Page"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <div className="text-sm font-semibold">Modal</div>
          <p className="text-sm text-muted-foreground">
            Quick confirmations or lightweight edits. No scrolling required.
          </p>
          <DialogExample />
        </Card>
        <Card className="space-y-4">
          <div className="text-sm font-semibold">Page</div>
          <p className="text-sm text-muted-foreground">
            Use for longer workflows that need focus, context, or multiple steps.
          </p>
          <div className="rounded-md border border-border bg-surface-muted p-4 text-sm text-muted-foreground">
            Step 1: Confirm inventory list
            <div className="mt-2">Step 2: Assign to location</div>
            <div className="mt-2">Step 3: Review and submit</div>
          </div>
          <div className="flex gap-3">
            <Button>Continue</Button>
            <Button variant="ghost">Save draft</Button>
          </div>
        </Card>
      </div>
    </PatternPage>
  );
}
