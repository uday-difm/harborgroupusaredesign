import React from 'react'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { Protectionagainst } from '../component/criticalplan/Protectionagainst'
import { BenefitsofCriticalplan } from '../component/criticalplan/BenefitsofCriticalplan'
import { CostOptions } from '../component/criticalplan/CostOptions'
import { Network } from '../component/criticalplan/Network'

export default function page() {
  return (
    <>
    <Protectionagainst/>
    <BenefitsofCriticalplan/>
    <CostOptions/>
    <Network/>
    <HowToApply/>
    <FAQSection/>
    <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Critical Plan" link = "GET STARTED" />
      <TestimonialSection/>
    </>
  )
}
