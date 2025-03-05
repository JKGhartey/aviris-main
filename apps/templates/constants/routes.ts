export const routes = {
  home: "/",
  github: "https://github.com/jkghartey/aviris",
  docs_app:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_DOCS_URL
      : "http://localhost:3001",
  landing_page:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_LANDING_PAGE_URL
      : "http://localhost:3000",
} as const;
