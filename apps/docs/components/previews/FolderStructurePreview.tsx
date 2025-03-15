"use client";

import { FolderStructure } from "@aviris/ui/components/core/FolderStructure";
import { toast } from "sonner";
import { useState } from "react";

export function FolderStructurePreview() {
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);

  const simpleItems = [
    {
      name: "app",
      type: "folder" as const,
      children: [
        { name: "page.tsx", type: "file" as const },
        { name: "layout.tsx", type: "file" as const },
        {
          name: "components",
          type: "folder" as const,
          children: [
            { name: "header.tsx", type: "file" as const },
            { name: "footer.tsx", type: "file" as const },
          ],
        },
      ],
    },
    { name: "package.json", type: "file" as const },
  ];

  const detailedItems = [
    {
      name: "src",
      type: "folder" as const,
      description: "Source files",
      color: "#e6b800",
      children: [
        {
          name: "components",
          type: "folder" as const,
          description: "UI Components",
          color: "#0066cc",
          children: [
            {
              name: "Button.tsx",
              type: "file" as const,
              description: "Button component",
              color: "#00cc66",
            },
            {
              name: "Card.tsx",
              type: "file" as const,
              description: "Card component",
              color: "#00cc66",
            },
          ],
        },
        {
          name: "types",
          type: "folder" as const,
          description: "Type definitions",
          color: "#0066cc",
          children: [
            {
              name: "index.d.ts",
              type: "file" as const,
              description: "Root type definitions",
              color: "#00cc66",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      type: "file" as const,
      description: "Project configuration",
      color: "#cc6600",
    },
  ];

  const handleToggle = (path: string, isOpen: boolean) => {
    setExpandedPaths((prev) =>
      isOpen ? [...prev, path] : prev.filter((p) => p !== path),
    );
    toast.info(
      isOpen
        ? `Expanded: ${path.split("/").pop()}`
        : `Collapsed: ${path.split("/").pop()}`,
    );
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Basic Example</h3>
          <p className="text-sm text-muted-foreground">
            A simple folder structure with basic files and folders.
          </p>
        </div>
        <FolderStructure
          items={simpleItems}
          onToggle={handleToggle}
          className="min-h-[200px]"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">With Descriptions and Colors</h3>
          <p className="text-sm text-muted-foreground">
            Enhanced folder structure with descriptions and custom colors.
          </p>
        </div>
        <FolderStructure
          items={detailedItems}
          showDescriptions={true}
          onToggle={handleToggle}
          className="min-h-[200px]"
        />
      </div>
    </div>
  );
}
