"use client";

import * as React from "react";
import { ChevronRight, Folder, File } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FolderStructureItem {
  name: string;
  type: "file" | "folder";
  description?: string;
  children?: FolderStructureItem[];
  icon?: React.ReactNode;
  color?: string;
}

export interface FolderStructureProps {
  /** Array of items to display in the folder structure */
  items: FolderStructureItem[];
  /** Whether to show descriptions for items that have them */
  showDescriptions?: boolean;
  /** Currently selected item */
  selectedItem?: FolderStructureItem;
  /** Default expanded state for folders */
  defaultExpanded?: boolean;
  /** Additional CSS classes */
  className?: string;
}

interface FolderItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  item: FolderStructureItem;
  showDescriptions?: boolean;
  level?: number;
  isSelected?: boolean;
  defaultExpanded?: boolean;
}

const FolderItem = React.forwardRef<HTMLDivElement, FolderItemProps>(
  (
    {
      item,
      showDescriptions,
      level = 0,
      isSelected,
      defaultExpanded = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultExpanded);
    const hasChildren = item.type === "folder" && item.children?.length;
    const paddingLeft = `${level * 1.5}rem`;

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
      } else if (e.key === "ArrowRight" && hasChildren && !isOpen) {
        setIsOpen(true);
      } else if (e.key === "ArrowLeft" && hasChildren && isOpen) {
        setIsOpen(false);
      }
    };

    return (
      <div ref={ref} {...props}>
        <div
          className={cn(
            "group relative flex items-center gap-2 rounded-md px-2 py-1.5 outline-none transition-colors",
            "hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring",
            isSelected && "bg-muted/50",
            className,
          )}
          style={{ paddingLeft }}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            {item.type === "folder" ? (
              <ChevronRight
                className={cn(
                  "h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform duration-200",
                  isOpen && "rotate-90",
                )}
              />
            ) : (
              <div className="w-4" />
            )}
            {item.icon ||
              (item.type === "folder" ? (
                <Folder
                  className="h-4 w-4 shrink-0"
                  style={{ color: item.color || "var(--muted-foreground)" }}
                />
              ) : (
                <File
                  className="h-4 w-4 shrink-0"
                  style={{ color: item.color || "var(--muted-foreground)" }}
                />
              ))}
            <span className="truncate text-sm">{item.name}</span>
          </div>
          {showDescriptions && item.description && (
            <span className="ml-auto truncate text-xs text-muted-foreground">
              {item.description}
            </span>
          )}
        </div>
        {hasChildren && (
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              isOpen ? "mt-1" : "h-0",
            )}
          >
            {item.children?.map((child, index) => (
              <FolderItem
                key={`${child.name}-${index}`}
                item={child}
                showDescriptions={showDescriptions}
                level={level + 1}
                isSelected={isSelected && child === item}
                defaultExpanded={defaultExpanded}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

FolderItem.displayName = "FolderItem";

export const FolderStructure = React.forwardRef<
  HTMLDivElement,
  FolderStructureProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      items = [],
      showDescriptions = false,
      selectedItem,
      defaultExpanded = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-background p-4 focus-within:ring-1 focus-within:ring-ring",
          className,
        )}
        {...props}
      >
        {items.map((item, index) => (
          <FolderItem
            key={`${item.name}-${index}`}
            item={item}
            showDescriptions={showDescriptions}
            isSelected={selectedItem === item}
            defaultExpanded={defaultExpanded}
          />
        ))}
      </div>
    );
  },
);

FolderStructure.displayName = "FolderStructure";
