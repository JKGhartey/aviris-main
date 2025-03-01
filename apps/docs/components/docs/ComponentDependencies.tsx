import { ComponentDoc } from "~/config/types";
import { cn } from "@aviris/ui/lib/utils";
import { CopyButton } from "@aviris/ui/components/copy-button";

interface ComponentDependenciesProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentDependencies({
  component,
  className,
}: ComponentDependenciesProps) {
  const { metadata } = component;

  if (!metadata?.dependencies?.length) {
    return null;
  }

  const npmInstall = `npm install ${metadata.dependencies.join(" ")}`;
  const yarnAdd = `yarn add ${metadata.dependencies.join(" ")}`;
  const pnpmAdd = `pnpm add ${metadata.dependencies.join(" ")}`;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Dependencies</h2>
      </div>
      <div className="space-y-4 rounded-lg border p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">npm</p>
            <CopyButton value={npmInstall} />
          </div>
          <pre className="mt-2 rounded-md bg-muted p-4">
            <code className="text-sm">{npmInstall}</code>
          </pre>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">yarn</p>
            <CopyButton value={yarnAdd} />
          </div>
          <pre className="mt-2 rounded-md bg-muted p-4">
            <code className="text-sm">{yarnAdd}</code>
          </pre>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">pnpm</p>
            <CopyButton value={pnpmAdd} />
          </div>
          <pre className="mt-2 rounded-md bg-muted p-4">
            <code className="text-sm">{pnpmAdd}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
