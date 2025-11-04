import React from 'react'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { Hero } from '../component/termlife/Hero'
import ProtectionOverview from '../component/termlife/ProtectionOverview'
import NetworkForm from '../component/termlife/NetworkForm'
import { Eligibilitycriteria } from '../component/termlife/Eligibilitycriteria'
import { CostOptions } from '../component/termlife/CostOptions'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { FaqTermlife } from '../component/termlife/FaqTermlife'
// import { TestimonialTermLife } from '../component/termlife/TestimonialTermLife'

export default function page() {
  return (
    <>
    <title>Term Life Plan | The Harbor Group USA</title>
        <meta name="keywords" content="Harbor Group, term life, employee benefits, financial protection, family support, life coverage, affordable plans, group benefits, peace of mind, long-term care"/>        
        <meta name="description" content="Harbor Group USA offers top-rated, affordable term life insurance plans to protect your family&apos;s future with trusted coverage."/>
        <meta property="og:title" content="Term Life Plan | The Harbor Group USA" />
        <meta property="og:description" content="Harbor Group USA offers top-rated, affordable term life insurance plans to protect your family&apos;s future with trusted coverage." />
        <link rel="canonical" href="https://harborgroupusa.com/term-life/" />
        <meta property="og:url" content="https://harborgroupusa.com/term-life/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
    <Hero/>
    <ProtectionOverview/>
    <NetworkForm/>
    <Eligibilitycriteria/>
    <CostOptions/>
      <HowToApply/>
      <GetYourPersonalizedMedicalPlan title = "Get Your Personalized Term Life Plan" link ="GET STARTED" url="#term-form"/>
      <FaqTermlife/>
      {/* <TestimonialTermLife/> */}
    </>
  )
}
