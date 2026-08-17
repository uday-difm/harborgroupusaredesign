"use client";

import React from 'react';
import { LegalTemplate } from '@/common/LegalTemplate';

const TABLE_OF_CONTENTS = [
  { id: 'not-medical-advice', title: '1. Not Medical Advice' },
  { id: 'consult-healthcare-professional', title: '2. Consult a Healthcare Professional' },
  { id: 'no-doctor-patient-relationship', title: '3. No Doctor-Patient Relationship' },
  { id: 'health-plan-information', title: '4. Health Plan Information Is Not Medical Advice' },
  { id: 'no-guarantee-coverage', title: '5. No Guarantee of Health Plan Coverage' },
  { id: 'information-may-change', title: '6. Information May Change' },
  { id: 'no-guarantee-results', title: '7. No Guarantee of Results' },
  { id: 'third-party-providers', title: '8. Third-Party Healthcare Providers and Organizations' },
  { id: 'third-party-content', title: '9. Third-Party Content and Links' },
  { id: 'user-submitted-health-info', title: '10. User-Submitted Health Information' },
  { id: 'emergency-situations', title: '11. Emergency Situations' },
  { id: 'medications-and-treatments', title: '12. Medications and Treatments' },
  { id: 'educational-content', title: '13. Health-Related Educational Content' },
  { id: 'no-reliance', title: '14. No Reliance' },
  { id: 'advertising-marketing-claims', title: '15. Advertising and Marketing Claims' },
  { id: 'licensing-and-advice', title: '16. Professional Licensing and Advice' },
  { id: 'limitation-of-liability', title: '17. Limitation of Liability' },
  { id: 'no-waiver-legal-rights', title: '18. No Waiver of Legal Rights' },
  { id: 'changes-to-disclaimer', title: '19. Changes to This Disclaimer' },
  { id: 'contact', title: '20. Contact Us' },
];

