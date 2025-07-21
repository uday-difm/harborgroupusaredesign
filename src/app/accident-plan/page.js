import React from 'react'
import { AccidentHero } from '../component/accidentplan/AccidentHero'
import { Benefitsofaccident } from '../component/accidentplan/Benefitsofaccident'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { ConnectWithUs } from '../component/accidentplan/ConnectWithUs'
import { Network } from '../component/accidentplan/Network'
import { Eligibilityofaccidental } from '../component/accidentplan/Eligibilityofaccidental'

export default function page() {
  return (
    <>
      <AccidentHero/>
      <Benefitsofaccident/>
      <ConnectWithUs/>
      <Network/>
      <Eligibilityofaccidental/>
      <HowToApply/>
      <FAQSection/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Accident Plan" link = "GET STARTED"/>
      <TestimonialSection/>
    </>
  )
}
