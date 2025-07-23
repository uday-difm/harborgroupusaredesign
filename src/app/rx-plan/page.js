import React from 'react'
import { RXPlanHeroSection } from '../component/rxplan/RXPlanHeroSection'
import { RxBenefits } from '../component/rxplan/RxBenefits'
import { PharmacyNetworkSection } from '../component/rxplan/PharmacyNetworkSection'
// import { TestimonialSection } from '../component/home/TestimonialSection'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { CostOption } from '../component/rxplan/CostOption'
import { RxEligibilitySection } from '../component/rxplan/RxEligibilitySection'
import { StartPlanSection } from '../component/rxplan/StartPlanSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FaqRxplan } from '../component/rxplan/FaqRxplan'
import { TestimonialRxPlan } from '../component/rxplan/TestimonialRxPlan'

export default function page() {
  return (
    <>
      <RXPlanHeroSection/>
      <RxBenefits/>
      <PharmacyNetworkSection/>
      <CostOption/>
      <RxEligibilitySection/>
      <HowToApply/>
      <StartPlanSection/>
      <FaqRxplan/>
      <GetYourPersonalizedMedicalPlan title = "Start your Rx plan today!" link ="GET STARTED" url="#rx-plan-form"/>
      {/* <TestimonialSection/> */}
      <TestimonialRxPlan/>
    </>
  )
}
