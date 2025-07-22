import React from 'react'
import { HealthCoverage } from '../component/forindividuals/HealthCoverage'
import { GetAHealthPlanConsultant } from '../component/forindividuals/GetAHealthPlanConsultant'
import { ServicesSection } from '../component/home/ServiceSection'
// import { TestimonialSection } from '../component/home/TestimonialSection'
import { PurchaseStepsSection } from '../component/forindividuals/PurchaseStepsSection'
import { TestimonialForIndividuals } from '../component/forindividuals/TestimonialForIndividuals'

export default function page() {
  return (
    <>
      <HealthCoverage/>
      <PurchaseStepsSection/>
      <ServicesSection/>
      <GetAHealthPlanConsultant/>
      {/* <TestimonialSection/> */}
      <TestimonialForIndividuals/>
    </>
  )
}
