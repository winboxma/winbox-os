import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
