"use client";

import { Edit, Trash } from "lucide-react";
import {
  FileUpload,
  FileWithPreview,
} from "@aviris/ui/components/core/FileUpload";

import { ApiTable } from "@aviris/ui/components/core/APITable";
import { FloatingActionBar } from "@aviris/ui/components/core/FloatingActionBar";
import { FolderStructure } from "@aviris/ui/components/core/FolderStructure";
import { Notifications } from "@aviris/ui/components/core/Notifications";
import { toast } from "sonner";
import { useState } from "react";

interface ComponentPreviewProps {
  componentId: string;
}

export function ComponentPreview({ componentId }: ComponentPreviewProps) {
  // State for different components
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isActionBarExpanded, setIsActionBarExpanded] = useState(false);

  // Example data
  const folderItems = [
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

  const detailedFolderItems = [
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
      ],
    },
  ];

  // Event handlers
  const handleFilesChange = (newFiles: FileWithPreview[]) => {
    setFiles(newFiles);
    // Simulate file upload
    newFiles
      .filter((file) => file.status === "idle")
      .forEach((file) => {
        const updatedFile = { ...file, status: "uploading" as const };
        setFiles((prev) =>
          prev.map((f) => (f.id === file.id ? updatedFile : f)),
        );

        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          if (progress <= 100) {
            setFiles((prev) =>
              prev.map((f) => (f.id === file.id ? { ...f, progress } : f)),
            );
          } else {
            clearInterval(interval);
            setFiles((prev) =>
              prev.map((f) =>
                f.id === file.id
                  ? { ...f, status: "success" as const, progress: 100 }
                  : f,
              ),
            );
          }
        }, 500);
      });
  };

  // Render different components based on componentId
  switch (componentId) {
    case "file-upload":
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Example</h3>
              <p className="text-sm text-muted-foreground">
                Upload files with progress tracking and preview.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <FileUpload
                value={files}
                onFilesChange={handleFilesChange}
                maxFiles={3}
                maxSize={5 * 1024 * 1024}
                accept={{
                  "image/*": [],
                  "application/pdf": [],
                }}
              />
            </div>
          </div>
        </div>
      );

    case "folder-structure":
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Example</h3>
              <p className="text-sm text-muted-foreground">
                A simple folder structure with basic files and folders.
              </p>
            </div>
            <FolderStructure items={folderItems} className="min-h-[200px]" />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                With Descriptions and Colors
              </h3>
              <p className="text-sm text-muted-foreground">
                Enhanced folder structure with descriptions and custom colors.
              </p>
            </div>
            <FolderStructure
              items={detailedFolderItems}
              showDescriptions={true}
              className="min-h-[200px]"
            />
          </div>
        </div>
      );

    case "floating-action-bar":
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Example</h3>
              <p className="text-sm text-muted-foreground">
                A floating action bar that appears when content is selected.
              </p>
            </div>
            <div className="relative h-[200px] rounded-lg border p-4">
              <FloatingActionBar
                expanded={isActionBarExpanded}
                onToggle={setIsActionBarExpanded}
                className="absolute"
                actions={[
                  {
                    icon: <Edit className="h-4 w-4" />,
                    label: "Edit",
                    onClick: () => toast.info("Edit clicked"),
                  },
                  {
                    icon: <Trash className="h-4 w-4" />,
                    label: "Delete",
                    onClick: () => toast.info("Delete clicked"),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      );

    case "notifications":
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Example</h3>
              <p className="text-sm text-muted-foreground">
                A notification system with different types of notifications.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <Notifications />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    toast.info("New message", {
                      description: "You have a new message from John Doe",
                    })
                  }
                  className="rounded-md bg-primary px-3 py-2 text-sm text-white"
                >
                  Show Info
                </button>
                <button
                  onClick={() =>
                    toast.success("Success", {
                      description: "Your changes have been saved",
                    })
                  }
                  className="rounded-md bg-primary px-3 py-2 text-sm text-white"
                >
                  Show Success
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case "api-table":
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Example</h3>
              <p className="text-sm text-muted-foreground">
                Display API documentation in a structured table format.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <ApiTable
                properties={[
                  {
                    name: "id",
                    type: "string",
                    description: "Unique identifier for the resource",
                    defaultValue: "undefined",
                  },
                  {
                    name: "title",
                    type: "string",
                    description: "Title of the resource",
                    defaultValue: "undefined",
                  },
                  {
                    name: "description",
                    type: "string",
                    description: "Detailed description of the resource",
                    defaultValue: "undefined",
                  },
                  {
                    name: "createdAt",
                    type: "Date",
                    description: "When the resource was created",
                    defaultValue: "undefined",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex h-[200px] items-center justify-center rounded-lg">
          <p className="text-muted-foreground">Preview not available</p>
        </div>
      );
  }
}
