import React from 'react'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { Protectionagainst } from '../component/criticalplan/Protectionagainst'
import { BenefitsofCriticalplan } from '../component/criticalplan/BenefitsofCriticalplan'
import { CostOptions } from '../component/criticalplan/CostOptions'
import { Network } from '../component/criticalplan/Network'
import { Eligibilitycriteria } from '../component/criticalplan/Eligibilitycriteria'
import { FaqCriticalPlan } from '../component/criticalplan/FaqCriticalPlan'
import { TestimonialCriticalPlan } from '../component/criticalplan/TestimonialCriticalPlan'

export default function page() {
  return (
    <>
     <title>Harbor Group Critical Plan | Serious Illness Support</title>
        <meta name="keywords" content="Harbor Group, critical plan, serious illness, employee benefits, health condition support, major illness care, financial protection, cancer coverage, heart condition plan, group health benefits"/>        
        <meta name="description" content="Harbor Group&apos;s critical plan offers financial protection and support when facing major health conditions like cancer or heart disease."/>
        <meta property="og:title" content="Harbor Group Critical Plan | Serious Illness Support" />
        <meta property="og:description" content="Harbor Group&apos;s critical plan offers financial protection and support when facing major health conditions like cancer or heart disease." />
        <link rel="canonical" href="https://harborgroupusa.com/critical-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/critical-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
    <Protectionagainst/>
    <BenefitsofCriticalplan/>
    <CostOptions/>
    <Network/>
    <Eligibilitycriteria/>
    <HowToApply/>
   <FaqCriticalPlan/>
    <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Critical Plan" link = "GET STARTED" url="#critical-plan-form"/>
      <TestimonialCriticalPlan/>
    </>
  )
}
