"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, BriefcaseMedical, Stethoscope, Banknote, ShieldAlert, ActivitySquare, Pill, ClipboardPlus, Building2, Map, Users } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanNetwork } from '@/common/PlanTemplate/PlanNetwork';
import { PlanFaq } from '@/common/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { HospitalForm } from '../component/hospitalplan/HospitalForm';

export default function HospitalPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/hospitalplan.json');
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
      <title>Hospital Coverage Plans | The Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group, hospital plan, inpatient coverage, employee benefits, hospital stay support, medical costs, group plan, financial protection, extra coverage, peace of mind" />
      <meta name="description" content="Get comprehensive hospital coverage with The Harbor Group USA. Our plans provide peace of mind and cover various medical expenses." />
      <meta property="og:title" content="Hospital Coverage Plans | The Harbor Group USA" />
      <meta property="og:description" content="Get comprehensive hospital coverage with The Harbor Group USA. Our plans provide peace of mind and cover various medical expenses." />
      <link rel="canonical" href="https://harborgroupusa.com/hospital-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/hospital-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero
        title="Specialized plans for hospitalization expenses"
        description="Navigate hospitalization expenses with confidence through our Specialized Hospital Plans at Harbor Group USA. Tailored to provide dedicated coverage for hospital stays, our plans are designed to alleviate the financial strain associated with medical emergencies. Discover a simple and effective solution that focuses on your peace of mind during challenging times."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Hospital-Plans-Page.jpg"
        formComponent={<HospitalForm />}
      />

      <PlanGrid
        title="Benefits of Hospital Plan"
        description="At Harbor Group USA, we understand the significance of dedicated hospitalization coverage. Our Hospital Plans offer straightforward benefits to ease the burden of hospital expenses."
        features={[
          { title: "Specialized Coverage", description: "We offer hospital plans tailored to cover a spectrum of hospitalization expenses, including room charges, surgeries, and more.", icon: BriefcaseMedical },
          { title: "Comprehensive Support", description: "Ensure comprehensive financial coverage to support you during your hospital stay.", icon: Banknote },
          { title: "Straightforward Claims", description: "Benefit from a straightforward claims process designed for ease during stressful situations.", icon: ClipboardPlus }
        ]}
      />

      <PlanNetwork
        title="Network"
        description="Accessing top-notch support for your hospitalization needs is effortless with our extensive network of experienced professionals."
        features={[
          {
            title: "Hospital Network",
            description: "Rely on our network of reputable hospitals specializing in various medical fields.",
            icon: Building2
          },
          {
            title: "Nationwide Coverage",
            description: "Find a qualified hospital conveniently, ensuring accessibility during medical emergencies.",
            icon: Map
          },
          {
            title: "Dedicated Support",
            description: "Our support team is ready to assist in connecting you with hospitals in our network.",
            icon: Users
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Hospital Plan"
        description="Open to individuals and families, our Hospital Plans ensure that specialized hospitalization coverage is within reach, tailored to meet your specific criteria."
        criteria={[
          { title: "Resident of the United States", description: "Our Hospital Plans are accessible to individuals and families residing in the United States.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individuals aged 18 to 100 years, ensuring robust coverage throughout various life stages.", icon: User },
          { title: "Citizenship", description: "US citizenship or legal residency status is a prerequisite for enrollment in our Hospital Plans.", icon: ActivitySquare },
          { title: "Financial Security", description: "Perfect for those who prioritize financial security during hospitalization.", icon: Banknote }
        ]}
      />

      <PlanCostOptions
        title="Cost Options and Coverage Scenarios"
        description="Our Hospital Plans provide flexible options to suit your hospitalization needs, with straightforward coverage scenarios"
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Explore flexible cost options built around you."
            ]
          },
          {
            title: "Transparent Co-Payment Structure",
            features: [
              "Clearly defined co-pay parameters."
            ]
          },
          {
            title: "Comprehensive Coverage Scenarios",
            features: [
              "Delve into clearly defined coverage scenarios."
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
        title="Start your Hospital Plans today!"
        buttonText="GET STARTED"
        href="#hospital-plan-form"
      />
    </>
  );
}
