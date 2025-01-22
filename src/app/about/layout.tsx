import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My rust app",
  description: "it's a app to practive rust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
