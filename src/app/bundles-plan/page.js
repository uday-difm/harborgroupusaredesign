import React from 'react'
import { BundlesPlanHeroSection } from '../component/bundlesplan/BundlesPlanHeroSection'
import { Benefits } from '../component/bundlesplan/Benefits'
import { ConnectWIthUs } from '../component/bundlesplan/ConnectWIthUs'
import { EligibilityCriteria } from '../component/bundlesplan/EligibilityCriteria'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { Network } from '../component/bundlesplan/Network'
import { CostOptions } from '../component/bundlesplan/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { FaqBundlesplan } from '../component/bundlesplan/FaqBundlesplan'
import { TestimonialBundlesplan } from '../component/bundlesplan/TestimonialBundlesplan'


export default function page() {
  return (
    <>
        <title>Harbor Group USA Bundles Plan | Smarter Benefits</title>
        <meta name="keywords" content="Harbor Group, bundles plan, employee benefits, combined coverage, group plans, medical dental vision, affordable benefits, flexible plans, full coverage, smart benefits"/>        
        <meta name="description" content="Simplify your coverage with Harbor Group&apos;s bundles plan—combining medical, dental, vision, and more for complete protection."/>
        <meta property="og:title" content="Harbor Group USA Bundles Plan | Smarter Benefits" />
        <meta property="og:description" content="Simplify your coverage with Harbor Group&apos;s bundles plan—combining medical, dental, vision, and more for complete protection." />
        <link rel="canonical" href="https://harborgroupusa.com/bundles-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/bundles-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
     <BundlesPlanHeroSection/> 
     <Benefits/>
     <ConnectWIthUs/>
     <EligibilityCriteria/>
     <HowToApply/>
     <Network/>
     <CostOptions/>
        <FaqBundlesplan/>
     <GetYourPersonalizedMedicalPlan title ="Get Your Personalized Bundles Plans" link = "GET STARTED" url="#bundles-form"/>
     <TestimonialBundlesplan/>
    </>
  )
}
