import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { Noto_Sans_Thai } from 'next/font/google';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
  preload: true,
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansThai.className}>
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        <div className="flex  h-screen">
          <div className="w-[240px]">
            <Sidebar></Sidebar>
          </div>
          <div className="p-6 flex-grow overflow-auto">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
