"use client";

import { FaqSection } from "./component/home/FaqSection";
import HealthPlanQuoteToday from "./component/home/HealthPlanQuoteToday";
import { HeroSection } from "./component/home/Hero";
import { ServicesSection } from "./component/home/ServiceSection";
import HowItWorksSection from "./component/home/HowItWorksSection";

import { WholesaleGeneralAgency } from "./component/home/WholesaleGeneralAgency";
import CoverageSection from "./component/home/CoverageSection";

export default function Home() {
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

      {/* Overhauled Section Flow */}
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WholesaleGeneralAgency />
      <CoverageSection />
      <HealthPlanQuoteToday />

      <FaqSection />
    </>
  );
}
