import React from 'react'
import { MajorMedicalSection } from '../component/majormedical/MajorMedicalSection'
import { BenefitsSection } from '../component/majormedical/Benefits'
import { NetworkSection } from '../component/majormedical/Network'
import { CostOptionsSection } from '../component/majormedical/CostOptionsSection'
import { EligibilityCriteriaSection } from '../component/majormedical/EligibilityCriteriaSection'
import { RequestCallbackSection } from '../component/majormedical/RequestCallbackSection'
import { HowToApplySection } from '../component/majormedical/HowToApplySection'
import { DetailedPlanDescriptions } from '../component/majormedical/DetailedPlanDescriptions'
import { CignaPlans } from '../component/majormedical/CignaPlans'
// import { TestimonialMajorMedical } from '../component/majormedical/TestimonialMajorMedical'
import { PhcsPlansTable } from '../component/majormedical/PhcsPlansTable'
import { PlanDescriptions } from '../component/majormedical/PlanDescriptions'
import { QualcarePlansTable } from '../component/majormedical/QualcarePlansTable'

export default function page() {
  return (
    <>

       <title>Major Medical Plans | Harbor Group USA</title>
        <meta name="keywords" content="Harbor Group USA, major medical plans, health Plans, affordable medical coverage, individual health plans, business health plans, comprehensive health Plans"/>        
        <meta name="description" content="Explore Harbor Group USA&apos;s major medical plans offering comprehensive health coverage and affordable options for individuals and businesses."/>
        <meta property="og:title" content="Major Medical Plans | Harbor Group USA" />
        <meta property="og:description" content="Explore Harbor Group USA&apos;s major medical plans offering comprehensive health coverage and affordable options for individuals and businesses." />
        <link rel="canonical" href="https://harborgroupusa.com/major-medical-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/major-medical-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <MajorMedicalSection/>
      <BenefitsSection/>
      <NetworkSection/>
      <CostOptionsSection/>
      <EligibilityCriteriaSection/>
      <RequestCallbackSection/>
      <HowToApplySection/>
      <DetailedPlanDescriptions/>
      <CignaPlans/>
      <DetailedPlanDescriptions/>
      <PhcsPlansTable/>
      <PlanDescriptions/>
      <QualcarePlansTable/>
      {/* <TestimonialMajorMedical/> */}
    </>
  )
}
