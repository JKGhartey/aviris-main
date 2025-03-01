"use client";

import { CodeBlock } from "@aviris/ui/components/code-block";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";
import { Info } from "lucide-react";

export default function StylingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Styling
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to style and customize components using Tailwind CSS and CSS
          variables.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tailwind CSS
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All components are built using Tailwind CSS classes. You can
            customize their appearance using Tailwind utility classes or by
            extending the default theme.
          </p>
          <CodeBlock
            code={`// Example of customizing a component with Tailwind
<Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
  Gradient Button
</Button>`}
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            CSS Variables
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Components use CSS variables for colors, spacing, and other design
            tokens. You can override these variables to match your brand.
          </p>
          <CodeBlock
            code={`:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  
  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  /* ... */
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}`}
            language="css"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component Variants
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Many components support variants that can be used to change their
            appearance. You can also create custom variants.
          </p>
          <CodeBlock
            code={`// Built-in variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// Custom variant
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        custom: "bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600",
      },
    },
  }
);`}
            language="tsx"
          />
        </section>

        <div className="mt-10">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Best Practices</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Use CSS variables for global design tokens</li>
                <li>Create reusable utility classes for common patterns</li>
                <li>Extend the Tailwind theme for custom values</li>
                <li>Use variants for consistent component styling</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
