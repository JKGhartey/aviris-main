import { ComponentDoc } from "../types";

export const floatingActionBarConfig: ComponentDoc = {
  name: "Floating Action Bar",
  description:
    "A floating action bar component that expands to show additional actions.",
  status: "stable",
  examples: [
    {
      title: "Basic Example",
      description: "A simple floating action bar with a single action.",
      code: `import { FloatingActionBar } from "@aviris/ui/components/floating-action-bar"

export default function FloatingActionBarExample() {
  return (
    <FloatingActionBar
      onToggle={(expanded) => console.log("Action bar expanded:", expanded)}
    />
  )
}`,
    },
    {
      title: "Advanced Example",
      description: "Floating action bar with multiple actions.",
      code: `import { FloatingActionBar } from "@aviris/ui/components/floating-action-bar"
import { Plus, FileText, Image, Link } from "lucide-react"

export default function AdvancedFloatingActionBar() {
  return (
    <FloatingActionBar
      actions={[
        {
          icon: <FileText className="h-5 w-5" />,
          label: "New Document",
          onClick: () => console.log("New document")
        },
        {
          icon: <Image className="h-5 w-5" />,
          label: "Upload Image",
          onClick: () => console.log("Upload image")
        },
        {
          icon: <Link className="h-5 w-5" />,
          label: "Add Link",
          onClick: () => console.log("Add link")
        }
      ]}
      onToggle={(expanded) => console.log("Action bar expanded:", expanded)}
    />
  )
}`,
    },
  ],
  props: [
    {
      name: "expanded",
      type: "boolean",
      default: "false",
      description: "Whether the action bar is expanded",
    },
    {
      name: "onToggle",
      type: "(expanded: boolean) => void",
      default: "undefined",
      description: "Callback when the action bar is toggled",
    },
    {
      name: "icon",
      type: "React.ReactNode",
      default: "<Plus />",
      description: "Main action button icon",
    },
    {
      name: "label",
      type: "string",
      default: "Add",
      description: "Main action button label",
    },
    {
      name: "actions",
      type: "{ icon: React.ReactNode; label: string; onClick: () => void; }[]",
      default: "[]",
      description: "Additional action items",
    },
  ],
};
