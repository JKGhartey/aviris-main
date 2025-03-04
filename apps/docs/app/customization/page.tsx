import { Metadata } from "next";
import { CodeBlock } from "@aviris/ui/components/code-block";

export const metadata: Metadata = {
  title: "Getting Started | Aviris UI",
  description: "Get started building modern applications with Aviris UI.",
};

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Getting Started
        </h1>
        <p className="text-lg text-muted-foreground">
          Get started building modern applications with Aviris UI.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <p>
          Install Aviris UI and its peer dependencies using your preferred
          package manager:
        </p>
        <CodeBlock language="bash" code="pnpm add @aviris/ui" />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Setup
        </h2>
        <p>Add the following to your tailwind.config.js:</p>
        <CodeBlock
          language="javascript"
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your content paths
    "./node_modules/@aviris/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
  ],
}`}
        />
        <p>Add the following to your global CSS file:</p>
        <CodeBlock language="css" code={`@import "@aviris/ui/globals.css";`} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <p>
          Import components from @aviris/ui and start building your application:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "@aviris/ui/components/ui/button"

export default function Page() {
  return (
    <Button>Click me</Button>
  )
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Next Steps
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            Check out the{" "}
            <a href="/components" className="text-primary hover:underline">
              components
            </a>{" "}
            to see what's available
          </li>
          <li>
            Learn about{" "}
            <a
              href="/guides/customization"
              className="text-primary hover:underline"
            >
              customizing
            </a>{" "}
            the components
          </li>
          <li>
            Read the{" "}
            <a href="/guides/styling" className="text-primary hover:underline">
              styling guide
            </a>{" "}
            to understand how to style components
          </li>
        </ul>
      </div>
    </div>
  );
}
