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
     <BundlesPlanHeroSection/> 
     <Benefits/>
     <ConnectWIthUs/>
     <EligibilityCriteria/>
     <HowToApply/>
     <Network/>
     <CostOptions/>
        <FaqBundlesplan/>
     <GetYourPersonalizedMedicalPlan title ="Get Your Personalized Bundles Plans" link = "GET STARTED"/>
     <TestimonialBundlesplan/>
    </>
  )
}
