import { ComponentDoc } from "~/config/types";
import { CopyButton } from "@aviris/ui/components/copy-button";
import { Package } from "lucide-react";
import { cn } from "@aviris/ui/lib/utils";

interface ComponentDependenciesProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentDependencies({
  component,
  className,
}: ComponentDependenciesProps) {
  const { metadata } = component;
  const dependencies = metadata?.dependencies || [];

  if (!dependencies.length) {
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        No dependencies required for this component.
      </div>
    );
  }

  const npmInstall = `npm install ${dependencies.join(" ")}`;

  return (
    <div className={cn("space-y-4 p-6", className)}>
      <div className="flex items-center gap-2 rounded-md bg-muted/50 px-4 py-3 text-sm">
        <Package className="h-4 w-4 text-muted-foreground" />
        <code className="text-muted-foreground">{npmInstall}</code>
        <div className="flex-1" />
        <CopyButton value={npmInstall} />
      </div>
      <ul className="grid gap-2 text-sm text-muted-foreground">
        {dependencies.map((dep) => (
          <li key={dep} className="flex items-center gap-2">
            <span className="font-medium">{dep}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
