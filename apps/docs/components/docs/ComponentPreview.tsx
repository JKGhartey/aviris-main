import { cn } from "@aviris/ui/lib/utils";
import { componentMap } from "./component-map";

interface ComponentPreviewProps {
  componentId: string;
  code: string;
  className?: string;
}

export function ComponentPreview({
  componentId,
  code,
  className,
}: ComponentPreviewProps) {
  const Component = componentMap[componentId as keyof typeof componentMap];

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
      // Find the component usage in the code
      const match = code.match(/<([A-Za-z]+)\s+([^>]+)\/>/s);
      if (!match?.[2]) {
        console.log("No props found in code");
        return {};
      }

      const propsString = match[2];
      console.log("Found props string:", propsString);

      const props: Record<string, any> = {};

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
              console.log(
                `Found prop: ${currentProp} with value: ${currentValue}`,
              );
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

        console.log("Extracted props:", results);
        return results;
      };

      const extractedProps = extractProps(propsString);

      // Parse each extracted prop
      for (const [key, value] of Object.entries(extractedProps)) {
        try {
          console.log(`Processing prop ${key} with raw value:`, value);
          // For arrays and objects, evaluate the structure
          if (value.trim().startsWith("[") || value.trim().startsWith("{")) {
            const cleanValue = value
              .replace(/\s+/g, " ")
              .trim()
              .replace(/\bauth\b/g, "null");

            console.log(`Evaluating cleaned value for ${key}:`, cleanValue);
            props[key] = eval(`(${cleanValue})`);
            console.log(`Successfully parsed ${key}:`, props[key]);
          } else {
            // For simple values
            props[key] =
              value === "true" ? true : value === "false" ? false : value;
          }
        } catch (error) {
          console.error(`Error parsing prop ${key}:`, error);
          props[key] = key === "items" ? [] : value;
        }
      }

      console.log("Final props:", JSON.stringify(props, null, 2));
      return props;
    } catch (error) {
      console.error("Error parsing props:", error);
      return { items: [] };
    }
  };

  const props = getPropsFromCode(code);
  console.log("Props being passed to component:", props);

  return (
    <div className={cn("bg-background p-10", className)}>
      <Component {...props} />
    </div>
  );
}
