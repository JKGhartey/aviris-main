"use client";

import { ArrowRight, Code, Layout, Zap } from "lucide-react";

import { CustomButton } from "@aviris/ui/components/custom-button";
import { FeatureCard } from "./feature-card";
import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "~/constants/routes";

const features = [
  {
    icon: Code,
    title: "Production Ready",
    description: "Built with best practices and modern tools",
  },
  {
    icon: Layout,
    title: "Beautiful UI",
    description: "Modern and responsive designs",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Optimized for performance",
  },
];

// Duplicate features many times for a truly seamless loop
const duplicatedFeatures = [
  ...features,
  ...features,
  ...features,
  ...features,
  ...features,
  ...features,
  ...features,
];

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(var(--primary),0.02)_50%,transparent_100%)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="mt-0">
              <motion.a href="#" className="inline-flex space-x-6 group">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
                  <span>Just shipped v1.0</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                </span>
              </motion.a>
            </div>
            <div className="mx-auto max-w-xl">
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary text-transparent bg-clip-text">
                  Start building faster
                </span>{" "}
                with{" "}
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary text-transparent bg-clip-text">
                  Aviris Templates
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground lg:mx-0">
                A collection of production-ready templates to help you build
                your next application. Each template is designed with best
                practices and includes essential configurations.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <CustomButton
                asChild
                size="lg"
                className="w-full sm:w-auto relative group"
              >
                <Link href="#templates" className="relative z-10">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  Browse Templates
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto relative group"
              >
                <Link
                  href={routes.docs_app as string}
                  className="relative z-10"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  View Components
                </Link>
              </CustomButton>
            </div>
          </motion.div>

          {/* Right content - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 mx-auto mt-8 lg:mt-0"
          >
            {/* Mobile feature cards */}
            <div className="lg:hidden grid grid-cols-1 gap-4 md:px-[10vh]">
              {features.map((feature, index) => (
                <FeatureCard
                  key={`mobile-${feature.title}-${index}`}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>

            {/* Desktop animated feature cards */}
            <div className="hidden lg:block relative [mask-image:linear-gradient(to_bottom,transparent_0,black_100px,black_calc(100%-100px),transparent_100%)]">
              <div className="grid grid-cols-2 gap-8">
                {/* Left column - animating from top to bottom */}
                <div className="h-[500px] overflow-hidden">
                  <motion.div
                    className="space-y-8"
                    animate={{
                      y: [0, -400],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    {duplicatedFeatures.map((feature, index) => (
                      <FeatureCard
                        key={`left-${feature.title}-${index}`}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </div>
                {/* Right column - animating from bottom to top */}
                <div className="h-[500px] overflow-hidden">
                  <motion.div
                    className="space-y-8"
                    animate={{
                      y: [-400, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    {[...duplicatedFeatures].reverse().map((feature, index) => (
                      <FeatureCard
                        key={`right-${feature.title}-${index}`}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
