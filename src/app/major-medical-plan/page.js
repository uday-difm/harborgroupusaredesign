"use client";

import React from 'react';
import { Home, User, Stethoscope, Banknote, ShieldCheck, DollarSign, SlidersHorizontal, MapPin, Hospital, UserCheck, UserSquare, Award, Clock, Heart, Flag } from 'lucide-react';
import { PlanHero } from '@/common/PlanTemplate/PlanHero';
import { PlanGrid } from '@/common/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/common/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/common/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/common/PlanTemplate/PlanCostOptions';
import { PlanNetwork } from '@/common/PlanTemplate/PlanNetwork';
import { PlanCTA } from '@/common/PlanTemplate/PlanCTA';
import { MajorMedicalForm } from '../component/majormedical/MajorMedicalForm';

import { MajorMedicalPlanSummaries } from '../component/majormedical/MajorMedicalPlanSummaries';
import { MajorMedicalNetworkTables } from '../component/majormedical/MajorMedicalNetworkTables';

export default function MajorMedicalPlanPage() {
  return (
    <>
      <title>Major Medical Plans | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, major medical plans, health Plans, affordable medical coverage, individual health plans, business health plans, comprehensive health Plans" />
      <meta name="description" content="Explore Harbor Group USA's major medical plans offering comprehensive health coverage and affordable options for individuals and businesses." />
      <meta property="og:title" content="Major Medical Plans | Harbor Group USA" />
      <meta property="og:description" content="Explore Harbor Group USA's major medical plans offering comprehensive health coverage and affordable options for individuals and businesses." />
      <link rel="canonical" href="https://harborgroupusa.com/major-medical-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/major-medical-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Plans", href: "/health-plans" }, { label: "Major Medical Plan" }]}
        title="Comprehensive Healthcare Coverage with Major Medical Plans"
        description="Prioritizing overall well-being is essential. Our Major Medical Plans are crafted to deliver extensive healthcare coverage, ensuring top-notch care without financial stress. These plans offer a wide range of benefits tailored to diverse needs, including comprehensive medical coverage, preventive care services, and flexible options to suit various budgets and requirements."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Major-Medical-Plans.jpg"
        formComponent={<MajorMedicalForm />}
      />

      <PlanGrid
        title="Benefits of Major Medical Plans"
        description="Our plans provide extensive coverage for medical services, ensuring that all your healthcare needs are met."
        features={[
          { title: "Comprehensive Coverage", description: "Our plans provide extensive coverage for medical services, including preventive care, chronic condition management, and emergency services.", icon: ShieldCheck },
          { title: "Financial Protection", description: "With significant coverage for medical expenses, our plans protect you from the high costs associated with serious illnesses and injuries.", icon: DollarSign },
          { title: "Access to Specialists", description: "Our network includes a wide range of specialists, ensuring that you receive expert care for specific health concerns.", icon: Stethoscope },
          { title: "Flexibility", description: "Our plans are customizable to fit your unique healthcare needs and financial situation, allowing you to choose from various deductibles, co-pays.", icon: SlidersHorizontal }
        ]}
      />

      <PlanNetwork
        title="Network"
        description="Our Major Medical Plans are available in all 50 states, offering a wide network of healthcare providers. Access to top-tier hospitals, specialists, and primary care physicians ensures you receive the best possible care."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/network.jpeg"
        features={[
          {
            title: "Nationwide Coverage",
            description: "Available in all 50 states.",
            icon: MapPin
          },
          {
            title: "Extensive Provider Network",
            description: "Access to top-tier hospitals and specialists.",
            icon: Hospital
          },
          {
            title: "Primary Care Physicians",
            description: "Ensure you receive comprehensive and continuous care.",
            icon: UserCheck
          },
          {
            title: "Specialist Access",
            description: "Easy referrals to specialists for specific health needs.",
            icon: UserSquare
          },
          {
            title: "Quality Care",
            description: "High standards of care across the network to ensure optimal health outcomes.",
            icon: Award
          }
        ]}
      />

      <PlanEligibility
        title="Eligibility Criteria of Major Medical Plan"
        description="Open to individuals and families, our Major Medical Plans ensure that comprehensive support for your Major Medical needs is within reach."
        criteria={[
          { title: "Resident of the United States", description: "Our Major Medical Plans are accessible to individuals and families residing in the United States.", icon: MapPin },
          { title: "Age Eligibility", description: "Tailored to cover individuals of all ages, ensuring coverage throughout various life stages.", icon: Clock },
          { title: "Ideal for a Balanced Lifestyle", description: "Perfect for those who prioritize maintaining a balanced and fulfilling Major Medical.", icon: Heart },
          { title: "Citizenship", description: "US citizenship or legal residency status is a prerequisite for enrollment in our Major Medical Plans.", icon: Flag }
        ]}
      />

      <PlanCostOptions
        title="Cost Options and Coverage Scenarios"
        description="Our Major Medical Plans offer programs that are good for your Wallet and better for your Well-being. We provide easy, simple, and professional options to suit your financial needs."
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Higher Deductibles, Lower Premiums: Lower monthly payments, higher out-of-pocket costs.",
              "Lower Deductibles, Higher Premiums: Minimize out-of-pocket expenses.",
              "Balanced Options: Moderate deductibles and premiums."
            ]
          },
          {
            title: "Customizable Plans",
            features: [
              "Tailor plans for frequent specialist visits (Ultra 1000), basic coverage needs (Ultra 6000), chronic condition management, and preventive care."
            ]
          }
        ]}
      />

      <PlanHowToApply
        title="How To Apply"
        description="At Harbor Group USA, getting the coverage you need is a straightforward process. Follow these simple steps to enroll in your Major Medical Plan."
      />

      <MajorMedicalPlanSummaries />
      <MajorMedicalNetworkTables />

      <PlanCTA
        title="Request a Call Back?"
        buttonText="GET STARTED"
        href="#major-medical-plan-form"
      />
    </>
  );
}
