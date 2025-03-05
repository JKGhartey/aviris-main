import { CodeBlock } from "@aviris/ui/components/code-block";
import { Metadata } from "next";
import { Steps } from "~/components/steps";

export const metadata: Metadata = {
  title: "Getting Started | Aviris UI Documentation",
  description:
    "Learn how to install and set up Aviris UI in your React project.",
};

export default function GettingStartedPage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold">Getting Started</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to install and set up Aviris UI in your React project.
            Follow these steps to get up and running quickly.
          </p>
        </div>

        <Steps>
          <Steps.Step title="Install Aviris UI">
            <p className="text-muted-foreground mb-4">
              Install Aviris UI using your preferred package manager:
            </p>
            <div className="space-y-4">
              <CodeBlock
                code="pnpm add @aviris/ui"
                language="bash"
                title="Terminal"
              />
              <p className="text-sm text-muted-foreground">
                This will install the core package along with its peer
                dependencies.
              </p>
            </div>
          </Steps.Step>

          <Steps.Step title="Configure Tailwind CSS">
            <p className="text-muted-foreground mb-4">
              Add the following to your tailwind.config.js:
            </p>
            <CodeBlock
              code={`import { avirisPreset } from "@aviris/ui/preset"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ... your content paths
    "./node_modules/@aviris/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [avirisPreset],
}`}
              language="typescript"
              title="tailwind.config.js"
            />
          </Steps.Step>

          <Steps.Step title="Add Required Providers">
            <p className="text-muted-foreground mb-4">
              Wrap your app with the required providers:
            </p>
            <CodeBlock
              code={`import { ThemeProvider } from "@aviris/ui/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
              language="typescript"
              title="app/layout.tsx"
            />
          </Steps.Step>

          <Steps.Step title="Start Using Components">
            <p className="text-muted-foreground mb-4">
              Import and use components in your application:
            </p>
            <CodeBlock
              code={`import { Button } from "@aviris/ui/components/ui/button"
import { Input } from "@aviris/ui/components/ui/input"

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
      />
      <Input
        type="password"
        placeholder="Password"
      />
      <Button type="submit">
        Sign In
      </Button>
    </form>
  )
}`}
              language="typescript"
              title="app/login/page.tsx"
            />
          </Steps.Step>
        </Steps>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Explore the components in the documentation</li>
            <li>Learn about customizing components and themes</li>
            <li>Check out the example applications</li>
            <li>Join our Discord community for support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
