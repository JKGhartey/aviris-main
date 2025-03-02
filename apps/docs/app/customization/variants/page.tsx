import { Metadata } from "next";
import { Button } from "@aviris/ui/components/ui/button";
import { Badge } from "@aviris/ui/components/ui/badge";

export const metadata: Metadata = {
  title: "Component Variants | Aviris UI",
  description:
    "Explore the different variants available for Aviris UI components.",
};

export default function VariantsPage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="space-y-6">
        <h1 className="font-heading text-4xl font-bold">Component Variants</h1>
        <p className="text-lg text-muted-foreground">
          Explore the different variants and styles available for each
          component.
        </p>

        <div className="space-y-12">
          {/* Button Variants */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Button Variants</h2>
            <p className="text-muted-foreground">
              Buttons come in different variants to suit your needs:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </section>

          {/* Badge Variants */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Badge Variants</h2>
            <p className="text-muted-foreground">
              Badges can be used to show status or highlight information:
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>

          {/* Usage Example */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Using Variants</h2>
            <p className="text-muted-foreground">
              You can specify variants and sizes through props:
            </p>
            <pre className="rounded-lg bg-muted p-4">
              <code>{`// Button with variant and size
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

// Badge with variant
<Badge variant="destructive">
  Status
</Badge>`}</code>
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
}
