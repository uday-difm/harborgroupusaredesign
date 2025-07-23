import React from 'react'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { Hero } from '../component/termlife/Hero'
import ProtectionOverview from '../component/termlife/ProtectionOverview'
import NetworkForm from '../component/termlife/NetworkForm'
import { Eligibilitycriteria } from '../component/termlife/Eligibilitycriteria'
import { CostOptions } from '../component/termlife/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { FaqTermlife } from '../component/termlife/FaqTermlife'
import { TestimonialTermLife } from '../component/termlife/TestimonialTermLife'

export default function page() {
  return (
    <>
    <Hero/>
    <ProtectionOverview/>
    <NetworkForm/>
    <Eligibilitycriteria/>
    <CostOptions/>
      <HowToApply/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Term Life Plan" link ="GET STARTED" url="#term-form"/>
      <FaqTermlife/>
      <TestimonialTermLife/>
    </>
  )
}
