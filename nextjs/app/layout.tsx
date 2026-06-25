import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Barber Landing Page",
  description:
    "Modern one-page barber landing page with booking modal, responsive layout, and smooth interactions.",
  openGraph: {
    title: "Barber Landing Page",
    description:
      "Modern one-page barber landing page with booking modal, responsive layout, and smooth interactions.",
    url: siteUrl,
    siteName: "Barber Landing Page",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barber Landing Page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Landing Page",
    description:
      "Modern one-page barber landing page with booking modal, responsive layout, and smooth interactions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-amber-400">
        {children}
      </body>
    </html>
  );
}
