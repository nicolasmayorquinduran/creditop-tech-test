import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creditop",
  description: "Tech test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx([publicSans.variable, "p-16 md:p-32"])}>
        {children}
      </body>
    </html>
  );
}
