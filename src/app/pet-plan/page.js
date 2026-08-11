"use client";

import React, { useEffect, useState } from 'react';
import { Home, User, Stethoscope, Banknote, ShieldAlert, ActivitySquare, Pill, ClipboardPlus } from 'lucide-react';
import { PlanHero } from '@/comman/PlanTemplate/PlanHero';
import { PlanGrid } from '@/comman/PlanTemplate/PlanGrid';
import { PlanEligibility } from '@/comman/PlanTemplate/PlanEligibility';
import { PlanHowToApply } from '@/comman/PlanTemplate/PlanHowToApply';
import { PlanCostOptions } from '@/comman/PlanTemplate/PlanCostOptions';
import { PlanFaq } from '@/comman/PlanTemplate/PlanFaq';
import { PlanCTA } from '@/comman/PlanTemplate/PlanCTA';
import { PetForm } from '../component/petplan/PetForm';

export default function PetPlanPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('/data/faq/petplan.json');
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
      <title>Harbor Group USA Pet Plan | Care for Your Companions</title>
      <meta name="keywords" content="Harbor Group, pet plan, pet care benefits, vet coverage, pet wellness, pet protection, employee pet perks, pet health, group pet plan, animal care"/>        
      <meta name="description" content="Harbor Group USA pet plan helps cover vet visits, emergencies, and wellness care—giving your pets the protection they deserve."/>
      <meta property="og:title" content="Harbor Group USA Pet Plan | Care for Your Companions" />
      <meta property="og:description" content="Harbor Group USA pet plan helps cover vet visits, emergencies, and wellness care—giving your pets the protection they deserve." />
      <link rel="canonical" href="https://harborgroupusa.com/pet-plan/" />
      <meta property="og:url" content="https://harborgroupusa.com/pet-plan/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <PlanHero 
        title="Because your furry friends deserve protection too"
        description="Extend your care to your four-legged family members with Pet Plans at Harbor Group USA. Our Pet Plans are designed to offer tailored protection for your beloved pets, ensuring their health and well-being are prioritized."
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/pet-care-plans.jpg"
        formComponent={<PetForm />}
      />

      <PlanGrid 
        title="Benefits of Pet Plan"
        description="At Harbor Group USA, we recognize the significance of your pets' health. Our Pet Plans offer a range of easy, simple, and professional benefits to cater to the unique needs of your furry friends."
        features={[
          { title: "Veterinary Coverage", description: "Comprehensive veterinary coverage from experienced professionals for routine check-ups and unexpected health concerns.", icon: Stethoscope },
          { title: "Accident Protection", description: "Protection against unexpected accidents and illnesses, easing the financial burden of veterinary expenses.", icon: ShieldAlert },
          { title: "Lost Pet Recovery", description: "Lost Pet Recovery services for a swift and efficient process if your pet goes missing.", icon: ActivitySquare },
          { title: "24/7 Expert Access", description: "Access 24/7 veterinary experts for any health concerns or questions about your pet's well-being.", icon: ClipboardPlus }
        ]}
      />

      <PlanCostOptions 
        title="Network"
        description="Accessing top-notch veterinary support for your pets is effortless with our extensive network of experienced professionals."
        plans={[
          {
            title: "Qualified Veterinary Professionals",
            features: [
              "Tap into a network of seasoned veterinary professionals",
              "Ensure your pets receive the best guidance for their specific health needs"
            ]
          },
          {
            title: "Nationwide Coverage",
            features: [
              "Benefit from our expansive network covering every corner of the United States",
              "Find a qualified veterinary professional conveniently, ensuring accessibility for your pets"
            ]
          },
          {
            title: "Dedicated Support",
            features: [
              "Our support team is ready to assist in connecting you with in-network veterinary professionals",
              "Enjoy peace of mind with our dedicated network support for all your pet health inquiries and needs"
            ]
          }
        ]}
      />

      <PlanEligibility 
        title="Eligibility Criteria of Pet Plan"
        description="Open to pet owners, our Pet Plans ensure that comprehensive health protection for your furry friends is within reach"
        criteria={[
          { title: "Resident of the United States", description: "Our Pet Plans are accessible to individual pet owners residing in the United States.", icon: Home },
          { title: "Age Eligibility", description: "Tailored to cover individual pet owners aged 18 to 100 years, ensuring coverage throughout various life stages.", icon: User },
          { title: "Pet Ownership", description: "Our Pet Plans are accessible to individuals with beloved pets in their care.", icon: ActivitySquare },
          { title: "Pet Health Maintenance", description: "Perfect for those who prioritize the health and well-being of their pets.", icon: ShieldAlert }
        ]}
      />

      <PlanHowToApply 
        title="How To Apply"
        description="Enrolling in a plan is straightforward and user-friendly."
        steps={[
          { title: "Step 1", description: "Determine what you need in terms of coverage based on your pet's healthcare needs." },
          { title: "Step 2", description: "Review and compare various plans." },
          { title: "Step 3", description: "Provide required personal and financial information." }
        ]}
      />

      <PlanFaq 
        faqs={faqs} 
        imageSrc="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Frequently-Asked-Questions.jpeg"
      />

      <PlanCTA 
        title="Get Your Personalized Pet Care Plan"
        buttonText="GET STARTED"
        href="#pet-plan-form"
      />
    </>
  );
}
