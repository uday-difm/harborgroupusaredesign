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
// import { TestimonialDentalPlan } from '../component/dentalplan/TestimonialDentalPlan'
import { DentalEligbility } from '../component/dentalplan/DentalEligbility'

export default function page() {
  return (
    <>
      <title>Harbor Group Dental Plans | Full Coverage Care</title>
        <meta name="keywords" content="Harbor Group, dental care, dental Plans, employee benefits, oral health, affordable dental plan, group dental coverage, preventive dental, dental benefits, dental PPO"/>        
        <meta name="description" content="Comprehensive dental care plans from Harbor Group with preventive services, low costs, and employee-focused coverage."/>
        <meta property="og:title" content="Harbor Group Dental Plans | Full Coverage Care" />
        <meta property="og:description" content="Comprehensive dental care plans from Harbor Group with preventive services, low costs, and employee-focused coverage." />
        <link rel="canonical" href="https://harborgroupusa.com/dental-care-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/dental-care-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <DentalHeroSection/>
<BenefitsofDentalCarePlan/>  
<DentalNetworkSection/>
        {/* <EligibilityCriteriaSection/> */}
        <DentalEligbility/>
        <HowToApply/>
        <DentalCostsCoverageSection/>
        <FaqDentalplan/>
          <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Dental Care Plan" link ="GET STARTED" url="#dental-form"/>
    {/* <TestimonialDentalPlan/> */}
  
    </>
  )
}
