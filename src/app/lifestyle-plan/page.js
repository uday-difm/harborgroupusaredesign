"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Stethoscope, Banknote, HeartHandshake, Smile, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import { PlanHero } from '@/comman/PlanTemplate/PlanHero';
import { PlanGrid } from '@/comman/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/comman/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/comman/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/comman/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/comman/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/comman/PlanTemplate/PlanCTA';
import { LifestyleForm } from '../component/lifestyleplan/LifestyleForm';

export default function LifestylePlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/lifestyleplan.json');
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
      <title>Lifestyle Plan | The Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group, lifestyle plan, wellness benefits, employee perks, mental health, fitness access, healthy living, work-life balance, lifestyle coverage, group wellness."/>        
      <meta name="description" content="Adapt your coverage with The Harbor Group USA Lifestyle Plan. Flexible options that evolve with your lifestyle needs and preferences."/>
      <meta property="og:title" content="Lifestyle Plan | The Harbor Group USA" />
      <meta property="og:description" content="Adapt your coverage with The Harbor Group USA Lifestyle Plan. Flexible options that evolve with your lifestyle needs and preferences." />
      <link rel="canonical" href="https://harborgroupusa.com/lifestyle-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/lifestyle-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero 
        title="Plans to support and enhance your lifestyle needs"
        description="Enhance your well-being with Lifestyle Plans at Harbor Group USA. These plans are meticulously designed to support and enhance your unique lifestyle needs. Going beyond conventional coverage, our Lifestyle Plans offer a customer-tailored approach to ensure that your health and lifestyle choices align seamlessly."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/lifestyleplan-section.jpeg"
        formComponent={<LifestyleForm />}
      />

      <PlanGrid 
        title="Benefits of Lifestyle Plan"
        description="At Harbor Group USA, we understand the significance of maintaining a balanced and fulfilling lifestyle. Our Lifestyle Plans offer a range of benefits to cater to your specific needs."
        features={[
          { title: "Wellness Programs and Fitness Support", description: "Promote a healthy and active lifestyle with personalized guidance, tailored to your needs.", icon: HeartHandshake },
          { title: "Mental Health Coverage", description: "Mental health coverage to address mental well-being with the support and care you deserve.", icon: Smile },
          { title: "Preventive Health Services", description: "Our Plans also cover relationship Health, PTSD Recovery, Social Anxiety Relief and many more.", icon: ShieldCheck },
          { title: "Tech Care Plans", description: "We have special Tech Team Plans to cater an unlimited 24/7 Tech Support along with device Protection.", icon: Cpu }
        ]}
      />

      <PlanCostOptions 
        title="Network"
        description="Accessing support for your lifestyle needs is effortless with our extensive network of experienced professionals."
        plans={[
          {
            title: "Expert Coaches",
            features: [
              "Access expert lifestyle coaches through our network",
              "Receive tailored guidance for your unique lifestyle challenges"
            ]
          },
          {
            title: "Convenient Access",
            features: [
              "Benefit from an expansive network covering every corner of the United States",
              "Find qualified specialists conveniently for accessible lifestyle support",
              "Our dedicated support team helps you connect with lifestyle coaches and specialists"
            ]
          }
        ]}
      />

      <PlanEligibility 
        title="Eligibility Criteria of Lifestyle Plan"
        description="Open to individuals and families, our Lifestyle Plans ensure that comprehensive support for your lifestyle needs is within reach."
        criteria={[
          { title: "Resident of the United States", description: "Our Lifestyle Plans are accessible to individuals and families residing in the United States.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individuals of all ages, ensuring coverage throughout various life stages.", icon: User },
          { title: "Ideal for a Balanced Lifestyle", description: "Perfect for those who prioritize maintaining a balanced and fulfilling lifestyle.", icon: HeartHandshake },
          { title: "Citizenship", description: "US citizenship or legal residency status is a prerequisite for enrollment in our Lifestyle Plans.", icon: ShieldCheck }
        ]}
      />

      <PlanCostOptions 
        title="Cost Options and Coverage Scenarios"
        description="Our Lifestyle Plans offer programs that are good for your Wallet and better for your Well-being. We provide easy, simple, and professional options to suit your financial needs for maintaining a balanced lifestyle."
        plans={[
          {
            title: "Tailored Premium Options",
            features: [
              "Explore different premium plans designed for varying levels of coverage"
            ]
          },
          {
            title: "Transparent Coverage Structure",
            features: [
              "Benefit from an easy-to-understand structure for lifestyle conditions"
            ]
          },
          {
            title: "Comprehensive Coverage Scenarios",
            features: [
              "Delve into clearly defined coverage scenarios for life events"
            ]
          }
        ]}
      />

      <PlanHowToApply 
        title="How To Apply"
        description="Enrolling in a plan is straightforward and user-friendly."
        steps={[
          { title: "Step 1", description: "Determine what you need in terms of coverage based on your lifestyle goals." },
          { title: "Step 2", description: "Review and compare various plans." },
          { title: "Step 3", description: "Provide required personal and financial information." }
        ]}
      />

      <PlanFaq 
        faqs={faqs} 
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA 
        title="Let's get started with Lifestyle Plans"
        buttonText="GET STARTED"
        href="#lifestyle-plan-form"
      />
    </>
  );
}
