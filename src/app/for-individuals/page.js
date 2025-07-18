import React from 'react'
import { HealthCoverage } from '../component/forindividuals/HealthCoverage'
import { GetAHealthPlanConsultant } from '../component/forindividuals/GetAHealthPlanConsultant'
import { ServicesSection } from '../component/home/ServiceSection'
import { TestimonialSection } from '../component/home/TestimonialSection'

export default function page() {
  return (
    <>
      <HealthCoverage/>
      <ServicesSection/>
      <GetAHealthPlanConsultant/>
      <TestimonialSection/>
    </>
  )
}
