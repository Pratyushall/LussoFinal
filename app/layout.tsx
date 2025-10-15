import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeButton from "@/components/HomeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lusso Interiors",
  description: "Luxury interiors, thoughtfully designed.",
  icons: {
    icon: [
      { url: "/icon.png" }, // uses /app/icon.png
      { url: "/icon.png", sizes: "32x32" },
      { url: "/icon.png", sizes: "16x16" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180" }], // ok to reuse
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <HomeButton hideOnHome />
      </body>
    </html>
  );
}
