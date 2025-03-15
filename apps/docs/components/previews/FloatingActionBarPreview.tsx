import { FileText, Image, Link } from "lucide-react";

import { ComponentWrapper } from "../docs/ComponentWrapper";
import { FloatingActionBar } from "@aviris/ui/components/core/FloatingActionBar";
import { toast } from "sonner";
import { useState } from "react";

interface DemoProps {
  className?: string;
}

export function FloatingActionBarPreview({ className }: DemoProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ComponentWrapper
      name="floating-action-bar"
      description="A floating action button that expands to show multiple actions"
      className={className}
    >
      <div className="h-[200px] relative w-full">
        <FloatingActionBar
          expanded={expanded}
          onToggle={(value) => {
            setExpanded(value);
            toast.success(value ? "Expanded" : "Collapsed");
          }}
          actions={[
            {
              icon: <FileText className="h-5 w-5" />,
              label: "New Document",
              onClick: () => toast.success("New document created"),
            },
            {
              icon: <Image className="h-5 w-5" />,
              label: "Upload Image",
              onClick: () => toast.success("Image uploaded"),
            },
            {
              icon: <Link className="h-5 w-5" />,
              label: "Add Link",
              onClick: () => toast.success("Link added"),
            },
          ]}
        />
      </div>
    </ComponentWrapper>
  );
}
