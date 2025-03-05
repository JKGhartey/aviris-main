"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

import { CodeBlock } from "@aviris/ui/components/code-block";
import { DocsPager } from "~/components/DocsPager";
import { routes } from "~/constants/routes";

export default function AccessibilityPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Accessibility
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to build accessible applications with Aviris UI components.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            ARIA Attributes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All Aviris UI components are built with proper ARIA attributes for
            accessibility.
          </p>
          <CodeBlock
            code={`// Example of a button with proper ARIA attributes
<Button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
>
  Close
</Button>`}
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Keyboard Navigation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Components support full keyboard navigation for better
            accessibility.
          </p>
          <CodeBlock
            code={`// Example of keyboard navigation in a dropdown
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Color Contrast
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our color system ensures sufficient contrast ratios for better
            readability.
          </p>
          <CodeBlock
            code={`// Example of using semantic color tokens
<div className="bg-background text-foreground">
  <h1 className="text-primary">Accessible Heading</h1>
  <p className="text-muted-foreground">Accessible text</p>
</div>`}
            language="tsx"
          />
        </section>

        <div className="mt-10 space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Accessibility Features</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Semantic HTML elements</li>
                <li>ARIA attributes and roles</li>
                <li>Keyboard navigation support</li>
                <li>Focus management</li>
                <li>Screen reader compatibility</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Common Pitfalls</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Missing alt text on images</li>
                <li>Insufficient color contrast</li>
                <li>Missing ARIA labels</li>
                <li>Inaccessible form controls</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Navigation */}
      <DocsPager
        prev={{
          title: "Best Practices",
          href: routes.docs.guides.bestPractices,
        }}
        next={{
          title: "Performance",
          href: routes.docs.guides.performance,
        }}
      />
    </div>
  );
}
