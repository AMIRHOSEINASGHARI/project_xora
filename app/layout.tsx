import type { Metadata } from "next";
import "./globals.css";

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
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
