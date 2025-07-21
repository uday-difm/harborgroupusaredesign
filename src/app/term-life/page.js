import React from 'react'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { Hero } from '../component/termlife/Hero'
import ProtectionOverview from '../component/termlife/ProtectionOverview'
import NetworkForm from '../component/termlife/NetworkForm'
import { Eligibilitycriteria } from '../component/termlife/Eligibilitycriteria'
import { CostOptions } from '../component/termlife/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'

export default function page() {
  return (
    <>
    <Hero/>
    <ProtectionOverview/>
    <NetworkForm/>
    <Eligibilitycriteria/>
    <CostOptions/>
      <HowToApply/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Term Life Plan" link ="GET STARTED"/>
      <FAQSection/>
      <TestimonialSection/>
    </>
  )
}
