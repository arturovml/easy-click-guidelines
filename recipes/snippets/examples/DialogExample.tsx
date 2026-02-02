"use client";

import { useState } from "react";
import { Button } from "@/recipes/snippets/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/recipes/snippets/ui/dialog";

export function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm daily close</DialogTitle>
            <DialogDescription>
              Closing the day will lock current sales and generate a summary
              report for leadership.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 rounded-md border border-border bg-surface-muted p-3 text-sm text-muted-foreground">
            You can still export reports after closing, but edits will be
            disabled.
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button>Close day</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
