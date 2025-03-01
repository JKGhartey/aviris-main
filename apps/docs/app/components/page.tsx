"use client";

import { Card } from "@aviris/ui/components/ui/card";
import { Badge } from "@aviris/ui/components/ui/badge";
import { DocsPager } from "~/components/DocsPager";

const components = [
  {
    name: "File Upload",
    description: "Advanced file upload component with drag and drop support",
    status: "stable",
    href: "/components/file-upload",
  },
  {
    name: "Job Application",
    description: "Multi-step job application form with validation",
    status: "beta",
    href: "/components/job-application",
  },
  {
    name: "Kanban Board",
    description: "Drag and drop kanban board for task management",
    status: "beta",
    href: "/components/kanban-board",
  },
  {
    name: "Analytics Dashboard",
    description: "Data visualization dashboard with real-time updates",
    status: "coming-soon",
    href: "/components/analytics-dashboard",
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Components
        </h1>
        <p className="text-lg text-muted-foreground">
          A collection of pre-built components ready to enhance your React
          applications.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card
            key={component.name}
            className="flex flex-col p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{component.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </div>
              <Badge
                variant={
                  component.status === "stable"
                    ? "default"
                    : component.status === "beta"
                      ? "secondary"
                      : "outline"
                }
              >
                {component.status}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      <DocsPager />
    </div>
  );
}
