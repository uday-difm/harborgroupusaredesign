"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, HeartPulse, Stethoscope, BriefcaseMedical, Wallet, Activity, ClipboardCheck } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { LimitedMedForm } from '../component/limitedmedplans/LimitedMedForm';

export default function LimitedMedPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/limitedmed.json');
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
      <title>Limited Med Plan | The Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group, limited med, essential care, basic health plan, affordable coverage, employee benefits, routine care, medical access, group health, simplified benefits" />
      <meta name="description" content="Get an essential health plan with The Harbor Group Limited Med Plan, which covers basic medical needs without overextending your budget." />
      <meta property="og:title" content="Limited Med Plan | The Harbor Group USA" />
      <meta property="og:description" content="Get an essential health plan with The Harbor Group Limited Med Plan, which covers basic medical needs without overextending your budget." />
      <link rel="canonical" href="https://harborgroupusa.com/limited-med/" />
      <meta property="og:url" content="https://harborgroupusa.com/limited-med/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Plans", href: "/health-plans" }, { label: "Limited Med Plan" }]}
        title="Limited Med Plans offering coverage for specific needs"
        description="Experience targeted medical coverage with our Limited Med Plans at Harbor Group USA. Tailored to address specific health needs, our Limited Med Plans offer a specialized approach to ensure you receive the care you require. Discover a customer-centric solution that provides focused coverage for your distinct medical requirements."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/limited-med-plan-hero-section.jpeg"
        formComponent={<LimitedMedForm />}
      />

      <PlanGrid
        title="Benefits Of Limited Med Plans"
        description="At Harbor Group USA, we understand the importance of targeted medical coverage. Our Limited Med Plans offer a range of benefits to cater to your specific health needs."
        features={[
          { title: "Specialized Medical Coverage", description: "We offer specialized medical coverage tailored to your targeted health concerns", icon: Stethoscope },
          { title: "Financial Relief", description: "Our plans provide a focused assistance to relieve financial burdens related to your specific medical conditions", icon: BriefcaseMedical },
          { title: "Straightforward Claims", description: "Our straightforward claims process is designed for efficient resolution and easy navigation", icon: ClipboardCheck }
        ]}
      />

      <PlanCostOptions
        title="Network"
        description="Accessing top-notch support for your targeted medical needs is effortless with our extensive network of experienced professionals."
        plans={[
          {
            title: "Specialized Healthcare Professionals",
            features: [
              "Tap into a network of seasoned professionals with expertise in specific medical fields",
              "Ensure tailored guidance for your unique health requirements"
            ]
          },
          {
            title: "Dedicated Support",
            features: [
              "Our support team is ready to assist in connecting you with specialists in our network",
              "Enjoy peace of mind with our dedicated support for all your targeted medical inquiries"
            ]
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Limited med plan"
        description="This plan is open to individuals and families, making it accessible for everyone seeking reliable health coverage."
        criteria={[
          { title: "Citizenship or Legal Residency", description: "US citizenship or legal residency status is a prerequisite for enrollment in our Limited Med Plans.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individuals aged 18 to 100 years, ensuring robust coverage throughout various life stages.", icon: User },
          { title: "Specific Health Needs", description: "Perfect for those who require focused medical coverage for specific health conditions.", icon: HeartPulse }
        ]}
      />

      <PlanCostOptions
        title="Cost Options and Coverage Scenarios"
        description="Our Limited Med Plans provide flexible options to suit your targeted health needs, with straightforward coverage scenarios."
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Explore different premium plans designed for varying levels of specialized coverage",
              "Tailor your plan to align precisely with your targeted health priorities"
            ]
          },
          {
            title: "Transparent Co-Payment Structure",
            features: [
              "Benefit from an easy-to-understand co-payment structure for medical services",
              "Know your costs upfront, ensuring financial transparency for targeted health planning"
            ]
          },
          {
            title: "Comprehensive Coverage Scenarios",
            features: [
              "Delve into clearly defined coverage scenarios for specific medical conditions",
              "Easily understand what's covered and plan accordingly for your targeted health protection"
            ]
          }
        ]}
      />

      <PlanHowToApply
        title="How To Apply"
        description="At Harbor Group USA, getting the coverage you need is a straightforward process. Follow these simple steps to enroll in your Limited Med Plan."
      />

      <PlanFaq
        faqs={faqs}
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA
        title="Get Your Personalized Limited Med Plans"
        buttonText="GET STARTED"
        href="#limited-med-form"
      />
    </>
  );
}
