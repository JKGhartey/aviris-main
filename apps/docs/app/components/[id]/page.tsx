import { ComponentPage } from "~/components/docs/ComponentPage";
import { getComponent } from "~/config/registry";
import { notFound } from "next/navigation";

interface ComponentPageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: ComponentPageProps) {
  const component = getComponent(params.id);

  if (!component) {
    notFound();
  }

  return <ComponentPage componentId={params.id} />;
}

// Generate static params for all components
export function generateStaticParams() {
  return [
    { id: "file-upload" },
    { id: "folder-structure" },
    { id: "floating-action-bar" },
    { id: "notifications" },
  ];
}
