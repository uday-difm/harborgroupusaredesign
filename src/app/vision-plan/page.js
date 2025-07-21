import React from 'react'
import { VisionPlanSection } from '../component/visionplan/VisionPlanSection'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { BenefitsVisionplan } from '../component/visionplan/BenefitsVisionplan'
import { EligibilityCriteria } from '../component/visionplan/EligibilityCriteria'
import { LayeredCosts } from '../component/visionplan/LayeredCosts'
import { Network } from '../component/visionplan/Network'
import { FluidWaveCTA } from '../component/visionplan/FluidWaveCTA'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'

export default function page() {
  return (
    <>
     <VisionPlanSection/> 
     <BenefitsVisionplan/>
     <EligibilityCriteria/>
     <HowToApply/>
     <LayeredCosts/>
     <Network/>
     <FAQSection/>
     <GetYourPersonalizedMedicalPlan title = "Unlock Clear Vision and Confidence Today! Enroll Now for Comprehensive Vision Coverage" link ="ENROLL IN VISION CARE"/>
     <TestimonialSection/>
 </>
  )
}
