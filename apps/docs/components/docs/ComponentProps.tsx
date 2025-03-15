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
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        No props available for this component.
      </div>
    );
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
    <div className={cn("p-6", className)}>
      <ApiTable
        properties={apiTableProps}
        showDefault={true}
        className="[&_td:first-child]:font-mono [&_td:first-child]:text-sm [&_td:nth-child(2)]:font-mono [&_td:nth-child(2)]:text-xs [&_td:nth-child(2)]:text-muted-foreground"
      />
    </div>
  );
}
