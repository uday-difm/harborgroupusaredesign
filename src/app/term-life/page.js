"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, ShieldCheck, HeartHandshake, CheckCircle2, DollarSign, Activity, Settings2 } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { TermLifeForm } from '../component/termlife/TermLifeForm';

export default function TermLifePage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/termlife.json');
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
      <title>Term Life Plan | The Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group, term life, employee benefits, financial protection, family support, life coverage, affordable plans, group benefits, peace of mind, long-term care" />
      <meta name="description" content="Harbor Group USA offers top-rated, affordable term life insurance plans to protect your family's future with trusted coverage." />
      <meta property="og:title" content="Term Life Plan | The Harbor Group USA" />
      <meta property="og:description" content="Harbor Group USA offers top-rated, affordable term life insurance plans to protect your family's future with trusted coverage." />
      <link rel="canonical" href="https://harborgroupusa.com/term-life/" />
      <meta property="og:url" content="https://harborgroupusa.com/term-life/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero
        title="Protection for your loved ones with a comprehensive term life plan"
        description="Secure your family’s future — our life plans are meticulously crafted to offer more than just financial assurance. Our plans go beyond the numbers; they are a promise, a commitment to providing unwavering support in times of need."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Term-life-hero-section.jpeg"
        formComponent={<TermLifeForm />}
      />

      <PlanGrid
        title="Protection Overview"
        description="Our Term Life Plan acts like a safety net, providing financial security to your family if something unexpected happens. It gives them a solid financial foundation, even when you’re not there."
        features={[
          { title: "Comprehensive Financial Safeguard", description: "From anticipated financial obligations to unforeseen contingencies, each facet is meticulously addressed.", icon: ShieldCheck },
          { title: "Tailored Coverage", description: "Get a Term Life Plan built around your family’s specific needs and goals. We work with you to create a personalized plan.", icon: HeartHandshake }
        ]}
      />

      <PlanCostOptions
        title="Network"
        description="Access a Network of Top-Notch professionals to support Your Loved Ones."
        plans={[
          {
            title: "Network Benefits",
            features: [
              "Experienced Health Plan Professionals",
              "Nationwide Coverage",
              "Reliable Partnerships",
              "Dedicated Support"
            ]
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria for Term Life Plans"
        description="Open to individuals and families, our Term Life Plan ensures that comprehensive financial protection is within reach."
        criteria={[
          { title: "Resident of the United States", description: "Our Term Life Plan is accessible to individuals and families currently residing in the United States.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individuals aged 18 to 100 years, ensuring robust coverage throughout various life stages.", icon: User }
        ]}
      />

      <PlanCostOptions
        title="Cost Options and Coverage Scenarios"
        description="Your Financial Shield!"
        plans={[
          {
            title: "Flexible Premium Options",
            features: [
              "Explore a range of premium options tailored to different levels of coverage.",
              "Customize your plan to align precisely with your family's financial priorities."
            ]
          },
          {
            title: "Transparent Co-pay Structure",
            features: [
              "Get an easy-to-understand co-payment structure for premiums to ensure clarity.",
              "Know your costs upfront, fostering financial transparency throughout your term."
            ]
          },
          {
            title: "Varied Coverage Scenarios",
            features: [
              "Explore our clearly defined coverage scenarios with various life stages and financial needs.",
              "Easily understand what's covered, and plan accordingly for your family's financial security."
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
        title="Get Your Personalized Term Life Plan"
        buttonText="GET STARTED"
        href="#term-form"
      />
    </>
  );
}
