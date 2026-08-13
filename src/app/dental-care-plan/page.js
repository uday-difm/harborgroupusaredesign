"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Wallet, Check, Stethoscope, BriefcaseMedical } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanBenefits } from '@/common/PlanTemplate/PlanBenefits';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { DentalForm } from '../component/dentalplan/DentalForm';

export default function DentalPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/dentalplan.json');
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
      <title>Harbor Group Dental Plans | Full Coverage Care</title>
      <meta name="keywords" content="Harbor Group, dental care, dental Plans, employee benefits, oral health, affordable dental plan, group dental coverage, preventive dental, dental benefits, dental PPO" />
      <meta name="description" content="Comprehensive dental care plans from Harbor Group with preventive services, low costs, and employee-focused coverage." />
      <meta property="og:title" content="Harbor Group Dental Plans | Full Coverage Care" />
      <meta property="og:description" content="Comprehensive dental care plans from Harbor Group with preventive services, low costs, and employee-focused coverage." />
      <link rel="canonical" href="https://harborgroupusa.com/dental-care-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/dental-care-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Plans", href: "/health-plans" }, { label: "Dental Care Plan" }]}
        title={<>360 degree dental care plans <span className="text-accent">to ensure your oral health.</span></>}
        description="Say goodbye to dental worries! Our dental care plans keep your smile healthy and your wallet happy. It’s affordable and easy to use!"
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Dental_Hero_section.jpg"
        formComponent={<DentalForm />}
      />

      <PlanGrid
        title="Benefits of Dental Care Plan"
        description="Get regular checkups and cleanings to prevent problems, along with expert care for any bigger issues like crowns and root canals. Our practical solutions for your dental needs will help you get a healthy, confident smile!"
        features={[
          { title: "Preventive Services", description: "Regular cleanings, X-rays, Fluoride", icon: Stethoscope },
          { title: "Basic Services", description: "Fillings, Extractions, Sealants", icon: BriefcaseMedical },
          { title: "Major Services", description: "Root canals, Bridges, Crowns, Dentures", icon: Check }
        ]}
      />

      <PlanCostOptions
        title="Network"
        description="Access our established network of experienced dentists focused on preventive and restorative care. Regular check-ups, specialist access, and convenient locations simplify your journey to optimal oral health, for you and your family."
        plans={[
          {
            title: "Preventive Services",
            features: [
              "Network options for Preventive Services like Dental examinations, Bitewing X-Rays, Fluoride Treatments (Frequency limitations apply), Space Maintainers",
              "<strong>In-Network:</strong> 100% Covered",
              "<strong>Out-of-Network:</strong> 80% Covered"
            ]
          },
          {
            title: "Basic Services",
            features: [
              "Network options for basic services like Fillings, Simple Extractions, Oral Surgery, Periodontics, Root Canals (Endodontics), Sealants",
              "<strong>In-Network:</strong> 80% Covered",
              "<strong>Out-of-Network:</strong> 50% Covered"
            ]
          },
          {
            title: "Major Services",
            features: [
              "Network options for major services like Crowns & Gold Restorations, Bridgework, Full & Partial Dentures, Dentures Repair and Implants",
              "<strong>In-Network:</strong> 50% Covered",
              "<strong>Out-of-Network:</strong> 50% Covered"
            ]
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Dental Care Plan"
        description="Open to individuals and families, our dental care plan ensures that quality dental care is within reach for everyone. Your smile is important, and so is your budget. Eligibility Criteria for the Dental Care Plans includes."
        criteria={[
          { title: "Citizenship or Legal Residency", description: "US citizenship or legal residency status is a prerequisite", icon: Home },
          { title: "Age Eligibility", description: "Tailored for individuals aged 18 to 100 years.", icon: User },
          { title: "Income Verification", description: "Certain plans may require proof of income to determine eligibility.", icon: Wallet }
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

      <PlanCostOptions
        title="Your Clear Path to Dental Wellness"
        description="We believe in transparent pricing and straightforward coverage. Discover how our plans make dental care accessible and affordable."
        plans={[
          {
            title: "Costs Options",
            features: [
              "<strong>Premiums:</strong> Affordable monthly premiums tailored to fit your budget.",
              "<strong>Out-of-Pocket Costs:</strong> Minimal out-of-pocket expenses for preventive services.",
              "Co-payments for basic and major services with clear, transparent pricing."
            ]
          },
          {
            title: "Coverage Scenarios",
            features: [
              "<strong>Scenario 1:</strong> Routine Check-ups - Covered with no additional cost.",
              "<strong>Scenario 2:</strong> Basic Services - Co-payments for immediate access to necessary treatments.",
              "<strong>Scenario 3:</strong> Major Procedures - Comprehensive coverage for essential dental work."
            ]
          }
        ]}
      />

      <PlanFaq
        faqs={faqs}
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA
        title="Get Your Personalized Dental Care Plan"
        buttonText="GET STARTED"
        href="#dental-form"
      />
    </>
  );
}
