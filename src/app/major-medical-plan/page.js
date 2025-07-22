import React from 'react'
import { MajorMedicalSection } from '../component/majormedical/MajorMedicalSection'
import { BenefitsSection } from '../component/majormedical/Benefits'
import { NetworkSection } from '../component/majormedical/Network'
import { CostOptionsSection } from '../component/majormedical/CostOptionsSection'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'
import { RequestCallbackSection } from '../component/majormedical/RequestCallbackSection'
import { HowToApplySection } from '../component/majormedical/HowToApplySection'
import { DetailedPlanDescriptions } from '../component/majormedical/DetailedPlanDescriptions'
import { CignaPlans } from '../component/majormedical/CignaPlans'
import { TestimonialMajorMedical } from '../component/majormedical/TestimonialMajorMedical'

export default function page() {
  return (
    <>
      <MajorMedicalSection/>
      <BenefitsSection/>
      <NetworkSection/>
      <CostOptionsSection/>
      <EligibilityCriteriaSection/>
      <RequestCallbackSection/>
      <HowToApplySection/>
      <DetailedPlanDescriptions/>
      <CignaPlans/>
      <TestimonialMajorMedical/>
    </>
  )
}
