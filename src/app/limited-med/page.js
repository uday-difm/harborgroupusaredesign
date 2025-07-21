import React from 'react'
import { HeroSection } from '../component/limitedmedplans/HeroSection'
import { BenefitsOfLimitedMed } from '../component/limitedmedplans/BenefitsOfLimitedMed'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { NetworkContact } from '../component/limitedmedplans/NetworkContact'
import { EligibilityCriteria } from '../component/limitedmedplans/EligibilityCriteria'
import { CostOptions } from '../component/limitedmedplans/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { TestimonialSection } from '../component/home/TestimonialSection'

export default function page() {
  return (
    <>
    <HeroSection/>
    <BenefitsOfLimitedMed/>
    <HowToApply/>
    <NetworkContact/>
    <EligibilityCriteria/>
    <CostOptions/>
    <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Limited Med Plans" link = "GET STARTED"/>
    <FAQSection/>
    <TestimonialSection/>
    </>
  )
}
