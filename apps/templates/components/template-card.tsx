"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@aviris/ui/components/ui/card";

import { Badge } from "@aviris/ui/components/ui/badge";
import { motion } from "framer-motion";

interface TemplateCardProps {
  title: string;
  description: string;
  features: string[];
  tags: string[];
}

export function TemplateCard({
  title,
  description,
  features,
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
            <Badge variant="outline">Coming soon</Badge>
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
      </Card>
    </motion.div>
  );
}
