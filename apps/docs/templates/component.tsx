"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@aviris/ui/components/ui/tabs";
import { Button } from "@aviris/ui/components/ui/button";
import { ExternalLink } from "lucide-react";
import { DocsPager } from "~/components/DocsPager";
import { getComponent, getComponentIds } from "~/config/registry";
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

  // Get navigation items
  const allComponentIds = getComponentIds();
  const currentIndex = allComponentIds.indexOf(componentId);

  const prevId =
    currentIndex > 0 ? allComponentIds[currentIndex - 1] : undefined;
  const nextId =
    currentIndex < allComponentIds.length - 1
      ? allComponentIds[currentIndex + 1]
      : undefined;

  const prevComponent = prevId ? getComponent(prevId) : undefined;
  const nextComponent = nextId ? getComponent(nextId) : undefined;

  return (
    <div className="space-y-8">
      <ComponentHeader component={component} />

      <Tabs defaultValue="examples" className="space-y-8">
        <div className="flex items-center justify-between">
          <TabsList className="h-10">
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
            {hasDependencies && (
              <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            )}
          </TabsList>
          {component.metadata?.sourceUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="h-10 gap-2 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href={component.metadata.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>

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

      <DocsPager
        prev={
          prevComponent && prevId
            ? {
                title: prevComponent.name,
                href: `/components/${prevId}`,
              }
            : undefined
        }
        next={
          nextComponent && nextId
            ? {
                title: nextComponent.name,
                href: `/components/${nextId}`,
              }
            : undefined
        }
      />
    </div>
  );
}
