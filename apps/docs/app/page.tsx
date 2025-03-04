"use client";

import { ArrowRight, Check, Github, Shield, Sparkles, Zap } from "lucide-react";

import { Button } from "@aviris/ui/components/ui/button";
import { Card } from "@aviris/ui/components/ui/card";
import { DocsPager } from "~/components/DocsPager";
import Link from "next/link";
import { cn } from "@aviris/ui/lib/utils";
import { routes } from "~/constants/routes";

const features = [
  {
    title: "Accessibility First",
    description:
      "Built on top of Radix UI primitives, ensuring robust accessibility features like ARIA attributes and keyboard navigation.",
    icon: Shield,
  },
  {
    title: "Customization",
    description:
      "Easily customize components using Tailwind CSS utility classes or override styles with your own design system.",
    icon: Sparkles,
  },
  {
    title: "Type Safety",
    description:
      "Written in TypeScript with strict type checking, providing better developer experience and catching errors early.",
    icon: Check,
  },
  {
    title: "Modern Development",
    description:
      "Built for modern frameworks like Next.js and supports features like Server Components and React Server Actions.",
    icon: Zap,
  },
];

export default function IntroductionPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Build beautiful React applications
            <span className="block text-primary">with Aviris UI</span>
          </h1>
          <p className="text-xl text-muted-foreground [text-wrap:balance]">
            A collection of beautifully designed components built with Radix UI
            and Tailwind CSS, offering a perfect balance between customization
            and convention.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href={routes.docs.components.root}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={routes.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <p className="text-muted-foreground leading-7">
              Aviris UI provides a comprehensive set of UI components and
              utilities to help you build modern web applications faster. Built
              on top of Radix UI primitives and styled with Tailwind CSS, it
              offers:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li className="text-muted-foreground">
                Accessible and customizable components
              </li>
              <li className="text-muted-foreground">
                Type-safe with TypeScript
              </li>
              <li className="text-muted-foreground">
                Dark mode support out of the box
              </li>
              <li className="text-muted-foreground">
                CLI tool for easy component management
              </li>
              <li className="text-muted-foreground">
                Comprehensive documentation and examples
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Key Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 transition-colors hover:bg-muted/50"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-1.5">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <Card className="grid gap-4">
          <div className="p-6 pb-2">
            <p className="text-muted-foreground">
              Install Aviris UI and its peer dependencies:
            </p>
          </div>
          <div
            className={cn(
              "bg-muted px-6 py-4 font-mono text-sm",
              "rounded-lg mx-6 mb-6",
              "overflow-x-auto scrollbar-none",
            )}
          >
            <pre className="text-muted-foreground">
              npm install @aviris/ui tailwindcss-animate
              class-variance-authority clsx tailwind-merge
            </pre>
          </div>
          <div className="border-t px-6 py-4 flex items-center justify-between bg-muted/50">
            <p className="text-sm text-muted-foreground">Need more details?</p>
            <Button variant="ghost" size="sm" className="h-8" asChild>
              <Link href={routes.docs.installation}>
                Installation Guide
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>

      {/* Navigation */}
      <DocsPager
        next={{
          title: "Components",
          href: routes.docs.components.root,
        }}
      />
    </div>
  );
}
