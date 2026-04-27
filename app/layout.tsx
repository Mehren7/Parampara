import { ThemeProvider } from "../lib/core/theme_provider";
import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

// Enhanced SEO metadata with Open Graph and Twitter cards
export const metadata: Metadata = {
  title: "Parampara - Connect Diaspora Learners with Indian Culture",
  description:
    "Connect diaspora learners with Indian women instructors for language and culture sessions. Learn mother tongue, customs, recipes, and stories through live 1:1 sessions.",
  keywords: [
    "Indian culture",
    "language learning",
    "diaspora education",
    "cultural mentorship",
    "Indian women instructors",
  ],
  authors: [{ name: "Parampara" }],
  creator: "Parampara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parampara.com",
    title: "Parampara - Connect Diaspora Learners with Indian Culture",
    description:
      "Connect diaspora learners with Indian women instructors for language and culture sessions.",
    siteName: "Parampara",
    images: [
      {
        url: "https://parampara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parampara - Cultural Bridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parampara - Connect Diaspora Learners with Indian Culture",
    description:
      "Connect diaspora learners with Indian women instructors for language and culture sessions.",
    creator: "@parampara",
    images: ["https://parampara.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// Viewport configuration for better mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}