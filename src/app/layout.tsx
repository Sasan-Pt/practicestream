import type { Metadata } from "next";
import "./globals.css";
import HeaderMenu from "./component/headerMenu";
import Footer from "./component/footer/footer";

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
      <body className="grid grid-cols-[6%_88%_6%]  md:grid-cols-[10%_80%_10%] bg-black  font-[family-name:var(--font-geist-sans)]">
        <HeaderMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
