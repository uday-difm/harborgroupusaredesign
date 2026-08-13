"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Stethoscope, Banknote, ShieldAlert, ActivitySquare, Pill, ClipboardPlus } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanNetwork } from '@/common/PlanTemplate/PlanNetwork';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { AccidentForm } from '../component/accidentplan/AccidentForm';

export default function AccidentPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/accidentplan.json');
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
      <title>Harbor Group Accident Plan | Unexpected Protection</title>
      <meta name="keywords" content="Harbor Group, accident plan, injury coverage, employee benefits, emergency support, sudden injury care, affordable protection, recovery benefits, workplace accident, group benefits" />
      <meta name="description" content="Harbor Group’s accident plan offers financial support for sudden injuries, helping you recover with less stress and more security." />
      <meta property="og:title" content="Harbor Group Accident Plan | Unexpected Protection" />
      <meta property="og:description" content="Harbor Group’s accident plan offers financial support for sudden injuries, helping you recover with less stress and more security." />
      <link rel="canonical" href="https://harborgroupusa.com/accident-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/accident-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Plans", href: "/health-plans" }, { label: "Accident Plan" }]}
        title="Coverage for unexpected accidents to ease financial burdens"
        description="Prepare for life’s unexpected turns with our Accident Plans at Harbor Group USA. We understand that accidents can happen when you least expect them, and our Accident Plans are designed to provide financial support precisely when you need it."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Accident.jpg"
        formComponent={<AccidentForm />}
      />

      <PlanGrid
        title="Benefits of Accident Plan"
        description="At Harbor Group USA, we prioritize simplicity and effectiveness in our Accident Plans, offering a range of benefits to provide financial relief during challenging times."
        features={[
          { title: "Medical Expense Coverage", description: "Receive coverage for accident-related medical expenses.", icon: Stethoscope },
          { title: "Income Replacement", description: "Ensure a financial safety net with income replacement benefits.", icon: Banknote },
          { title: "Comprehensive Coverage", description: "Comprehensive coverage for accidental death and dismemberment.", icon: ShieldAlert },
          { title: "Specific Injuries", description: "Specific coverage for fractures, dislocations, and burns.", icon: ClipboardPlus }
        ]}
      />

      <PlanNetwork
        title="Network"
        description="Accessing support for accident-related needs is easy with our extensive network of experienced professionals."
        features={[
          {
            title: "Network of Professionals",
            description: "Join us and tap into a network of professionals experienced in accident care"
          },
          {
            title: "Specialist Guidance",
            description: "We make sure you receive guidance from specialists familiar with the challenges of accident-related injuries"
          },
          {
            title: "Nationwide Coverage",
            description: "Benefit from our expansive network covering every corner of the United States"
          },
          {
            title: "Convenient Access",
            description: "Access accident-related care conveniently, ensuring support no matter where you are"
          },
          {
            title: "Dedicated Support",
            description: "Our dedicated support team is ready to assist you in all your accident-related queries"
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility of Accident Plans"
        description="Open to individuals and families, our Accident Plans ensure that coverage for unexpected accidents is within reach, designed to meet your specific criteria."
        criteria={[
          { title: "Resident of the US", description: "Our Accident Plans are accessible to individuals and families residing in the United States.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individuals aged 18 to 65 years, ensuring robust coverage throughout various life stages.", icon: User },
          { title: "Citizenship", description: "US citizenship or legal residency status is a prerequisite for enrollment in our Accident Plans.", icon: ActivitySquare }
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
        title="Get Your Personalized Accident Plan"
        buttonText="GET STARTED"
        href="#accident-plan-form"
      />
    </>
  );
}
