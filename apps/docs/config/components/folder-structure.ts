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
      code: `<FolderStructure items={[
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
]} />`,
    },
    {
      title: "With Descriptions",
      description: "Display additional information about files and folders.",
      code: `<FolderStructure 
  items={[
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "main.ts",
          type: "file",
          description: "Application entry point"
        },
        {
          name: "types",
          type: "folder",
          description: "Type definitions",
          children: [
            {
              name: "index.d.ts",
              type: "file",
              description: "Root type definitions"
            }
          ]
        }
      ]
    }
  ]}
  showDescriptions={true}
/>`,
    },
    {
      title: "Custom Styling",
      description: "Customize the appearance with additional classes.",
      code: `<FolderStructure
  items={[
    {
      name: "styles",
      type: "folder",
      children: [
        {
          name: "globals.css",
          type: "file"
        }
      ]
    }
  ]}
  className="bg-muted/50 p-6 rounded-xl"
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
