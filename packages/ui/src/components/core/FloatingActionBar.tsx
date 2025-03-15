"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
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
          "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3",
          className,
        )}
        {...props}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-end gap-3"
            >
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                    transition: { delay: (actions.length - index - 1) * 0.1 },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.onClick}
                  data-action={action.label}
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary/90 px-5 py-2.5 text-primary-foreground shadow-[0_4px_20px_rgba(255,255,255,0.2),0_2px_8px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_6px_24px_rgba(255,255,255,0.3),0_2px_8px_rgba(255,255,255,0.2)] active:shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
                >
                  <span className="text-sm font-medium tracking-wide">
                    {action.label}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {action.icon}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: expanded ? 180 : 0 }}
          onClick={handleToggle}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-[0_4px_20px_rgba(255,255,255,0.2),0_2px_8px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_6px_24px_rgba(255,255,255,0.3),0_2px_8px_rgba(255,255,255,0.2)] active:shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
        >
          <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {expanded ? <X className="h-6 w-6" /> : icon}
          </span>
        </motion.button>
      </div>
    );
  },
);

FloatingActionBar.displayName = "FloatingActionBar";
