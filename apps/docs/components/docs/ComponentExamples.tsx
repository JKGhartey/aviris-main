import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@aviris/ui/components/ui/tabs";
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
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
      </div>
      <Tabs
        defaultValue={examples[0]?.title.toLowerCase().replace(/\s+/g, "-")}
      >
        <TabsList className="w-full justify-start">
          {examples.map((example) => (
            <TabsTrigger
              key={example.title}
              value={example.title.toLowerCase().replace(/\s+/g, "-")}
            >
              {example.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {examples.map((example) => (
          <TabsContent
            key={example.title}
            value={example.title.toLowerCase().replace(/\s+/g, "-")}
            className="space-y-4"
          >
            <div className="flex flex-col gap-4">
              {example.description && (
                <p className="text-muted-foreground">{example.description}</p>
              )}
              <div className="rounded-lg border">
                <div className="p-4">
                  {/* Live Preview would go here */}
                  <div className="rounded-lg border-2 border-dashed p-8 text-center text-sm text-muted-foreground">
                    Live preview coming soon
                  </div>
                </div>
                <CodeBlock
                  code={example.code}
                  language="tsx"
                  className="rounded-t-none border-t"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
