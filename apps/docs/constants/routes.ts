export const routes = {
  home: "/",
  landing:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_LANDING_URL
      : "http://localhost:3000",
  templates:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_TEMPLATES_URL
      : "http://localhost:3002",
  docs: {
    root: "/",
    installation: "/installation",
    cli: "/cli",
    components: {
      root: "/components",
      // Routes will be dynamically generated from registry
    },
    customization: {
      root: "/customization",
      styling: "/customization/styling",
      theming: "/customization/theming",
      variants: "/customization/variants",
    },
    guides: {
      root: "/guides",
      contributing: "/guides/contributing",
      bestPractices: "/guides/best-practices",
      accessibility: "/guides/accessibility",
      performance: "/guides/performance",
      deployment: "/guides/deployment",
      troubleshooting: "/guides/troubleshooting",
    },
  },
} as const;
