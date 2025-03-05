"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center p-8 bg-card/40 backdrop-blur-sm rounded-3xl border-2 border-border/40 hover:border-primary/30 hover:bg-card/60 transition-all duration-500"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Icon container */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500">
            <Icon className="h-6 w-6 text-primary/80 group-hover:text-primary transition-colors duration-500" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-500">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground/80 group-hover:text-muted-foreground max-w-[200px] transition-colors duration-500">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 group-hover:w-12 transition-all duration-500" />
      </div>
    </motion.div>
  );
}
