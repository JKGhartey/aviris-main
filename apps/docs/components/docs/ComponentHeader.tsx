import { StatusBadge } from "@aviris/ui/components/badge-custom";
import { cn } from "@aviris/ui/lib/utils";
import { ComponentDoc } from "~/config/types";

interface ComponentHeaderProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentHeader({
  component,
  className,
}: ComponentHeaderProps) {
  const { name, description, status } = component;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="border-b pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {description}
            </p>
          </div>
          <StatusBadge
            variant={status as "stable" | "beta" | "alpha"}
            className="capitalize"
          >
            {status}
          </StatusBadge>
        </div>
      </div>
    </div>
  );
}
