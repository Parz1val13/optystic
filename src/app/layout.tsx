import type { Metadata, Viewport } from "next";
import { Cormorant, Inter_Tight, Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  style: "italic",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optystic.com"),
  title: "Optystic | Web and AI Studio",
  description:
    "Optystic is an independent studio that designs and builds websites, web apps and AI agents that do real work. Every project here is live on the internet.",
  openGraph: {
    title: "Optystic | Web and AI Studio",
    description:
      "Websites, web apps and AI agents, designed and built by Optystic.",
    url: "https://optystic.com",
    siteName: "Optystic",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${interTight.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
