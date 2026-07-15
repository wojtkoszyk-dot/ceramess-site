import type { Metadata } from "next";
import { Mulish, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "500", "600", "700"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "700"],
});

export const metadata: Metadata = {
  title: "Ceramess — ręcznie malowana ceramika",
  description: "Dwie artystki. Ręcznie malowane płytki i dekoracje. Zero masówki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${unbounded.variable} ${mulish.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
