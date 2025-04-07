import TopBarNavigation from "@/components/top-bar-navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Take a Passport Photo Online in 30 Seconds With This App",
  description:
    "Take a photo with your mobile phone or camera, upload it, and after a few seconds, you will receive a professional photo for your passport or visa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TopBarNavigation />
        {children}
      </body>
    </html>
  );
}
