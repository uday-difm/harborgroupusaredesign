import React from 'react'
import { ResourcesHelpCenterPage } from '../component/resourcesfaq/ResourcesHelpCenterPage'
import { Faq } from '../component/resourcesfaq/Faq'
import { LatestArticles } from '../component/resourcesfaq/LatestArticles'
import { TestimonialResource } from '../component/resourcesfaq/TestimonialResource'

export default function page() {
  return (
    <>
         <title>Resources & Support | Harbor Group USA Health Plans </title>
        <meta name="keywords" content="health plans, coverage options, healthcare resources, FAQ, help center, self-employed plans, small business plans, telemedicine, healthcare trends, client support"/>        
        <meta name="description" content="Explore Harbor Group USA's resources for health plans, coverage options, and healthcare trends. Find answers, guides, and articles."/>
        <meta property="og:title" content="Resources & Support | Harbor Group USA Health Plans" />
        <meta property="og:description" content="Explore Harbor Group USA's resources for health plans, coverage options, and healthcare trends. Find answers, guides, and articles." />
        <link rel="canonical" href="https://harborgroupusa.com/sms-and-marketing-terms/" />
        <meta property="og:url" content="https://harborgroupusa.com/sms-and-marketing-terms/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
       <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden"></section>
      <ResourcesHelpCenterPage/>
      <Faq/>
      <LatestArticles/>
      <TestimonialResource/>
    </>
  )
}
