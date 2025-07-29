import React from 'react'
import { VisionPlanSection } from '../component/visionplan/VisionPlanSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { BenefitsVisionplan } from '../component/visionplan/BenefitsVisionplan'
import { EligibilityCriteria } from '../component/visionplan/EligibilityCriteria'
import { LayeredCosts } from '../component/visionplan/LayeredCosts'
import { Network } from '../component/visionplan/Network'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { FaqVisionPlan } from '../component/visionplan/FaqVisionPlan'
import { TestimonialVisionPlan } from '../component/visionplan/TestimonialVisionPlan'

export default function page() {
  return (
    <>
      <title>Harbor Group Vision Plans | Clear, Affordable Care</title>
        <meta name="keywords" content="Harbor Group, vision plan, eye care, vision plans, affordable eyewear, employee vision benefits, eye exams, group vision coverage, vision support, optical care"/>        
        <meta name="description" content="Harbor Group USA offers affordable vision plans with exams, eyewear, and support to keep your eyes healthy and costs low."/>
        <meta property="og:title" content="Harbor Group Vision Plans | Clear, Affordable Care" />
        <meta property="og:description" content="Harbor Group USA offers affordable vision plans with exams, eyewear, and support to keep your eyes healthy and costs low." />
        <link rel="canonical" href="https://harborgroupusa.com/vision-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/vision-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

     <VisionPlanSection/> 
     <BenefitsVisionplan/>
     <EligibilityCriteria/>
     <HowToApply/>
     <LayeredCosts/>
     <Network/>
   <FaqVisionPlan/>
     <GetYourPersonalizedMedicalPlan title = "Unlock Clear Vision and Confidence Today! Enroll Now for Comprehensive Vision Coverage" link ="ENROLL IN VISION CARE" url="#vision-form"/>
     <TestimonialVisionPlan/>
 </>
  )
}
