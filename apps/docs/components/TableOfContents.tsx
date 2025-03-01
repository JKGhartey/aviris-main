"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@aviris/ui/lib/utils";
import { ScrollArea } from "@aviris/ui/components/ui/scroll-area";

export interface TableOfContentsProps {
  items?: {
    title: string;
    url: string;
  }[];
}

export function TableOfContents({ items = [] }: TableOfContentsProps) {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<
    Array<{ title: string; url: string }>
  >([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    // Update table of contents when route changes
    const updateHeadings = () => {
      const elements = document.querySelectorAll("h2");
      elements.forEach((element) => {
        // Ensure each heading has an ID for linking
        if (!element.id) {
          element.id =
            element.textContent
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric characters with hyphens
              .replace(/^-+|-+$/g, "") || ""; // Remove leading and trailing hyphens
        }
      });

      const items = Array.from(elements).map((element) => ({
        title: element.textContent || "",
        url: `#${element.id}`,
      }));
      setHeadings(items);
    };

    // Initial update
    updateHeadings();

    // Update after a short delay to ensure content is rendered
    const timeoutId = setTimeout(updateHeadings, 100);

    // Set up intersection observer for active heading detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      },
    );

    // Observe all h2 elements
    document.querySelectorAll("h2").forEach((h2) => observer.observe(h2));

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    // Remove the # from the start of the url
    const id = url.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update URL without scrolling
      window.history.pushState({}, "", url);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="hidden text-sm xl:block">
      <div className="fixed top-14 -ml-2 h-[calc(100vh-3.5rem)]">
        <ScrollArea className="py-6 pl-6 pr-4">
          <div className="space-y-2">
            <p className="font-medium text-primary">On This Page</p>
            <ul className="m-0 list-none">
              {headings.map((item) => (
                <li key={item.url} className="mt-0 pt-2">
                  <a
                    href={item.url}
                    onClick={(e) => handleClick(e, item.url)}
                    className={cn(
                      "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground",
                      activeHeading === item.url.slice(1) &&
                        "text-foreground font-medium",
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
