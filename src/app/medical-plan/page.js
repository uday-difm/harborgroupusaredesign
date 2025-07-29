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
    <>
      <title>Harbor Group Medical Plans | Quality Coverage</title>
        <meta name="keywords" content="Harbor Group, medical plans, employee benefits, health Plans, PPO coverage, affordable healthcare, group Plans, wellness support, USA benefits, custom coverage"/>        
        <meta name="description" content="Affordable, customizable medical plans from Harbor Group USA with wellness benefits, PPO options, and employee support"/>
        <meta property="og:title" content="Harbor Group Medical Plans | Quality Coverage" />
        <meta property="og:description" content="Affordable, customizable medical plans from Harbor Group USA with wellness benefits, PPO options, and employee support" />
        <link rel="canonical" href="https://harborgroupusa.com/medical-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/medical-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <MedicalFormLanding/>
      <CoverageOptionsSection/>
      <MedicalPlanBenefitsSection/>
      <EligibilityCriteriaSection/>
      <HowToApply/>
      <CostOptions/>
        <MedicalPlanFaq/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Medical Plan" link ="GET STARTED" url="#medical-form"/>
      <TestimonialMedicalPlan/>
    </>
  )
}
