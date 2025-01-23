import type { Metadata } from "next";
import "./globals.css";
import HeaderMenu from "./component/headerMenu";

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
      <body className="grid grid-cols-[4%_9fr_4%] bg-black  font-[family-name:var(--font-geist-sans)]">
        <HeaderMenu />
        {children}
      </body>
    </html>
  );
}
