import React from 'react'
import Script from 'next/script'
import { HeroAbout } from '../component/about/HeroAbout'
import { OurHistory } from '../component/about/OurHistory'
import FounderSection from '../component/about/FounderSection'
import { BlogSection } from '../component/about/BlogPostCard'
import { TestimonialAbout } from '../component/about/TestimonialAbout'

export default function About() {
  return (
    <>
      {/* JSON-LD schema for Douglas Muhlbauer */}
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Douglas Muhlbauer",
            url: "https://www.harbourgroupusa.com/about-us",
            sameAs: [
              "https://www.linkedin.com/in/douglas-muhlbauer-918959b7/",
              "https://www.instagram.com/harborgroupusa/",
              "https://www.facebook.com/TheHarborGroupUS/",
              "https://x.com/HarborUsa",
              "https://www.youtube.com/@harborgroupusa",
              "https://www.linkedin.com/company/harbor-group-usa/"
            ],
            image: "https://www.harbourgroupusa.com/path-to-image.jpg",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "Harbor Group USA",
              url: "https://www.harbourgroupusa.com",
              logo: "https://www.harbourgroupusa.com/path-to-logo.jpg",
              sameAs: "https://www.harbourgroupusa.com",
              description:
                "Harbor Group USA is a trusted healthcare coverage provider guiding clients through insurance complexities with transparency, expertise, and personalized solutions."
            },
            email: "support@harborgroupusa.com",
            telephone: "+1-800-473-3241",
            description:
              "Douglas Muhlbauer is a recognized expert in healthcare coverage and reform. As Founder and CEO of Harbor Group USA, he has guided thousands of clients to better understand and choose their health plans. Douglas is also the author of 'Breaking the Monopoly: The Fight for Affordability', exposing monopolistic practices in healthcare. His leadership, advocacy, and commitment to transparency make him a trusted voice in the industry.",
            knowsAbout: [
              "Healthcare Coverage Plans",
              "Health Insurance Solutions",
              "Healthcare Reform",
              "Consumer Advocacy",
              "Healthcare Industry Leadership"
            ],
            award: [
              "Healthcare Industry Leadership Recognition",
              "Advocate for Consumer Rights in Healthcare"
            ],
            hasCredential: [
              {
                "@type": "Book",
                name: "Breaking the Monopoly: The Fight for Affordability",
                author: "Douglas Muhlbauer",
                datePublished: "2025-01-17",
                inLanguage: "English",
                isbn: "B0DTF7NTGP",
                bookFormat: "EBook",
                numberOfPages: "50",
                publisher: {
                  "@type": "Organization",
                  name: "Harbor Group USA"
                }
              }
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.harbourgroupusa.com/about-us"
            }
          })
        }}
      />

      {/* Page meta — consider moving these to Head/metadata depending on router */}
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
