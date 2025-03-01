import { ComponentDoc } from "~/config/types";
import { cn } from "@aviris/ui/lib/utils";
import { CodeBlock } from "@aviris/ui/components/code-block";
import { ComponentPreview } from "./ComponentPreview";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@aviris/ui/components/ui/tabs";
import { Code2, Play } from "lucide-react";

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

            <Tabs defaultValue="preview" className="relative">
              <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
                <TabsTrigger
                  value="preview"
                  className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                >
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Preview
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    Code
                  </div>
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="preview"
                className="rounded-xl border bg-card/50 backdrop-blur-[1px] overflow-hidden"
              >
                <div className="p-6 bg-background/50">
                  <ComponentPreview
                    componentId={component.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}
                    code={example.code}
                  />
                </div>
              </TabsContent>
              <TabsContent
                value="code"
                className="rounded-xl border bg-card/50 backdrop-blur-[1px] overflow-hidden"
              >
                <CodeBlock code={example.code} language="tsx" maxHeight={400} />
              </TabsContent>
            </Tabs>
          </div>
        ))}
      </div>
    </div>
  );
}
