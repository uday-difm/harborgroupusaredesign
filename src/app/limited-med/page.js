import React from 'react'
import { HeroSection } from '../component/limitedmedplans/HeroSection'
import { BenefitsOfLimitedMed } from '../component/limitedmedplans/BenefitsOfLimitedMed'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { NetworkContact } from '../component/limitedmedplans/NetworkContact'
import { EligibilityCriteria } from '../component/limitedmedplans/EligibilityCriteria'
import { CostOptions } from '../component/limitedmedplans/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { FaqLimitedMedPlans } from '../component/limitedmedplans/FaqLimitedMedPlans'
// import { TestimonialLimitedmed } from '../component/limitedmedplans/TestimonialLimitedmed'

export default function page() {
  return (
    <>
     <title>Limited Med Plan | The Harbor Group USA</title>
        <meta name="keywords" content="Harbor Group, limited med, essential care, basic health plan, affordable coverage, employee benefits, routine care, medical access, group health, simplified benefits"/>        
        <meta name="description" content="Get an essential health plan with The Harbor Group Limited Med Plan, which covers basic medical needs without overextending your budget."/>
        <meta property="og:title" content="Limited Med Plan | The Harbor Group USA" />
        <meta property="og:description" content="Get an essential health plan with The Harbor Group Limited Med Plan, which covers basic medical needs without overextending your budget." />
        <link rel="canonical" href="https://harborgroupusa.com/limited-med/" />
        <meta property="og:url" content="https://harborgroupusa.com/limited-med/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
    <HeroSection/>
    <BenefitsOfLimitedMed/>
    <HowToApply/>
    <NetworkContact/>
    <EligibilityCriteria/>
    <CostOptions/>
    <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Limited Med Plans" link = "GET STARTED" url="#limited-med-form"/>
    <FaqLimitedMedPlans/>
    {/* <TestimonialLimitedmed/> */}
    </>
  )
}
