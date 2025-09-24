"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaqSection } from "./component/home/FaqSection";
import HealthPlanQuoteToday from "./component/home/HealthPlanQuoteToday";
import { HeroSection } from "./component/home/Hero";
import { ServicesSection } from "./component/home/ServiceSection";
import { TestimonialHome } from "./component/home/TestimonialHome";
import { WholesaleGeneralAgency } from "./component/home/WholesaleGeneralAgency";
import { WhyChooseUsSection } from "./component/home/WhyChooseUs";
import QuotePopup from "@/comman/QuotePopup";

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
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <title>Harbor Group USA | Affordable Health Plans</title>
      <meta name="keywords" content="Harbor Group USA, real estate services, property management, trusted real estate, commercial property management, residential property management, real estate solutions" />
      <meta name="description" content=" Harbor Group USA offers expert real estate services, property management, and investment solutions to help you find and manage your ideal property." />
      <meta property="og:title" content="Harbor Group USA | Affordable Health Plans" />
      <meta property="og:description" content="Harbor Group USA offers expert real estate services, property management, and investment solutions to help you find and manage your ideal property." />
      <link rel="canonical" href="https://harborgroupusa.com/" />
      <meta property="og:url" content="https://harborgroupusa.com/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <HeroSection />
      <ServicesSection />
      <WholesaleGeneralAgency />
      <WhyChooseUsSection />
      <HealthPlanQuoteToday />
      <FaqSection />
      <TestimonialHome />
      {showPopup && <QuotePopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
