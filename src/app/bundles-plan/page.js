"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Wallet, Activity, ShieldPlus, Layers } from 'lucide-react';
import { PlanHero } from '@/comman/PlanTemplate/PlanHero';
import { PlanGrid } from '@/comman/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/comman/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/comman/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/comman/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/comman/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/comman/PlanTemplate/PlanCTA';
import { BundlesForm } from '../component/bundlesplan/BundlesForm';

export default function BundlesPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/bundlesplan.json');
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
      <title>Harbor Group USA Bundles Plan | Smarter Benefits</title>
      <meta name="keywords" content="Harbor Group, bundles plan, employee benefits, combined coverage, group plans, medical dental vision, affordable benefits, flexible plans, full coverage, smart benefits"/>        
      <meta name="description" content="Simplify your coverage with Harbor Group's bundles plan—combining medical, dental, vision, and more for complete protection."/>
      <meta property="og:title" content="Harbor Group USA Bundles Plan | Smarter Benefits" />
      <meta property="og:description" content="Simplify your coverage with Harbor Group's bundles plan—combining medical, dental, vision, and more for complete protection." />
      <link rel="canonical" href="https://harborgroupusa.com/bundles-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/bundles-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero 
        title="Combine and save!"
        description="Forget managing multiple plans – our meticulously crafted Bundles Plans are designed to fit your family’s unique needs and safeguard your health. It’s more than just a plan; it’s your unified health solution!"
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/combine-and-save.jpeg"
        formComponent={<BundlesForm />}
      />

      <PlanGrid 
        title="Benefits Of Bundles Plan"
        description="Prioritize your family’s health with a range of benefits to keep them protected and thriving."
        features={[
          { title: "Holistic Health Assessments", description: "Regular comprehensive health assessments designed for proactive care and early detection.", icon: Activity },
          { title: "Integrated Coverage", description: "A seamless combination of multiple plans in one combo package for 360 degree protection.", icon: ShieldPlus },
          { title: "Customizable Lifestyle Add-ons", description: "Tailor your plan with lifestyle add-ons for personalized coverage, from fitness to mental health.", icon: Layers }
        ]}
      />

      <PlanCostOptions 
        title="Network"
        description="Effortlessly access top-notch support for your health needs with our extensive network of experienced professionals who cater to your individual needs."
        plans={[
          {
            title: "Network Benefits",
            features: [
              "Experienced Health Professionals",
              "Reliable Partnerships",
              "Nationwide Coverage",
              "Dedicated Support"
            ]
          }
        ]}
      />

      <PlanEligibility 
        title="Eligibility Criteria for the Bundles Plans"
        description="These plans are open to individuals and families, making it accessible for everyone seeking a combination of plans."
        criteria={[
          { title: "Citizenship or Legal Residency", description: "US citizenship or legal residency status is a prerequisite", icon: Home },
          { title: "Age Eligibility", description: "Tailored for individuals aged 18 to 100 years", icon: User },
          { title: "Income Verification", description: "Certain plans may require proof of income to determine eligibility", icon: Wallet }
        ]}
      />

      <PlanCostOptions 
        title="Cost Options and Coverage Scenarios"
        description="Budget-friendly, priority-focused. Find your perfect Bundles Plan for complete health protection along with flexible cost options."
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Explore different premium plans for varying levels of coverage.",
              "Tailor your plan to align precisely with your family’s health priorities."
            ]
          },
          {
            title: "Transparent Co-Payment Structure",
            features: [
              "Benefit from an easy-to-understand co-payment structure for medical services for clarity.",
              "Know your costs upfront, ensuring financial transparency and financial planning."
            ]
          },
          {
            title: "Comprehensive Coverage Scenarios",
            features: [
              "Delve into clearly defined coverage scenarios for medical, accident, and critical illness events.",
              "Easily understand what’s covered and plan accordingly for a health protection journey."
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
        title="Get Your Personalized Bundles Plans"
        buttonText="GET STARTED"
        href="#bundles-form"
      />
    </>
  );
}
