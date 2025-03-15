"use client";

import { Card } from "@aviris/ui/components/ui/card";
import { DocsPager } from "~/components/DocsPager";
import { getAllComponents } from "~/config/registry";
import Link from "next/link";
import { StatusBadge } from "@aviris/ui/components/badge-custom";
import { cn } from "@aviris/ui/lib/utils";

export default function ComponentsPage() {
  const components = getAllComponents();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Components
        </h1>
        <p className="text-lg text-muted-foreground">
          A collection of pre-built components ready to enhance your React
          applications.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => {
          const isAvailable =
            component.status === "stable" || component.status === "beta";
          const href = isAvailable
            ? `/components/${component.name.toLowerCase().replace(/\s+/g, "-")}`
            : undefined;

          const CardContent = (
            <Card
              className={cn(
                "flex h-full flex-col p-6 transition-all",
                href && "hover:shadow-md hover:bg-accent/5 cursor-pointer",
              )}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold tracking-tight">
                      {component.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {component.description}
                  </p>
                </div>
                <div className="pt-4">
                  <StatusBadge
                    variant={component.status}
                    className="capitalize"
                  >
                    {component.status}
                  </StatusBadge>
                </div>
              </div>
            </Card>
          );

          if (href) {
            return (
              <Link
                key={component.name}
                href={href}
                className="block h-[180px]"
              >
                {CardContent}
              </Link>
            );
          }

          return (
            <div key={component.name} className="block h-[180px]">
              {CardContent}
            </div>
          );
        })}
      </div>

      <DocsPager />
    </div>
  );
}
