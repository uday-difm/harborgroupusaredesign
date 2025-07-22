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
     <VisionPlanSection/> 
     <BenefitsVisionplan/>
     <EligibilityCriteria/>
     <HowToApply/>
     <LayeredCosts/>
     <Network/>
   <FaqVisionPlan/>
     <GetYourPersonalizedMedicalPlan title = "Unlock Clear Vision and Confidence Today! Enroll Now for Comprehensive Vision Coverage" link ="ENROLL IN VISION CARE"/>
     <TestimonialVisionPlan/>
 </>
  )
}
