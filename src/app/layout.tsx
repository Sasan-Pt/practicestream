import type { Metadata } from "next";
import "./globals.css";
import HeaderMenu from "./component/headerMenu";
import Footer from "./component/footer/footer";
import { ReactScan } from "./react-scan/reactScan";
import QueryProviders from "./component/queryProvider/QueryProver";

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

      <body className="grid grid-cols-[4%_92%_4%]  md:grid-cols-[10%_80%_10%] bg-black  font-[family-name:var(--font-geist-sans)] ">
      <QueryProviders  >
      
      <ReactScan />
        <HeaderMenu />
        {children}
        <Footer />
      </QueryProviders>

      </body>
    </html>
  );
}
