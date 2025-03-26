import type { Metadata } from "next";
import localFont from "next/font/local";
import { Kanit } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 
const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SirawitPortfolio",
  description: "SirawiPortfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={kanit.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
