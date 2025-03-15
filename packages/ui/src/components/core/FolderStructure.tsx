"use client";

import * as React from "react";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { ChevronRight, File, Folder } from "lucide-react";

import { cn } from "../../lib/utils";

export interface FolderStructureItem {
  name: string;
  type: "file" | "folder";
  description?: string;
  children?: FolderStructureItem[];
  icon?: React.ReactNode;
  color?: string;
}

type FolderToggleHandler = (path: string, isOpen: boolean) => void;

interface FolderStructureBaseProps {
  /** Array of items to display in the folder structure */
  items: FolderStructureItem[];
  /** Whether to show descriptions for items that have them */
  showDescriptions?: boolean;
  /** Currently selected item */
  selectedItem?: FolderStructureItem;
  /** Default expanded state for folders */
  defaultExpanded?: boolean;
  /** Called when a folder is toggled */
  onToggle?: FolderToggleHandler;
}

export type FolderStructureProps = FolderStructureBaseProps &
  Omit<HTMLMotionProps<"div">, keyof FolderStructureBaseProps | "onToggle">;

interface FolderItemBaseProps {
  item: FolderStructureItem;
  showDescriptions?: boolean;
  level?: number;
  isSelected?: boolean;
  defaultExpanded?: boolean;
  path?: string;
  onToggle?: FolderToggleHandler;
}

type FolderItemProps = FolderItemBaseProps &
  Omit<HTMLMotionProps<"div">, keyof FolderItemBaseProps>;

const FolderItem = React.forwardRef<HTMLDivElement, FolderItemProps>(
  (
    {
      item,
      showDescriptions,
      level = 0,
      isSelected,
      defaultExpanded = false,
      path = "",
      onToggle,
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultExpanded);
    const hasChildren = item.type === "folder" && item.children?.length;
    const paddingLeft = `${level * 1.5}rem`;
    const currentPath = path ? `${path}/${item.name}` : item.name;

    const handleToggle = () => {
      if (hasChildren) {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        onToggle?.(currentPath, newIsOpen);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle();
      } else if (e.key === "ArrowRight" && hasChildren && !isOpen) {
        setIsOpen(true);
        onToggle?.(currentPath, true);
      } else if (e.key === "ArrowLeft" && hasChildren && isOpen) {
        setIsOpen(false);
        onToggle?.(currentPath, false);
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: level * 0.1 }}
        {...props}
      >
        <div
          className={cn(
            "group relative flex items-center gap-2 rounded-md px-2 py-1.5 outline-none transition-all duration-200",
            "focus-visible:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring",
            "active:scale-[0.98]",
            isSelected && "bg-muted/70 shadow-sm",
            hasChildren && "cursor-pointer",
            className,
          )}
          style={{ paddingLeft }}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          role={hasChildren ? "button" : undefined}
          tabIndex={0}
          data-path={currentPath}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            {item.type === "folder" ? (
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
              </motion.div>
            ) : (
              <div className="w-4" />
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item.icon ||
                (item.type === "folder" ? (
                  <Folder
                    className="h-4 w-4 shrink-0 transition-colors group-hover:text-primary"
                    style={{ color: item.color || "var(--muted-foreground)" }}
                  />
                ) : (
                  <File
                    className="h-4 w-4 shrink-0 transition-colors group-hover:text-primary"
                    style={{ color: item.color || "var(--muted-foreground)" }}
                  />
                ))}
            </motion.div>
            <span className="truncate text-sm font-medium transition-colors group-hover:text-primary">
              {item.name}
            </span>
          </div>
          {showDescriptions && item.description && (
            <span className="ml-auto truncate text-xs text-muted-foreground/80 transition-colors group-hover:text-muted-foreground">
              {item.description}
            </span>
          )}
        </div>
        <AnimatePresence>
          {hasChildren && isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-1 border-l-2 border-muted/30 pl-2 transition-colors">
                {item.children?.map((child, index) => (
                  <FolderItem
                    key={`${child.name}-${index}`}
                    item={child}
                    showDescriptions={showDescriptions}
                    level={level + 1}
                    isSelected={isSelected && child === item}
                    defaultExpanded={defaultExpanded}
                    path={currentPath}
                    onToggle={onToggle}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  },
);

FolderItem.displayName = "FolderItem";

export const FolderStructure = React.forwardRef<
  HTMLDivElement,
  FolderStructureProps
>(
  (
    {
      items = [],
      showDescriptions = false,
      selectedItem,
      defaultExpanded = false,
      onToggle,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "rounded-lg border bg-background p-4 shadow-sm focus-within:ring-1 focus-within:ring-ring",
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
            onToggle={onToggle}
          />
        ))}
      </motion.div>
    );
  },
);

FolderStructure.displayName = "FolderStructure";
