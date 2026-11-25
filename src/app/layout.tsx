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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ตั้งค่า theme ก่อน paint เพื่อกันหน้าจอกระพริบ (no-flash) — default เป็น dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
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
