"use client";

import { GithubButton } from "@aviris/ui/components/github-button";
import Link from "next/link";
import { Logo } from "@aviris/ui/components/logo";
import { ThemeToggle } from "@aviris/ui/theme";
import { routes } from "../constants/routes";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between gap-4 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href={routes.home}
          className="flex items-center space-x-2 font-bold text-lg"
        >
          <Logo variant="logo" />
        </Link>

        {/* GitHub and Theme */}
        <div className="flex items-center gap-2">
          <GithubButton />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
