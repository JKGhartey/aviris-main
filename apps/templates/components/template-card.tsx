"use client";

import { ArrowRight, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@aviris/ui/components/ui/card";

import { Badge } from "@aviris/ui/components/ui/badge";
import { Button } from "@aviris/ui/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface TemplateCardProps {
  title: string;
  description: string;
  features: string[];
  githubUrl: string;
  demoUrl: string;
  tags: string[];
}

export function TemplateCard({
  title,
  description,
  features,
  githubUrl,
  demoUrl,
  tags,
}: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group flex flex-col h-full hover:shadow-lg transition-all duration-300 rounded-2xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="group-hover:bg-primary/10 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 group/item"
              >
                <span className="text-primary group-hover/item:scale-110 transition-transform duration-300">
                  •
                </span>
                <span className="group-hover/item:text-primary transition-colors duration-300">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            asChild
            variant="outline"
            className="flex-1 group-hover:border-primary/50 transition-colors duration-300"
          >
            <Link href={githubUrl} target="_blank" rel="noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Source
            </Link>
          </Button>
          <Button
            asChild
            className="flex-1 hover:opacity-90 transition-opacity duration-300"
          >
            <Link href={demoUrl}>
              Try Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
