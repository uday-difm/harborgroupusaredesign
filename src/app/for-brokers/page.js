"use client";

import React from 'react'
import { CollaborationSection } from '../component/forbrokers/CollaborationSection'
import { Benefitsofcollaboration } from '../component/forbrokers/Benefitsofcollaboration'
import { HowtoPartner } from '../component/forbrokers/HowtoPartner'
import { TestimonialForbrokers } from '../component/forbrokers/TestimonialForbrokers';


export default function page() {
  return (
    <>
     <title>For Brokers | Partner with Harbor Group USA</title>
        <meta name="keywords" content="Harbor Group USA, broker partnerships, health Plans brokers, Plans agent support, broker tools, join Plans network, Plans broker program"/>        
        <meta name="description" content="Join Harbor Group USA’s broker network and access top-tier health plans, tools, and support to grow your Plans business with confidence."/>
        <meta property="og:title" content="For Brokers | Partner with Harbor Group USA" />
        <meta property="og:description" content="Join Harbor Group USA’s broker network and access top-tier health plans, tools, and support to grow your Plans business with confidence." />
        <link rel="canonical" href="https://harborgroupusa.com/for-brokers/" />
        <meta property="og:url" content="https://harborgroupusa.com/for-brokers/" />
        <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
     <CollaborationSection/>
     <Benefitsofcollaboration/>
     <HowtoPartner/>
     {/* <TestimonialSection/> */}
     <TestimonialForbrokers/>
    </>
  )
}
