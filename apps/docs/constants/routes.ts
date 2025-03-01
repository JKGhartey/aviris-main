export const routes = {
  home: "/",
  github: "https://github.com/jkghartey/aviris",
  docs: {
    root: "/",
    installation: "/installation",
    cli: "/cli",
    components: {
      root: "/components",
      // Core Components
      fileUpload: "/components/file-upload",
      // Custom Components (Planned)
      jobApplication: "/components/job-application",
      kanbanBoard: "/components/kanban-board",
      // Widgets (Planned)
      analyticsDashboard: "/components/analytics-dashboard",
    },
    customization: {
      root: "/customization",
      styling: "/customization/styling",
      theming: "/customization/theming",
      variants: "/customization/variants",
    },
    guides: {
      root: "/guides",
      gettingStarted: "/guides/getting-started",
      contributing: "/guides/contributing",
      deployment: "/guides/deployment",
    },
    landing:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_APP_LANDING_URL
        : "http://localhost:3000",
  },
} as const;
