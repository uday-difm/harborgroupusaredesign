"use client";

import React from 'react';
import { LegalTemplate } from '@/common/LegalTemplate';

const TABLE_OF_CONTENTS = [
  { id: 'info-we-collect', title: '1. Information We Collect' },
  { id: 'health-info', title: '2. Health and Healthcare-Related Information' },
  { id: 'info-collected-automatically', title: '3. Information Collected Automatically' },
  { id: 'how-we-use-info', title: '4. How We Use Personal Information' },
  { id: 'health-plan-inquiries', title: '5. Health Plan and Healthcare Coverage Inquiries' },
  { id: 'info-sharing-disclosure', title: '6. Information Sharing and Disclosure' },
  { id: 'marketing-communications', title: '7. Marketing Communications' },
  { id: 'cookies-technologies', title: '8. Cookies and Similar Technologies' },
  { id: 'analytics-tracking', title: '9. Analytics and Tracking' },
  { id: 'sensitive-information', title: '10. Sensitive Information' },
  { id: 'data-security', title: '11. Data Security' },
  { id: 'data-retention', title: '12. Data Retention' },
  { id: 'your-privacy-choices', title: '13. Your Privacy Choices' },
  { id: 'california-residents', title: '14. California Residents' },
  { id: 'other-state-privacy-laws', title: '15. Other State Privacy Laws' },
  { id: 'childrens-privacy', title: '16. Children\'s Privacy' },
  { id: 'third-party-websites', title: '17. Third-Party Websites and Services' },
  { id: 'info-from-third-parties', title: '18. Information Received From Third Parties' },
  { id: 'telephone-text-communications', title: '19. Telephone and Text Communications' },
  { id: 'email-communications', title: '20. Email Communications' },
  { id: 'do-not-track', title: '21. Do Not Track and Privacy Signals' },
  { id: 'international-visitors', title: '22. International Visitors' },
  { id: 'hipaa-phi', title: '23. HIPAA and Protected Health Information' },
  { id: 'health-data-incidents', title: '24. Health Data Security Incidents' },
  { id: 'changes-to-policy', title: '25. Changes to This Privacy Policy' },
  { id: 'governing-law', title: '26. Governing Law' },
  { id: 'contact-us', title: '27. Contact Us' },
  { id: 'effective-date', title: '28. Effective Date' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <title>Privacy Policy | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, privacy policy, data protection, personal information, user privacy, website privacy, data usage policy, online security, healthcare privacy, HIPAA" />
      <meta name="description" content="Review Harbor Group USA's privacy policy to understand how we collect, use, disclose, retain, and protect your personal information across our website and services." />
      <meta property="og:title" content="Privacy Policy | Harbor Group USA" />
      <meta property="og:description" content="Review Harbor Group USA's privacy policy to understand how we collect, use, disclose, retain, and protect your personal information across our website and services." />
      <link rel="canonical" href="https://harborgroupusa.com/privacy-policy/" />
      <meta property="og:url" content="https://harborgroupusa.com/privacy-policy/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <LegalTemplate title="Privacy Policy">
        <div className="space-y-8 text-navy-700">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Last Updated: August 17, 2026
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            Harbor Group USA (&quot;Harbor Group USA,&quot; &quot;Harbor Group,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you provide to us and information collected through your use of our website and related services.
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you visit or interact with the Harbor Group USA website, submit an inquiry, request information about health plans or healthcare coverage, communicate with us, or otherwise use our online services (collectively, the &quot;Services&quot;).
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy.
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

          {/* 1. Information We Collect */}
          <section id="info-we-collect" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">1. Information We Collect</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-4">
              Depending on how you interact with Harbor Group USA, we may collect several categories of information.
            </p>
            <h3 className="text-lg font-bold text-navy-900 mb-2">1.1 Information You Provide to Us</h3>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              You may voluntarily provide information when you:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Submit a contact or inquiry form</li>
              <li>Request information about health plans or healthcare coverage</li>
              <li>Request a quote or coverage information</li>
              <li>Request assistance from our team</li>
              <li>Subscribe to communications or newsletters</li>
              <li>Contact us by email, telephone, or other communication methods</li>
              <li>Submit information relating to a health-plan application or enrollment process</li>
              <li>Communicate with us regarding an existing health plan or coverage</li>
              <li>Participate in surveys, promotions, or other activities</li>
              <li>Otherwise voluntarily communicate information to us</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Depending on the service or interaction, information may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Mailing address</li>
              <li>ZIP code</li>
              <li>Date of birth</li>
              <li>Household or family information</li>
              <li>Employment information</li>
              <li>Health-plan information</li>
              <li>Healthcare coverage information</li>
              <li>Eligibility information</li>
              <li>Enrollment information</li>
              <li>Health-related information that you voluntarily provide</li>
              <li>Other information you voluntarily submit</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              We collect information that is reasonably necessary for the applicable purpose, subject to applicable legal and regulatory requirements.
            </p>
          </section>

          {/* 2. Health and Healthcare-Related Information */}
          <section id="health-info" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">2. Health and Healthcare-Related Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Because Harbor Group USA operates in the health-plan and healthcare coverage environment, certain information you voluntarily provide may relate to your health, healthcare coverage, eligibility, or healthcare needs.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Depending on the circumstances, health-related information may be subject to additional federal or state privacy protections.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We do not request that you provide unnecessary medical information through general website contact forms.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Please do not submit medical records, diagnoses, prescription information, Social Security numbers, financial account information, or other highly sensitive information through a general website form unless the applicable form or service specifically requests it and appropriate safeguards are in place.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where information is subject to HIPAA or other specific privacy laws, Harbor Group USA will handle that information in accordance with the requirements applicable to the particular information, service, and entity involved.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              This website Privacy Policy is not intended to replace a HIPAA Notice of Privacy Practices where such a notice is legally required.
            </p>
          </section>

          {/* 3. Information Collected Automatically */}
          <section id="info-collected-automatically" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">3. Information Collected Automatically</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              When you visit our website, we may automatically collect certain technical and usage information, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>General geographic information</li>
              <li>Pages visited</li>
              <li>Referring and exit pages</li>
              <li>Date and time of visits</li>
              <li>Time spent on pages</li>
              <li>Website interactions</li>
              <li>Search or navigation activity</li>
              <li>Device and browser identifiers</li>
              <li>Website performance information</li>
              <li>Error and diagnostic information</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              This information may be collected through cookies, analytics technologies, pixels, tags, log files, and similar technologies.
            </p>
          </section>

          {/* 4. How We Use Personal Information */}
          <section id="how-we-use-info" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">4. How We Use Personal Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We may use personal information for purposes including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Responding to inquiries</li>
              <li>Providing requested information</li>
              <li>Assisting with health-plan and healthcare coverage inquiries</li>
              <li>Communicating with prospective and existing customers</li>
              <li>Providing information about available health plans and healthcare coverage options</li>
              <li>Processing requests or applications where applicable</li>
              <li>Facilitating enrollment or other requested services</li>
              <li>Providing customer support</li>
              <li>Communicating service-related information</li>
              <li>Sending newsletters, educational materials, or marketing communications where permitted</li>
              <li>Personalizing communications and website experiences</li>
              <li>Improving our website and services</li>
              <li>Understanding website usage and performance</li>
              <li>Preventing fraud, abuse, and unauthorized activity</li>
              <li>Protecting the security of our systems</li>
              <li>Complying with legal and regulatory obligations</li>
              <li>Establishing, exercising, or defending legal claims</li>
              <li>Enforcing our agreements and policies</li>
              <li>Performing other purposes disclosed at the time information is collected or otherwise permitted by applicable law</li>
            </ul>
          </section>

          {/* 5. Health Plan and Healthcare Coverage Inquiries */}
          <section id="health-plan-inquiries" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">5. Health Plan and Healthcare Coverage Inquiries</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you request information about health plans, healthcare coverage, eligibility, enrollment, benefits, coverage options, or related services, we may use the information you provide to respond to your request and facilitate the services you have requested.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Depending on the nature of your request, we may need to share relevant information with health plans, insurance carriers, licensed agents, brokers, enrollment platforms, service providers, or other parties involved in fulfilling your request.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The information shared will depend on the service requested and will be limited to information reasonably necessary for the applicable purpose, subject to applicable legal and regulatory requirements.
            </p>
          </section>

          {/* 6. Information Sharing and Disclosure */}
          <section id="info-sharing-disclosure" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">6. Information Sharing and Disclosure</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-4 font-medium">
              We do not sell personal information to third parties for monetary consideration.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-4">
              However, we may disclose or make personal information available in appropriate circumstances, including the following.
            </p>
            <h3 className="text-lg font-bold text-navy-900 mb-2">6.1 Service Providers</h3>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We may use third-party service providers to support our business and website operations, including providers for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Website hosting</li>
              <li>Cloud storage</li>
              <li>Email delivery</li>
              <li>Customer relationship management</li>
              <li>Communications</li>
              <li>Analytics</li>
              <li>Cybersecurity</li>
              <li>Technical support</li>
              <li>Form processing</li>
              <li>Enrollment or health-plan technology</li>
              <li>Customer support</li>
              <li>Payment processing, where applicable</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-4">
              These providers may process information on our behalf and are expected to use information only as necessary to provide the applicable services or as otherwise permitted by law.
            </p>

            <h3 className="text-lg font-bold text-navy-900 mb-2">6.2 Health Plans, Insurance Carriers, Agents, Brokers, and Enrollment Partners</h3>
            <p className="text-base leading-relaxed text-navy-600 mb-4">
              When you request information, assistance, a quote, enrollment support, or other healthcare coverage services, we may share relevant information with health plans, insurance carriers, licensed agents, brokers, enrollment platforms, or other parties necessary to fulfill your request. The information shared will depend on the service requested and may be subject to additional privacy policies and legal requirements applicable to those parties.
            </p>

            <h3 className="text-lg font-bold text-navy-900 mb-2">6.3 Legal and Regulatory Requirements</h3>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We may disclose information when reasonably necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Comply with applicable federal, state, or local law</li>
              <li>Respond to lawful governmental requests</li>
              <li>Respond to subpoenas, court orders, or legal processes</li>
              <li>Meet regulatory requirements</li>
              <li>Investigate suspected fraud or abuse</li>
              <li>Protect our legal rights</li>
              <li>Protect the safety and security of individuals or systems</li>
              <li>Enforce our agreements</li>
            </ul>

            <h3 className="text-lg font-bold text-navy-900 mb-2">6.4 Business Transfers</h3>
            <p className="text-base leading-relaxed text-navy-600">
              If Harbor Group USA undergoes a merger, acquisition, financing, reorganization, sale of assets, bankruptcy, or other corporate transaction, personal information may be transferred as part of that transaction, subject to applicable law.
            </p>
          </section>

          {/* 7. Marketing Communications */}
          <section id="marketing-communications" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">7. Marketing Communications</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We may use contact information to send newsletters, educational materials, updates, information about our services, or other communications where permitted by law.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You may unsubscribe from marketing emails by using the unsubscribe mechanism included in the applicable communication or by contacting us.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We will not use or disclose protected health information for marketing purposes in a manner prohibited by applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where HIPAA applies, the use or disclosure of protected health information for marketing is subject to applicable HIPAA requirements and authorization rules.
            </p>
          </section>

          {/* 8. Cookies and Similar Technologies */}
          <section id="cookies-technologies" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">8. Cookies and Similar Technologies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Our website may use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Operate the website</li>
              <li>Maintain sessions</li>
              <li>Remember preferences</li>
              <li>Improve website functionality</li>
              <li>Analyze traffic</li>
              <li>Measure website performance</li>
              <li>Understand user interactions</li>
              <li>Support security</li>
              <li>Measure marketing effectiveness</li>
              <li>Support advertising where applicable</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Certain cookies may be necessary for website functionality, while others may be optional depending on their purpose and applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              You may manage cookies through available website controls and your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* 9. Analytics and Tracking */}
          <section id="analytics-tracking" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">9. Analytics and Tracking</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We may use third-party analytics services to understand how visitors interact with our website and to improve website performance and user experience.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Analytics providers may collect technical and usage information such as device information, browser information, IP address, pages viewed, referring pages, and interaction information.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We will configure and use analytics and tracking technologies in accordance with applicable privacy requirements.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Because Harbor Group USA operates in a health-plan and healthcare coverage environment, we do not intend to use ordinary website analytics to unnecessarily collect or disclose sensitive health information.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              We also take reasonable steps to avoid transmitting sensitive information through URLs, analytics parameters, advertising pixels, or similar tracking mechanisms.
            </p>
          </section>

          {/* 10. Sensitive Information */}
          <section id="sensitive-information" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">10. Sensitive Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Certain information may be considered sensitive personal information under applicable state or federal law, including information relating to health, healthcare coverage, financial circumstances, precise location, or other protected categories.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We will handle such information in accordance with applicable legal requirements.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              You should avoid voluntarily submitting sensitive information through general-purpose website forms unless it is specifically requested for a legitimate business purpose and appropriate security measures are in place.
            </p>
          </section>

          {/* 11. Data Security */}
          <section id="data-security" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">11. Data Security</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We maintain reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, acquisition, use, disclosure, alteration, or destruction. Depending on the nature of the information and applicable requirements, safeguards may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Access controls</li>
              <li>Authentication</li>
              <li>Encryption</li>
              <li>Secure hosting</li>
              <li>Monitoring</li>
              <li>Security testing</li>
              <li>Employee access restrictions</li>
              <li>Vendor security controls</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              No method of electronic transmission or storage is completely secure. Accordingly, we cannot guarantee that information transmitted through the Internet or stored electronically will always be completely secure.
            </p>
          </section>

          {/* 12. Data Retention */}
          <section id="data-retention" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">12. Data Retention</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We retain personal information for as long as reasonably necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-4">
              <li>Fulfill the purposes for which it was collected</li>
              <li>Provide requested services</li>
              <li>Maintain business and transaction records</li>
              <li>Meet legal and regulatory requirements</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
              <li>Protect our legal rights</li>
              <li>Detect and prevent fraud</li>
              <li>Maintain appropriate compliance records</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Retention periods may vary depending on the type of information, the purpose for which it was collected, and applicable legal or regulatory requirements.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              When information is no longer reasonably required, we may delete, anonymize, or securely dispose of it, subject to applicable retention obligations.
            </p>
          </section>

          {/* 13. Your Privacy Choices */}
          <section id="your-privacy-choices" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">13. Your Privacy Choices</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Depending on your location and applicable law, you may have certain rights concerning your personal information. These may include the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Request access to certain personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of certain information</li>
              <li>Request information about how personal information is processed</li>
              <li>Opt out of certain marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request information regarding certain disclosures or sharing</li>
              <li>Exercise applicable rights regarding targeted advertising or certain data sharing</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              These rights are subject to applicable legal exceptions and limitations.
            </p>
          </section>

          {/* 14. California Residents */}
          <section id="california-residents" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">14. California Residents</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              California residents may have additional rights under the California Consumer Privacy Act, as amended (&quot;CCPA&quot;), depending on whether and how the law applies to Harbor Group USA.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Depending on applicable requirements, California residents may have rights concerning access, correction, deletion, and certain disclosures or sharing of personal information, as well as rights relating to certain forms of targeted advertising.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3 font-medium">
              Harbor Group USA does not sell personal information for monetary consideration.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We will not unlawfully discriminate against an individual for exercising privacy rights provided by applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where required, California residents may submit privacy requests using the contact information provided below.
            </p>
          </section>

          {/* 15. Other State Privacy Laws */}
          <section id="other-state-privacy-laws" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">15. Other State Privacy Laws</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Residents of other U.S. states may have privacy rights under applicable state privacy laws.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Depending on the applicable state law and the circumstances, these rights may include rights to access, correct, delete, obtain a copy of, or restrict certain processing of personal information, as well as rights to opt out of certain targeted advertising, profiling, or sale or sharing activities.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA will provide rights required by applicable law.
            </p>
          </section>

          {/* 16. Children's Privacy */}
          <section id="childrens-privacy" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">16. Children&apos;s Privacy</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Our website is not intended to knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you are a parent or legal guardian and believe that a child has provided personal information to us inappropriately, please contact us using the information below.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              We will take reasonable steps to investigate and address the situation as required by applicable law.
            </p>
          </section>

          {/* 17. Third-Party Websites and Services */}
          <section id="third-party-websites" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">17. Third-Party Websites and Services</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Our website may contain links to third-party websites, health plans, insurance carriers, healthcare organizations, service providers, advertisers, or other external resources.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Third-party websites operate independently from Harbor Group USA. We are not responsible for the privacy practices, security, content, or policies of third-party websites.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              We encourage you to review the applicable privacy policy before submitting personal information to any third party.
            </p>
          </section>

          {/* 18. Information Received From Third Parties */}
          <section id="info-from-third-parties" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">18. Information Received From Third Parties</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              We may receive information from third parties, including health plans, insurance carriers, technology providers, marketing partners, enrollment platforms, or other parties involved in providing requested services.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The information we receive depends on the relationship and services involved. We will use such information in accordance with applicable law and the purposes for which it was provided.
            </p>
          </section>

          {/* 19. Telephone and Text Communications */}
          <section id="telephone-text-communications" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">19. Telephone and Text Communications</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you provide a telephone number and request that we contact you, we may communicate with you by telephone or text message regarding your inquiry, requested services, health-plan options, enrollment, or other matters related to your interaction with Harbor Group USA.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where required, we will obtain appropriate consent before sending marketing text messages or making certain automated calls.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Message and data rates may apply depending on your mobile carrier. You may opt out of marketing text messages by following the instructions provided in the applicable communication.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Opting out of marketing communications does not necessarily prevent service-related communications that are necessary to fulfill a request or provide a service.
            </p>
          </section>

          {/* 20. Email Communications */}
          <section id="email-communications" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">20. Email Communications</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you provide your email address, we may use it to respond to inquiries, provide requested information, communicate regarding services, and, where permitted, send marketing or educational communications.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              You may unsubscribe from marketing communications at any time.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              We may continue to send transactional, security, legal, or service-related communications when necessary.
            </p>
          </section>

          {/* 21. Do Not Track and Privacy Signals */}
          <section id="do-not-track" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">21. Do Not Track and Privacy Signals</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Some browsers and devices provide privacy signals such as &quot;Do Not Track&quot; or similar mechanisms.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Because there is not a single universal technical standard for all such signals, our website may not respond to every browser-based signal unless required by applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where applicable law requires recognition of a specific privacy signal or universal opt-out mechanism, we will comply with the applicable requirements.
            </p>
          </section>

          {/* 22. International Visitors */}
          <section id="international-visitors" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">22. International Visitors</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA is a United States-based organization and its Services are primarily intended for users in the United States.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you access our Services from outside the United States, your information may be transferred to, stored in, and processed in the United States or other jurisdictions where we or our service providers operate.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Privacy laws in those jurisdictions may differ from the laws of your country or region. Where applicable law requires additional safeguards for international transfers, we will implement those safeguards as required.
            </p>
          </section>

          {/* 23. HIPAA and Protected Health Information */}
          <section id="hipaa-phi" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">23. HIPAA and Protected Health Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If Harbor Group USA is acting as a HIPAA covered entity or business associate with respect to particular information or services, applicable HIPAA requirements will govern the use and disclosure of protected health information.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where Harbor Group USA is required to provide a separate Notice of Privacy Practices, that notice will govern protected health information as specified by HIPAA and applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              This website Privacy Policy does not itself constitute a HIPAA Notice of Privacy Practices.
            </p>
          </section>

          {/* 24. Health Data Security Incidents */}
          <section id="health-data-incidents" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">24. Health Data Security Incidents</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA takes the security of health-related information seriously.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where a security incident involving personal or health information occurs, we will investigate the incident and provide notifications to affected individuals, regulators, or other parties when required by applicable federal or state law. Depending on the nature of the information and the entity involved, different federal and state requirements may apply.
            </p>
          </section>

          {/* 25. Changes to This Privacy Policy */}
          <section id="changes-to-policy" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">25. Changes to This Privacy Policy</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We may update this Privacy Policy periodically to reflect changes in:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Our services</li>
              <li>Data collection practices</li>
              <li>Technology</li>
              <li>Business operations</li>
              <li>Legal requirements</li>
              <li>Regulatory requirements</li>
              <li>Privacy practices</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              When we make changes, we will update the &quot;Last Updated&quot; date at the top of this policy.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              For material changes, we may provide additional notice where required or appropriate.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* 26. Governing Law */}
          <section id="governing-law" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">26. Governing Law</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              This Privacy Policy is governed by applicable United States federal law and the applicable laws of the states in which Harbor Group USA operates or is subject to jurisdiction.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Where a particular state or federal privacy law provides rights or protections that apply to you, those requirements will control to the extent required by law.
            </p>
          </section>

          {/* 27. Contact Us */}
          <section id="contact-us" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">27. Contact Us</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you have questions, concerns, privacy requests, or other inquiries regarding this Privacy Policy or the handling of your personal information, please contact us:
            </p>
            <div className="bg-navy-50/60 border border-navy-100 p-6 rounded-2xl text-navy-800 space-y-1 text-base">
              <p className="font-bold text-navy-900">Harbor Group USA</p>
              <p>3101 Bayshore Dr.</p>
              <p>Fort Lauderdale, FL 33304</p>
              <p className="pt-2">
                Email: <a href="mailto:support@harborgroupusa.com" className="text-accent hover:underline font-medium">support@harborgroupusa.com</a>
              </p>
            </div>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              We may request reasonable information necessary to verify your identity before processing certain privacy requests.
            </p>
          </section>

          {/* 28. Effective Date */}
          <section id="effective-date" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">28. Effective Date</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              This Privacy Policy is effective as of January 1, 2026, and remains in effect until replaced or updated.
            </p>
            <p className="text-base leading-relaxed text-navy-600 font-medium">
              Harbor Group USA is committed to protecting your privacy and handling personal information responsibly, transparently, and in accordance with applicable U.S. privacy requirements.
            </p>
          </section>
        </div>
      </LegalTemplate>
    </>
  );
}
