"use client";

import * as React from "react";
import { ChevronRight, Folder, File } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FolderStructureItem {
  name: string;
  type: "file" | "folder";
  description?: string;
  children?: FolderStructureItem[];
}

export interface FolderStructureProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of items to display in the folder structure */
  items: FolderStructureItem[];
  /** Whether to show descriptions for items that have them */
  showDescriptions?: boolean;
}

const FolderItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    item: FolderStructureItem;
    showDescriptions?: boolean;
    level?: number;
  }
>(({ item, showDescriptions, level = 0, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.type === "folder" && item.children?.length;
  const paddingLeft = `${level * 1.5}rem`;

  return (
    <div ref={ref} {...props}>
      <div
        className={cn(
          "group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted/50",
          className,
        )}
        style={{ paddingLeft }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {item.type === "folder" ? (
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform",
              isOpen && "rotate-90",
            )}
          />
        ) : (
          <div className="w-4" /> // Spacing for files to align with folders
        )}
        {item.type === "folder" ? (
          <Folder className="h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <File className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        <span className="text-sm">{item.name}</span>
        {showDescriptions && item.description && (
          <span className="text-xs text-muted-foreground">
            {item.description}
          </span>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.children?.map((child, index) => (
            <FolderItem
              key={`${child.name}-${index}`}
              item={child}
              showDescriptions={showDescriptions}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
});

FolderItem.displayName = "FolderItem";

export const FolderStructure = React.forwardRef<
  HTMLDivElement,
  FolderStructureProps
>(({ items, showDescriptions = false, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-background p-4", className)}
      {...props}
    >
      {items.map((item, index) => (
        <FolderItem
          key={`${item.name}-${index}`}
          item={item}
          showDescriptions={showDescriptions}
        />
      ))}
    </div>
  );
});

FolderStructure.displayName = "FolderStructure";
