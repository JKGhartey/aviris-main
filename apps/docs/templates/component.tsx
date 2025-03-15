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
import { ComponentProps } from "~/components/docs/ComponentProps";
import { DocsPager } from "~/components/DocsPager";
import { ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { routes } from "~/constants/routes";

interface ComponentTemplateProps {
  componentId: string;
}

// Dynamic imports for preview components
const previewComponents: Record<string, React.ComponentType> = {
  "file-upload": dynamic(() =>
    import("~/components/previews/FileUploadPreview").then(
      (mod) => mod.FileUploadPreview,
    ),
  ),
  "folder-structure": dynamic(() =>
    import("~/components/previews/FolderStructurePreview").then(
      (mod) => mod.FolderStructurePreview,
    ),
  ),
  "floating-action-bar": dynamic(() =>
    import("~/components/previews/FloatingActionBarPreview").then(
      (mod) => mod.FloatingActionBarPreview,
    ),
  ),
  notifications: dynamic(() =>
    import("~/components/previews/NotificationsPreview").then(
      (mod) => mod.NotificationsPreview,
    ),
  ),
};

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
  const PreviewComponent = previewComponents[componentId];

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

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
          {hasDependencies && (
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          {PreviewComponent && (
            <div className="rounded-lg border">
              <div className="p-6">
                <PreviewComponent />
              </div>
            </div>
          )}

          {component.metadata?.sourceUrl && (
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() =>
                window.open(component.metadata?.sourceUrl, "_blank")
              }
            >
              View source
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          )}
        </TabsContent>

        <TabsContent value="props">
          <ComponentProps component={component} />
        </TabsContent>

        {hasDependencies && (
          <TabsContent value="dependencies">
            <ComponentDependencies component={component} />
          </TabsContent>
        )}
      </Tabs>

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
  );
}
