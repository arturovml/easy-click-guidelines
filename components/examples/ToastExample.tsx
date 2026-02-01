"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export function ToastExample() {
  const { notify } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="secondary"
        onClick={() =>
          notify({
            title: "Schedule updated",
            description: "Dispatch queue synchronized successfully.",
            variant: "success",
          })
        }
      >
        Show success toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notify({
            title: "Sync failed",
            description: "Unable to reach the parking service.",
            variant: "error",
          })
        }
      >
        Show error toast
      </Button>
    </div>
  );
}
