import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@aviris/ui/globals.css";
import { cn } from "@aviris/ui/lib/utils";
import { Navbar } from "~/components/navbar";
import { ThemeProvider } from "@aviris/ui/theme";
import { Footer } from "@aviris/ui/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Aviris",
  description:
    "Aviris is a platform for creating and managing your own AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
