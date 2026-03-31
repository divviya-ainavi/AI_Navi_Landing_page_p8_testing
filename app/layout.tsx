"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// TODO: Replace GTM-XXXXXXX with actual GTM Container ID from tagmanager.google.com
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Navi",
  url: "https://ainavi.co.uk",
  description:
    "Fractional AI leadership for UK mid-market Consumer Products and Logistics.",
  areaServed: "GB",
  founder: [
    { "@type": "Person", name: "Haja J Deen", jobTitle: "Fractional CAIO" },
    { "@type": "Person", name: "Abhishek C", jobTitle: "AI Delivery Lead" },
  ],
};

export const metadata: Metadata = {
  title: "AI Navi | Fractional AI Leadership for Consumer Products & Logistics",
  description:
    "The AI transformation partner for Consumer Products and Logistics companies, providing embedded AI leadership for the UK mid-market.",
  keywords: [
    "AI transformation",
    "fractional CAIO",
    "Consumer Products",
    "FMCG",
    "Logistics",
    "UK mid-market",
    "AI strategy",
    "data engineering",
    "pilot purgatory",
    "AI leadership",
  ],
  authors: [{ name: "AI Navi Ltd" }],
  icons: {
    icon: "/Brand_Mark_PNG-01.png",
    apple: "/Brand_Mark_PNG-01.png",
  },
  verification: {
    google: "V6hR1dXEAPacQoTqzaGn7WGzBNNOZULWGzpTXk5GCkE",
  },
  openGraph: {
    title:
      "AI Navi | Fractional AI Leadership for Consumer Products & Logistics",
    description:
      "The AI transformation partner for for the UK mid-market companies. Embedded AI leadership for UK mid-market CP and Logistics companies.",
    url: "https://ainavi.co.uk",
    siteName: "AI Navi",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Navi | Fractional AI Leadership for Consumer Products & Logistics",
    description:
      "The AI transformation partner for for the UK mid-market companies. Embedded AI leadership for UK mid-market CP and Logistics companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ainavi.co.uk",
  },
};

function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en-GB" className="scroll-smooth">
        <GoogleTagManager gtmId={GTM_ID} />
        <body className={inter.className}>
          <PostHogProvider>
            {children}
          </PostHogProvider>
          <Script id="org-schema" type="application/ld+json">
            {JSON.stringify(orgSchema)}
          </Script>
        </body>
      </html>
    );
  }

  return (
    <html lang="en-GB" className="scroll-smooth" suppressHydrationWarning>
      <GoogleTagManager gtmId={GTM_ID} />
      <body className={inter.className}>
        <ThemeProvider
          themes={["light", "dark", "black-white"]}
          defaultTheme="light"
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <PostHogProvider>
            {children}
          </PostHogProvider>
        </ThemeProvider>
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </Script>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}