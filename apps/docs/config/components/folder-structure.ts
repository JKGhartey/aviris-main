import { ComponentDoc } from "../types";

export const folderStructureConfig: ComponentDoc = {
  name: "Folder Structure",
  description:
    "A component for displaying folder and file structures in a tree view.",
  status: "stable",
  examples: [
    {
      title: "Default",
      description: "A basic folder structure display.",
      code: `<FolderStructure
  items={[
    {
      name: "app",
      type: "folder",
      children: [
        {
          name: "page.tsx",
          type: "file"
        },
        {
          name: "layout.tsx",
          type: "file"
        }
      ]
    }
  ]}
  defaultExpanded={true}
/>`,
    },
    {
      title: "With Descriptions and Colors",
      description:
        "Display additional information and custom colors for items.",
      code: `<FolderStructure 
  items={[
    {
      name: "src",
      type: "folder",
      color: "#e6b800",
      children: [
        {
          name: "main.ts",
          type: "file",
          description: "Application entry point",
          color: "#0066cc"
        },
        {
          name: "types",
          type: "folder",
          description: "Type definitions",
          color: "#e6b800",
          children: [
            {
              name: "index.d.ts",
              type: "file",
              description: "Root type definitions",
              color: "#0066cc"
            }
          ]
        }
      ]
    }
  ]}
  showDescriptions={true}
/>`,
    },
  ],
  props: [
    {
      name: "items",
      type: "FolderStructureItem[]",
      description: "Array of items to display in the folder structure.",
      default: "[]",
      required: true,
    },
    {
      name: "showDescriptions",
      type: "boolean",
      default: "false",
      description: "Whether to show descriptions for items that have them.",
    },
    {
      name: "defaultExpanded",
      type: "boolean",
      default: "false",
      description: "Whether folders should be expanded by default.",
    },
    {
      name: "className",
      type: "string",
      default: "",
      description: "Additional CSS classes to apply to the root element.",
    },
  ],
  metadata: {
    sourceUrl: "components/ui/folder-structure.tsx",
    package: "@aviris/ui",
    dependencies: ["lucide-react"],
  },
};
