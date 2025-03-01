import { routes } from "../constants/routes";
import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  badge?: string;
  description?: string;
  icon?: LucideIcon;
  items?: Omit<NavItem, "items">[];
}

export interface DocsConfig {
  sidebarNav: NavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      href: routes.docs.root,
      items: [
        {
          title: "Introduction",
          href: routes.docs.root,
        },
        {
          title: "Installation",
          href: routes.docs.installation,
          disabled: true,
          badge: "Coming Soon",
        },
        {
          title: "CLI",
          href: routes.docs.cli,
          disabled: true,
          badge: "Coming Soon",
        },
      ],
    },
    {
      title: "Components",
      href: routes.docs.components.root,
      items: [
        {
          title: "File Upload",
          href: routes.docs.components.fileUpload,
          description:
            "Advanced file upload component with drag and drop support",
        },
        {
          title: "Job Application",
          href: routes.docs.components.jobApplication,
          description: "Multi-step job application form with validation",
        },
        {
          title: "Kanban Board",
          href: routes.docs.components.kanbanBoard,
          description: "Drag and drop kanban board for task management",
        },
        {
          title: "Analytics Dashboard",
          href: routes.docs.components.analyticsDashboard,
          description: "Data visualization dashboard with real-time updates",
        },
      ],
    },
    {
      title: "Customization",
      href: routes.docs.customization.root,
      items: [
        {
          title: "Styling",
          href: routes.docs.customization.styling,
          description: "Learn how to style and customize components",
        },
        {
          title: "Theming",
          href: routes.docs.customization.theming,
          description: "Customize the theme and color schemes",
        },
        {
          title: "Variants",
          href: routes.docs.customization.variants,
          description: "Create and use component variants",
        },
      ],
    },
    {
      title: "Guides",
      href: routes.docs.guides.root,
      items: [
        {
          title: "Getting Started",
          href: routes.docs.guides.gettingStarted,
          description:
            "A comprehensive guide to getting started with Aviris UI",
        },
        {
          title: "Contributing",
          href: routes.docs.guides.contributing,
          description: "How to contribute to Aviris UI",
        },
        {
          title: "Deployment",
          href: routes.docs.guides.deployment,
          description: "Deploy your application with Aviris UI",
        },
      ],
    },
  ],
};
