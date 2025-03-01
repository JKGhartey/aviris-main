"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@aviris/ui/lib/utils";
import { ThemeToggle } from "@aviris/ui/theme";
import { Button } from "@aviris/ui/components/ui/button";
import { Github, Menu } from "lucide-react";
import { routes } from "~/constants/routes";
import { memo } from "react";
import { Logo } from "@aviris/ui/components/logo";

const navItems = [
  {
    title: "Docs",
    href: routes.docs.root,
  },
  {
    title: "Components",
    href: routes.docs.components.root,
  },
  {
    title: "Examples",
    href: routes.docs.guides.root,
  },
];

// Memoize the logo to prevent unnecessary re-renders
const MemoizedLogo = memo(Logo);

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

        <div className="mr-4 hidden md:flex">
          <Link
            href={routes.landing as string}
            className="mr-14 flex items-center space-x-2"
          >
            <MemoizedLogo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname.startsWith(item.href)
                    ? "text-foreground"
                    : "text-foreground/60",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            asChild
          >
            <Link href={routes.github} target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
