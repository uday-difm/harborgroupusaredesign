import React from 'react'
import { TestimonialSection } from '../component/home/TestimonialSection'

import { GetYourPersonalizedMedicalPlan } from '../component/medicalplan/GetYourPersonalizedMedicalPlan'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'
import { DentalHeroSection } from '../component/dentalplan/DentalHeroSection'
import { BenefitsofDentalCarePlan } from '../component/dentalplan/BenefitsofDentalCarePlan'
import { DentalNetworkSection } from '../component/dentalplan/DentalNetworkSection'
import { DentalCostsCoverageSection } from '../component/dentalplan/DentalCostsCoverageSection'

export default function page() {
  return (
    <div>
      <DentalHeroSection/>
<BenefitsofDentalCarePlan/>  
<DentalNetworkSection/>
        <EligibilityCriteriaSection/>
        <HowToApply/>
        <DentalCostsCoverageSection/>
        <FAQSection/>
          <GetYourPersonalizedMedicalPlan/>
    <TestimonialSection/>
  
    </div>
  )
}
