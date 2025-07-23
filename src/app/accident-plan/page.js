import React from 'react'
import { AccidentHero } from '../component/accidentplan/AccidentHero'
import { Benefitsofaccident } from '../component/accidentplan/Benefitsofaccident'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { ConnectWithUs } from '../component/accidentplan/ConnectWithUs'
import { Network } from '../component/accidentplan/Network'
import { Eligibilityofaccidental } from '../component/accidentplan/Eligibilityofaccidental'
import { FaqAccidentplan } from '../component/accidentplan/FaqAccidentplan'
import { TestimonialAccidentPlan } from '../component/accidentplan/TestimonialAccidentPlan'

export default function page() {
  return (
    <>
      <AccidentHero/>
      <Benefitsofaccident/>
      <ConnectWithUs/>
      <Network/>
      <Eligibilityofaccidental/>
      <HowToApply/>
      <FaqAccidentplan/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Accident Plan" link = "GET STARTED" url="#accident-plan-form"/>
      <TestimonialAccidentPlan/>
    </>
  )
}
