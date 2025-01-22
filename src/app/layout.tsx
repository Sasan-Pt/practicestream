import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "i made this stream",
  description: "rust practice front",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-cols-[100px_1fr_100px] bg-black  font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
