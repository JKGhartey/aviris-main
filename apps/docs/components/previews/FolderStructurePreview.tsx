import { FolderStructure } from "@aviris/ui/components/core/FolderStructure";
import { PreviewContainer } from "./PreviewContainer";

// Example data
const FOLDER_ITEMS = [
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

const DETAILED_FOLDER_ITEMS = [
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

export const FolderStructurePreview = () => (
  <>
    <PreviewContainer
      title="Basic Example"
      description="A simple folder structure with basic files and folders."
      component={
        <FolderStructure items={FOLDER_ITEMS} className="min-h-[200px]" />
      }
    />
    <PreviewContainer
      title="With Descriptions and Colors"
      description="Enhanced folder structure with descriptions and custom colors."
      component={
        <FolderStructure
          items={DETAILED_FOLDER_ITEMS}
          showDescriptions={true}
          className="min-h-[200px]"
        />
      }
    />
  </>
);
