"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Wallet, Eye, Stethoscope, Glasses, BadgeDollarSign } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanBenefits } from '@/common/PlanTemplate/PlanBenefits';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanNetwork } from '@/common/PlanTemplate/PlanNetwork';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { VisionForm } from '../component/visionplan/VisionForm';

export default function VisionPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/visionplan.json');
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
      <title>Harbor Group Vision Plans | Clear, Affordable Care</title>
      <meta name="keywords" content="Harbor Group, vision plan, eye care, vision plans, affordable eyewear, employee vision benefits, eye exams, group vision coverage, vision support, optical care" />
      <meta name="description" content="Harbor Group USA offers affordable vision plans with exams, eyewear, and support to keep your eyes healthy and costs low." />
      <meta property="og:title" content="Harbor Group Vision Plans | Clear, Affordable Care" />
      <meta property="og:description" content="Harbor Group USA offers affordable vision plans with exams, eyewear, and support to keep your eyes healthy and costs low." />
      <link rel="canonical" href="https://harborgroupusa.com/vision-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/vision-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Plans", href: "/health-plans" }, { label: "Vision Plan" }]}
        title="Clear vision, clear path - our vision plans keep your focus right!"
        description="Our vision service plans go beyond just seeing — they're designed to keep your eyesight sharp and your outlook on life crystal clear. From routine eye exams to prescription eyewear, we're dedicated to ensuring your vision is at its best."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/vision-eye-plan.jpg"
        formComponent={<VisionForm />}
      />

      <PlanGrid
        title="Benefits of Vision Plan"
        description="A great vision plan is an investment in your daily life. Explore the core benefits of our vision coverage."
        features={[
          { title: "Routine Eye Exams", description: "Comprehensive eye exams to maintain optimal eye health", icon: Eye },
          { title: "Discounts on Corrective Eye Surgeries", description: "Exclusively discounted eye surgeries for improved long-term vision", icon: Stethoscope },
          { title: "Prescription Eyewear Coverage", description: "Enjoy coverage for prescription eyeglasses and contact lens prescriptions", icon: Glasses },
          { title: "Savings on Eyewear", description: "Affordable access to high-quality eyewear", icon: BadgeDollarSign }
        ]}
      />

      <PlanNetwork
        title="Network"
        description="Accessing top-notch eye care is effortless with our extensive network of experienced professionals."
        features={[
          {
            title: "Experienced Providers",
            description: "Experienced Eye Care Providers"
          },
          {
            title: "Nationwide Coverage",
            description: "Nationwide Coverage"
          },
          {
            title: "Dedicated Support",
            description: "Dedicated Support"
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Vision Plan"
        description="We ensure everyone can access affordable and essential eye care."
        criteria={[
          { title: "Citizenship or Legal Residency", description: "US citizenship or legal residency status is a prerequisite.", icon: Home },
          { title: "Age Eligibility", description: "Tailored for individuals aged 18 to 100 years", icon: User },
          { title: "Income Verification", description: "Certain plans may require proof of income to determine eligibility", icon: Wallet }
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
        title="Costs Options and Coverage"
        description="Our vision plans offer flexible options to suit your needs, with straightforward coverage options."
        plans={[
          {
            title: "Plan Types",
            features: [
              "<strong>Basic Plan:</strong> Covers exams and glasses.",
              "<strong>Premium Plan:</strong> Higher allowances for frames and contacts.",
            ]
          },
          {
            title: "Out-of-Pocket Costs",
            features: [
              "Minimal co-pays for exams.",
              "Discounts on premium frames and lens enhancements."
            ]
          }
        ]}
      />

      <PlanFaq
        faqs={faqs}
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA
        title="Unlock Clear Vision and Confidence Today! Enroll Now for Comprehensive Vision Coverage"
        buttonText="ENROLL IN VISION CARE"
        href="#vision-form"
      />
    </>
  );
}
