import React from 'react'
import { ResourcesHelpCenterPage } from '../component/resourcesfaq/ResourcesHelpCenterPage'
import { Faq } from '../component/resourcesfaq/Faq'
import { LatestArticles } from '../component/resourcesfaq/LatestArticles'
import { TestimonialResource } from '../component/resourcesfaq/TestimonialResource'

export default function page() {
  return (
    <div>
      <ResourcesHelpCenterPage/>
      <Faq/>
      <LatestArticles/>
      <TestimonialResource/>
    </div>
  )
}
