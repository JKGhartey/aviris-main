import { Metadata } from "next";
import ComponentTemplate from "~/templates/component";

export const metadata: Metadata = {
  title: "Folder Structure | Aviris UI",
  description:
    "A component for displaying folder and file structures in a tree view.",
};

export default function FolderStructurePage() {
  return <ComponentTemplate componentId="folder-structure" />;
}
