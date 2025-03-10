"use client";

import * as React from "react";

import { Plus, X } from "lucide-react";

import { cn } from "../../lib/utils";

export interface FloatingActionBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle"> {
  /** Whether the action bar is expanded */
  expanded?: boolean;
  /** Callback when the action bar is toggled */
  onToggle?: (expanded: boolean) => void;
  /** Main action button icon */
  icon?: React.ReactNode;
  /** Additional action items */
  actions?: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }[];
}

export const FloatingActionBar = React.forwardRef<
  HTMLDivElement,
  FloatingActionBarProps
>(
  (
    {
      expanded = false,
      onToggle,
      icon = <Plus className="h-6 w-6" />,
      actions = [],
      className,
      ...props
    },
    ref,
  ) => {
    const handleToggle = () => {
      onToggle?.(!expanded);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2",
          className,
        )}
        {...props}
      >
        {expanded && (
          <div className="flex flex-col items-end gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                data-action={action.label}
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
              >
                <span className="text-sm">{action.label}</span>
                {action.icon}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={handleToggle}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
        >
          {expanded ? <X className="h-6 w-6" /> : icon}
        </button>
      </div>
    );
  },
);

FloatingActionBar.displayName = "FloatingActionBar";
