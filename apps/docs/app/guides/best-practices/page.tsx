"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";

import { CodeBlock } from "@aviris/ui/components/code-block";
import { DocsPager } from "~/components/DocsPager";
import { Lightbulb } from "lucide-react";
import { routes } from "~/constants/routes";

export default function BestPracticesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Best Practices
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn the recommended practices for using Aviris UI in your
          applications.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component Organization
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Organize your components in a way that promotes reusability and
            maintainability.
          </p>
          <CodeBlock
            code={`// Recommended structure
src/
  components/
    ui/           # Aviris UI components
    custom/       # Your custom components
    layouts/      # Layout components
    features/     # Feature-specific components
  pages/          # Page components
  hooks/          # Custom hooks
  utils/          # Utility functions`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            State Management
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Use appropriate state management solutions based on your
            application's needs.
          </p>
          <CodeBlock
            code={`// For simple state
const [isOpen, setIsOpen] = useState(false);

// For complex state
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos
});`}
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Performance Optimization
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Follow these practices to ensure optimal performance.
          </p>
          <CodeBlock
            code={`// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});

// Lazy load components
const LazyComponent = dynamic(() => import('./LazyComponent'));`}
            language="tsx"
          />
        </section>

        <div className="mt-10">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tips</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Keep components focused and single-responsibility</li>
                <li>Use TypeScript for better type safety</li>
                <li>Implement proper error boundaries</li>
                <li>Write unit tests for critical components</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Navigation */}
      <DocsPager
        prev={{
          title: "Variants",
          href: routes.docs.customization.variants,
        }}
        next={{
          title: "Accessibility",
          href: routes.docs.guides.accessibility,
        }}
      />
    </div>
  );
}
