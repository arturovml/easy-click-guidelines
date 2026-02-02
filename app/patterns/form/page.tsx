import { PatternPage } from "@/components/patterns/PatternPage";
import { Card } from "@/recipes/snippets/ui/card";
import { FormExample } from "@/recipes/snippets/examples/FormExample";

export default function FormPattern() {
  return (
    <PatternPage
      title="Form pattern"
      description="Defaults, inline validation, and human-readable error messaging."
      eyebrow="Pattern / Form"
    >
      <Card>
        <FormExample />
      </Card>
    </PatternPage>
  );
}
