import type { Metadata } from "next";
import { Judson, Roboto } from "next/font/google";
import "./globals.css";

const judson = Judson({
  subsets: ["latin"],
  variable: "--font-judson",
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "BarberShop",
  description:
    "A modern barber shop website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${judson.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
