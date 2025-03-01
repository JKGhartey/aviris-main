"use client";

import { SectionHeader } from "@aviris/ui/components/section-header";
import { Zap, Box, Repeat } from "lucide-react";
import { motion } from "framer-motion";

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

const benefits = [
  {
    title: "Quick Setup",
    description:
      "Get started in minutes with our CLI tool. No complex configuration required.",
    icon: Zap,
  },
  {
    title: "Production Ready",
    description:
      "Built with performance and accessibility in mind. Battle-tested and reliable.",
    icon: Box,
  },
  {
    title: "Always Updated",
    description:
      "Regular updates ensure you have access to the latest features and improvements.",
    icon: Repeat,
  },
];

export function Benefits() {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-16"
      >
        <SectionHeader
          title="Why Choose Aviris?"
          description="Build modern applications with confidence using our production-ready components."
          className="max-w-[800px]"
        />

        <motion.div
          variants={container}
          className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={item}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative overflow-hidden rounded-lg border bg-background p-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
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
