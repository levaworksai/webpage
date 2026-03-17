import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LevaWorks — Your Leverage",
  description:
    "AI-powered custom applications that give small businesses leverage they have never had. Custom commerce apps, websites, and digital stewardship.",
  icons: {
    icon: [
      { url: "/logos/v_fulcrum_16x16.png", sizes: "16x16" },
      { url: "/logos/v_fulcrum_32x32.png", sizes: "32x32" },
      { url: "/logos/v_fulcrum_64x64.png", sizes: "64x64" },
    ],
    apple: "/logos/v_fulcrum_180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
