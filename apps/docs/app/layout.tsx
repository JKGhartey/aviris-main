import "@aviris/ui/globals.css";

import { DocsLayout } from "~/components/DocsLayout";
import { Inter } from "next/font/google";
import { generateMetadata } from "@aviris/seo/generateMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateMetadata({
  title: "Documentation",
  description: "Documentation for the Aviris platform",
  keywords: "aviris, documentation, guide, api",
  ogImage: "/docs-og-image.jpg",
  twitterHandle: "@aviris",
  ogUrl: "https://docs.aviris.com",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}
