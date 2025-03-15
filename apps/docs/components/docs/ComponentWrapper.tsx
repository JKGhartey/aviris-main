import * as React from "react";

import { cn } from "@aviris/ui/lib/utils";

export function ComponentWrapper({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-lg border bg-background p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

class ComponentErrorBoundary extends React.Component<
  { children: React.ReactNode; name: string },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; name: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in component ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          Something went wrong in component: {this.props.name}
        </div>
      );
    }
    return this.props.children;
  }
}

function getComponentName(name: string) {
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
