"use client";

import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "../lib/utils";
import { CopyButton } from "./copy-button";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  maxHeight?: number;
  expandable?: boolean;
  title?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  className,
  showLineNumbers = false,
  maxHeight = 400,
  expandable = true,
  title,
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
    <div
      className={cn("relative rounded-lg overflow-hidden border", className)}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
        </div>
      )}

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
        <ScrollArea className="rounded-b-lg rounded-t-none" type="always">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={showLineNumbers}
            wrapLongLines={true}
            customStyle={{
              margin: 0,
              background: "hsl(var(--muted))",
              fontSize: "0.875rem",
              textShadow: "none",
              lineHeight: "1.5rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              width: "100%",
              padding: "1rem",
            }}
            codeTagProps={{
              className: "font-mono",
              style: {
                whiteSpace: "pre-wrap",
                display: "block",
              },
            }}
          >
            {code}
          </SyntaxHighlighter>
        </ScrollArea>

        {shouldShowExpand && !isExpanded && (
          <div
            className="absolute inset-x-0 -bottom-5 h-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(var(--background)) 80%)",
              maskImage:
                "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
            }}
          />
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
            "bg-background/80 backdrop-blur-sm",
            "bottom-4",
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
