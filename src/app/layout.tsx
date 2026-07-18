import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { FaviconAnimator } from "@/components/v2/favicon-animator";
import "./globals.css";
import "./effects.css";

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
  title: "Optystic",
  description:
    "Crafted with purpose. Optystic builds websites, web apps and AI automation: design, development and launch, handled end to end.",
  openGraph: {
    title: "Optystic",
    description:
      "Crafted with purpose. Websites, web apps and AI automation, built end to end.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <FaviconAnimator />
      </body>
    </html>
  );
}
