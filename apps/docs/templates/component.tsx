"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@aviris/ui/components/ui/tabs";
import { getComponent, getComponentIds } from "~/config/registry";

import { Button } from "@aviris/ui/components/ui/button";
import { ComponentDependencies } from "~/components/docs/ComponentDependencies";
import { ComponentHeader } from "~/components/docs/ComponentHeader";
import { ComponentPreview } from "~/components/previews/ComponentPreview";
import { ComponentProps } from "~/components/docs/ComponentProps";
import { DocsPager } from "~/components/DocsPager";
import { ExternalLink } from "lucide-react";
import { Separator } from "@aviris/ui/components/ui/separator";

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
    <div className="mx-auto max-w-5xl space-y-12">
      <ComponentHeader component={component} />

      <Tabs defaultValue="preview" className="space-y-8">
        <div className="sticky top-14 z-30 -mx-6 bg-background/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between">
            <TabsList className="w-auto">
              <TabsTrigger value="preview" className="text-sm">
                Preview
              </TabsTrigger>
              <TabsTrigger value="props" className="text-sm">
                Props
              </TabsTrigger>
              {hasDependencies && (
                <TabsTrigger value="dependencies" className="text-sm">
                  Dependencies
                </TabsTrigger>
              )}
            </TabsList>
            {component.metadata?.sourceUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-2 text-sm text-muted-foreground"
                onClick={() =>
                  window.open(component.metadata?.sourceUrl, "_blank")
                }
              >
                View source
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>

        <TabsContent value="preview">
          <div className="bg-muted/40 p-8">
            <ComponentPreview componentId={componentId} />
          </div>
        </TabsContent>

        <TabsContent value="props">
          <div className="bg-muted/40">
            <ComponentProps component={component} />
          </div>
        </TabsContent>

        {hasDependencies && (
          <TabsContent value="dependencies">
            <div className="bg-muted/40">
              <ComponentDependencies component={component} />
            </div>
          </TabsContent>
        )}
      </Tabs>

      <div className="pt-8">
        <DocsPager
          prev={
            prevComponent
              ? {
                  title: prevComponent.name,
                  href: `/components/${prevId}`,
                }
              : undefined
          }
          next={
            nextComponent
              ? {
                  title: nextComponent.name,
                  href: `/components/${nextId}`,
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}
