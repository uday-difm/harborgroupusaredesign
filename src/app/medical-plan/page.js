import React from 'react'
import { MedicalFormLanding } from '../component/medicalplan/MedicalFormLanding'
import { CoverageOptionsSection } from '../component/medicalplan/CoverageOptionsSection'
import { MedicalPlanBenefitsSection } from '../component/medicalplan/MedicalPlanBenefitsSection'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { CostOptions } from '../component/medicalplan/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '../../comman/GetYourPersonalizedMedicalPlan'
import { MedicalPlanFaq } from '../component/medicalplan/MedicalPlanFaq'
import { TestimonialMedicalPlan } from '../component/medicalplan/TestimonialMedicalPlan'


export default function page() {
  return (
    <div>
      <MedicalFormLanding/>
      <CoverageOptionsSection/>
      <MedicalPlanBenefitsSection/>
      <EligibilityCriteriaSection/>
      <HowToApply/>
      <CostOptions/>
        <MedicalPlanFaq/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Medical Plan" link ="GET STARTED" url="#medical-form"/>
      <TestimonialMedicalPlan/>
    </div>
  )
}
