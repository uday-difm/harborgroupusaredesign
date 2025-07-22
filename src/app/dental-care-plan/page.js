import React from 'react'
// import { TestimonialSection } from '../component/home/TestimonialSection'
import { GetYourPersonalizedMedicalPlan } from '../../comman/GetYourPersonalizedMedicalPlan'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'
import { DentalHeroSection } from '../component/dentalplan/DentalHeroSection'
import { BenefitsofDentalCarePlan } from '../component/dentalplan/BenefitsofDentalCarePlan'
import { DentalNetworkSection } from '../component/dentalplan/DentalNetworkSection'
import { DentalCostsCoverageSection } from '../component/dentalplan/DentalCostsCoverageSection'
import { FaqDentalplan } from '../component/dentalplan/FaqDentalplan'
import { TestimonialDentalPlan } from '../component/dentalplan/TestimonialDentalPlan'

export default function page() {
  return (
    <div>
      <DentalHeroSection/>
<BenefitsofDentalCarePlan/>  
<DentalNetworkSection/>
        <EligibilityCriteriaSection/>
        <HowToApply/>
        <DentalCostsCoverageSection/>
        <FaqDentalplan/>
          <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Dental Care Plan" link ="GET STARTED" />
    <TestimonialDentalPlan/>
  
    </div>
  )
}
