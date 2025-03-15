import { ComponentDoc } from "~/config/types";
import { StatusBadge } from "@aviris/ui/components/badge-custom";
import { cn } from "@aviris/ui/lib/utils";

interface ComponentHeaderProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentHeader({
  component,
  className,
}: ComponentHeaderProps) {
  const { name, description, status, metadata } = component;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="border-b pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <div className="space-y-1">
              <h1 className="scroll-m-20 text-2xl font-bold tracking-tight sm:text-3xl">
                {name}
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <StatusBadge
            variant={status as "stable" | "beta" | "alpha"}
            className="capitalize shrink-0"
          >
            {status}
          </StatusBadge>
        </div>
      </div>
    </div>
  );
}
