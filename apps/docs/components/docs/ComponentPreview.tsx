import dynamic from "next/dynamic";
import { cn } from "@aviris/ui/lib/utils";
import { ComponentType } from "react";

interface ComponentPreviewProps {
  componentId: string;
  code: string;
  className?: string;
}

const componentMap: Record<string, ComponentType<any>> = {
  "file-upload": dynamic(() =>
    import("@aviris/ui/components/core/FileUpload").then(
      (mod) => mod.FileUpload,
    ),
  ),
};

export function ComponentPreview({
  componentId,
  code,
  className,
}: ComponentPreviewProps) {
  const Component = componentMap[componentId as keyof typeof componentMap];

  if (!Component) {
    return (
      <div
        className={cn(
          "rounded-lg border-2 border-dashed border-muted-foreground/20 p-10 text-center text-sm text-muted-foreground",
          className,
        )}
      >
        Component preview not available
      </div>
    );
  }

  // Extract props from the code string
  const getPropsFromCode = (code: string) => {
    try {
      // Find the component usage in the code
      const match = code.match(/<([A-Za-z]+)\s+([^>]+)\/>/);
      if (!match?.[2]) return {};

      const propsString = match[2];
      const props: Record<string, any> = {};

      // Parse each prop
      const propMatches = Array.from(propsString.matchAll(/(\w+)={([^}]+)}/g));
      for (const [, key, value] of propMatches) {
        if (key && value) {
          try {
            // eslint-disable-next-line no-eval
            props[key] = eval(value);
          } catch {
            props[key] = value;
          }
        }
      }

      return props;
    } catch (error) {
      console.error("Error parsing props:", error);
      return {};
    }
  };

  const props = getPropsFromCode(code);

  return (
    <div className={cn("bg-background p-10", className)}>
      <Component {...props} />
    </div>
  );
}
