// src/app/layout.js

"use client";

import "./globals.css";
import { Header } from "@/comman/Header";
import { Footer } from "@/comman/Footer";
import { usePathname } from "next/navigation";
import CookiesBanner from "@/comman/CookiesBanner";
import Script from 'next/script'; // Import the Script component

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isDashboardPage = pathname ? pathname.startsWith("/dashboard") : false;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NCT1WCEG39"
          strategy="afterInteractive"
        />
        <meta name="google-site-verification" content="jHFWN-2IytAL4w-Uq1qbN4ccEKFdZC-_ncjfAvw_pwE" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NCT1WCEG39');
          `}
        </Script>
      </head>
      <body className="" cz-shortcut-listen="true">
        {!isDashboardPage && <Header />}
        {children}
        {!isDashboardPage && <Footer />}
        <CookiesBanner />
      </body>
    </html>
  );
}
