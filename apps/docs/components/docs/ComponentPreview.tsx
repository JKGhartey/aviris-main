import { useCallback, useState } from "react";

import { cn } from "@aviris/ui/lib/utils";
import { componentMap } from "./component-map";

interface ComponentPreviewProps {
  componentId: string;
  code: string;
  className?: string;
}

// Define component-specific state types
interface ComponentStates {
  "floating-action-bar": {
    expanded: boolean;
  };
  "file-upload": {
    files: File[];
  };
  [key: string]: any;
}

// Define component-specific handlers
interface ComponentHandlers {
  "floating-action-bar": {
    onToggle: (value: boolean) => void;
    actions: Array<{
      icon: React.ReactNode;
      label: string;
      onClick: () => void;
    }>;
  };
  "file-upload": {
    onFilesAdded: (files: File[]) => void;
    onFileRemoved: (file: File) => void;
  };
  [key: string]: any;
}

export function ComponentPreview({
  componentId,
  code,
  className,
}: ComponentPreviewProps) {
  const Component = componentMap[componentId as keyof typeof componentMap];

  // Initialize component-specific state
  const [componentState, setComponentState] = useState<ComponentStates>({
    "floating-action-bar": { expanded: false },
    "file-upload": { files: [] },
  });

  // Define component-specific handlers
  const getComponentHandlers = useCallback(
    (): ComponentHandlers => ({
      "floating-action-bar": {
        onToggle: (value: boolean) => {
          setComponentState((prev) => ({
            ...prev,
            "floating-action-bar": {
              ...prev["floating-action-bar"],
              expanded: value,
            },
          }));
          console.log("Action bar expanded:", value);
        },
        actions: [],
      },
      "file-upload": {
        onFilesAdded: (newFiles: File[]) => {
          setComponentState((prev) => ({
            ...prev,
            "file-upload": {
              ...prev["file-upload"],
              files: [...prev["file-upload"].files, ...newFiles],
            },
          }));
          console.log("Files added:", newFiles);
        },
        onFileRemoved: (file: File) => {
          setComponentState((prev) => ({
            ...prev,
            "file-upload": {
              ...prev["file-upload"],
              files: prev["file-upload"].files.filter((f) => f !== file),
            },
          }));
          console.log("File removed:", file);
        },
      },
    }),
    [],
  );

  if (!Component) {
    return (
      <div
        className={cn(
          "rounded-lg border-2 border-dashed border-muted-foreground/20 p-10 text-center text-sm text-muted-foreground",
          className,
        )}
      >
        Component preview not available
      </div>
    );
  }

  // Extract props from the code string
  const getPropsFromCode = (code: string) => {
    try {
      const match = code.match(/<([A-Za-z]+)\s+([^>]+)\/>/s);
      if (!match?.[2]) return {};

      const propsString = match[2];
      const props: Record<string, any> = {};
      const handlers = getComponentHandlers();

      // Extract prop name and its full value using a regex that handles nested braces
      const extractProps = (str: string) => {
        const results: Record<string, string> = {};
        let depth = 0;
        let currentProp = "";
        let currentValue = "";
        let collectingValue = false;

        for (let i = 0; i < str.length; i++) {
          const char = str[i];

          if (char === "{") {
            depth++;
            if (depth === 1) {
              collectingValue = true;
              continue;
            }
          }

          if (char === "}") {
            depth--;
            if (depth === 0 && collectingValue) {
              results[currentProp.trim()] = currentValue;
              currentProp = "";
              currentValue = "";
              collectingValue = false;
              continue;
            }
          }

          if (collectingValue) {
            currentValue += char;
          } else if (char === "=") {
            continue;
          } else if (!collectingValue && char !== " ") {
            currentProp += char;
          }
        }

        return results;
      };

      const extractedProps = extractProps(propsString);

      // Parse each extracted prop
      for (const [key, value] of Object.entries(extractedProps)) {
        try {
          // Handle interactive props based on component type
          if (componentId in handlers) {
            const componentHandlers =
              handlers[componentId as keyof typeof handlers];

            if (key in componentHandlers) {
              // Use the predefined handler
              props[key] =
                componentHandlers[key as keyof typeof componentHandlers];
            } else if (
              key === "actions" &&
              componentId === "floating-action-bar"
            ) {
              // Special handling for actions with visual feedback
              const actions = eval(`(${value})`);
              props[key] = actions.map((action: any) => ({
                ...action,
                onClick: () => {
                  console.log(`Clicked action: ${action.label}`);
                  const button = document.querySelector(
                    `[data-action="${action.label}"]`,
                  );
                  if (button) {
                    button.classList.add("bg-primary/80");
                    setTimeout(() => {
                      button.classList.remove("bg-primary/80");
                    }, 200);
                  }
                },
              }));
            } else if (
              value.trim().startsWith("[") ||
              value.trim().startsWith("{")
            ) {
              const cleanValue = value
                .replace(/\s+/g, " ")
                .trim()
                .replace(/\bauth\b/g, "null");
              props[key] = eval(`(${cleanValue})`);
            } else {
              props[key] =
                value === "true" ? true : value === "false" ? false : value;
            }
          } else {
            // Default handling for non-interactive components
            if (value.trim().startsWith("[") || value.trim().startsWith("{")) {
              const cleanValue = value
                .replace(/\s+/g, " ")
                .trim()
                .replace(/\bauth\b/g, "null");
              props[key] = eval(`(${cleanValue})`);
            } else {
              props[key] =
                value === "true" ? true : value === "false" ? false : value;
            }
          }
        } catch (error) {
          console.error(`Error parsing prop ${key}:`, error);
          props[key] = key === "items" ? [] : value;
        }
      }

      // Add component-specific state
      if (componentId in componentState) {
        Object.assign(
          props,
          componentState[componentId as keyof ComponentStates],
        );
      }

      return props;
    } catch (error) {
      console.error("Error parsing props:", error);
      return {};
    }
  };

  const props = getPropsFromCode(code);

  return (
    <div className={cn("bg-background p-10", className)}>
      <Component {...props} />
    </div>
  );
}
