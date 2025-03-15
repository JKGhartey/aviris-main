"use client";

import ComponentTemplate from "~/templates/component";

interface ComponentPageProps {
  componentId: string;
}

export function ComponentPage({ componentId }: ComponentPageProps) {
  return <ComponentTemplate componentId={componentId} />;
}
