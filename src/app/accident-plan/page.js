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
      <title>Harbor Group Accident Plan | Unexpected Protection</title>
        <meta name="keywords" content="Harbor Group, accident plan, injury coverage, employee benefits, emergency support, sudden injury care, affordable protection, recovery benefits, workplace accident, group benefits"/>        
        <meta name="description" content="Harbor Group’s accident plan offers financial support for sudden injuries, helping you recover with less stress and more security."/>
        <meta property="og:title" content="Harbor Group Accident Plan | Unexpected Protection" />
        <meta property="og:description" content="Harbor Group’s accident plan offers financial support for sudden injuries, helping you recover with less stress and more security." />
        <link rel="canonical" href="https://harborgroupusa.com/accident-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/accident-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
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
