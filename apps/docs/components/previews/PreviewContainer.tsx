interface PreviewProps {
  title: string;
  description: string;
  component: React.ReactNode;
}

export function PreviewContainer({
  title,
  description,
  component,
}: PreviewProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border p-4">{component}</div>
    </div>
  );
}
