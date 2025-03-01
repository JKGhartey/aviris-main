"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full backdrop-blur-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border border-primary/10 bg-primary/5",
        gradient:
          "bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/10",
        outline:
          "border border-primary/20 hover:border-primary/40 bg-background/50",
        solid: "bg-primary text-primary-foreground",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs",
        default: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        fade: "animate-fade-in",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  withRing?: boolean;
}

export function Badge({
  className,
  variant,
  size,
  animation,
  icon,
  withRing,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, animation }), className)}
      {...props}
    >
      {withRing && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      )}
      {icon}
      <span
        className={cn(
          "font-medium",
          variant === "gradient" &&
            "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70",
        )}
      >
        {children}
      </span>
    </div>
  );
}
