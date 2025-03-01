"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@aviris/ui/components/ui/tabs";
import { DocsPager } from "~/components/DocsPager";
import { getComponent } from "~/config/registry";
import { ComponentHeader } from "~/components/docs/ComponentHeader";
import { ComponentExamples } from "~/components/docs/ComponentExamples";
import { ComponentProps } from "~/components/docs/ComponentProps";
import { ComponentDependencies } from "~/components/docs/ComponentDependencies";

interface ComponentTemplateProps {
  componentId: string;
}

export default function ComponentTemplate({
  componentId,
}: ComponentTemplateProps) {
  const component = getComponent(componentId);

  if (!component) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-muted-foreground">Component not found</p>
      </div>
    );
  }

  const hasDependencies = (component.metadata?.dependencies ?? []).length > 0;

  return (
    <div className="space-y-8">
      <ComponentHeader component={component} />

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
          {hasDependencies && (
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="examples" className="space-y-6">
          <ComponentExamples component={component} />
        </TabsContent>

        <TabsContent value="props" className="space-y-6">
          <ComponentProps component={component} />
        </TabsContent>

        {hasDependencies && (
          <TabsContent value="dependencies" className="space-y-6">
            <ComponentDependencies component={component} />
          </TabsContent>
        )}
      </Tabs>

      <DocsPager />
    </div>
  );
}
