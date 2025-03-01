import { ReactNode } from "react";

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  preview?: ReactNode;
}

export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
  required?: boolean;
}

export interface ComponentDoc {
  name: string;
  description: string;
  status: "stable" | "beta" | "coming-soon";
  examples: CodeExample[];
  props: ComponentProp[];
  metadata?: {
    sourceUrl?: string;
    package?: string;
    version?: string;
    author?: string;
    dependencies?: string[];
  };
}
