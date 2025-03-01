import { Badge } from "@aviris/ui/components/ui/badge";
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
  const { name, description, status, metadata, icon: Icon } = component;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-4">
        {Icon && <Icon className="h-8 w-8" />}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Badge
          variant={status === "stable" ? "default" : "secondary"}
          className="ml-auto"
        >
          {status}
        </Badge>
      </div>

      {metadata && (
        <div className="grid grid-cols-2 gap-4 rounded-lg border p-4 md:grid-cols-4">
          {metadata.version && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Version</p>
              <p className="text-sm text-muted-foreground">
                {metadata.version}
              </p>
            </div>
          )}
          {metadata.author && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Author</p>
              <p className="text-sm text-muted-foreground">{metadata.author}</p>
            </div>
          )}
          {metadata.package && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Package</p>
              <p className="text-sm font-mono text-muted-foreground">
                {metadata.package}
              </p>
            </div>
          )}
          {metadata.sourceUrl && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Source</p>
              <a
                href={metadata.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                View on GitHub
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
