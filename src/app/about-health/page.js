import React from 'react'
import { HeroAbout } from '../component/about/HeroAbout'
import { OurHistory } from '../component/about/OurHistory'
import FounderSection from '../component/about/FounderSection'
import { BlogSection } from '../component/about/BlogPostCard'
import { TestimonialAbout } from '../component/about/TestimonialAbout'

export default function About() {
  return (
    <>
      <HeroAbout/>
      <OurHistory/>
      <FounderSection/>
      <TestimonialAbout/>
      <BlogSection/>
      
    </>
  )
}
