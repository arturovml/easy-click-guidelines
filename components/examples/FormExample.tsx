"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email."),
  role: z.string().min(1, "Select a role."),
  notes: z.string().min(10, "Add at least 10 characters."),
  updates: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function FormExample() {
  const [automationEnabled, setAutomationEnabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      notes: "",
      updates: true,
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full name</label>
          <Input placeholder="Alex Rivera" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-danger">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Work email</label>
          <Input type="email" placeholder="alex@easyclick.com" {...register("email")} />
          {errors.email ? (
            <p className="text-xs text-danger">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Primary role</label>
          <Select {...register("role")}>
            <option value="">Select role</option>
            <option value="manager">Operations Manager</option>
            <option value="finance">Finance Lead</option>
            <option value="floor">Frontline Supervisor</option>
          </Select>
          {errors.role ? (
            <p className="text-xs text-danger">{errors.role.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Automation mode</label>
          <div className="flex items-center gap-3 rounded-md border border-border bg-surface px-3 py-2">
            <Switch checked={automationEnabled} onCheckedChange={setAutomationEnabled} />
            <span className="text-sm text-muted-foreground">
              Auto-route tasks by priority
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Operational notes</label>
        <Textarea placeholder="Add context for the operations team..." {...register("notes")} />
        {errors.notes ? (
          <p className="text-xs text-danger">{errors.notes.message}</p>
        ) : null}
      </div>

      <div className="flex items-center justify-between">
        <Checkbox label="Send weekly performance updates" {...register("updates")} />
        <Button type="submit" isLoading={isSubmitting}>
          Save setup
        </Button>
      </div>

      {isSubmitSuccessful ? (
        <div className="rounded-md border border-success/30 bg-success-muted px-3 py-2 text-xs text-success">
          Setup saved. Your team will see the updated workflow.
        </div>
      ) : null}
    </form>
  );
}
