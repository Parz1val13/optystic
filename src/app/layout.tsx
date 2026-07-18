import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optystic.com"),
  title: "Optystic | Web studio",
  description:
    "Optystic is a small studio that designs and builds websites, web apps and automations. You deal directly with the builder, and every project here is live.",
  openGraph: {
    title: "Optystic | Web studio",
    description:
      "Websites, web apps and automations, designed and built by Optystic.",
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
      className={`${bricolage.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
