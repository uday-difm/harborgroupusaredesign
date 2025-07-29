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
        <title>Harbor Group USA RX Plan | Save on Prescriptions</title>
        <meta name="keywords" content="Harbor Group, RX plan, prescription savings, pharmacy discounts, medication coverage, employee benefits, drug plan, affordable meds, group RX plan, member pharmacy support"/>        
        <meta name="description" content="Get affordable access to medications with Harbor Group USA’s RX Plan—plus pharmacy discounts and dedicated member support."/>
        <meta property="og:title" content="Harbor Group USA RX Plan | Save on Prescriptions" />
        <meta property="og:description" content="Get affordable access to medications with Harbor Group USA’s RX Plan—plus pharmacy discounts and dedicated member support." />
        <link rel="canonical" href="https://harborgroupusa.com/rx-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/rx-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
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
