import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Why Your Body Stays on Guard — Free Guide | Eat the Trees, Drink the Leaves",
  description:
    "A free guide for women who are exhausted, overwhelmed, and ready to finally understand their nervous system — and heal it gently.",
  openGraph: {
    title: "Why Your Body Stays on Guard",
    description:
      "A free guide for women who are exhausted, overwhelmed, and ready to finally understand their nervous system — and heal it gently.",
    url: "https://eatthetreesdrinktheleaves.com",
    siteName: "Eat the Trees, Drink the Leaves",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-jost antialiased">{children}</body>
    </html>
  );
}
