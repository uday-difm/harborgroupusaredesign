import React from 'react'
import { LifeStyleHeroSection } from '../component/lifestyleplan/LifeStyleHeroSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
// import { TestimonialSection } from '../component/home/TestimonialSection'
import { FAQSection } from '../../comman/FAQSection'
import { BenefitsofLifestylePlan } from '../component/lifestyleplan/BenefitsofLifestylePlan'
import { NetworkLifestylePlan } from '../component/lifestyleplan/NetworkLifestylePlan'
import { CostOptions } from '../component/lifestyleplan/CostOptions'
import { EligibilitycriteriaLifestylePlan } from '../component/lifestyleplan/EligibilitycriteriaLifestylePlan'
import { RequestCallback } from '../component/lifestyleplan/RequestCallback'
import { FaqLifestyleplan } from '../component/lifestyleplan/FaqLifestyleplan'
import { TestimonialLifeStylePlan } from '../component/lifestyleplan/TestimonialLifeStylePlan'

export default function page() {
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
     <LifeStyleHeroSection/> 
     <BenefitsofLifestylePlan/>
     <NetworkLifestylePlan/>
     <CostOptions/>
     <EligibilitycriteriaLifestylePlan/>
     <RequestCallback/>
     <HowToApply/>
     <FaqLifestyleplan/>
     <GetYourPersonalizedMedicalPlan title="Let's get started with lifestyle plans" link ="GET STARTED" url="#lifestyle-plan-form"/>
     {/* <TestimonialSection/> */}
     <TestimonialLifeStylePlan/>
     
    </>
  )
}
