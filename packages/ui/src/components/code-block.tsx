import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "../lib/utils";
import { CopyButton } from "./copy-button";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  maxHeight?: number;
  expandable?: boolean;
}

export function CodeBlock({
  code,
  language = "typescript",
  className,
  showLineNumbers = false,
  maxHeight = 400,
  expandable = true,
}: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const codeRef = React.useRef<HTMLDivElement>(null);
  const [shouldShowExpand, setShouldShowExpand] = React.useState(false);

  React.useEffect(() => {
    if (codeRef.current) {
      const hasOverflow = codeRef.current.scrollHeight > maxHeight;
      setShouldShowExpand(hasOverflow && expandable);
    }
  }, [code, maxHeight, expandable]);

  return (
    <div className={cn("relative rounded-md group", className)}>
      <div className="absolute right-2 top-2 z-20">
        <CopyButton value={code} />
      </div>

      <div
        ref={codeRef}
        className={cn(
          "relative transition-all duration-300",
          !isExpanded && shouldShowExpand && "max-h-[--max-h]",
        )}
        style={{ "--max-h": `${maxHeight}px` } as React.CSSProperties}
      >
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            lineHeight: "1.5rem",
          }}
          codeTagProps={{
            className: "font-mono",
          }}
        >
          {code}
        </SyntaxHighlighter>

        {shouldShowExpand && !isExpanded && (
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>

      {shouldShowExpand && (
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 z-10",
            "text-muted-foreground hover:text-foreground",
            "transition-all duration-200",
            isExpanded ? "bottom-2" : "bottom-4",
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 mr-2 transition-transform duration-200",
              isExpanded ? "rotate-180" : "",
            )}
          />
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
}
