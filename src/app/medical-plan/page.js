import React from 'react'
import { MedicalFormLanding } from '../component/medicalplan/MedicalFormLanding'
import { CoverageOptionsSection } from '../component/medicalplan/CoverageOptionsSection'
import { MedicalPlanBenefitsSection } from '../component/medicalplan/MedicalPlanBenefitsSection'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { CostOptions } from '../component/medicalplan/CostOptions'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { GetYourPersonalizedMedicalPlan } from '../component/medicalplan/GetYourPersonalizedMedicalPlan'
// import { Faqplan } from '../component/medicalplan/'
import { FAQSection } from '../component/medicalplan/FAQSection'


export default function page() {
  return (
    <div>
      <MedicalFormLanding/>
      <CoverageOptionsSection/>
      <MedicalPlanBenefitsSection/>
      <EligibilityCriteriaSection/>
      <HowToApply/>
      <CostOptions/>
        <FAQSection/>
      <GetYourPersonalizedMedicalPlan/>
      <TestimonialSection/>
    </div>
  )
}
