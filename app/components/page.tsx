"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { Card, CardHeader, CardStat } from "@/components/ui/card";
import { ToastProvider } from "@/components/ui/toast";
import { FormExample } from "@/components/examples/FormExample";
import { DialogExample } from "@/components/examples/DialogExample";
import { TableExample } from "@/components/examples/TableExample";
import { ToastExample } from "@/components/examples/ToastExample";

const sections = [
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Inputs & Forms" },
  { id: "cards", label: "Cards" },
  { id: "badges", label: "Badges & Chips" },
  { id: "alerts", label: "Alerts" },
  { id: "table", label: "Table" },
  { id: "dialog", label: "Modal" },
  { id: "toasts", label: "Toasts" },
];

export default function ComponentsPage() {
  return (
    <ToastProvider>
      <div className="space-y-12">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Component Gallery
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Core UI components
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            A calm, production-ready component baseline for Easy POS, Easy
            Parking, Easy Production, and future Easy Click tools.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[200px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-3 rounded-lg border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Sections
              </p>
              <nav className="space-y-2 text-sm">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-12">
            <Section
              title="Buttons"
              description="Primary actions, secondary actions, and utility controls."
              className="scroll-mt-24"
            >
              <div id="buttons" className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" aria-label="Export report">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v12" />
                      <path d="M7 10l5 5 5-5" />
                      <path d="M5 21h14" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Section>

            <Section
              title="Inputs & Forms"
              description="Text inputs, selection controls, and a structured example form."
              className="scroll-mt-24"
            >
              <div id="forms" className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <Input placeholder="Text input" />
                  <Input type="number" placeholder="Number input" />
                  <Input type="search" placeholder="Search input" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Select>
                    <option value="">Select a region</option>
                    <option>North district</option>
                    <option>Central</option>
                    <option>South</option>
                  </Select>
                  <Textarea placeholder="Textarea for operational notes." />
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <Checkbox label="Require supervisor approval" />
                  <Switch checked={true} onCheckedChange={() => {}} />
                </div>
                <div className="rounded-lg border border-border bg-surface p-6 shadow-card">
                  <FormExample />
                </div>
              </div>
            </Section>

            <Section
              title="Cards"
              description="Surface containers for data, actions, and metrics."
              className="scroll-mt-24"
            >
              <div id="cards" className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader
                    title="Dispatch summary"
                    description="Today’s routing performance overview."
                  />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <CardStat label="On-time deliveries" value="92%" trend="+4%" />
                    <CardStat label="Active routes" value="38" trend="+6" />
                  </div>
                </Card>
                <Card className="space-y-6">
                  <CardHeader
                    title="Inventory status"
                    description="Realtime stock health by location."
                    action={<Button size="sm">Review</Button>}
                  />
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Downtown warehouse is within expected thresholds.</p>
                    <p>Airport location requires replenishment review.</p>
                  </div>
                </Card>
              </div>
            </Section>

            <Section
              title="Badges & Chips"
              description="Status indicators for operational workflows."
              className="scroll-mt-24"
            >
              <div id="badges" className="flex flex-wrap gap-3">
                <Badge>Neutral</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
            </Section>

            <Section
              title="Alerts"
              description="Inline alert messaging with clear hierarchy."
              className="scroll-mt-24"
            >
              <div id="alerts" className="grid gap-4 md:grid-cols-2">
                <Alert
                  variant="info"
                  title="Sync in progress"
                  description="Orders are updating across all stores."
                />
                <Alert
                  variant="success"
                  title="Daily close ready"
                  description="All terminals reported on-time."
                />
                <Alert
                  variant="warning"
                  title="Capacity warning"
                  description="Garage occupancy over 85%."
                />
                <Alert
                  variant="error"
                  title="Payment outage"
                  description="Fallback processing is enabled."
                />
              </div>
            </Section>

            <Section
              title="Table"
              description="Tabular data with hover, stripes, and empty state."
              className="scroll-mt-24"
            >
              <div id="table">
                <TableExample />
              </div>
            </Section>

            <Section
              title="Modal"
              description="Dialog for confirmations and focused decisions."
              className="scroll-mt-24"
            >
              <div id="dialog">
                <DialogExample />
              </div>
            </Section>

            <Section
              title="Toasts"
              description="Lightweight notifications for success and error states."
              className="scroll-mt-24"
            >
              <div id="toasts">
                <ToastExample />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}
