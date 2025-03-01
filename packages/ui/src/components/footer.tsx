"use client";

import Link from "next/link";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
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

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container max-w-7xl mx-auto px-4 md:px-6"
      >
        <motion.div
          variants={container}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <motion.div
            variants={container}
            className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center"
          >
            <motion.div variants={item}>
              <Link
                href="/"
                className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 hover:from-primary hover:to-primary/70 transition-all"
              >
                aviris
              </Link>
            </motion.div>
            <motion.p variants={item} className="text-sm text-muted-foreground">
              Built by{" "}
              <Link
                href="https://twitter.com/jkghartey"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                @jkghartey
              </Link>
              . The source code is available on{" "}
              <Link
                href="https://github.com/jkghartey/aviris"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                GitHub
              </Link>
              .
            </motion.p>
          </motion.div>
          <motion.div variants={item} className="flex items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-lg overflow-hidden"
            >
              <Link
                href="https://github.com/jkghartey/aviris"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-lg overflow-hidden"
            >
              <Link
                href="https://twitter.com/jkghartey"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-lg overflow-hidden"
            >
              <Link
                href="https://discord.gg/your-invite-code"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
