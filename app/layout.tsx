import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilia Akimov | Senior Frontend Developer",
  description: "Premium Portfolio of Ilia Akimov, specialized in React, Next.js, and Modern Web Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
