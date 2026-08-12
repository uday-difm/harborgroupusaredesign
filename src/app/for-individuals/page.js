import React from 'react'
import { HealthCoverage } from '../component/forindividuals/HealthCoverage'
import { GetAHealthPlanConsultant } from '../component/forindividuals/GetAHealthPlanConsultant'
import { IndividualPlansGrid } from '../component/forindividuals/IndividualPlansGrid'

import { PurchaseStepsSection } from '../component/forindividuals/PurchaseStepsSection'

export default function page() {
  return (
    <>
      <title>Health Plans for Individuals | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, individual health plans, personal health Plans, affordable coverage, flexible health Plans, solo medical plans, healthcare for individuals"/>        
      <meta name="description" content="Discover flexible and affordable health plans for individuals with Harbor Group USA. Get coverage that fits your needs and budget."/>
      <meta property="og:title" content="Health Plans for Individuals | Harbor Group USA" />
      <meta property="og:description" content="Discover flexible and affordable health plans for individuals with Harbor Group USA. Get coverage that fits your needs and budget." />
      <link rel="canonical" href="https://harborgroupusa.com/for-individuals/" />
      <meta property="og:url" content="https://harborgroupusa.com/for-individuals/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <main>
        <HealthCoverage/>
        <PurchaseStepsSection/>
        <IndividualPlansGrid/>

        <GetAHealthPlanConsultant/>
      </main>
    </>
  )
}
