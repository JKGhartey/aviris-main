import { Edit, Trash } from "lucide-react";

import { FloatingActionBar } from "@aviris/ui/components/core/FloatingActionBar";
import { toast } from "sonner";
import { useState } from "react";

export const FloatingActionBarPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative h-[200px]">
      <FloatingActionBar
        expanded={isExpanded}
        onToggle={setIsExpanded}
        className="absolute"
        actions={[
          {
            icon: <Edit className="h-4 w-4" />,
            label: "Edit",
            onClick: () => toast.info("Edit clicked"),
          },
          {
            icon: <Trash className="h-4 w-4" />,
            label: "Delete",
            onClick: () => toast.info("Delete clicked"),
          },
        ]}
      />
    </div>
  );
};
