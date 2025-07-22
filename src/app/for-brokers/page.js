"use client";

import React from 'react'
import { CollaborationSection } from '../component/forbrokers/CollaborationSection'
import { Benefitsofcollaboration } from '../component/forbrokers/Benefitsofcollaboration'
import { HowtoPartner } from '../component/forbrokers/HowtoPartner'
import { TestimonialForbrokers } from '../component/forbrokers/TestimonialForbrokers';


export default function page() {
  return (
    <>
     <CollaborationSection/>
     <Benefitsofcollaboration/>
     <HowtoPartner/>
     {/* <TestimonialSection/> */}
     <TestimonialForbrokers/>
    </>
  )
}
