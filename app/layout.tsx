import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Xora | Sass Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
