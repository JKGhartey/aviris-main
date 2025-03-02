"use client";

import * as React from "react";
import { ChevronDown, ChevronRight, Folder, File } from "lucide-react";
import { cn } from "../../lib/utils";

interface FolderStructureItem {
  name: string;
  type: "file" | "folder";
  children?: FolderStructureItem[];
  description?: string;
}

interface FolderStructureProps {
  items: FolderStructureItem[];
  className?: string;
  showDescriptions?: boolean;
}

interface FolderItemProps extends FolderStructureItem {
  level: number;
  showDescriptions?: boolean;
}

function FolderItem({
  name,
  type,
  children,
  level,
  description,
  showDescriptions,
}: FolderItemProps) {
  const [isOpen, setIsOpen] = React.useState(true);
  const hasChildren = children && children.length > 0;
  const indent = level * 20;

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 rounded-sm hover:bg-muted/50 transition-colors",
          type === "folder" && "cursor-pointer",
          type === "file" && "pl-6",
        )}
        style={{ paddingLeft: `${indent}px` }}
        onClick={() => {
          if (type === "folder") {
            setIsOpen(!isOpen);
          }
        }}
      >
        {type === "folder" && (
          <>
            {hasChildren ? (
              isOpen ? (
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              )
            ) : (
              <span className="w-4" />
            )}
            <Folder className="h-4 w-4 shrink-0 text-muted-foreground mr-2" />
          </>
        )}
        {type === "file" && (
          <File className="h-4 w-4 shrink-0 text-muted-foreground mr-2" />
        )}
        <span className="text-sm">{name}</span>
        {showDescriptions && description && (
          <span className="ml-2 text-xs text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {type === "folder" && hasChildren && isOpen && (
        <div>
          {children.map((item, index) => (
            <FolderItem
              key={item.name + index}
              {...item}
              level={level + 1}
              showDescriptions={showDescriptions}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FolderStructure({
  items,
  className,
  showDescriptions = false,
}: FolderStructureProps) {
  return (
    <div className={cn("rounded-lg border bg-background p-4", className)}>
      {items.map((item, index) => (
        <FolderItem
          key={item.name + index}
          {...item}
          level={0}
          showDescriptions={showDescriptions}
        />
      ))}
    </div>
  );
}
