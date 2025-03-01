"use client";

import {
  Code2,
  Paintbrush,
  Terminal,
  Settings2,
  Accessibility,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@aviris/ui/components/section-header";
import { Badge } from "@aviris/ui/components/badge";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  comingSoon?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const features: Feature[] = [
  {
    title: "TypeScript Ready",
    description:
      "Built with TypeScript for better developer experience and type safety.",
    icon: Code2,
  },
  {
    title: "Tailwind CSS",
    description:
      "Styled with Tailwind CSS for rapid UI development and customization.",
    icon: Paintbrush,
  },
  {
    title: "CLI Tool",
    description: "Easy installation of components using our CLI tool.",
    icon: Terminal,
    comingSoon: true,
  },
  {
    title: "Customizable",
    description: "Fully customizable components to match your brand.",
    icon: Settings2,
  },
  {
    title: "Accessible",
    description:
      "Built with accessibility in mind following WAI-ARIA standards.",
    icon: Accessibility,
  },
  {
    title: "Dark Mode",
    description: "Supports both light and dark modes out of the box.",
    icon: Moon,
  },
];

export function Features() {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 space-y-16 py-24 sm:py-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-16"
      >
        <SectionHeader
          title="Beautiful React Components"
          description="A collection of high-quality React components built on top of shadcn/ui. Fully customizable and ready to use in your projects."
          className="max-w-[800px]"
        />

        <motion.div
          variants={container}
          className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <div className="h-12 w-12 text-muted-foreground transition-colors group-hover:text-primary">
                    <Icon className="h-12 w-12" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{feature.title}</h3>
                      {feature.comingSoon && (
                        <Badge
                          variant="outline"
                          size="sm"
                          className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                        >
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
