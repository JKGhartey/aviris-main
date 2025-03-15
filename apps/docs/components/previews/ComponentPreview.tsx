"use client";

import {
  ApiTablePreview,
  FileUploadPreview,
  FloatingActionBarPreview,
  FolderStructurePreview,
  NotificationsPreview,
  PreviewContainer,
} from "./";

interface PreviewSection {
  title: string;
  description: string;
  render: () => React.ReactNode;
}

// Component Registry
const PREVIEW_COMPONENTS: Record<string, PreviewSection> = {
  "file-upload": {
    title: "Basic Example",
    description: "Upload files with progress tracking and preview.",
    render: FileUploadPreview,
  },
  "folder-structure": {
    title: "Folder Structure",
    description: "Display hierarchical folder structures.",
    render: FolderStructurePreview,
  },
  "floating-action-bar": {
    title: "Floating Action Bar",
    description: "A floating action bar that appears when content is selected.",
    render: FloatingActionBarPreview,
  },
  notifications: {
    title: "Notifications",
    description: "A notification system with different types of notifications.",
    render: NotificationsPreview,
  },
  "api-table": {
    title: "API Table",
    description: "Display API documentation in a structured table format.",
    render: ApiTablePreview,
  },
};

// Main Component
export function ComponentPreview({ componentId }: { componentId: string }) {
  const preview = PREVIEW_COMPONENTS[componentId];

  if (!preview) {
    return (
      <div className="flex h-[200px] items-center justify-center rounded-lg">
        <p className="text-muted-foreground">Preview not available</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PreviewContainer
        title={preview.title}
        description={preview.description}
        component={preview.render()}
      />
    </div>
  );
}
