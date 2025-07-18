import React from 'react'
import { TestimonialSection } from '../component/home/TestimonialSection'

import { GetYourPersonalizedMedicalPlan } from '../component/medicalplan/GetYourPersonalizedMedicalPlan'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'

export default function page() {
  return (
    <div>
        <EligibilityCriteriaSection/>
        <HowToApply/>
        <FAQSection/>
          <GetYourPersonalizedMedicalPlan/>
    <TestimonialSection/>
  
    </div>
  )
}
