"use client";

import React from 'react';
import { LegalTemplate } from '@/common/LegalTemplate';
import Link from 'next/link';

const TABLE_OF_CONTENTS = [
  { id: 'purpose-of-communications', title: '1. Purpose of Communications' },
  { id: 'b2b-broker-communications', title: '2. Business-to-Business and Broker Communications' },
  { id: 'sms-program', title: '3. SMS Program' },
  { id: 'sms-consent-opt-in', title: '4. SMS Consent and Opt-In' },
  { id: 'telephone-number-representation', title: '5. Telephone Number Representation' },
  { id: 'cold-direct-business-outreach', title: '6. Cold and Direct Business Outreach' },
  { id: 'no-false-misleading-statements', title: '7. No False or Misleading Statements' },
  { id: 'message-data-rates', title: '8. Message and Data Rates' },
  { id: 'opting-out-sms', title: '9. Opting Out of SMS' },
  { id: 'help', title: '10. HELP' },
  { id: 're-opt-in', title: '11. Re-Opt-In' },
  { id: 'marketing-other-channels', title: '12. Marketing Communications Through Other Channels' },
  { id: 'automated-technology', title: '13. Automated Technology' },
  { id: 'compliance-federal-state-laws', title: '14. Compliance With Federal and State Laws' },
  { id: 'tcpa-telemarketing-compliance', title: '15. TCPA and Telemarketing Compliance' },
  { id: 'do-not-contact-suppression', title: '16. Do-Not-Contact and Suppression Requests' },
  { id: 'third-party-marketing-providers', title: '17. Third-Party Marketing and Service Providers' },
  { id: 'third-party-info-sources', title: '18. Third-Party Information Sources' },
  { id: 'health-related-communications', title: '19. Health-Related Communications' },
  { id: 'no-guarantee-coverage', title: '20. No Guarantee of Coverage or Business Opportunity' },
  { id: 'no-medical-advice', title: '21. No Medical Advice' },
  { id: 'privacy', title: '22. Privacy' },
  { id: 'message-delivery-limitations', title: '23. Message Delivery and Technical Limitations' },
  { id: 'limitation-of-liability', title: '24. Limitation of Liability' },
  { id: 'indemnification', title: '25. Indemnification' },
  { id: 'suspension-termination', title: '26. Suspension or Termination' },
  { id: 'changes-to-terms', title: '27. Changes to These Terms' },
  { id: 'no-waiver-legal-rights', title: '28. No Waiver of Legal Rights' },
  { id: 'severability', title: '29. Severability' },
  { id: 'governing-law', title: '30. Governing Law' },
  { id: 'entire-agreement', title: '31. Entire Agreement' },
  { id: 'contact-us', title: '32. Contact Us' },
];

