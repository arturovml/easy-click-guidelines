import { PatternPage } from "@/components/patterns/PatternPage";
import { Card } from "@/components/ui/card";
import { FormExample } from "@/components/examples/FormExample";

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
