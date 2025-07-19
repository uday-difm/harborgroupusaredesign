import React from 'react'
import { HowToApply } from '../component/medicalplan/HowToApply'
import { FAQSection } from '../component/medicalplan/FAQSection'
import { TestimonialSection } from '../component/home/TestimonialSection'

export default function page() {
  return (
    <>
      <HowToApply/>
      <FAQSection/>
      <TestimonialSection/>
    </>
  )
}
