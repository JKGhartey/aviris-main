"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";
import { Timer, Zap } from "lucide-react";

import { CodeBlock } from "@aviris/ui/components/code-block";
import { DocsPager } from "~/components/DocsPager";
import { routes } from "~/constants/routes";

export default function PerformancePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Performance
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to optimize your application's performance with Aviris UI.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Code Splitting
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Use dynamic imports to split your code into smaller chunks.
          </p>
          <CodeBlock
            code={`// Lazy load components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Disable SSR for client-only components
});`}
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Memoization</h2>
          <p className="text-muted-foreground leading-relaxed">
            Optimize re-renders using React's memoization techniques.
          </p>
          <CodeBlock
            code={`// Memoize expensive components
const ExpensiveList = React.memo(({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});

// Memoize callbacks
const handleClick = useCallback(() => {
  // Handle click
}, [/* dependencies */]);`}
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Image Optimization
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Optimize images for better performance.
          </p>
          <CodeBlock
            code={`// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority={true}
  loading="lazy"
  quality={75}
/>`}
            language="tsx"
          />
        </section>

        <div className="mt-10 space-y-4">
          <Alert>
            <Zap className="h-4 w-4" />
            <AlertTitle>Performance Tips</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Use React.memo for expensive components</li>
                <li>Implement proper code splitting</li>
                <li>Optimize images and assets</li>
                <li>Use virtualization for long lists</li>
                <li>Implement proper caching strategies</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert>
            <Timer className="h-4 w-4" />
            <AlertTitle>Monitoring</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Use React DevTools Profiler</li>
                <li>Monitor Core Web Vitals</li>
                <li>Track bundle size</li>
                <li>Measure render performance</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Navigation */}
      <DocsPager
        prev={{
          title: "Accessibility",
          href: routes.docs.guides.accessibility,
        }}
        next={{
          title: "Deployment",
          href: routes.docs.guides.deployment,
        }}
      />
    </div>
  );
}
