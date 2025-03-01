import { ComponentDoc } from "~/config/types";
import { cn } from "@aviris/ui/lib/utils";
import { CodeBlock } from "@aviris/ui/components/code-block";

interface ComponentExamplesProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentExamples({
  component,
  className,
}: ComponentExamplesProps) {
  const { examples } = component;

  if (!examples?.length) {
    return null;
  }

  return (
    <div className={cn("space-y-10", className)}>
      <div className="flex items-center justify-between border-b pb-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
          <p className="text-sm text-muted-foreground">
            Code examples and usage patterns for the {component.name} component.
          </p>
        </div>
      </div>

      <div className="grid gap-10">
        {examples.map((example) => (
          <div key={example.title} className="group relative space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium tracking-tight">
                {example.title}
              </h3>
              {example.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {example.description}
                </p>
              )}
            </div>

            <div className="rounded-xl border bg-card/50 backdrop-blur-[1px] overflow-hidden">
              <div className="p-6 bg-background/50">
                {/* Live Preview would go here */}
                <div className="rounded-lg border-2 border-dashed border-muted-foreground/20 p-10 text-center text-sm text-muted-foreground">
                  Live preview coming soon
                </div>
              </div>
              <CodeBlock
                code={example.code}
                language="tsx"
                className="rounded-t-none"
                maxHeight={400}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
