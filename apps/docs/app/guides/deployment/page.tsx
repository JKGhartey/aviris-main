"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@aviris/ui/components/ui/alert";
import { Cloud, Server } from "lucide-react";

import { CodeBlock } from "@aviris/ui/components/code-block";
import { DocsPager } from "~/components/DocsPager";
import { routes } from "~/constants/routes";

export default function DeploymentPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Deployment
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to deploy your Aviris UI application to various platforms.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Build Configuration
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Configure your build settings for optimal deployment.
          </p>
          <CodeBlock
            code={`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['your-domain.com'],
  },
  // Enable static exports
  output: 'export',
  // Configure base path
  basePath: '/your-app',
}`}
            language="javascript"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Environment Variables
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Set up environment variables for different deployment environments.
          </p>
          <CodeBlock
            code={`// .env.production
NEXT_PUBLIC_API_URL=https://api.production.com
NEXT_PUBLIC_APP_URL=https://app.production.com

// .env.staging
NEXT_PUBLIC_API_URL=https://api.staging.com
NEXT_PUBLIC_APP_URL=https://app.staging.com`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Deployment Platforms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Deploy your application to various platforms.
          </p>
          <CodeBlock
            code={`# Vercel
vercel deploy

# Netlify
netlify deploy

# AWS Amplify
amplify publish

# Docker
docker build -t my-app .
docker run -p 3000:3000 my-app`}
            language="bash"
          />
        </section>

        <div className="mt-10 space-y-4">
          <Alert>
            <Cloud className="h-4 w-4" />
            <AlertTitle>Cloud Deployment</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Vercel for Next.js applications</li>
                <li>Netlify for static sites</li>
                <li>AWS Amplify for full-stack apps</li>
                <li>Google Cloud Run for containerized apps</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert>
            <Server className="h-4 w-4" />
            <AlertTitle>Self-Hosting</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 space-y-2 mt-2">
                <li>Set up a Node.js server</li>
                <li>Configure reverse proxy</li>
                <li>Set up SSL certificates</li>
                <li>Configure monitoring</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Navigation */}
      <DocsPager
        prev={{
          title: "Performance",
          href: routes.docs.guides.performance,
        }}
        next={{
          title: "Troubleshooting",
          href: routes.docs.guides.troubleshooting,
        }}
      />
    </div>
  );
}
