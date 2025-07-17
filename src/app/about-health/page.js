import React from 'react'
import { HeroAbout } from '../component/about/HeroAbout'
import { OurHistory } from '../component/about/OurHistory'
import FounderSection from '../component/about/FounderSection'
import { BlogSection } from '../component/about/BlogPostCard'
import { TestimonialSection } from '../component/home/TestimonialSection'

export default function About() {
  return (
    <>
      <HeroAbout/>
      <OurHistory/>
      <FounderSection/>
      <TestimonialSection/>
      <BlogSection/>
      
    </>
  )
}