export default function HealthMedicalDisclaimerPage() {
  return (
    <>
      <title>Health &amp; Medical Disclaimer | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, health and medical disclaimer, medical disclaimer, healthcare information, not medical advice, health plan disclaimer" />
      <meta name="description" content="Read the Health & Medical Disclaimer for Harbor Group USA. Learn about the scope, purpose, and limitations of health-related information provided on our platforms." />
      <meta property="og:title" content="Health &amp; Medical Disclaimer | Harbor Group USA" />
      <meta property="og:description" content="Read the Health & Medical Disclaimer for Harbor Group USA. Learn about the scope, purpose, and limitations of health-related information provided on our platforms." />
      <link rel="canonical" href="https://harborgroupusa.com/health-medical-disclaimer/" />
      <meta property="og:url" content="https://harborgroupusa.com/health-medical-disclaimer/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <LegalTemplate title="Health & Medical Disclaimer">
        <div className="space-y-8 text-navy-700">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Last Updated: August 17, 2026
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            The information provided by Harbor Group USA (&quot;Harbor Group USA,&quot; &quot;Harbor Group,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) through our website, digital platforms, emails, SMS messages, advertisements, marketing materials, publications, social media, and other communications (collectively, the &quot;Content&quot;) is provided for general informational and educational purposes only.
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            By accessing or using our website or Content, you acknowledge and agree to the terms of this Health &amp; Medical Disclaimer.
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

          {/* 1. Not Medical Advice */}
          <section id="not-medical-advice" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">1. Not Medical Advice</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              The Content provided by Harbor Group USA is not medical advice and is not intended to be used as a substitute for professional medical advice, diagnosis, treatment, or care.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Nothing contained in our Content should be interpreted as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>A medical diagnosis;</li>
              <li>A medical recommendation;</li>
              <li>A treatment recommendation;</li>
              <li>A prescription or medication recommendation;</li>
              <li>A clinical opinion;</li>
              <li>A healthcare provider relationship;</li>
              <li>A recommendation to begin, discontinue, or modify treatment; or</li>
              <li>Professional medical or healthcare advice.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              You should not rely on the Content as a substitute for consultation with a qualified healthcare professional.
            </p>
          </section>

          {/* 2. Consult a Healthcare Professional */}
          <section id="consult-healthcare-professional" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">2. Consult a Healthcare Professional</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              You should consult an appropriately licensed physician, healthcare provider, pharmacist, or other qualified healthcare professional regarding any:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Medical condition;</li>
              <li>Symptoms;</li>
              <li>Diagnosis;</li>
              <li>Treatment;</li>
              <li>Medication;</li>
              <li>Procedure;</li>
              <li>Healthcare decision; or</li>
              <li>Other health-related concern.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              Do not delay seeking medical attention or disregard professional medical advice because of information obtained from Harbor Group USA.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2 font-medium">
              Harbor Group USA does not provide medical diagnosis, treatment, or emergency medical services.
            </p>
          </section>

          {/* 3. No Doctor-Patient Relationship */}
          <section id="no-doctor-patient-relationship" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">3. No Doctor-Patient Relationship</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Your use of the Harbor Group USA website, forms, communications, health-related information, or other Content does not create a doctor-patient, patient-provider, fiduciary, or other healthcare professional relationship between you and Harbor Group USA.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Communications with Harbor Group USA regarding health plans or healthcare coverage do not establish a medical relationship.
            </p>
          </section>

          {/* 4. Health Plan Information Is Not Medical Advice */}
          <section id="health-plan-information" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">4. Health Plan Information Is Not Medical Advice</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may provide information concerning:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Health plans;</li>
              <li>Healthcare coverage;</li>
              <li>Benefits;</li>
              <li>Provider networks;</li>
              <li>Eligibility;</li>
              <li>Enrollment;</li>
              <li>Costs;</li>
              <li>Coverage options; and</li>
              <li>Related healthcare services.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              Such information concerns health-plan and coverage matters, not medical diagnosis or treatment.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Information regarding a health plan, benefit, provider network, or covered service should not be interpreted as a recommendation regarding what medical care, treatment, medication, procedure, or healthcare provider you should choose.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Questions regarding your medical care should be directed to an appropriately qualified healthcare professional.
            </p>
          </section>

          {/* 5. No Guarantee of Health Plan Coverage */}
          <section id="no-guarantee-coverage" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">5. No Guarantee of Health Plan Coverage</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Information presented on the website or through Harbor Group USA communications does not constitute a guarantee that a particular individual will:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Qualify for a health plan;</li>
              <li>Be approved for enrollment;</li>
              <li>Receive coverage;</li>
              <li>Receive a particular benefit;</li>
              <li>Have a particular provider included in a network;</li>
              <li>Receive a particular price or rate; or</li>
              <li>Receive reimbursement for a particular healthcare service.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              Eligibility, benefits, exclusions, limitations, costs, networks, coverage requirements, and other terms are subject to the applicable plan documents, agreements, carrier or plan administrator requirements, and applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2 font-medium">
              The applicable official plan documents control in the event of any conflict.
            </p>
          </section>

          {/* 6. Information May Change */}
          <section id="information-may-change" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">6. Information May Change</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Health-plan information, healthcare information, regulations, benefits, provider networks, costs, eligibility requirements, and other information may change over time.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Although Harbor Group USA seeks to provide useful and accurate information, we do not guarantee that all Content is:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Accurate;</li>
              <li>Complete;</li>
              <li>Current;</li>
              <li>Error-free;</li>
              <li>Applicable to your individual circumstances; or</li>
              <li>Available at all times.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              You should verify important information with the applicable health-plan provider, carrier, plan administrator, healthcare professional, or other appropriate source.
            </p>
          </section>

          {/* 7. No Guarantee of Results */}
          <section id="no-guarantee-results" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">7. No Guarantee of Results</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA does not guarantee any particular:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Health outcome;</li>
              <li>Medical outcome;</li>
              <li>Healthcare outcome;</li>
              <li>Coverage outcome;</li>
              <li>Enrollment outcome;</li>
              <li>Savings;</li>
              <li>Financial result; or</li>
              <li>Other result</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              from using information provided through our website or communications. Individual circumstances vary, and results may differ.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Any examples, illustrations, testimonials, statements regarding potential savings, or descriptions of possible outcomes are not guarantees of future results.
            </p>
          </section>

          {/* 8. Third-Party Healthcare Providers and Organizations */}
          <section id="third-party-providers" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">8. Third-Party Healthcare Providers and Organizations</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Our website or communications may reference or provide links to third-party:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Healthcare providers;</li>
              <li>Physicians;</li>
              <li>Medical facilities;</li>
              <li>Pharmacies;</li>
              <li>Health-plan providers;</li>
              <li>Insurance carriers;</li>
              <li>Plan administrators;</li>
              <li>Healthcare organizations; or</li>
              <li>Other third-party services.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              Harbor Group USA does not necessarily endorse, control, or guarantee the services, qualifications, advice, treatment, performance, availability, or outcomes of any third party.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Any relationship you establish with a third-party healthcare provider or organization is between you and that third party. You are responsible for independently evaluating any healthcare provider, facility, plan, or service before using it.
            </p>
          </section>

          {/* 9. Third-Party Content and Links */}
          <section id="third-party-content" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">9. Third-Party Content and Links</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Our website may contain information, advertisements, links, references, or other materials provided by third parties. Harbor Group USA does not guarantee the accuracy, completeness, reliability, or suitability of third-party health or medical information.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              A link or reference to a third-party website or service does not necessarily constitute an endorsement, recommendation, or guarantee by Harbor Group USA. Third-party websites and services may have their own terms, privacy policies, disclaimers, and practices.
            </p>
          </section>

          {/* 10. User-Submitted Health Information */}
          <section id="user-submitted-health-info" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">10. User-Submitted Health Information</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA may provide online forms or other mechanisms for users to submit information.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Unless a particular form or secure system expressly states otherwise, do not submit medical records, diagnoses, prescriptions, Social Security numbers, financial information, or other highly sensitive personal or health information through ordinary website forms, SMS messages, email, or other unsecured communications.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              If sensitive information is required for a specific enrollment or service process, Harbor Group USA will provide an appropriate method for submitting such information.
            </p>
          </section>

          {/* 11. Emergency Situations */}
          <section id="emergency-situations" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">11. Emergency Situations</h2>
            <p className="text-base leading-relaxed text-navy-600">
              The Harbor Group USA website, SMS services, email communications, and other digital platforms are not intended for medical emergencies.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2 font-semibold text-accent-dark">
              If you believe you are experiencing a medical emergency, immediately contact your local emergency services or seek emergency medical attention.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Do not use the Harbor Group USA website, SMS program, email, or other digital communications as a substitute for emergency medical assistance.
            </p>
          </section>

          {/* 12. Medications and Treatments */}
          <section id="medications-and-treatments" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">12. Medications and Treatments</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA does not recommend, prescribe, administer, or supervise medications, treatments, procedures, therapies, supplements, or other medical interventions through its website or communications.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              You should not start, stop, modify, or otherwise change any medication, treatment, therapy, or medical care based solely on information obtained from Harbor Group USA. Always consult your healthcare provider before making decisions concerning your medical care.
            </p>
          </section>

          {/* 13. Health-Related Educational Content */}
          <section id="educational-content" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">13. Health-Related Educational Content</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Any health-related educational material provided by Harbor Group USA is intended solely for general informational purposes. Educational information may not apply to your specific circumstances and should not be interpreted as personalized medical advice.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Health information may also become outdated as medical research, clinical practices, regulations, and recommendations change.
            </p>
          </section>

          {/* 14. No Reliance */}
          <section id="no-reliance" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">14. No Reliance</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Your use of and reliance upon health-related Content provided by Harbor Group USA is voluntary.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              To the maximum extent permitted by applicable law, Harbor Group USA is not responsible for decisions made or actions taken based solely or primarily upon general health-related information provided through our website or communications. Nothing in this Disclaimer excludes or limits liability that cannot legally be excluded or limited.
            </p>
          </section>

          {/* 15. Advertising and Marketing Claims */}
          <section id="advertising-marketing-claims" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">15. Advertising and Marketing Claims</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Any statements concerning health plans, healthcare coverage, benefits, savings, services, or potential outcomes contained in advertisements or marketing materials are provided subject to the applicable terms, eligibility requirements, plan documents, agreements, and applicable law.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Marketing materials should not be interpreted as personalized medical advice or as a guarantee of healthcare outcomes.
            </p>
          </section>

          {/* 16. Professional Licensing and Advice */}
          <section id="licensing-and-advice" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">16. Professional Licensing and Advice</h2>
            <p className="text-base leading-relaxed text-navy-600">
              Harbor Group USA does not represent that every individual involved in website operations, marketing, customer support, or business development is a licensed healthcare professional.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              You should not assume that an employee, representative, broker, agent, contractor, or other person communicating with you is providing medical advice merely because the communication concerns health plans, healthcare coverage, or health-related subjects.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              Where professional licensing is required for a particular activity, such activity will be subject to the applicable licensing and regulatory requirements.
            </p>
          </section>

          {/* 17. Limitation of Liability */}
          <section id="limitation-of-liability" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">17. Limitation of Liability</h2>
            <p className="text-base leading-relaxed text-navy-600">
              To the maximum extent permitted by applicable law, Harbor Group USA and its officers, directors, employees, agents, representatives, affiliates, contractors, and service providers will not be responsible for losses, damages, injuries, or adverse outcomes resulting from reliance upon general health-related information provided through the website or communications.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mt-2">
              This includes, to the extent permitted by law, indirect, incidental, consequential, special, exemplary, or punitive damages. Nothing in this section excludes or limits liability that cannot legally be excluded or limited.
            </p>
          </section>

          {/* 18. No Waiver of Legal Rights */}
          <section id="no-waiver-legal-rights" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">18. No Waiver of Legal Rights</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Nothing in this Health &amp; Medical Disclaimer is intended to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Waive a statutory right;</li>
              <li>Eliminate a legal protection;</li>
              <li>Replace applicable healthcare regulations;</li>
              <li>Modify the terms of an applicable health plan;</li>
              <li>Replace official plan documents; or</li>
              <li>Exclude liability that cannot legally be excluded.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              If any provision of this Disclaimer conflicts with a mandatory requirement of applicable law, the applicable law will control to the extent of the conflict.
            </p>
          </section>

          {/* 19. Changes to This Disclaimer */}
          <section id="changes-to-disclaimer" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">19. Changes to This Disclaimer</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may update this Health &amp; Medical Disclaimer from time to time to reflect changes in:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Business practices;</li>
              <li>Website Content;</li>
              <li>Healthcare information;</li>
              <li>Health-plan services;</li>
              <li>Legal requirements;</li>
              <li>Regulatory requirements; or</li>
              <li>Operational practices.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mt-3">
              The updated version will be posted on the website with a revised &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* 20. Contact Us */}
          <section id="contact" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">20. Contact Us</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you have questions regarding this Health &amp; Medical Disclaimer, please contact:
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
