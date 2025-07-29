import React from 'react'
import { HeroAbout } from '../component/about/HeroAbout'
import { OurHistory } from '../component/about/OurHistory'
import FounderSection from '../component/about/FounderSection'
import { BlogSection } from '../component/about/BlogPostCard'
import { TestimonialAbout } from '../component/about/TestimonialAbout'

export default function About() {
  return (
    <>
       <title>About Health Programs | Harbor Group USA</title>
        <meta name="keywords" content="Harbor Group USA, health programs, community wellness, healthcare access, health initiatives, wellness programs, public health support, affordable coverage"/>        
        <meta name="description" content=" Harbor Group USA offers comprehensive health plans designed to meet your healthcare needs with trusted, affordable coverage."/>
        <meta property="og:title" content="About Health Programs | Harbor Group USA" />
        <meta property="og:description" content="Harbor Group USA offers comprehensive health plans designed to meet your healthcare needs with trusted, affordable coverage." />
        <link rel="canonical" href="https://harborgroupusa.com/about-health/" />
        <meta property="og:url" content="https://harborgroupusa.com/about-health/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <HeroAbout/>
      <OurHistory/>
      <FounderSection/>
      <TestimonialAbout/>
      <BlogSection/>
      
    </>
  )
}
