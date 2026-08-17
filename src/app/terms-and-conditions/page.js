"use client";

import React from 'react';
import { LegalTemplate } from '@/common/LegalTemplate';

const TABLE_OF_CONTENTS = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'about-harbor-group', title: '2. About Harbor Group USA' },
  { id: 'eligibility', title: '3. Eligibility to Use the Website' },
  { id: 'health-plan-info', title: '4. Health Plan and Healthcare Coverage Information' },
  { id: 'no-guarantee-eligibility', title: '5. No Guarantee of Eligibility or Coverage' },
  { id: 'no-medical-advice', title: '6. No Medical Advice' },
  { id: 'quotes-estimates', title: '7. Quotes, Estimates, and Plan Information' },
  { id: 'applications-enrollment', title: '8. Applications and Enrollment' },
  { id: 'communications-contact', title: '9. Communications and Contact' },
  { id: 'telephone-recording', title: '10. Telephone and Call Recording' },
  { id: 'user-information', title: '11. User Information' },
  { id: 'privacy', title: '12. Privacy' },
  { id: 'third-party-services', title: '13. Third-Party Services and Providers' },
  { id: 'third-party-websites', title: '14. Third-Party Websites and Links' },
  { id: 'intellectual-property', title: '15. Website Content and Intellectual Property' },
  { id: 'prohibited-activities', title: '16. Prohibited Activities' },
  { id: 'user-submissions', title: '17. User Submissions' },
  { id: 'employment-internships', title: '18. Employment and Internship Inquiries' },
  { id: 'website-availability', title: '19. Availability of the Website' },
  { id: 'changes-to-website', title: '20. Changes to the Website and Services' },
  { id: 'disclaimers', title: '21. Disclaimers' },
  { id: 'limitation-of-liability', title: '22. Limitation of Liability' },
  { id: 'indemnification', title: '23. Indemnification' },
  { id: 'regulatory-compliance', title: '24. Regulatory Compliance' },
  { id: 'governing-law', title: '25. Governing Law' },
  { id: 'dispute-resolution', title: '26. Dispute Resolution' },
  { id: 'severability', title: '27. Severability' },
  { id: 'waiver', title: '28. Waiver' },
  { id: 'entire-agreement', title: '29. Entire Agreement' },
  { id: 'changes-to-terms', title: '30. Changes to These Terms' },
  { id: 'contact-information', title: '31. Contact Information' },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <title>Terms and Conditions | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, terms and conditions, terms of service, user agreement, website terms, legal terms, healthcare plans, service agreement" />
      <meta name="description" content="Read the official Terms and Conditions for using Harbor Group USA's website and services, including user responsibilities, disclaimers, and legal guidelines." />
      <meta property="og:title" content="Terms and Conditions | Harbor Group USA" />
      <meta property="og:description" content="Read the official Terms and Conditions for using Harbor Group USA's website and services, including user responsibilities, disclaimers, and legal guidelines." />
      <link rel="canonical" href="https://harborgroupusa.com/terms-and-conditions/" />
      <meta property="og:url" content="https://harborgroupusa.com/terms-and-conditions/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <LegalTemplate title="Terms and Conditions">
        <div className="space-y-8 text-navy-700">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Last Updated: August 17, 2026
          </p>

          {/* Quick Navigation */}
          <div className="my-8 rounded-2xl bg-navy-50/70 p-6 border border-navy-100">
            <h2 className="text-base font-bold uppercase tracking-wider text-navy-900 mb-4">
              Quick Navigation
            </h2>
            <nav aria-label="Table of Contents">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {TABLE_OF_CONTENTS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-navy-700 hover:text-accent font-medium transition-colors duration-200 block py-0.5 focus:outline-none focus:text-accent"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 1. Introduction */}
          <section id="introduction" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">1. Introduction</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Welcome to the Harbor Group USA website located at <a href="https://www.harborgroupusa.com/" className="text-accent hover:underline font-medium" target="_blank" rel="noopener noreferrer">https://www.harborgroupusa.com/</a> (&quot;Website&quot;).
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              These Terms and Conditions (&quot;Terms,&quot; &quot;Terms and Conditions&quot;) govern your access to and use of the Website and any information, content, tools, forms, resources, and services made available through the Website (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              By accessing, browsing, or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              If you do not agree with these Terms, please do not use the Website or Services.
            </p>
          </section>

          {/* 2. About Harbor Group USA */}
          <section id="about-harbor-group" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">2. About Harbor Group USA</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA (&quot;Harbor Group USA,&quot; &quot;Harbor Group,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides information and assistance relating to health plans, healthcare coverage, and related services.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              The specific products, plans, coverage options, eligibility requirements, benefits, premiums, costs, limitations, exclusions, and availability may vary depending on the applicable health plan, insurance carrier, geographic location, eligibility requirements, and applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Nothing on this Website should be interpreted as a guarantee that any particular health plan or healthcare coverage will be available or that any individual will qualify for a particular plan or benefit.
            </p>
          </section>

          {/* 3. Eligibility to Use the Website */}
          <section id="eligibility" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">3. Eligibility to Use the Website</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              You must have the legal capacity to enter into agreements under applicable law to use the Website and Services.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              By using the Website, you represent that:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>The information you provide is accurate and truthful to the best of your knowledge.</li>
              <li>You will update information when reasonably necessary to keep it accurate.</li>
              <li>You will use the Website only for lawful purposes.</li>
              <li>You will not use the Website in a manner that violates applicable federal, state, or local law.</li>
              <li>You will not interfere with the operation, security, or availability of the Website.</li>
            </ul>
          </section>

          {/* 4. Health Plan and Healthcare Coverage Information */}
          <section id="health-plan-info" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">4. Health Plan and Healthcare Coverage Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Information provided through the Website may relate to health plans, healthcare coverage, benefits, eligibility, enrollment, costs, and related topics.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              This information is provided for general informational and service-related purposes.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Actual coverage is determined by the applicable plan documents, policy documents, certificates of coverage, summary plan descriptions, evidence of coverage, or other governing documents issued by the applicable health plan or insurance carrier.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              If information presented on the Website differs from the official documents governing a particular plan, the applicable official plan or policy documents will control.
            </p>
          </section>

          {/* 5. No Guarantee of Eligibility or Coverage */}
          <section id="no-guarantee-eligibility" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">5. No Guarantee of Eligibility or Coverage</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Use of the Website or submission of an inquiry does not guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Eligibility for a health plan</li>
              <li>Approval for coverage</li>
              <li>Enrollment</li>
              <li>Availability of a particular plan</li>
              <li>A specific premium or cost</li>
              <li>A particular benefit</li>
              <li>Coverage for a particular service</li>
              <li>Acceptance by a health plan or insurance carrier</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Eligibility and enrollment are subject to applicable requirements established by the relevant health plan, insurance carrier, government program, or other authorized entity.
            </p>
          </section>

          {/* 6. No Medical Advice */}
          <section id="no-medical-advice" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">6. No Medical Advice</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              The Website may contain health, wellness, healthcare, or educational information.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Such information is provided for general informational purposes only and is not medical advice, diagnosis, treatment, or a substitute for consultation with a qualified healthcare professional.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA does not provide medical diagnosis or treatment through the Website.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You should consult an appropriately qualified healthcare professional regarding medical conditions, symptoms, treatments, medications, or other healthcare concerns.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-semibold text-accent-dark">
              If you believe you are experiencing a medical emergency, contact emergency services or seek immediate medical attention.
            </p>
          </section>

          {/* 7. Quotes, Estimates, and Plan Information */}
          <section id="quotes-estimates" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">7. Quotes, Estimates, and Plan Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where the Website provides or facilitates quotes, estimates, plan comparisons, or other coverage information, such information may be subject to change and should not be considered a final offer of coverage unless expressly stated otherwise.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Pricing, premiums, deductibles, copayments, coinsurance, benefits, networks, eligibility requirements, and other plan terms may vary.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Any quote or estimate provided through the Website should be verified with the applicable health plan, insurance carrier, licensed agent, broker, or enrollment representative before making a coverage decision.
            </p>
          </section>

          {/* 8. Applications and Enrollment */}
          <section id="applications-enrollment" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">8. Applications and Enrollment</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Submitting information through the Website does not necessarily constitute an application for coverage or enrollment in a health plan.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where an application or enrollment process is available, additional terms, disclosures, authorizations, eligibility requirements, and verification procedures may apply.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You are responsible for providing accurate and complete information.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Providing false, incomplete, misleading, or fraudulent information may result in denial of an application, cancellation of coverage, termination of services, or other consequences permitted by applicable law.
            </p>
          </section>

          {/* 9. Communications and Contact */}
          <section id="communications-contact" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">9. Communications and Contact</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              By submitting your contact information through the Website, you authorize Harbor Group USA and its authorized representatives, where legally permitted, to contact you regarding your inquiry, requested information, health-plan options, healthcare coverage, enrollment, or related services.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Communications may occur through:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Telephone calls</li>
              <li>Email</li>
              <li>Text messages</li>
              <li>Other electronic communications</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where required by applicable law, appropriate consent will be obtained before marketing communications or certain automated calls or text messages are made.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You may opt out of marketing communications at any time using the available unsubscribe or opt-out mechanism.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Opting out of marketing communications does not necessarily prevent necessary service-related, transactional, legal, or administrative communications.
            </p>
          </section>

          {/* 10. Telephone and Call Recording */}
          <section id="telephone-recording" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">10. Telephone and Call Recording</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              To the extent permitted by applicable law, telephone calls with Harbor Group USA or its representatives may be monitored or recorded for purposes including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Quality assurance</li>
              <li>Training</li>
              <li>Customer service</li>
              <li>Compliance</li>
              <li>Security</li>
              <li>Documentation</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Where applicable law requires notice or consent for recording, Harbor Group USA will provide the required notice or obtain the required consent.
            </p>
          </section>

          {/* 11. User Information */}
          <section id="user-information" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">11. User Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You agree to provide accurate and complete information when submitting forms or communicating with Harbor Group USA.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You should not submit unnecessary sensitive information through general-purpose Website forms.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              For your protection, do not submit passwords, complete payment-card information, medical records, Social Security numbers, or other highly sensitive information through an ordinary contact form unless the Website specifically requests such information through an appropriate secure process.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The collection and use of personal information are governed by our Privacy Policy.
            </p>
          </section>

          {/* 12. Privacy */}
          <section id="privacy" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">12. Privacy</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Your use of the Website is also subject to our Privacy Policy, which explains how Harbor Group USA collects, uses, protects, and discloses personal information.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              By using the Website, you acknowledge that you have reviewed the Privacy Policy.
            </p>
          </section>

          {/* 13. Third-Party Services and Providers */}
          <section id="third-party-services" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">13. Third-Party Services and Providers</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may use third-party providers to support Website operations and requested Services. These may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Health plans</li>
              <li>Insurance carriers</li>
              <li>Enrollment platforms</li>
              <li>Licensed agents and brokers</li>
              <li>Technology providers</li>
              <li>Communications providers</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Hosting providers</li>
              <li>Customer relationship management systems</li>
              <li>Other service providers</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Third parties may have their own terms, privacy policies, and regulatory requirements.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA is not responsible for the independent acts, omissions, policies, or practices of third parties to the extent permitted by applicable law.
            </p>
          </section>

          {/* 14. Third-Party Websites and Links */}
          <section id="third-party-websites" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">14. Third-Party Websites and Links</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              The Website may contain links to websites operated by third parties. These links may be provided for convenience or informational purposes.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA does not control third-party websites and does not necessarily endorse their content, products, services, policies, or practices.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Your use of a third-party website is subject to that website&apos;s applicable terms and privacy policies.
            </p>
          </section>

          {/* 15. Website Content and Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">15. Website Content and Intellectual Property</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Unless otherwise stated, the Website and its contents, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Text</li>
              <li>Articles</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Images</li>
              <li>Designs</li>
              <li>Software</li>
              <li>Layout</li>
              <li>Videos</li>
              <li>Audio</li>
              <li>Forms</li>
              <li>Data</li>
              <li>Other materials</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              are owned by or licensed to Harbor Group USA and may be protected by applicable intellectual property laws.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You may access and use Website content for your personal, non-commercial purposes and for evaluating or obtaining the Services.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2 font-medium">
              You may not, without prior written permission:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Copy substantial portions of the Website</li>
              <li>Reproduce Website content for commercial purposes</li>
              <li>Modify or create derivative works</li>
              <li>Republish Website materials</li>
              <li>Sell or redistribute Website content</li>
              <li>Use Harbor Group USA trademarks or branding without authorization</li>
              <li>Scrape or systematically collect Website data</li>
              <li>Use Website content to create a competing service</li>
            </ul>
          </section>

          {/* 16. Prohibited Activities */}
          <section id="prohibited-activities" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">16. Prohibited Activities</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Use the Website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to systems or accounts</li>
              <li>Circumvent security measures</li>
              <li>Introduce malicious code, malware, or harmful software</li>
              <li>Interfere with Website operations</li>
              <li>Conduct automated scraping or excessive data collection</li>
              <li>Impersonate another person or entity</li>
              <li>Submit fraudulent or misleading information</li>
              <li>Use the Website to violate another person&apos;s rights</li>
              <li>Attempt to access information belonging to another user</li>
              <li>Use the Website to facilitate fraud or unauthorized transactions</li>
              <li>Reverse engineer Website technology except where expressly permitted by law</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA reserves the right to restrict or terminate access to the Website where it reasonably believes that these Terms or applicable law have been violated.
            </p>
          </section>

          {/* 17. User Submissions */}
          <section id="user-submissions" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">17. User Submissions</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you voluntarily submit comments, feedback, questions, suggestions, or other content through the Website, you represent that you have the right to submit that content.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You should not submit confidential medical information, financial information, trade secrets, or other sensitive information unless specifically requested through an appropriate secure process.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA may use non-confidential feedback and suggestions to improve its Website and Services, subject to applicable law and our Privacy Policy.
            </p>
          </section>

          {/* 18. Employment and Internship Inquiries */}
          <section id="employment-internships" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">18. Employment and Internship Inquiries</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA may provide information regarding employment, internship, or career opportunities.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Submitting an application or inquiry does not guarantee an interview, internship, employment, or other engagement. Applicants are responsible for providing accurate information.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Any employment or internship relationship, if offered, will be governed by applicable employment documents, policies, and law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA may conduct background checks or other screening processes where legally permitted and appropriately disclosed.
            </p>
          </section>

          {/* 19. Availability of the Website */}
          <section id="website-availability" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">19. Availability of the Website</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We attempt to keep the Website available and operational; however, we do not guarantee that the Website will always be:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Available</li>
              <li>Uninterrupted</li>
              <li>Error-free</li>
              <li>Secure</li>
              <li>Free from viruses or other harmful components</li>
              <li>Accurate or complete</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              The Website may occasionally be unavailable because of maintenance, upgrades, technical problems, security incidents, service-provider issues, or circumstances beyond our reasonable control.
            </p>
          </section>

          {/* 20. Changes to the Website and Services */}
          <section id="changes-to-website" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">20. Changes to the Website and Services</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA may modify, update, suspend, or discontinue any portion of the Website or Services at any time.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We may also change, add, or remove features, content, functionality, or service offerings.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              We are not required to maintain any particular Website feature indefinitely.
            </p>
          </section>

          {/* 21. Disclaimers */}
          <section id="disclaimers" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">21. Disclaimers</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              To the maximum extent permitted by applicable law, the Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA makes no warranties, express or implied, regarding the Website or its content, including warranties of:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Accuracy</li>
              <li>Completeness</li>
              <li>Reliability</li>
              <li>Availability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Merchantability</li>
              <li>Security</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              Nothing in these Terms excludes or limits any warranty or consumer right that cannot legally be excluded or limited under applicable law.
            </p>
          </section>

          {/* 22. Limitation of Liability */}
          <section id="limitation-of-liability" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">22. Limitation of Liability</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              To the maximum extent permitted by applicable law, Harbor Group USA and its officers, directors, employees, agents, affiliates, contractors, and service providers will not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to your use of, or inability to use, the Website or Services. This may include loss of:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Profits</li>
              <li>Revenue</li>
              <li>Business opportunities</li>
              <li>Data</li>
              <li>Goodwill</li>
              <li>Anticipated savings</li>
              <li>Business interruption</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              To the maximum extent permitted by applicable law, Harbor Group USA&apos;s total liability arising out of or relating to the Website or Services will be limited to the amount, if any, you paid directly to Harbor Group USA for the specific Service giving rise to the claim during the applicable period preceding the event giving rise to the claim.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot legally be excluded or limited.
            </p>
          </section>

          {/* 23. Indemnification */}
          <section id="indemnification" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">23. Indemnification</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              To the extent permitted by applicable law, you agree to indemnify and hold harmless Harbor Group USA and its officers, directors, employees, agents, affiliates, contractors, and service providers from claims, liabilities, damages, losses, costs, and expenses arising from:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Your violation of these Terms</li>
              <li>Your unlawful use of the Website</li>
              <li>Your violation of another person&apos;s rights</li>
              <li>Your submission of fraudulent or misleading information</li>
              <li>Your misuse of the Website or Services</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              This provision does not require you to indemnify Harbor Group USA for matters caused by Harbor Group USA&apos;s own unlawful conduct where such indemnification is prohibited by applicable law.
            </p>
          </section>

          {/* 24. Regulatory Compliance */}
          <section id="regulatory-compliance" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">24. Regulatory Compliance</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA seeks to operate its Services in accordance with applicable federal and state laws and regulations.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Healthcare coverage and health-plan services may be subject to regulatory requirements that vary depending on the applicable plan, product, state, carrier, and service.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Nothing in these Terms is intended to waive or limit rights or protections provided to consumers under applicable law.
            </p>
          </section>

          {/* 25. Governing Law */}
          <section id="governing-law" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">25. Governing Law</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              These Terms are governed by the applicable laws of the United States and the State of Florida, without regard to conflict-of-law principles, except to the extent that applicable federal or state law requires otherwise.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Nothing in this provision prevents a consumer from exercising rights or pursuing remedies that cannot legally be waived under applicable law.
            </p>
          </section>

          {/* 26. Dispute Resolution */}
          <section id="dispute-resolution" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">26. Dispute Resolution</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Before initiating formal legal proceedings, the parties should make reasonable efforts to resolve disputes informally by contacting Harbor Group USA at the address or email provided below.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Nothing in this section limits any rights or remedies that cannot legally be waived, including rights available under applicable consumer-protection or healthcare laws.
            </p>
          </section>

          {/* 27. Severability */}
          <section id="severability" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">27. Severability</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, that provision will be interpreted or modified to the minimum extent necessary to make it enforceable, where legally permitted.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The remaining provisions will remain in full force and effect.
            </p>
          </section>

          {/* 28. Waiver */}
          <section id="waiver" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">28. Waiver</h2>
            <p className="text-base leading-relaxed text-navy-600">
              A failure by Harbor Group USA to enforce any provision of these Terms does not constitute a waiver of its right to enforce that provision or any other provision in the future.
            </p>
          </section>

          {/* 29. Entire Agreement */}
          <section id="entire-agreement" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">29. Entire Agreement</h2>
            <p className="text-base leading-relaxed text-navy-600">
              These Terms, together with the Privacy Policy and any other policies or agreements expressly incorporated by reference, constitute the agreement governing your use of the Website, except where additional terms apply to a specific service or transaction.
            </p>
          </section>

          {/* 30. Changes to These Terms */}
          <section id="changes-to-terms" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">30. Changes to These Terms</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may update these Terms from time to time to reflect changes in:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Our Services</li>
              <li>Website functionality</li>
              <li>Business practices</li>
              <li>Legal requirements</li>
              <li>Regulatory requirements</li>
              <li>Security requirements</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              When changes are made, the updated Terms will be posted on the Website and the &quot;Last Updated&quot; date will be revised.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where required by law, we may provide additional notice of material changes.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Your continued use of the Website after updated Terms become effective constitutes acceptance of the revised Terms to the extent permitted by applicable law.
            </p>
          </section>

          {/* 31. Contact Information */}
          <section id="contact-information" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">31. Contact Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you have questions or concerns regarding these Terms and Conditions, the Website, our Services, or regulatory compliance, please contact us:
            </p>
            <div className="bg-navy-50/60 border border-navy-100 p-6 rounded-2xl text-navy-800 space-y-1 text-base">
              <p className="font-bold text-navy-900">Harbor Group USA</p>
              <p>3101 Bayshore Dr</p>
              <p>Fort Lauderdale, FL 33304</p>
              <p className="pt-2">
                Email: <a href="mailto:support@harborgroupusa.com" className="text-accent hover:underline font-medium">support@harborgroupusa.com</a>
              </p>
            </div>
          </section>
        </div>
      </LegalTemplate>
    </>
  );
}
