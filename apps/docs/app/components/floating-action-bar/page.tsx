import ComponentTemplate from "~/templates/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floating Action Bar | Aviris UI",
  description:
    "A floating action bar component that expands to show additional actions.",
};

export default function FloatingActionBarPage() {
  return <ComponentTemplate componentId="floating-action-bar" />;
}
