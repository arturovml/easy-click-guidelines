import { PatternPage } from "@/components/patterns/PatternPage";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";

export default function ScreenLayoutPattern() {
  return (
    <PatternPage
      title="Screen layout pattern"
      description="Every screen should prioritize a single primary action with clear supporting content."
      eyebrow="Pattern / Screen Layout"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader
            title="Inventory overview"
            description="Monitor stock health across locations."
            action={<Button>Request transfer</Button>}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <div className="rounded-md border border-border bg-surface-muted p-4 text-sm text-muted-foreground">
                Primary action zone: quick controls and filters.
              </div>
              <Table>
                <TableHead>
                  <TableRow className="bg-surface-muted">
                    <TableCell>Location</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Stock</TableCell>
                  </TableRow>
                </TableHead>
                <tbody>
                  <TableRow className="bg-surface">
                    <TableCell>Downtown</TableCell>
                    <TableCell>Stable</TableCell>
                    <TableCell align="right">92%</TableCell>
                  </TableRow>
                  <TableRow className="bg-background">
                    <TableCell>Airport</TableCell>
                    <TableCell>Watch</TableCell>
                    <TableCell align="right">71%</TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </div>
            <div className="rounded-md border border-border bg-surface-muted p-4 text-sm text-muted-foreground">
              Secondary content: alerts, notes, or supporting info.
            </div>
          </div>
        </Card>
      </div>
    </PatternPage>
  );
}