export default function SmsMarketingTermsPage() {
  return (
    <>
      <title>SMS and Marketing Terms and Conditions | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, SMS terms, marketing terms, text messaging terms, TCPA compliance, communication consent, opt-out, health plan marketing" />
      <meta name="description" content="Understand Harbor Group USA's SMS and marketing communication terms, TCPA compliance, opt-in/opt-out instructions, and privacy standards." />
      <meta property="og:title" content="SMS and Marketing Terms and Conditions | Harbor Group USA" />
      <meta property="og:description" content="Understand Harbor Group USA's SMS and marketing communication terms, TCPA compliance, opt-in/opt-out instructions, and privacy standards." />
      <link rel="canonical" href="https://harborgroupusa.com/sms-and-marketing-terms/" />
      <meta property="og:url" content="https://harborgroupusa.com/sms-and-marketing-terms/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <LegalTemplate title="SMS and Marketing Terms and Conditions">
        <div className="space-y-8 text-navy-700">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Last Updated: August 17, 2026
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            These SMS and Marketing Terms and Conditions (&quot;SMS Terms&quot;) govern SMS, telephone, email, and other marketing communications sent or facilitated by Harbor Group USA (&quot;Harbor Group USA,&quot; &quot;Harbor Group,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            These SMS Terms apply to communications involving consumers, prospective customers, brokers, agents, agencies, benefits professionals, business partners, and other individuals or organizations with whom Harbor Group USA may communicate for legitimate business or marketing purposes.
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            By interacting with Harbor Group USA&apos;s communications, voluntarily providing contact information, submitting an inquiry, opting into a communication program, or otherwise engaging with Harbor Group USA, you acknowledge that these SMS Terms may apply to the applicable communications, subject to your rights under applicable law.
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

          {/* 1. Purpose of Communications */}
          <section id="purpose-of-communications" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">1. Purpose of Communications</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may communicate with individuals and businesses for legitimate business, informational, service, and marketing purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Health plans and healthcare coverage</li>
              <li>Health-plan information</li>
              <li>Enrollment opportunities</li>
              <li>Eligibility information</li>
              <li>Healthcare coverage options</li>
              <li>Products and services</li>
              <li>Promotions and offers</li>
              <li>Educational information</li>
              <li>Customer service</li>
              <li>Follow-up communications</li>
              <li>Broker and agent opportunities</li>
              <li>Broker program information</li>
              <li>Agency and business-development opportunities</li>
              <li>Potential business relationships</li>
              <li>Partner and vendor relationships</li>
              <li>Employment and professional opportunities</li>
              <li>Company announcements</li>
              <li>Other legitimate business purposes</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              The nature and content of communications will depend on the recipient&apos;s relationship with Harbor Group USA and the purpose for which the communication is being sent.
            </p>
          </section>

          {/* 2. Business-to-Business and Broker Communications */}
          <section id="b2b-broker-communications" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">2. Business-to-Business and Broker Communications</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may conduct business-to-business outreach to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Insurance brokers;</li>
              <li>Licensed agents;</li>
              <li>Agencies;</li>
              <li>Benefits professionals;</li>
              <li>Healthcare professionals;</li>
              <li>Employers;</li>
              <li>Business owners;</li>
              <li>Potential business partners;</li>
              <li>Vendors;</li>
              <li>Affiliates; and</li>
              <li>Other business or professional contacts.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Such communications may involve potential broker relationships, health-plan opportunities, healthcare coverage products, business-development opportunities, services, partnerships, or other legitimate business purposes.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA does not represent that a recipient has previously contacted Harbor Group USA, requested information, opted into communications, or established a relationship with Harbor Group USA unless that statement is factually accurate.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where communications are sent as business-to-business outreach, Harbor Group USA may identify the business purpose of the communication.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Business-to-business status does not, by itself, eliminate any legal requirement that may apply to a particular communication, telephone number, technology, recipient, jurisdiction, or campaign. Harbor Group USA will evaluate and conduct communications in accordance with applicable federal and state requirements.
            </p>
          </section>

          {/* 3. SMS Program */}
          <section id="sms-program" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">3. SMS Program</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may operate one or more SMS messaging programs. Depending on the applicable program, SMS messages may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Health-plan information;</li>
              <li>Healthcare coverage information;</li>
              <li>Enrollment-related information;</li>
              <li>Requested information;</li>
              <li>Customer-service communications;</li>
              <li>Appointment or follow-up information;</li>
              <li>Educational information;</li>
              <li>Marketing messages;</li>
              <li>Promotional offers;</li>
              <li>Broker opportunities;</li>
              <li>Business-development communications;</li>
              <li>Company updates; and</li>
              <li>Other legitimate communications.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Message frequency may vary. Harbor Group USA does not guarantee any minimum or maximum number of messages.
            </p>
          </section>

          {/* 4. SMS Consent and Opt-In */}
          <section id="sms-consent-opt-in" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">4. SMS Consent and Opt-In</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where applicable law requires prior consent, Harbor Group USA will obtain the appropriate consent before sending the applicable SMS communications.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where an individual affirmatively opts into an SMS program, the individual authorizes Harbor Group USA and its authorized service providers to send messages to the mobile number provided, subject to the scope of the applicable consent.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3 font-medium">
              Providing a telephone number does not automatically constitute consent to receive marketing SMS messages where affirmative consent is legally required.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Consent may be collected through an online form, SMS opt-in process, enrollment process, written authorization, verbal authorization where legally permissible, or another legally recognized mechanism.
            </p>
          </section>

          {/* 5. Telephone Number Representation */}
          <section id="telephone-number-representation" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">5. Telephone Number Representation</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              By providing a telephone number, you represent that:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>The number is accurate;</li>
              <li>You own, control, or are authorized to provide the number;</li>
              <li>You are authorized to receive communications at the number; and</li>
              <li>You will notify Harbor Group USA if the number is no longer under your control.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              You should not provide another person&apos;s telephone number without appropriate authorization. Harbor Group USA may rely on information provided by the person submitting the contact information, subject to applicable law.
            </p>
          </section>

          {/* 6. Cold and Direct Business Outreach */}
          <section id="cold-direct-business-outreach" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">6. Cold and Direct Business Outreach</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may conduct direct business outreach to prospective brokers, agents, agencies, businesses, and other professional contacts where such outreach is permitted by applicable law. Such outreach may use business contact information obtained through legitimate sources, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Business directories;</li>
              <li>Professional directories;</li>
              <li>Publicly available business information;</li>
              <li>Referrals;</li>
              <li>Business relationships;</li>
              <li>Lead-generation sources;</li>
              <li>Third-party data providers;</li>
              <li>Conferences and events;</li>
              <li>Prior business communications; or</li>
              <li>Other lawful sources.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA will not knowingly misrepresent the identity, purpose, source, or nature of a communication.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where applicable law requires consent or other authorization before a particular communication is sent, Harbor Group USA will follow the applicable requirement.
            </p>
          </section>

          {/* 7. No False or Misleading Statements */}
          <section id="no-false-misleading-statements" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">7. No False or Misleading Statements</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA will not intentionally make false or misleading representations concerning:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>The identity of the sender;</li>
              <li>The purpose of the communication;</li>
              <li>The recipient&apos;s relationship with Harbor Group USA;</li>
              <li>Prior communications;</li>
              <li>Prior consent;</li>
              <li>Eligibility;</li>
              <li>Enrollment;</li>
              <li>Coverage;</li>
              <li>Savings;</li>
              <li>Compensation;</li>
              <li>Broker opportunities;</li>
              <li>Products or services; or</li>
              <li>Other material facts.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Statements concerning health plans, healthcare coverage, broker opportunities, or other products and services are subject to applicable eligibility requirements, plan documents, agreements, and applicable law.
            </p>
          </section>

          {/* 8. Message and Data Rates */}
          <section id="message-data-rates" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">8. Message and Data Rates</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Message and data rates may apply.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Your mobile carrier may charge fees for text messages, data, roaming, or other telecommunications services. Harbor Group USA does not control and is not responsible for charges imposed by your wireless carrier.
            </p>
          </section>

          {/* 9. Opting Out of SMS */}
          <section id="opting-out-sms" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">9. Opting Out of SMS</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              You may opt out of marketing SMS communications at any time by replying:
            </p>
            <p className="text-lg font-bold text-accent mb-3 tracking-wider">
              STOP
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              to the applicable Harbor Group USA SMS message. You may also contact <a href="mailto:support@harborgroupusa.com" className="text-accent hover:underline font-medium">support@harborgroupusa.com</a> to request removal from applicable marketing communications.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              After receiving an appropriate opt-out request, Harbor Group USA will process the request within a commercially reasonable period and in accordance with applicable law. A final confirmation message may be sent where appropriate.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Following an opt-out, Harbor Group USA will not intentionally send additional marketing SMS messages to the opted-out number unless:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>You subsequently provide new consent;</li>
              <li>The communication is otherwise permitted by applicable law; or</li>
              <li>The communication is reasonably necessary to process or confirm your opt-out request.</li>
            </ul>
          </section>

          {/* 10. HELP */}
          <section id="help" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">10. HELP</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              For assistance with SMS communications, reply:
            </p>
            <p className="text-lg font-bold text-accent mb-3 tracking-wider">
              HELP
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              where supported. You may also contact: <a href="mailto:support@harborgroupusa.com" className="text-accent hover:underline font-medium">support@harborgroupusa.com</a>
            </p>
          </section>

          {/* 11. Re-Opt-In */}
          <section id="re-opt-in" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">11. Re-Opt-In</h2>
            <p className="text-base leading-relaxed text-navy-600">
              If you previously opted out of Harbor Group USA SMS communications and later wish to receive them again, you may provide new consent through an available Harbor Group USA opt-in mechanism. A subsequent opt-in may constitute a new authorization to receive the applicable SMS communications.
            </p>
          </section>

          {/* 12. Marketing Communications Through Other Channels */}
          <section id="marketing-other-channels" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">12. Marketing Communications Through Other Channels</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Where permitted by applicable law, Harbor Group USA may communicate through:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>SMS;</li>
              <li>Telephone;</li>
              <li>Email;</li>
              <li>Postal mail;</li>
              <li>Online communications;</li>
              <li>Business messaging platforms; and</li>
              <li>Other permitted communication channels.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Opting out of one communication channel does not necessarily constitute an opt-out from every other channel. You may separately opt out of individual marketing channels.
            </p>
          </section>

          {/* 13. Automated Technology */}
          <section id="automated-technology" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">13. Automated Technology</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA and its authorized service providers may use automated technology to facilitate communications where permitted by applicable law. This may include automated messaging systems, customer relationship management systems, dialing technology, and other communication platforms.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The use of automated technology does not expand the scope of any consent provided. Where a particular technology requires a particular level of consent under applicable law, Harbor Group USA will implement the applicable consent requirements.
            </p>
          </section>

          {/* 14. Compliance With Federal and State Laws */}
          <section id="compliance-federal-state-laws" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">14. Compliance With Federal and State Laws</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA intends to conduct SMS and marketing communications in accordance with applicable federal and state laws and regulations. Depending on the communication, recipient, technology, and circumstances, applicable requirements may include laws and regulations relating to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Telephone communications;</li>
              <li>Automated calls and text messages;</li>
              <li>Consumer protection;</li>
              <li>Telemarketing;</li>
              <li>Email marketing;</li>
              <li>Privacy;</li>
              <li>Data protection;</li>
              <li>Healthcare communications;</li>
              <li>Advertising;</li>
              <li>Business-to-business communications; and</li>
              <li>Other applicable regulatory requirements.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Nothing in these SMS Terms is intended to waive, eliminate, or restrict a right or protection that cannot legally be waived.
            </p>
          </section>

          {/* 15. TCPA and Telemarketing Compliance */}
          <section id="tcpa-telemarketing-compliance" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">15. TCPA and Telemarketing Compliance</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA intends to comply with applicable requirements of the Telephone Consumer Protection Act (TCPA), applicable Federal Communications Commission requirements, and other applicable federal and state telemarketing laws. The legal requirements applicable to a communication may depend on factors including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>The recipient;</li>
              <li>The recipient&apos;s location;</li>
              <li>The telephone number;</li>
              <li>Whether the number is residential or business;</li>
              <li>The purpose of the communication;</li>
              <li>The technology used;</li>
              <li>Whether the communication is informational or marketing;</li>
              <li>Whether prior consent exists; and</li>
              <li>Other applicable circumstances.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA may establish additional internal procedures, restrictions, suppression lists, consent requirements, or campaign-level controls to address these requirements.
            </p>
          </section>

          {/* 16. Do-Not-Contact and Suppression Requests */}
          <section id="do-not-contact-suppression" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">16. Do-Not-Contact and Suppression Requests</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA respects requests not to receive further marketing communications. If you request that Harbor Group USA stop contacting you for marketing purposes, we may place the applicable contact information on an internal suppression or do-not-contact list.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA may retain sufficient information to ensure that your opt-out request is honored and to demonstrate compliance with applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              You acknowledge that information necessary to maintain a suppression record may be retained even after other personal information is deleted, where reasonably necessary for compliance or legal purposes.
            </p>
          </section>

          {/* 17. Third-Party Marketing and Service Providers */}
          <section id="third-party-marketing-providers" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">17. Third-Party Marketing and Service Providers</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may use third-party providers to facilitate communications, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>SMS providers;</li>
              <li>Telecommunications providers;</li>
              <li>CRM platforms;</li>
              <li>Email providers;</li>
              <li>Marketing platforms;</li>
              <li>Lead-generation providers;</li>
              <li>Data providers;</li>
              <li>Enrollment platforms;</li>
              <li>Analytics providers;</li>
              <li>Cloud-service providers; and</li>
              <li>Other technology or service providers.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where appropriate, such providers may process contact information on Harbor Group USA&apos;s behalf.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA may require applicable service providers to follow appropriate contractual, privacy, security, and compliance requirements.
            </p>
          </section>

          {/* 18. Third-Party Information Sources */}
          <section id="third-party-info-sources" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">18. Third-Party Information Sources</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where permitted by applicable law, Harbor Group USA may receive business contact information from third-party sources. Such sources may include business directories, professional databases, referrals, marketing partners, publicly available information, and other lawful sources.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Receipt of contact information from a third party does not, by itself, constitute a representation that the individual has provided consent to receive every type of communication. Harbor Group USA will apply the consent and communication requirements applicable to the specific campaign and communication.
            </p>
          </section>

          {/* 19. Health-Related Communications */}
          <section id="health-related-communications" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">19. Health-Related Communications</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Because Harbor Group USA operates in the health-plan and healthcare coverage environment, certain communications may relate to health plans, healthcare coverage, benefits, eligibility, or enrollment. You should not send sensitive medical or financial information by replying to a marketing SMS message. Do not send:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Medical records;</li>
              <li>Diagnoses;</li>
              <li>Prescription information;</li>
              <li>Social Security numbers;</li>
              <li>Payment-card information;</li>
              <li>Bank-account information; or</li>
              <li>Other highly sensitive information</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              unless Harbor Group USA specifically directs you to use an appropriate secure process.
            </p>
          </section>

          {/* 20. No Guarantee of Coverage or Business Opportunity */}
          <section id="no-guarantee-coverage" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">20. No Guarantee of Coverage or Business Opportunity</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Marketing communications do not guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Health-plan eligibility;</li>
              <li>Enrollment;</li>
              <li>Coverage;</li>
              <li>Approval;</li>
              <li>Pricing;</li>
              <li>Savings;</li>
              <li>Benefits;</li>
              <li>Availability;</li>
              <li>Broker appointment;</li>
              <li>Broker enrollment;</li>
              <li>Compensation;</li>
              <li>Commissions;</li>
              <li>Employment;</li>
              <li>Partnership; or</li>
              <li>Any other business relationship.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Actual terms are determined by the applicable plan documents, contracts, agreements, eligibility requirements, carrier requirements, and applicable law.
            </p>
          </section>

          {/* 21. No Medical Advice */}
          <section id="no-medical-advice" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">21. No Medical Advice</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Health-related information contained in marketing communications is provided for general informational purposes and does not constitute medical advice, diagnosis, or treatment. Harbor Group USA does not provide medical diagnosis or treatment through its SMS or marketing programs.
            </p>
          </section>

          {/* 22. Privacy */}
          <section id="privacy" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">22. Privacy</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Information collected through SMS and marketing communications is handled in accordance with the <Link href="/privacy-policy" className="text-accent hover:underline font-medium">Harbor Group USA Privacy Policy</Link>. The Privacy Policy explains how Harbor Group USA collects, uses, discloses, retains, and protects personal information.
            </p>
          </section>

          {/* 23. Message Delivery and Technical Limitations */}
          <section id="message-delivery-limitations" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">23. Message Delivery and Technical Limitations</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              SMS communications depend on third-party telecommunications networks and technology. Harbor Group USA does not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Messages will be delivered;</li>
              <li>Messages will be delivered immediately;</li>
              <li>Messages will be received by the intended recipient;</li>
              <li>Messages will remain available;</li>
              <li>The SMS service will be uninterrupted; or</li>
              <li>The service will operate in every geographic location.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA is not responsible for carrier failures, network outages, device failures, routing errors, transmission delays, blocked messages, spam filtering, telecommunications failures, or other circumstances outside its reasonable control.
            </p>
          </section>

          {/* 24. Limitation of Liability */}
          <section id="limitation-of-liability" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">24. Limitation of Liability</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              To the maximum extent permitted by applicable law, Harbor Group USA and its officers, directors, employees, agents, representatives, affiliates, contractors, and service providers will not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from or relating to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>SMS communications;</li>
              <li>Marketing communications;</li>
              <li>Delayed or failed communications;</li>
              <li>Carrier or network failures;</li>
              <li>Third-party service-provider failures;</li>
              <li>Device or telecommunications problems;</li>
              <li>Your participation in a marketing program;</li>
              <li>Your reliance on marketing information; or</li>
              <li>Your inability to receive or access a communication.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited.
            </p>
          </section>

          {/* 25. Indemnification */}
          <section id="indemnification" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">25. Indemnification</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              To the maximum extent permitted by applicable law, you agree to indemnify and hold harmless Harbor Group USA and its officers, directors, employees, agents, representatives, affiliates, contractors, and service providers against claims, liabilities, damages, losses, costs, and reasonable expenses arising out of or relating to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Your violation of these SMS Terms;</li>
              <li>Your misuse of the communication services;</li>
              <li>Your unauthorized use of another person&apos;s contact information;</li>
              <li>Your failure to maintain control of a telephone number you provided;</li>
              <li>False or misleading information provided by you;</li>
              <li>Your violation of applicable law; or</li>
              <li>Your violation of another person&apos;s rights.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              This provision does not require indemnification to the extent prohibited by applicable law.
            </p>
          </section>

          {/* 26. Suspension or Termination */}
          <section id="suspension-termination" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">26. Suspension or Termination</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may modify, suspend, or terminate any SMS or marketing communication program at any time, including when reasonably necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Comply with law;</li>
              <li>Comply with carrier requirements;</li>
              <li>Address security concerns;</li>
              <li>Prevent fraud or abuse;</li>
              <li>Modify service providers;</li>
              <li>Conduct maintenance;</li>
              <li>Change business operations; or</li>
              <li>Discontinue a communication program.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Termination of a communication program does not eliminate obligations or rights that accrued before termination.
            </p>
          </section>

          {/* 27. Changes to These Terms */}
          <section id="changes-to-terms" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">27. Changes to These Terms</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may modify these SMS Terms at any time to reflect changes in:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Business practices;</li>
              <li>Marketing programs;</li>
              <li>Technology;</li>
              <li>Service providers;</li>
              <li>Legal requirements;</li>
              <li>Regulatory requirements; or</li>
              <li>Privacy and security practices.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Updated Terms will be posted on the Website with a revised &quot;Last Updated&quot; date.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where legally required, Harbor Group USA may provide additional notice of material changes.
            </p>
          </section>

          {/* 28. No Waiver of Legal Rights */}
          <section id="no-waiver-legal-rights" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">28. No Waiver of Legal Rights</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Nothing contained in these SMS Terms is intended to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Waive a statutory right;</li>
              <li>Eliminate a legally required consent;</li>
              <li>Authorize conduct prohibited by law;</li>
              <li>Limit a consumer protection that cannot legally be limited; or</li>
              <li>Prevent a person from exercising a legally protected right.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              If applicable law imposes a requirement that conflicts with these Terms, the applicable law will control to the extent of the conflict.
            </p>
          </section>

          {/* 29. Severability */}
          <section id="severability" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">29. Severability</h2>
            <p className="text-base leading-relaxed text-navy-600">
              If any provision of these SMS Terms is determined to be invalid, unlawful, or unenforceable, that provision will be modified or limited to the minimum extent necessary to make it enforceable where legally permitted. The remaining provisions will remain in full force and effect.
            </p>
          </section>

          {/* 30. Governing Law */}
          <section id="governing-law" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">30. Governing Law</h2>
            <p className="text-base leading-relaxed text-navy-600">
              These SMS Terms are governed by applicable federal law and the laws of the State of Florida, without regard to conflict-of-law principles, except where applicable law requires otherwise. Nothing in this provision limits any right or remedy that cannot legally be waived.
            </p>
          </section>

          {/* 31. Entire Agreement */}
          <section id="entire-agreement" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">31. Entire Agreement</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              These SMS Terms, together with the Harbor Group USA Privacy Policy and any specific terms presented during an applicable opt-in process, constitute the terms governing the applicable SMS and marketing communication program.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where a specific consent disclosure or agreement contains more specific requirements, those requirements will control to the extent applicable.
            </p>
          </section>

          {/* 32. Contact Us */}
          <section id="contact-us" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">32. Contact Us</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Questions, complaints, privacy requests, opt-out requests, or other communications regarding these SMS and Marketing Terms may be directed to:
            </p>
            <div className="bg-navy-50/60 border border-navy-100 p-6 rounded-2xl text-navy-800 space-y-1 text-base">
              <p className="font-bold text-navy-900">Harbor Group USA</p>
              <p>3101 Bayshore Dr.</p>
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
