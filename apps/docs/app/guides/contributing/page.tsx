import { Metadata } from "next";
import { CodeBlock } from "@aviris/ui/components/code-block";
import { Steps } from "~/components/steps";

export const metadata: Metadata = {
  title: "Contributing | Aviris UI Documentation",
  description:
    "Learn how to contribute to Aviris UI and help improve the library.",
};

export default function ContributingPage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold">Contributing</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your interest in contributing to Aviris UI! This guide
            will help you get started with contributing to the project.
          </p>
        </div>

        <Steps>
          <Steps.Step title="Development Setup">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                First, fork and clone the repository:
              </p>
              <CodeBlock
                code="git clone https://github.com/yourusername/aviris.git"
                language="bash"
                title="Clone Repository"
              />

              <p className="text-muted-foreground">
                Install dependencies and build the project:
              </p>
              <CodeBlock
                code={`pnpm install
pnpm build`}
                language="bash"
                title="Install & Build"
              />
            </div>
          </Steps.Step>

          <Steps.Step title="Project Structure">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The project is organized as a monorepo with the following
                structure:
              </p>
              <CodeBlock
                code={`aviris/
├── apps/
│   ├── docs/     # Documentation site
│   └── www/      # Marketing site
├── packages/
│   └── ui/       # Core UI components
└── examples/     # Example applications`}
                language="text"
                title="Project Structure"
              />
            </div>
          </Steps.Step>

          <Steps.Step title="Development Workflow">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                1. Create a new branch for your feature or fix:
              </p>
              <CodeBlock
                code="git checkout -b feat/new-component"
                language="bash"
                title="Create Branch"
              />

              <p className="text-muted-foreground">
                2. Start the development server:
              </p>
              <CodeBlock
                code="pnpm dev"
                language="bash"
                title="Development Server"
              />

              <p className="text-muted-foreground">
                3. Make your changes and test them thoroughly
              </p>

              <p className="text-muted-foreground">
                4. Commit your changes following conventional commits:
              </p>
              <CodeBlock
                code={`# Examples:
git commit -m "feat: add new button variant"
git commit -m "fix: resolve button focus state"
git commit -m "docs: update component usage examples"`}
                language="bash"
                title="Commit Changes"
              />
            </div>
          </Steps.Step>

          <Steps.Step title="Component Guidelines">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                When creating or modifying components:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Follow the existing component structure</li>
                <li>Include proper TypeScript types</li>
                <li>Add comprehensive tests</li>
                <li>Update documentation</li>
                <li>Ensure accessibility standards are met</li>
              </ul>

              <p className="text-muted-foreground mt-4">
                Example component structure:
              </p>
              <CodeBlock
                code={`import * as React from "react"
import { cn } from "@aviris/ui/lib/utils"

interface ComponentProps {
  // Props interface
}

export function Component({ className, ...props }: ComponentProps) {
  // Component implementation
}`}
                language="typescript"
                title="Component Template"
              />
            </div>
          </Steps.Step>

          <Steps.Step title="Submit Your Contribution">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                When you're ready to submit your changes:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Push your changes to your fork</li>
                <li>Create a pull request</li>
                <li>Fill out the pull request template</li>
                <li>Wait for review and address any feedback</li>
              </ol>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Pull Request Checklist</h4>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>✓ Code follows style guidelines</li>
                  <li>✓ Tests are passing</li>
                  <li>✓ Documentation is updated</li>
                  <li>✓ Commit messages follow convention</li>
                  <li>✓ Changes are properly tested</li>
                </ul>
              </div>
            </div>
          </Steps.Step>
        </Steps>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Need Help?</h2>
          <p className="text-muted-foreground">
            If you need help or have questions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Join our Discord community</li>
            <li>Open a discussion on GitHub</li>
            <li>Check existing issues and pull requests</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
