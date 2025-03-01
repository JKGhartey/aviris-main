"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const titleAnimation = {
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

const descriptionAnimation = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.1,
    },
  },
};

export function SectionHeader({
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`space-y-4 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      <motion.h2
        variants={titleAnimation}
        className="text-2xl font-bold leading-[1.1] tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={descriptionAnimation}
          className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
