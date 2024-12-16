import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZILA SAHKARI BANK LTD. MIRZAPUR",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Reference the logo as the favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
        <title>ZILA SAHKARI BANK LTD. MIRZAPUR</title>
      </head>
      <body className={inter.className}>
        <div className="relative">
        <Navbar />
        {children}
        <Footer />
        <div className="absolute bottom-6 right-2">
        <ScrollUp/>
      </div>
      </div>
      </body>
    </html>
  );
}
