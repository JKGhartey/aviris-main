import React from "react";
import { cn } from "@aviris/ui/lib/utils";
import { Button, ButtonProps } from "@aviris/ui/components/ui/button";

interface CustomButtonProps extends ButtonProps {
  customClassName?: string;
  isLoading?: boolean;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(
  (
    { className, customClassName, children, isLoading, disabled, ...props },
    ref,
  ) => {
    return (
      <Button
        className={cn("custom-button-base", customClassName, className)}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </Button>
    );
  },
);

CustomButton.displayName = "CustomButton";
