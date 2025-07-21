import React from 'react'
import { Hospitalization } from '../component/hospitalplan/Hospitalization'
import { Yourhealthmatters } from '../component/hospitalplan/Yourhealthmatters'
import { ConnectWithUS } from '../component/hospitalplan/ConnectWithUS'
import { GetYourPersonalizedMedicalPlan } from '@/comman/GetYourPersonalizedMedicalPlan'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { BenefitsofHospitalPlan } from '../component/hospitalplan/BenefitsofHospitalPlan'
import { Network } from '../component/hospitalplan/Network'
import { CostOptionshospital } from '../component/hospitalplan/CostOptionshospital'
import { EligibilitycriteriaofHospital } from '../component/hospitalplan/EligibilitycriteriaofHospital'

export default function page() {
  return (
    <>
      <Hospitalization/>
      <Yourhealthmatters/>
      <ConnectWithUS/>
      <BenefitsofHospitalPlan/>
      <Network/>
      <GetYourPersonalizedMedicalPlan title = "Start your Hospital Plans today!" link ="GET STARTED" />
      <CostOptionshospital/>
      <EligibilitycriteriaofHospital/>
      <HowToApply/>
      <FAQSection/>
      <TestimonialSection/>
    </>
  )
}
