import type { Metadata } from "next";
import { Kanit } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 
const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});
import "./globals.css";

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
