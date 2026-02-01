"use client";

import { Table, TableCell, TableHead, TableRow, TableEmpty } from "@/components/ui/table";

const rows = [
  { location: "Downtown", status: "On track", occupancy: "86%" },
  { location: "East Lot", status: "Watch", occupancy: "72%" },
  { location: "Airport", status: "On track", occupancy: "91%" },
];

export function TableExample() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHead>
          <TableRow className="bg-surface-muted">
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Occupancy</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={row.location}
              className={index % 2 === 0 ? "bg-surface" : "bg-background"}
            >
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.occupancy}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <TableEmpty>No operational data for the selected range.</TableEmpty>
    </div>
  );
}
