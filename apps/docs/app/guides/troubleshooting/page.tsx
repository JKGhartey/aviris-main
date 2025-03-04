"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";
import { Search, Wrench } from "lucide-react";

import { CodeBlock } from "@aviris/ui/components/code-block";
import { DocsPager } from "~/components/DocsPager";
import { routes } from "~/constants/routes";

export default function TroubleshootingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Troubleshooting
        </h1>
        <p className="text-lg text-muted-foreground">
          Common issues and their solutions when using Aviris UI.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Installation Issues
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Resolve common installation and setup problems.
          </p>
          <CodeBlock
            code={`# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules
npm install

# Check for peer dependencies
npm ls @aviris/ui`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Styling Problems
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Fix common styling and theme issues.
          </p>
          <CodeBlock
            code={`// Ensure Tailwind is properly configured
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@aviris/ui/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require("@aviris/ui/preset")],
}`}
            language="javascript"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component Issues
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Troubleshoot common component problems.
          </p>
          <CodeBlock
            code={`// Check for proper imports
import { Button } from "@aviris/ui/components/ui/button";

// Ensure proper prop types
interface ButtonProps {
  variant?: "default" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}`}
            language="tsx"
          />
        </section>

        <div className="mt-10 space-y-4">
          <Alert>
            <Search className="h-4 w-4" />
            <AlertTitle>Debugging Tips</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Check browser console for errors</li>
                <li>Verify component props</li>
                <li>Check for conflicting styles</li>
                <li>Review dependency versions</li>
                <li>Test in isolation</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert>
            <Wrench className="h-4 w-4" />
            <AlertTitle>Common Solutions</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Clear browser cache</li>
                <li>Update dependencies</li>
                <li>Check for TypeScript errors</li>
                <li>Verify environment variables</li>
                <li>Test in different browsers</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Navigation */}
      <DocsPager
        prev={{
          title: "Deployment",
          href: routes.docs.guides.deployment,
        }}
        next={{
          title: "Contributing",
          href: routes.docs.guides.contributing,
        }}
      />
    </div>
  );
}
