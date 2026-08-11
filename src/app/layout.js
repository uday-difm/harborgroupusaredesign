// src/app/layout.js

"use client";

import "./globals.css";
import { Header } from "@/comman/Header";
import { Footer } from "@/comman/Footer";
import { usePathname } from "next/navigation";
import CookiesBanner from "@/comman/CookiesBanner";
import Script from 'next/script'; // Import the Script component
import Holidayspopup from "@/comman/Holidayspopup";
import Snowfall from "react-snowfall";
import Preloader from "@/comman/Preloader";
import ScrollProgress from "@/comman/ScrollProgress";
import SmoothScrollProvider from "@/comman/SmoothScrollProvider";
import { Inter, Sora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://harborgroupusa.com/#organization",
  "name": "Harbor Group USA",
  "url": "https://harborgroupusa.com",
  "logo": "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor%20Logo.png",
  "email": "support@harborgroupusa.com",
  "telephone": "+1-800-473-3241",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-800-473-3241",
      "contactType": "Customer Support",
      "areaServed": "US",
      "availableLanguage": ["English"],
      "email": "support@harborgroupusa.com"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/HarborGroupUSA",
    "https://www.linkedin.com/company/harborgroupusa",
    "https://www.instagram.com/harborgroupusa"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "foundingDate": "2010",
  "description": "Harbor Group USA provides trusted insurance and financial solutions designed to protect individuals and businesses. We focus on transparency, support, and tailored coverage options that meet every client’s needs.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Insurance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Insurance Plans",
          "url": "https://www.harborgroupusa.com/for-individuals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Broker and Partner Programs",
          "url": "https://harborgroupusa.com/for-brokers"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://harborgroupusa.com"
  }
};


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isDashboardPage = pathname ? pathname.startsWith("/dashboard") : false;

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
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
     
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

      </head>
      <body className="" cz-shortcut-listen="true">
        <SmoothScrollProvider>
          <Preloader />
          <ScrollProgress />
          {!isDashboardPage && (
            <>
          <Header />
          {/* <Holidayspopup />
                  <Snowfall
       snowflakeCount={160}
        color="#00A6F4"   
        speed={[0.5, 1.5]}
        wind={[-0.3, 0.3]}
        radius={[1, 3]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999999,  
          pointerEvents: "none",
             }}
      /> */}
        </>
  )}
          {children}
          {!isDashboardPage && <Footer />}
          <CookiesBanner />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
