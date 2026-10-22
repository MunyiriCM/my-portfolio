import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Mark Ciira — Cyber Security Analyst, Trainer and Developer";
const siteDescription =
  "Personal portfolio and blog of Mark Ciira, a cyber security analyst, cybersecurity trainer and developer based in Nairobi, Kenya.";

export const metadata: Metadata = {
  metadataBase: new URL("https://markciira.com"),
  title: {
    default: siteTitle,
    template: "%s | Mark Ciira",
  },
  description: siteDescription,
  keywords: [
    "cyber security analyst",
    "cybersecurity trainer",
    "incident response",
    "vulnerability management",
    "Next.js",
    "Nairobi",
    "Kenya",
    "portfolio",
  ],
  authors: [{ name: "Mark Ciira Munyiri" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://markciira.com",
    siteName: "Mark Ciira",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}