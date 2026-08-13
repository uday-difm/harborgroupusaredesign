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
import { RxForm } from '../component/rxplan/RxForm';

export default function RxPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/rxplan.json');
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
      <title>Harbor Group USA RX Plan | Save on Prescriptions</title>
      <meta name="keywords" content="Harbor Group, RX plan, prescription savings, pharmacy discounts, medication coverage, employee benefits, drug plan, affordable meds, group RX plan, member pharmacy support" />
      <meta name="description" content="Get affordable access to medications with Harbor Group USA's RX Plan—plus pharmacy discounts and dedicated member support." />
      <meta property="og:title" content="Harbor Group USA RX Plan | Save on Prescriptions" />
      <meta property="og:description" content="Get affordable access to medications with Harbor Group USA's RX Plan—plus pharmacy discounts and dedicated member support." />
      <link rel="canonical" href="https://harborgroupusa.com/rx-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/rx-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Plans", href: "/health-plans" }, { label: "Rx Plan" }]}
        title="Affordable prescription plans for your medication needs"
        description="Experience affordable health care with our Rx Plans at The Harbor Group. Tailored to cater to your medication needs, our Rx Plans provide a robust solution designed to alleviate the financial burden of prescription expenses."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/RX-plan-hero-section.jpeg"
        formComponent={<RxForm />}
      />

      <PlanGrid
        title="Benefits of Rx Plan"
        description="At The Harbor Group, we recognize the importance of easy access to medication. Our Rx Plans offer a range of simple, affordable, and professional benefits to address your specific medication requirements."
        features={[
          { title: "Affordable Coverage", description: "Affordable coverage for various prescription medications, easing financial strain.", icon: Banknote },
          { title: "Efficient Claims", description: "Simple and efficient claims process for peace of mind and ready support.", icon: ClipboardPlus },
          { title: "Flexible Options", description: "Flexible medication options for personalized health needs.", icon: Pill },
          { title: "Comprehensive Coverage", description: "No deductible, no annual or lifetime maximum, and no age limit for comprehensive coverage.", icon: ShieldAlert }
        ]}
      />

      <PlanCostOptions
        title="Network"
        description="Accessing support for your medication needs is seamless with our extensive network of experienced professionals."
        plans={[
          {
            title: "Qualified Pharmacy Professionals",
            features: [
              "Ensure tailored guidance for your unique medication requirements"
            ]
          },
          {
            title: "Nationwide Coverage",
            features: [
              "Find a qualified pharmacy conveniently, ensuring accessibility for your medication needs"
            ]
          },
          {
            title: "Dedicated Support",
            features: [
              "Our support team is ready to assist in connecting you with in-network pharmacies"
            ]
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Rx"
        description="Accessing support for your medication needs is seamless with our extensive network of experienced professionals."
        criteria={[
          { title: "Resident of the United States", description: "Our Rx Plans are accessible to individuals and families residing in the United States.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individuals aged 18 to 100 years, ensuring comprehensive coverage throughout various life stages.", icon: User },
          { title: "Citizenship", description: "US citizenship or legal residency status is a prerequisite for enrollment in our Rx Plans.", icon: ActivitySquare },
          { title: "Ideal for Medication Financial Support", description: "Perfect for those who prioritize affordable solutions for their medication needs.", icon: Banknote }
        ]}
      />

      <PlanCostOptions
        title="Cost Options and Coverage Scenarios"
        description="Our Rx Plans provide easy, affordable, and professional options to suit your financial needs for medication."
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Explore different premium plans designed for varying levels of medication coverage",
              "Tailor your plan to align precisely with your financial priorities for medication"
            ]
          },
          {
            title: "Transparent Co-Payment Structure",
            features: [
              "Benefit from an easy-to-understand co-payment structure for prescription medications",
              "Know your medication costs upfront, ensuring financial transparency"
            ]
          },
          {
            title: "Comprehensive Medication Coverage",
            features: [
              "Delve into clearly defined coverage scenarios for various prescription medications",
              "Easily understand what's covered, allowing you to plan accordingly for your medication needs"
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
        title="Start your Rx plan today!"
        buttonText="GET STARTED"
        href="#rx-plan-form"
      />
    </>
  );
}
