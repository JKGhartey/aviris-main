import { ComponentDoc } from "../types";

const folderStructureConfig: ComponentDoc = {
  name: "Folder Structure",
  description:
    "A component for displaying folder and file structures in a tree view.",
  status: "stable",
  examples: [],
  props: [
    {
      name: "items",
      type: "FolderItem[]",
      description: "Array of folder items to display in the tree view",
      required: true,
      default: "[]",
    },
    {
      name: "onToggle",
      type: "(path: string) => void",
      description: "Callback function when a folder is expanded or collapsed",
      required: false,
      default: "undefined",
    },
    {
      name: "expandedPaths",
      type: "string[]",
      description: "Array of paths that should be expanded",
      required: false,
      default: "[]",
    },
  ],
  metadata: {
    sourceUrl:
      "https://github.com/aviris/aviris/tree/main/packages/ui/src/components/core/FolderStructure.tsx",
    package: "@aviris/ui",
    version: "0.1.0",
  },
};

export default folderStructureConfig;
