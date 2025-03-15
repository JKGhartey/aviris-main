import { FolderStructurePreview } from "~/components/previews/FolderStructurePreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Folder Structure | Aviris UI",
  description:
    "A component for displaying folder and file structures in a tree view.",
};

export default function FolderStructurePage() {
  return (
    <div className="container py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Folder Structure</h1>
        <p className="text-lg text-muted-foreground">
          A component for displaying folder and file structures in a tree view.
        </p>
      </div>
      <div className="mt-10">
        <FolderStructurePreview />
      </div>
    </div>
  );
}
