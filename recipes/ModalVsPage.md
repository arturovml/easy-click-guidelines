# Modal vs Page

Use a modal for short, contained actions. Use a page for multi-step workflows.

```tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ModalExample({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm daily close</DialogTitle>
          <DialogDescription>
            Closing the day will lock current sales and generate a summary report.
          </DialogDescription>
        </DialogHeader>
        <Button className="mt-4">Close day</Button>
      </DialogContent>
    </Dialog>
  );
}
```
