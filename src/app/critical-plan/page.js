import React from 'react'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { Protectionagainst } from '../component/criticalplan/Protectionagainst'
import { BenefitsofCriticalplan } from '../component/criticalplan/BenefitsofCriticalplan'
import { CostOptions } from '../component/criticalplan/CostOptions'
import { Network } from '../component/criticalplan/Network'
import { Eligibilitycriteria } from '../component/criticalplan/Eligibilitycriteria'
import { FaqCriticalPlan } from '../component/criticalplan/FaqCriticalPlan'
import { TestimonialCriticalPlan } from '../component/criticalplan/TestimonialCriticalPlan'

export default function page() {
  return (
    <>
    <Protectionagainst/>
    <BenefitsofCriticalplan/>
    <CostOptions/>
    <Network/>
    <Eligibilitycriteria/>
    <HowToApply/>
   <FaqCriticalPlan/>
    <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Critical Plan" link = "GET STARTED" url="#critical-plan-form"/>
      <TestimonialCriticalPlan/>
    </>
  )
}
