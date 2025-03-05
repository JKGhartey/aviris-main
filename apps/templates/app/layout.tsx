import "@aviris/ui/globals.css";

import {
  generateMetadata,
  generateViewport,
} from "@aviris/seo/generateMetadata";

import { Footer } from "@aviris/ui/components/footer";
import { Inter } from "next/font/google";
import { Navbar } from "~/components/navbar";
import { ThemeProvider } from "@aviris/ui/theme";
import { cn } from "@aviris/ui/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport = generateViewport();

export const metadata = generateMetadata({
  title: "Templates",
  description: "Browse and use our collection of templates",
  keywords: "aviris, templates, starter, boilerplate",
  ogImage: "/templates-og-image.jpg",
  twitterHandle: "@aviris",
  ogUrl: "https://templates.aviris.com",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
