"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Toaster as Sonner, toast } from "sonner";

import { cn } from "../../lib/utils";

export type NotificationVariant =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "loading"
  | "custom";

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
  /** Gap between notifications */
  gap?: number;
  /** Offset from the edges */
  offset?: string | number;
  /** Additional class names */
  className?: string;
  /** Custom styles for notifications */
  toastOptions?: {
    className?: string;
    descriptionClassName?: string;
    style?: React.CSSProperties;
  };
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
      gap = 16,
      offset = "32px",
      className,
      toastOptions,
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
              gap={gap}
              offset={offset}
              className={cn(
                "group",
                "data-[type=success]:bg-green-50 data-[type=success]:text-green-800 data-[type=success]:border-green-200",
                "data-[type=error]:bg-red-50 data-[type=error]:text-red-800 data-[type=error]:border-red-200",
                "data-[type=info]:bg-blue-50 data-[type=info]:text-blue-800 data-[type=info]:border-blue-200",
                "data-[type=warning]:bg-yellow-50 data-[type=warning]:text-yellow-800 data-[type=warning]:border-yellow-200",
                toastOptions?.className,
              )}
              toastOptions={{
                className: cn(
                  "group rounded-lg border shadow-lg",
                  "bg-gradient-to-b from-background/50 to-background/80",
                  "backdrop-blur-xl backdrop-saturate-150",
                  "dark:from-background/80 dark:to-background/90",
                ),
                descriptionClassName: cn(
                  "text-muted-foreground/90 group-data-[type=success]:text-green-700/90",
                  "group-data-[type=error]:text-red-700/90",
                  "group-data-[type=info]:text-blue-700/90",
                  "group-data-[type=warning]:text-yellow-700/90",
                  toastOptions?.descriptionClassName,
                ),
                style: {
                  ...toastOptions?.style,
                },
              }}
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
        type?: NotificationVariant;
        description?: string;
        duration?: number;
        action?: {
          label: string;
          onClick: () => void;
        };
        icon?: React.ReactNode;
        promise?: Promise<any>;
        dismissible?: boolean;
      },
    ) => {
      const {
        type = "info",
        description,
        duration,
        action,
        icon,
        promise,
        dismissible = true,
      } = options || {};

      if (type === "loading" && promise) {
        return toast.promise(promise, {
          loading: message,
          success: (data) => description || "Completed successfully",
          error: (err) => description || "Something went wrong",
          duration,
          dismissible,
        });
      }

      if (type === "custom" && icon) {
        return toast.custom((t) => (
          <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-lg">
            {icon}
            <div className="flex-1">
              <p className="font-medium">{message}</p>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
            {action && (
              <button
                onClick={action.onClick}
                className="ml-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {action.label}
              </button>
            )}
          </div>
        ));
      }

      const toastFn =
        toast[type as Exclude<NotificationVariant, "loading" | "custom">];
      return toastFn(message, {
        description,
        duration,
        dismissible,
        action: action
          ? {
              label: action.label,
              onClick: action.onClick,
            }
          : undefined,
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
