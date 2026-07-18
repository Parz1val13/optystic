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
  title: "Optystic | Websites and software, built properly",
  description:
    "Optystic builds websites, web apps and automations. You talk directly to the person who builds it, and every project shown is live.",
  openGraph: {
    title: "Optystic | Websites and software, built properly",
    description:
      "Websites, web apps and automations, built properly by Optystic.",
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
