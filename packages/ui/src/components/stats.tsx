"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface StatsProps {
  stats: Stat[];
  className?: string;
  /**
   * Layout variants for different use cases
   * - grid: Equal width grid layout (default)
   * - flex: Flexible width based on content
   */
  variant?: "grid" | "flex";
  /**
   * Whether to animate stats on mount
   */
  animate?: boolean;
  /**
   * Custom classes for each stat item
   */
  itemClassName?: string;
  /**
   * Custom classes for the value text
   */
  valueClassName?: string;
  /**
   * Custom classes for the label text
   */
  labelClassName?: string;
  /**
   * Custom classes for the description text
   */
  descriptionClassName?: string;
}

export function Stats({
  stats,
  className,
  variant = "grid",
  animate = true,
  itemClassName,
  valueClassName,
  labelClassName,
  descriptionClassName,
}: StatsProps) {
  const [mounted, setMounted] = React.useState(!animate);

  React.useEffect(() => {
    if (animate) {
      setMounted(true);
    }
  }, [animate]);

  return (
    <div
      className={cn(
        variant === "grid"
          ? "grid grid-cols-2 gap-8 md:grid-cols-4"
          : "flex flex-wrap gap-8",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col items-center text-center transition-all duration-500",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            itemClassName,
          )}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div
            className={cn("text-2xl font-bold text-foreground", valueClassName)}
          >
            {stat.value}
          </div>
          <div
            className={cn(
              "text-sm font-medium text-foreground/80",
              labelClassName,
            )}
          >
            {stat.label}
          </div>
          {stat.description && (
            <div
              className={cn(
                "mt-1 text-xs text-muted-foreground",
                descriptionClassName,
              )}
            >
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
