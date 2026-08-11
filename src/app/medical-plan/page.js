"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Wallet, Check, Activity, ShieldPlus } from 'lucide-react';
import { PlanHero } from '@/comman/PlanTemplate/PlanHero';
import { PlanGrid } from '@/comman/PlanTemplate/PlanGrid';
import { PlanBenefits } from '@/comman/PlanTemplate/PlanBenefits';
import { PlanEligibility } from '@/comman/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/comman/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/comman/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/comman/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/comman/PlanTemplate/PlanCTA';
import { MedicalForm } from '../component/medicalplan/MedicalForm';

export default function MedicalPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/medicalplan.json');
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
      <title>Harbor Group Medical Plans | Quality Coverage</title>
      <meta name="keywords" content="Harbor Group, medical plans, employee benefits, health Plans, PPO coverage, affordable healthcare, group Plans, wellness support, USA benefits, custom coverage"/>        
      <meta name="description" content="Affordable, customizable medical plans from Harbor Group USA with wellness benefits, PPO options, and employee support"/>
      <meta property="og:title" content="Harbor Group Medical Plans | Quality Coverage" />
      <meta property="og:description" content="Affordable, customizable medical plans from Harbor Group USA with wellness benefits, PPO options, and employee support" />
      <link rel="canonical" href="https://harborgroupusa.com/medical-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/medical-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero 
        title="Medical Plans for Complete Health Coverage"
        description="Stay healthy & covered with our personalized medical plans – go beyond the basics! Enjoy routine check-ups, preventive care, vaccinations, and even specialized support for chronic conditions."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/medical-plans-for-complete-health-coverage.jpeg"
        formComponent={<MedicalForm />}
      />

      <PlanGrid 
        title="Coverage Options"
        description="Enjoy peace of mind with coverage for hospitalization, doctor visits, prescription medications, and more."
        features={[
          { title: "Comprehensive Health Coverage", icon: ShieldPlus },
          { title: "Peace of Mind Assurance", icon: Check },
          { title: "Extensive Provider Network", icon: Activity },
          { title: "Practical Health Solutions", icon: Check },
          { title: "Fast Turnaround Time", icon: Check },
          { title: "Proactive Wellness Focus", icon: Activity }
        ]}
      />

      <PlanBenefits 
        title="Benefits of our best cost sharing medical plans"
        description="Get everything you need to stay healthy, from doctor visits and mental health support to preventive care and more. Whether you need regular checkups, vaccines, screenings, or expert help with a long-term condition, we’ve got your health covered!"
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/benefits-of-best-cost-sharing-medical-plans.jpeg"
        benefitsList={[
          "Inpatient and outpatient services are included",
          "Access to a vast network of physicians, specialists, and healthcare facilities",
          "Ensure affordability and accessibility to essential medications",
          "Preventive care, nutrition guidance, and lifestyle support"
        ]}
      />

      <PlanEligibility 
        title="Eligibility Criteria for the Medical Plans"
        description="This plan is open to individuals and families, making it accessible for everyone seeking reliable health coverage."
        criteria={[
          { title: "Citizenship or Legal Residency", description: "US citizenship or legal residency status is a prerequisite.", icon: Home },
          { title: "Age Eligibility", description: "Tailored for individuals aged 18 to 100 years", icon: User },
          { title: "Income Verification", description: "Certain plans may require proof of income to determine eligibility.", icon: Wallet }
        ]}
      />

      <PlanHowToApply 
        title="How To Apply For Medical Plan"
        description="Enrolling in a medical plan is straightforward and user-friendly."
        steps={[
          { title: "Step 1", description: "Determine what you need in terms of coverage based on your healthcare needs." },
          { title: "Step 2", description: "Review and compare various medical plans." },
          { title: "Step 3", description: "Provide required personal and financial information." }
        ]}
      />

      <PlanCostOptions 
        title="Cost Options"
        description="Get medical plans with flexible choices to fit your budget and health requirements."
        plans={[
          {
            title: "2500 Classic Plan Highlights",
            features: [
              "<strong>Deductible:</strong> single: $2,500 and Family: $5,000",
              "<strong>Max Out-Of-Pocket Limit:</strong> Single: $7,350 and Family: $14,700",
              "<strong>Coverage includes:</strong> Primary care, Urgent care, Preventive care, and more"
            ]
          },
          {
            title: "2500 Premium Plan Highlights",
            features: [
              "<strong>Deductible:</strong> Single: $2,500 and Family: $5,000",
              "<strong>Maximum Out-of-Pocket Limit:</strong> Single: $8,150 and Family: $16,300",
              "<strong>Comprehensive coverage includes:</strong> Mental Health, Chiropractic Services, Rehabilitation, Childbirth/Delivery Facility, and more"
            ]
          }
        ]}
        conclusion="Choose from various plans crafted to meet different financial requirements. We ensure you get the coverage you need at a price you can afford. Contact our Agents for specific cost breakdowns and payment options."
      />

      <PlanFaq 
        faqs={faqs} 
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA 
        title="Get Your Personalized Medical Plan"
        buttonText="GET STARTED"
        href="#medical-form"
      />
    </>
  );
}
