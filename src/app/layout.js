// src/app/layout.js

"use client";

import "./globals.css";
import { Header } from "@/common/Header";
import { Footer } from "@/common/Footer";
import { StickyMobileCTA } from "@/common/StickyMobileCTA";
import { usePathname } from "next/navigation";
import CookiesBanner from "@/common/CookiesBanner";
import Script from 'next/script'; // Import the Script component
import Holidayspopup from "@/common/Holidayspopup";
import Snowfall from "react-snowfall";
import ScrollProgress from "@/common/ScrollProgress";
import CustomScrollbar from "@/common/CustomScrollbar";
import SmoothScrollProvider from "@/common/SmoothScrollProvider";
import { Inter, Sora } from 'next/font/google';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

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
      <body>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <SmoothScrollProvider>
            <ScrollProgress />
            <CustomScrollbar />
            {!isDashboardPage && (
              <>
                <Header />
              </>
            )}
            <main className={!isDashboardPage ? "pt-24 md:pt-32 pb-20 md:pb-0" : ""}>
              {children}
            </main>
            {!isDashboardPage && <Footer />}
            {!isDashboardPage && <StickyMobileCTA />}
            <CookiesBanner />
          </SmoothScrollProvider>
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}
