import { PatternPage } from "@/components/patterns/PatternPage";
import { Button } from "@/recipes/snippets/ui/button";
import { Card } from "@/recipes/snippets/ui/card";

export default function PrimaryActionPattern() {
  return (
    <PatternPage
      title="Primary action pattern"
      description="One primary action per screen, with supporting secondary actions."
      eyebrow="Pattern / Primary Action"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Do
          </div>
          <div className="mt-4 space-y-4">
            <div className="text-sm text-muted-foreground">
              Primary action is dominant and singular.
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Charge customer</Button>
              <Button variant="secondary">Save draft</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </Card>
        <Card>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Don’t
          </div>
          <div className="mt-4 space-y-4">
            <div className="text-sm text-muted-foreground">
              Multiple primaries create competition and slow decisions.
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Charge customer</Button>
              <Button>Save draft</Button>
              <Button variant="destructive">Delete order</Button>
            </div>
          </div>
        </Card>
      </div>
    </PatternPage>
  );
}
