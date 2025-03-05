export const routes = {
  home: "/",
  docs_app:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_DOCS_URL
      : "http://localhost:3001",
  templates:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_TEMPLATES_URL
      : "http://localhost:3002",
} as const;
