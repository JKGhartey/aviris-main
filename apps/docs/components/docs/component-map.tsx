import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const componentMap: Record<string, ComponentType<any>> = {
  "file-upload": dynamic(() =>
    import("@aviris/ui/components/core/FileUpload").then(
      (mod) => mod.FileUpload,
    ),
  ),
  "folder-structure": dynamic(() =>
    import("@aviris/ui/components/core/FolderStructure").then(
      (mod) => mod.FolderStructure,
    ),
  ),
  "api-table": dynamic(() =>
    import("@aviris/ui/components/core/APITable").then((mod) => mod.ApiTable),
  ),
};
