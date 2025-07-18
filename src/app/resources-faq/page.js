import React from 'react'
import { ResourcesHelpCenterPage } from '../component/resourcesfaq/ResourcesHelpCenterPage'
import { Faq } from '../component/resourcesfaq/Faq'
import { TestimonialSection } from '../component/home/TestimonialSection'
import { LatestArticles } from '../component/resourcesfaq/LatestArticles'

export default function page() {
  return (
    <div>
      <ResourcesHelpCenterPage/>
      <Faq/>
      <LatestArticles/>
      <TestimonialSection/>
    </div>
  )
}
