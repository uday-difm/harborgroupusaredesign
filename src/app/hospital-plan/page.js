import React from 'react'
import { Hospitalization } from '../component/hospitalplan/Hospitalization'
import { Yourhealthmatters } from '../component/hospitalplan/Yourhealthmatters'
import { ConnectWithUS } from '../component/hospitalplan/ConnectWithUS'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FAQSection } from '../../comman/FAQSection'
// import { TestimonialSection } from '../component/home/TestimonialSection'
import { BenefitsofHospitalPlan } from '../component/hospitalplan/BenefitsofHospitalPlan'
import { Network } from '../component/hospitalplan/Network'
import { CostOptionshospital } from '../component/hospitalplan/CostOptionshospital'
import { EligibilitycriteriaofHospital } from '../component/hospitalplan/EligibilitycriteriaofHospital'
import { FaqHospitalPlan } from '../component/hospitalplan/FaqHospitalPlan'
import { TestimonialHospitalPlan } from '../component/hospitalplan/TestimonialHospitalPlan'

export default function page() {
  return (
    <>
        <title>Hospital Coverage Plans | The Harbor Group USA</title>
        <meta name="keywords" content="Harbor Group, hospital plan, inpatient coverage, employee benefits, hospital stay support, medical costs, group plan, financial protection, extra coverage, peace of mind"/>        
        <meta name="description" content="Get comprehensive hospital coverage with The Harbor Group USA. Our plans provide peace of mind and cover various medical expenses."/>
        <meta property="og:title" content="Hospital Coverage Plans | The Harbor Group USA" />
        <meta property="og:description" content="Get comprehensive hospital coverage with The Harbor Group USA. Our plans provide peace of mind and cover various medical expenses." />
        <link rel="canonical" href="https://harborgroupusa.com/hospital-plan/" />
        <meta property="og:url" content="https://harborgroupusa.com/hospital-plan/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
    
      <Hospitalization/>
      <Yourhealthmatters/>
      <ConnectWithUS/>
      <BenefitsofHospitalPlan/>
      <Network/>
      <GetYourPersonalizedMedicalPlan title = "Start your Hospital Plans today!" link ="GET STARTED" url="#hospital-plan-form"/>
      <CostOptionshospital/>
      <EligibilitycriteriaofHospital/>
      <HowToApply/>
      <FaqHospitalPlan/>
      {/* <TestimonialSection/> */}
      <TestimonialHospitalPlan/>
    </>
  )
}
