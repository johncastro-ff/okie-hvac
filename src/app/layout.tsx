import type { Metadata } from "next";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const SITE_URL = "https://okiehvac.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "OKIE HVAC Systems | Stillwater's #1 HVAC Contractor",
    template: "%s | OKIE HVAC Systems — Stillwater, OK",
  },

  description:
    "Fast, reliable HVAC & heating solutions for homes and businesses in Stillwater, OK. 24/7 emergency service — no overtime charges, ever. Call (405) 338-9194.",

  keywords: [
    "HVAC Stillwater OK",
    "air conditioning repair Stillwater",
    "furnace repair Stillwater",
    "HVAC contractor Stillwater Oklahoma",
    "AC repair Stillwater",
    "emergency HVAC repair",
    "heating and cooling Stillwater",
    "OKIE HVAC",
  ],

  authors: [{ name: "OKIE HVAC Systems" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "OKIE HVAC Systems",
    title: "OKIE HVAC Systems | Stillwater's #1 HVAC Contractor",
    description:
      "Fast, reliable HVAC & heating solutions for homes and businesses in Stillwater, OK. 24/7 emergency service — no overtime charges. Call (405) 338-9194.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "OKIE HVAC Systems — Stillwater, Oklahoma's Trusted HVAC Contractor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OKIE HVAC Systems | Stillwater's #1 HVAC Contractor",
    description:
      "Fast, reliable HVAC & heating for Stillwater, OK. 24/7 emergency service — no overtime charges. Call (405) 338-9194.",
    images: [OG_IMAGE],
  },

  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // Add when GSC is set up
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
