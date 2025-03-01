"use client";

import { Card } from "@aviris/ui/components/ui/card";
import { Badge } from "@aviris/ui/components/ui/badge";
import { DocsPager } from "~/components/DocsPager";
import { getAllComponents } from "~/config/registry";
import Link from "next/link";

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
        {components.map((component) => (
          <Link
            key={component.name}
            href={`/components/${component.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="block h-[180px]"
          >
            <Card className="flex h-full flex-col p-6 hover:shadow-md transition-all hover:bg-accent/5">
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
                  <Badge
                    variant={
                      component.status === "stable"
                        ? "default"
                        : component.status === "beta"
                          ? "secondary"
                          : "outline"
                    }
                    className="font-medium"
                  >
                    {component.status}
                  </Badge>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <DocsPager />
    </div>
  );
}
