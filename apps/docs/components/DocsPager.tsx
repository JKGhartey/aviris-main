import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@aviris/ui/components/ui/card";
import { cn } from "@aviris/ui/lib/utils";

interface DocsPagerProps {
  prev?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}

export function DocsPager({ prev, next }: DocsPagerProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex-1">
        {prev && (
          <Link
            href={prev.href}
            className="group block sm:inline-block sm:min-w-[320px]"
          >
            <Card
              className={cn(
                "relative overflow-hidden",
                "p-6 pr-8",
                "transition-all duration-300 ease-in-out",
                "hover:bg-muted/50",
                "flex items-center gap-6",
                "border border-muted",
              )}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm">
                <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
              <div className="flex flex-col gap-1.5 min-w-[180px]">
                <span className="text-sm text-muted-foreground">Previous</span>
                <span className="font-medium line-clamp-1 text-foreground">
                  {prev.title}
                </span>
              </div>
            </Card>
          </Link>
        )}
      </div>
      <div className="flex justify-end flex-1">
        {next && (
          <Link
            href={next.href}
            className="group block sm:inline-block sm:min-w-[320px]"
          >
            <Card
              className={cn(
                "relative overflow-hidden",
                "p-6 pl-8",
                "transition-all duration-300 ease-in-out",
                "hover:bg-muted/50",
                "flex items-center gap-6 flex-row-reverse",
                "border border-muted text-right",
              )}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm">
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="flex flex-col gap-1.5 min-w-[180px]">
                <span className="text-sm text-muted-foreground">Next</span>
                <span className="font-medium line-clamp-1 text-foreground">
                  {next.title}
                </span>
              </div>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
}
