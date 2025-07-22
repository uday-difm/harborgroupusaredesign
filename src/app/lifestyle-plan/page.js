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
     <LifeStyleHeroSection/> 
     <BenefitsofLifestylePlan/>
     <NetworkLifestylePlan/>
     <CostOptions/>
     <EligibilitycriteriaLifestylePlan/>
     <RequestCallback/>
     <HowToApply/>
     <FaqLifestyleplan/>
     <GetYourPersonalizedMedicalPlan title="Let's get started with lifestyle plans" link ="GET STARTED"/>
     {/* <TestimonialSection/> */}
     <TestimonialLifeStylePlan/>
     
    </>
  )
}
