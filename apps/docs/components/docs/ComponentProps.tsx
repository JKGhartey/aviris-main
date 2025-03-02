import { ApiTable } from "@aviris/ui/components/core/APITable";
import { ComponentDoc } from "~/config/types";
import { cn } from "@aviris/ui/lib/utils";

interface ComponentPropsProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentProps({ component, className }: ComponentPropsProps) {
  const { props } = component;

  if (!props?.length) {
    return null;
  }

  // Convert ComponentDoc props to APITable props format
  const apiTableProps = props.map((prop) => ({
    name: prop.name,
    type: prop.type,
    defaultValue: prop.default === "undefined" ? "-" : prop.default,
    description: prop.required
      ? `${prop.description} (Required)`
      : prop.description,
  }));

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Props</h2>
      </div>
      <ApiTable properties={apiTableProps} showDefault={true} />
    </div>
  );
}
