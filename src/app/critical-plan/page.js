"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Stethoscope, Banknote, ShieldAlert, ActivitySquare, Pill, ClipboardPlus } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { CriticalForm } from '../component/criticalplan/CriticalForm';

export default function CriticalPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/criticalplan.json');
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("Failed to load FAQs", err);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <>
      <title>Harbor Group Critical Plan | Serious Illness Support</title>
      <meta name="keywords" content="Harbor Group, critical plan, serious illness, employee benefits, health condition support, major illness care, financial protection, cancer coverage, heart condition plan, group health benefits" />
      <meta name="description" content="Harbor Group's critical plan offers financial protection and support when facing major health conditions like cancer or heart disease." />
      <meta property="og:title" content="Harbor Group Critical Plan | Serious Illness Support" />
      <meta property="og:description" content="Harbor Group's critical plan offers financial protection and support when facing major health conditions like cancer or heart disease." />
      <link rel="canonical" href="https://harborgroupusa.com/critical-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/critical-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero
        title="Protection against critical illnesses for added security"
        description="Safeguard your loved-ones with our Critical Plans at Harbor Group USA. Offering added security against the uncertainties of life, our Critical Plans provide protection specifically crafted to shield you from the financial impact of critical illnesses."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Critical-plan-hero-section.jpeg"
        formComponent={<CriticalForm />}
      />

      <PlanGrid
        title="Benefits of Critical plan"
        description="At Harbor Group USA, we understand the importance of financial security during critical health moments. Our Critical Plans offer a range of easy, simple, and professional benefits to cater to your specific needs."
        features={[
          { title: "Financial Protection", description: "Receive a lump sum payout upon the diagnosis of a critical illness.", icon: ShieldAlert },
          { title: "Focus on Recovery", description: "Alleviate financial stress and focus on recovery during challenging times.", icon: ActivitySquare },
          { title: "Simple Claims", description: "Benefit from an easy and simple claims process designed for your convenience.", icon: ClipboardPlus },
          { title: "Flexible Options", description: "Tailor your plan with flexible payout options to align with your financial needs.", icon: Banknote }
        ]}
      />

      <PlanCostOptions
        title="Network"
        description="Accessing support for critical health moments is effortless with our extensive network of experienced professionals."
        plans={[
          {
            title: "Expert Network",
            features: [
              "Access our network of expert professionals who specialize in critical health conditions",
              "Ensure tailored guidance for your unique health challenges"
            ]
          },
          {
            title: "Convenient Access",
            features: [
              "Your expansive network covers every corner of the United States",
              "Find a qualified specialist conveniently, ensuring accessibility during critical health situations, wherever you are"
            ]
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Critical Plan"
        description="This plan is open to individuals and families, making it accessible for everyone seeking reliable health coverage."
        criteria={[
          { title: "Citizenship or Legal Residency", description: "US citizenship or legal residency status is a prerequisite.", icon: Home },
          { title: "Age Eligibility", description: "Tailored for individuals aged 18 to 100 years.", icon: User },
          { title: "Financial Security", description: "Perfect for who prioritize added financial security during critical health situations.", icon: Banknote }
        ]}
      />

      <PlanCostOptions
        title="Cost Options and Coverage Scenarios"
        description="Our Critical Plans provide easy, simple, and professional options to suit your financial needs during critical health moments."
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Explore different premium plans designed for varying levels of coverage"
            ]
          },
          {
            title: "Comprehensive Coverage Scenarios",
            features: [
              "Delve into clearly defined coverage scenarios for critical health events",
              "Easily understand what’s covered, allowing you to plan accordingly for added financial security"
            ]
          },
          {
            title: "Transparent Payout Structure",
            features: [
              "Benefit from an easy-to-understand payout structure for critical health conditions"
            ]
          }
        ]}
      />

      <PlanHowToApply
        title="How To Apply"
        description="Enrolling in a plan is straightforward and user-friendly."
        steps={[
          { title: "Step 1", description: "Determine what you need in terms of coverage based on your healthcare needs." },
          { title: "Step 2", description: "Review and compare various plans." },
          { title: "Step 3", description: "Provide required personal and financial information." }
        ]}
      />

      <PlanFaq
        faqs={faqs}
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA
        title="Get Your Personalized Critical Plan"
        buttonText="GET STARTED"
        href="#critical-plan-form"
      />
    </>
  );
}
