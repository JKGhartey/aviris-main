"use client";

import "@aviris/ui/globals.css";
import { ThemeProvider } from "@aviris/ui/theme";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@aviris/ui/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "@aviris/ui/components/ui/scroll-area";
import { docsConfig } from "~/config/docs";
import { routes } from "~/constants/routes";
import { DocsSidebar } from "~/components/DocsSidebar";
import { Footer } from "@aviris/ui/components/footer";
import {
  TableOfContents,
  TableOfContentsProps,
} from "~/components/TableOfContents";
import { Navbar } from "~/components/Navbar";
import { Logo } from "@aviris/ui/components/logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toc, setToc] = React.useState<TableOfContentsProps>({ items: [] });
  const [isOpen, setIsOpen] = React.useState(false);

  // Update table of contents when content changes
  React.useEffect(() => {
    const headings = document.querySelectorAll("h2");
    const tocItems = Array.from(headings).map((heading) => ({
      title: heading.textContent || "",
      url: `#${heading.id}`,
    }));
    setToc({ items: tocItems });
  }, [children]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar onMenuClick={() => setIsOpen(true)} />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent side="left" className="w-full pr-0">
              <SheetHeader className="border-b px-6 pb-4">
                <SheetTitle>
                  <Link
                    href={routes.home}
                    className="flex items-center gap-2 font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Logo />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-full pb-10">
                <div className="px-6 py-4">
                  <DocsSidebar
                    items={docsConfig.sidebarNav}
                    setIsOpen={setIsOpen}
                  />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr_200px] lg:gap-10">
            {/* Desktop Sidebar */}
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
              <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                <DocsSidebar items={docsConfig.sidebarNav} />
              </ScrollArea>
            </aside>

            {/* Main Content */}
            <main className="relative min-h-screen w-full py-6 lg:gap-10 lg:py-8 xl:px-8">
              <div className="mx-auto w-full min-w-0">{children}</div>
            </main>

            {/* Table of Contents */}
            <div className="hidden text-sm lg:block">
              <div className="sticky top-14 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-16">
                <TableOfContents items={toc.items} />
              </div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
