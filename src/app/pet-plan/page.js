import React from 'react'
import { PetPlanHereSection } from '../component/petplan/PetPlanHereSection'
import { HowToApply } from '../component/medicalplan/HowToApply'
// import { TestimonialSection } from '../component/home/TestimonialSection'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { PetPlanBenefits } from '../component/petplan/PetPlanBenefits'
import { NetworkPetPlan } from '../component/petplan/NetworkPetPlan'
import { Eligibility } from '../component/petplan/Eligiblity'
import { ApplyNowSection } from '../component/petplan/ApplyNowSection'
import { FaqPetplan } from '../component/petplan/FaqPetplan'
import { TestimonialPetPlan } from '../component/petplan/TestimonialPetPlan'

export default function page() {
  return (
    <>
     <PetPlanHereSection/> 
     <PetPlanBenefits/>
     <NetworkPetPlan/>
    
     <HowToApply/>
      <Eligibility/>
      <ApplyNowSection/>
  
     <FaqPetplan/>
     <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Pet Care Plan" link ="GET STARTED"/>
     <TestimonialPetPlan/>

    </>
  )
}
