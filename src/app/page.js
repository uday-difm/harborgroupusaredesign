"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaqSection } from "./component/home/FaqSection";
import HealthPlanQuoteToday from "./component/home/HealthPlanQuoteToday";
import { HeroSection } from "./component/home/Hero";
import { ServicesSection } from "./component/home/ServiceSection";
import { TestimonialHome } from "./component/home/TestimonialHome";
import { WholesaleGeneralAgency } from "./component/home/WholesaleGeneralAgency";
import { WhyChooseUsSection } from "./component/home/WhyChooseUs";
import QuotePopup from "@/comman/QuotePopup";
import CoverageSection from "./component/home/CoverageSection";

const HarborGroupUSALogo = () => {
  return (
    <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
      <Image
        width={600}
        height={400}
        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png"
        alt="Harbor Group USA Logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};



export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if visitor already dismissed or submitted
    const dismissed = localStorage.getItem('harbor_quote_popup_dismissed');
    if (dismissed) return; // Don't show again

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    localStorage.setItem('harbor_quote_popup_dismissed', '1');
  };

  return (
    <>
      <title>Harbor Group USA | Affordable Health Plans</title>
      <meta name="keywords" content="Harbor Group USA, health insurance, health plans, medical plans, dental, vision, term life, accident, hospital, critical illness, pet insurance, affordable health coverage, USA" />
      <meta name="description" content="Harbor Group USA helps individuals, families, and small businesses find affordable health plans — medical, dental, vision, life, and more. Get a free quote today." />
      <meta property="og:title" content="Harbor Group USA | Affordable Health Plans" />
      <meta property="og:description" content="Harbor Group USA helps individuals, families, and small businesses find affordable health plans — medical, dental, vision, life, and more. Get a free quote today." />
      <link rel="canonical" href="https://harborgroupusa.com/" />
      <meta property="og:url" content="https://harborgroupusa.com/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <HeroSection />
      <ServicesSection />
      <WholesaleGeneralAgency />
      <CoverageSection/>
      <WhyChooseUsSection />
      <HealthPlanQuoteToday />
      <FaqSection />
      <TestimonialHome />
      <AnimatePresence>
        {showPopup && <QuotePopup key="quote-popup" onClose={handlePopupClose} />}
      </AnimatePresence>
    </>
  );
}
