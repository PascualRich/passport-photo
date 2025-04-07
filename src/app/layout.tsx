import TopBarNavigation from "@/components/top-bar-navigation";
import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={`${inter.variable} ${ptSerif.variable} antialiased`}>
        <TopBarNavigation />
        {children}
      </body>
    </html>
  );
}
