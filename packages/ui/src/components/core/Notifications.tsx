"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Toaster as Sonner, toast } from "sonner";

import { cn } from "../../lib/utils";

export interface NotificationsProps {
  /** Whether to show the notifications */
  show?: boolean;
  /** Position of the notifications */
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  /** Theme of the notifications */
  theme?: "light" | "dark" | "system";
  /** Duration of the notifications in milliseconds */
  duration?: number;
  /** Whether to show close button */
  closeButton?: boolean;
  /** Whether to rich colors */
  richColors?: boolean;
  /** Whether to invert colors */
  invert?: boolean;
  /** Additional class names */
  className?: string;
}

export const Notifications = React.forwardRef<
  HTMLDivElement,
  NotificationsProps
>(
  (
    {
      show = true,
      position = "top-right",
      theme = "system",
      duration = 4000,
      closeButton = true,
      richColors = true,
      invert = false,
      className,
    },
    ref,
  ) => {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn("", className)}
          >
            <Sonner
              position={position}
              theme={theme}
              duration={duration}
              closeButton={closeButton}
              richColors={richColors}
              invert={invert}
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

Notifications.displayName = "Notifications";

// Export a hook for easy usage
export const useNotifications = () => {
  const [show, setShow] = React.useState(true);

  const showNotification = React.useCallback(
    (
      message: string,
      options?: {
        type?: "success" | "error" | "info" | "warning";
        description?: string;
        duration?: number;
      },
    ) => {
      const { type = "info", description, duration } = options || {};

      toast[type](message, {
        description,
        duration,
      });
    },
    [],
  );

  return {
    show,
    setShow,
    showNotification,
  };
};
