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

        <title>Harbor Group USA Pet Plan | Care for Your Companions</title>
        <meta name="keywords" content="Harbor Group, pet plan, pet care benefits, vet coverage, pet wellness, pet protection, employee pet perks, pet health, group pet plan, animal care"/>        
        <meta name="description" content="Harbor Group USA pet plan helps cover vet visits, emergencies, and wellness care—giving your pets the protection they deserve."/>
        <meta property="og:title" content="Harbor Group USA Pet Plan | Care for Your Companions" />
        <meta property="og:description" content="Harbor Group USA pet plan helps cover vet visits, emergencies, and wellness care—giving your pets the protection they deserve." />
        <link rel="canonical" href="https://harborgroupusa.com/pet-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/pet-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
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
