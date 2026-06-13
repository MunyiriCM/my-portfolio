import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mark Munyiri — Cybersecurity & Software Engineer",
    template: "%s | Mark Munyiri",
  },
  description:
    "Personal portfolio and blog of Mark Munyiri — cybersecurity engineer, IT support specialist, and software developer based in Nairobi, Kenya.",
  keywords: ["cybersecurity", "software engineer", "Nairobi", "Kenya", "portfolio"],
  authors: [{ name: "Mark Munyiri" }],
  openGraph: {
    title: "Mark Munyiri — Cybersecurity & Software Engineer",
    description:
      "Personal portfolio and blog of Mark Munyiri based in Nairobi, Kenya.",
    url: "https://markmunyiri.dev",
    siteName: "Mark Munyiri",
    locale: "en_US",
    type: "website",
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