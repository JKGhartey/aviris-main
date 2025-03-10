import { ComponentType } from "react";
import dynamic from "next/dynamic";

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
  "floating-action-bar": dynamic(() =>
    import("@aviris/ui/components/core/FloatingActionBar").then(
      (mod) => mod.FloatingActionBar,
    ),
  ),
  notifications: dynamic(() =>
    import("@aviris/ui/components/core/Notifications").then(
      (mod) => mod.Notifications,
    ),
  ),
};
