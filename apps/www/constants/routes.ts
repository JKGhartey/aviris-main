export const routes = {
  home: "/",
  github: "https://github.com/jkghartey/aviris",
  docs_app: process.env.NEXT_PUBLIC_DOCS_URL || "http://localhost:3001",
} as const;
