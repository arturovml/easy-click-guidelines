# DataTable

Standard table wrapper with clear headers and aligned numeric columns.

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Occupancy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Downtown</TableCell>
          <TableCell>Stable</TableCell>
          <TableCell className="text-right">92%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```
