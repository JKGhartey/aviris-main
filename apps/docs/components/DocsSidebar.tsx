"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@aviris/ui/lib/utils";
import {
  Book,
  Boxes,
  FileCode2,
  Laptop,
  Layers,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@aviris/ui/components/ui/badge";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    href: string;
    icon?: LucideIcon;
    badge?: string;
    disabled?: boolean;
    items?: {
      title: string;
      href: string;
      description?: string;
      badge?: string;
      disabled?: boolean;
    }[];
  }[];
  setIsOpen?: (open: boolean) => void;
}

const icons: Record<string, LucideIcon> = {
  "Getting Started": Book,
  Installation: Laptop,
  Components: Boxes,
  Customization: Settings,
  API: FileCode2,
  Development: Layers,
};

export function DocsSidebar({ items, setIsOpen }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="space-y-1">
        {items.map((section) => {
          const isActive = pathname === section.href;
          const Icon = section.icon || icons[section.title] || Book;

          if (section.items) {
            const isExpanded = section.items.some(
              (item) =>
                pathname === item.href || pathname.startsWith(item.href + "/"),
            );

            return (
              <div key={section.href}>
                <div className="pb-2">
                  <Link
                    href={section.disabled ? "#" : section.href}
                    onClick={(e) => {
                      if (section.disabled) e.preventDefault();
                      setIsOpen?.(false);
                    }}
                    className={cn(
                      "group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium hover:bg-muted/50",
                      isActive || isExpanded
                        ? "text-foreground"
                        : "text-muted-foreground",
                      section.disabled && "cursor-not-allowed opacity-60",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0" />
                      <span>{section.title}</span>
                    </div>
                    {section.badge && (
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        {section.badge}
                      </Badge>
                    )}
                  </Link>
                  <div
                    className={cn(
                      "relative mt-1 grid grid-flow-row auto-rows-max gap-1",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute left-[1.175rem] top-0 h-full w-px bg-gradient-to-b from-border/50 via-border to-transparent",
                      )}
                    />
                    <div className="pl-9 relative space-y-1">
                      {section.items.map((item) => {
                        const isItemActive =
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/");

                        return (
                          <Link
                            key={item.href}
                            href={item.disabled ? "#" : item.href}
                            onClick={(e) => {
                              if (item.disabled) e.preventDefault();
                              setIsOpen?.(false);
                            }}
                            className={cn(
                              "group relative flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
                              isItemActive
                                ? "bg-accent font-medium text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                              item.disabled && "cursor-not-allowed opacity-60",
                            )}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="truncate">{item.title}</span>
                            </div>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="ml-2 shrink-0"
                              >
                                {item.badge}
                              </Badge>
                            )}
                            {item.description && (
                              <span className="sr-only">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={section.href}>
              <Link
                href={section.disabled ? "#" : section.href}
                onClick={(e) => {
                  if (section.disabled) e.preventDefault();
                  setIsOpen?.(false);
                }}
                className={cn(
                  "group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium hover:bg-muted/50",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-accent-foreground",
                  section.disabled && "cursor-not-allowed opacity-60",
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{section.title}</span>
                </div>
                {section.badge && (
                  <Badge variant="secondary" className="ml-2 shrink-0">
                    {section.badge}
                  </Badge>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
