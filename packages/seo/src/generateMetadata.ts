import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
  isWww?: boolean;
}

export function generateMetadata({
  title = "Default Title",
  description = "Default description for the page",
  keywords = "default, keywords",
  ogImage = "/favicon.svg",
  ogUrl = "https://yourdomain.com",
  twitterHandle = "@yourhandle",
  isWww = false,
}: SEOProps): Metadata {
  const siteTitle = isWww ? "Aviris" : `${title} | Aviris`;

  const fullUrl = typeof window !== "undefined" ? window.location.href : ogUrl;

  return {
    title: siteTitle,
    description,
    keywords,
    metadataBase: new URL(fullUrl),
    openGraph: {
      title: siteTitle,
      description,
      url: fullUrl,
      siteName: "Aviris",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description,
      images: [ogImage],
      creator: twitterHandle,
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    robots: {
      index: true,
      follow: true,
    },
  };
}
