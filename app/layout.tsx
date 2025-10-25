import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Move Base - Koh Phangan",
  description: "Your path to simple wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}