import { NavItem } from "~/types/nav";
import { getAllComponents } from "./registry";
import { routes } from "~/constants/routes";

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
      items: getAllComponents().map((component) => ({
        title: component.name,
        href: `/components/${component.name.toLowerCase().replace(/\s+/g, "-")}`,
        description: component.description,
      })),
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
          title: "Best Practices",
          href: routes.docs.guides.bestPractices,
          description: "Learn the recommended practices for using Aviris UI",
        },
        {
          title: "Accessibility",
          href: routes.docs.guides.accessibility,
          description: "Guidelines for building accessible applications",
        },
        {
          title: "Performance",
          href: routes.docs.guides.performance,
          description: "Tips for optimizing your application's performance",
        },
        {
          title: "Deployment",
          href: routes.docs.guides.deployment,
          description: "Learn how to deploy your Aviris UI application",
        },
        {
          title: "Troubleshooting",
          href: routes.docs.guides.troubleshooting,
          description: "Common issues and their solutions",
        },
        {
          title: "Contributing",
          href: routes.docs.guides.contributing,
          description: "How to contribute to Aviris UI",
        },
      ],
    },
  ],
};
