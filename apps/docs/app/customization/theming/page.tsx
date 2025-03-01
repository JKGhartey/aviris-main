"use client";

import { CodeBlock } from "@aviris/ui/components/code-block";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";
import { Info } from "lucide-react";
import { Card } from "@aviris/ui/components/ui/card";
import { Button } from "@aviris/ui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@aviris/ui/components/ui/tabs";

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Theming
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to customize the theme and create your own color schemes.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Theme Provider
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The ThemeProvider component allows you to configure theme settings
            and manage color schemes.
          </p>
          <CodeBlock
            code={`import { ThemeProvider } from "@aviris/ui/theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            language="tsx"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Color Schemes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Create custom color schemes by defining CSS variables for your
            theme.
          </p>
          <Tabs defaultValue="light" className="w-full">
            <TabsList>
              <TabsTrigger value="light">Light Theme</TabsTrigger>
              <TabsTrigger value="dark">Dark Theme</TabsTrigger>
            </TabsList>
            <TabsContent value="light">
              <CodeBlock
                code={`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }
}`}
                language="css"
              />
            </TabsContent>
            <TabsContent value="dark">
              <CodeBlock
                code={`.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 48%;
}`}
                language="css"
              />
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Theme Examples
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6 space-y-4">
              <h3 className="font-medium">Default Theme</h3>
              <div className="space-y-2">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </Card>
            <Card className="p-6 space-y-4 dark">
              <h3 className="font-medium">Dark Theme</h3>
              <div className="space-y-2">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </Card>
          </div>
        </section>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Theme Configuration</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-4 space-y-2 mt-2">
              <li>Use semantic color names for better maintainability</li>
              <li>Test your theme in both light and dark modes</li>
              <li>Consider accessibility when choosing colors</li>
              <li>Use CSS variables for dynamic theme switching</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
