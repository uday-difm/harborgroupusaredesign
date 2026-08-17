"use client";

import React from 'react';
import { LegalTemplate } from '@/common/LegalTemplate';
import Link from 'next/link';

const TABLE_OF_CONTENTS = [
  { id: 'what-are-cookies', title: '1. What Are Cookies?' },
  { id: 'how-we-use-cookies', title: '2. How We Use Cookies' },
  { id: 'categories-of-cookies', title: '3. Categories of Cookies' },
  { id: 'third-party-cookies', title: '4. Third-Party Cookies' },
  { id: 'information-collected', title: '5. Information Collected Through Cookies' },
  { id: 'cookie-preferences-consent', title: '6. Cookie Preferences and Consent' },
  { id: 'managing-cookies-browser', title: '7. Managing Cookies Through Your Browser' },
  { id: 'do-not-track-signals', title: '8. Do Not Track Signals' },
  { id: 'global-privacy-control', title: '9. Global Privacy Control and Similar Signals' },
  { id: 'cookies-personal-information', title: '10. Cookies and Personal Information' },
  { id: 'cookies-used-for-security', title: '11. Cookies Used for Security' },
  { id: 'changes-to-cookies', title: '12. Changes to Cookies' },
  { id: 'changes-to-cookie-policy', title: '13. Changes to This Cookie Policy' },
  { id: 'no-guarantee-third-party', title: '14. No Guarantee of Third-Party Technologies' },
  { id: 'contact-us', title: '15. Contact Us' },
];

export default function CookiePolicyPage() {
  return (
    <>
      <title>Cookie Policy | Harbor Group USA</title>
      <meta name="keywords" content="Harbor Group USA, cookie policy, cookies and tracking, web beacons, pixels, privacy preferences, browser cookies, analytics cookies" />
      <meta name="description" content="Read Harbor Group USA's Cookie Policy to learn how we use cookies, tracking technologies, analytics, and how you can manage your cookie preferences." />
      <meta property="og:title" content="Cookie Policy | Harbor Group USA" />
      <meta property="og:description" content="Read Harbor Group USA's Cookie Policy to learn how we use cookies, tracking technologies, analytics, and how you can manage your cookie preferences." />
      <link rel="canonical" href="https://harborgroupusa.com/cookie-policy/" />
      <meta property="og:url" content="https://harborgroupusa.com/cookie-policy/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />

      <LegalTemplate title="Cookie Policy">
        <div className="space-y-8 text-navy-700">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            Last Updated: August 17, 2026
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            This Cookie Policy explains how Harbor Group USA (&quot;Harbor Group USA,&quot; &quot;Harbor Group,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies when you visit or interact with our website and related digital services.
          </p>

          <p className="text-base leading-relaxed text-navy-600">
            This Cookie Policy should be read together with our <Link href="/privacy-policy" className="text-accent hover:underline font-medium">Privacy Policy</Link>, <Link href="/terms-and-conditions" className="text-accent hover:underline font-medium">Terms &amp; Conditions</Link>, and <Link href="/sms-and-marketing-terms" className="text-accent hover:underline font-medium">SMS and Marketing Terms and Conditions</Link>.
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

          {/* 1. What Are Cookies? */}
          <section id="what-are-cookies" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">1. What Are Cookies?</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Cookies are small text files or similar technologies that may be stored on or accessed from your computer, smartphone, tablet, or other device when you visit a website.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Cookies allow websites to recognize a device, remember preferences, maintain functionality, analyze usage, and support certain marketing and advertising activities.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              We may also use technologies that perform functions similar to cookies, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Web beacons;</li>
              <li>Pixels;</li>
              <li>Tags;</li>
              <li>Tracking scripts;</li>
              <li>Device identifiers;</li>
              <li>Local storage technologies; and</li>
              <li>Similar technologies.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              For purposes of this Policy, we refer to these technologies collectively as &quot;Cookies and Similar Technologies.&quot;
            </p>
          </section>

          {/* 2. How We Use Cookies */}
          <section id="how-we-use-cookies" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">2. How We Use Cookies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may use Cookies and Similar Technologies for legitimate business, operational, security, analytical, and marketing purposes. Depending on how you use our website, we may use them to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Operate and maintain the website;</li>
              <li>Remember user preferences;</li>
              <li>Maintain website functionality;</li>
              <li>Understand how visitors use the website;</li>
              <li>Analyze website traffic and performance;</li>
              <li>Improve website functionality and user experience;</li>
              <li>Maintain security and detect fraudulent or unauthorized activity;</li>
              <li>Measure advertising and marketing performance;</li>
              <li>Understand the effectiveness of marketing campaigns;</li>
              <li>Support lead-generation activities;</li>
              <li>Personalize website content where permitted;</li>
              <li>Support communications and customer-service functions;</li>
              <li>Attribute website visits or leads to marketing campaigns; and</li>
              <li>Comply with applicable legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* 3. Categories of Cookies */}
          <section id="categories-of-cookies" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">3. Categories of Cookies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-4">
              Cookies used on our website may generally fall into the following categories.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">A. Strictly Necessary Cookies</h3>
                <p className="text-base leading-relaxed text-navy-600 mb-2">
                  These Cookies are necessary for certain website functions to operate. They may support:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-navy-600 mb-2">
                  <li>Website navigation;</li>
                  <li>Security;</li>
                  <li>Session management;</li>
                  <li>Forms;</li>
                  <li>Authentication;</li>
                  <li>Basic functionality; and</li>
                  <li>Other essential website operations.</li>
                </ul>
                <p className="text-base leading-relaxed text-navy-600">
                  Because these Cookies may be necessary for the operation or security of the website, they may not always be available for complete disabling through our cookie-management tools.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">B. Functional Cookies</h3>
                <p className="text-base leading-relaxed text-navy-600 mb-2">
                  Functional Cookies allow the website to remember information and preferences you have selected. For example, they may help us remember:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-navy-600 mb-2">
                  <li>Language preferences;</li>
                  <li>Display preferences;</li>
                  <li>Previously selected settings; or</li>
                  <li>Other website preferences.</li>
                </ul>
                <p className="text-base leading-relaxed text-navy-600">
                  Disabling these Cookies may cause certain website features to function differently.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">C. Analytics and Performance Cookies</h3>
                <p className="text-base leading-relaxed text-navy-600 mb-2">
                  We may use analytics and performance technologies to understand how visitors interact with our website. These technologies may help us understand:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-navy-600 mb-2">
                  <li>Number of visitors;</li>
                  <li>Pages viewed;</li>
                  <li>Time spent on pages;</li>
                  <li>Traffic sources;</li>
                  <li>Website navigation;</li>
                  <li>Device and browser information;</li>
                  <li>Errors and performance issues; and</li>
                  <li>General website usage patterns.</li>
                </ul>
                <p className="text-base leading-relaxed text-navy-600">
                  This information helps us improve the website and understand the effectiveness of our digital services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">D. Advertising and Marketing Cookies</h3>
                <p className="text-base leading-relaxed text-navy-600 mb-2">
                  Where used and permitted by applicable law, Harbor Group USA may use advertising and marketing technologies to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-navy-600 mb-2">
                  <li>Measure advertising performance;</li>
                  <li>Understand campaign effectiveness;</li>
                  <li>Attribute leads or conversions;</li>
                  <li>Deliver or measure relevant advertisements;</li>
                  <li>Limit repetitive advertisements;</li>
                  <li>Understand interactions with marketing materials; and</li>
                  <li>Improve marketing campaigns.</li>
                </ul>
                <p className="text-base leading-relaxed text-navy-600">
                  These technologies may be provided by Harbor Group USA or authorized third-party advertising and marketing providers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">E. Lead Generation and Attribution Technologies</h3>
                <p className="text-base leading-relaxed text-navy-600">
                  Because Harbor Group USA may use its website to generate inquiries and business leads, we may use Cookies and Similar Technologies to understand how visitors arrive at our website and whether a visitor subsequently submits an inquiry or interacts with our services. This may include associating website activity with a marketing campaign, referral source, advertisement, or other acquisition channel where permitted by applicable law.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Third-Party Cookies */}
          <section id="third-party-cookies" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">4. Third-Party Cookies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Some Cookies and Similar Technologies may be placed or operated by third parties. Third parties may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Analytics providers;</li>
              <li>Advertising providers;</li>
              <li>Marketing platforms;</li>
              <li>Customer relationship management platforms;</li>
              <li>Lead-generation providers;</li>
              <li>Social media platforms;</li>
              <li>Security providers;</li>
              <li>Website hosting or technology providers; and</li>
              <li>Other service providers.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              These third parties may collect information about your interaction with our website in accordance with their own privacy policies and applicable legal requirements. Harbor Group USA does not necessarily control the technologies operated directly by third parties.
            </p>
          </section>

          {/* 5. Information Collected Through Cookies */}
          <section id="information-collected" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">5. Information Collected Through Cookies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Depending on the technology used, Cookies and Similar Technologies may collect information such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>IP address;</li>
              <li>Browser type;</li>
              <li>Device type;</li>
              <li>Operating system;</li>
              <li>General geographic information;</li>
              <li>Pages visited;</li>
              <li>Referring website;</li>
              <li>Date and time of visits;</li>
              <li>Website interactions;</li>
              <li>Clicks;</li>
              <li>Session information;</li>
              <li>Advertising identifiers;</li>
              <li>Campaign information; and</li>
              <li>Other technical or usage information.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Cookies do not necessarily identify you by name. However, information collected through Cookies may potentially be associated with other information that identifies or relates to you.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Our use of such information is governed by our Privacy Policy and applicable law.
            </p>
          </section>

          {/* 6. Cookie Preferences and Consent */}
          <section id="cookie-preferences-consent" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">6. Cookie Preferences and Consent</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Where required by applicable law, Harbor Group USA may provide users with a cookie-management or consent mechanism through which certain categories of Cookies can be accepted, rejected, or managed. Your choices may vary depending on:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Your location;</li>
              <li>Applicable law;</li>
              <li>The type of Cookie;</li>
              <li>The purpose of the technology; and</li>
              <li>The functionality involved.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Strictly necessary Cookies may continue to operate because they are required for essential website functionality or security.
            </p>
          </section>

          {/* 7. Managing Cookies Through Your Browser */}
          <section id="managing-cookies-browser" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">7. Managing Cookies Through Your Browser</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Most web browsers allow you to control or delete Cookies through browser settings. You may be able to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Block Cookies;</li>
              <li>Delete existing Cookies;</li>
              <li>Receive notifications when Cookies are placed; or</li>
              <li>Restrict certain types of Cookies.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              If you disable or delete Cookies, certain website features may not operate properly. Browser-based Cookie controls vary by browser and device.
            </p>
          </section>

          {/* 8. Do Not Track Signals */}
          <section id="do-not-track-signals" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">8. Do Not Track Signals</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Some browsers and devices provide &quot;Do Not Track&quot; or similar settings.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Because there is currently no universally consistent technical or legal standard governing all Do Not Track signals, Harbor Group USA may not respond to every such signal in the same manner. Where applicable law requires a specific response to a recognized browser or device privacy signal, Harbor Group USA will process the signal in accordance with applicable requirements.
            </p>
          </section>

          {/* 9. Global Privacy Control and Similar Signals */}
          <section id="global-privacy-control" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">9. Global Privacy Control and Similar Signals</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Where applicable law requires recognition of a legally recognized universal opt-out or privacy preference signal, Harbor Group USA will process such signals in accordance with applicable requirements.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The availability and functionality of such signals may depend on your browser, device, geographic location, and applicable law.
            </p>
          </section>

          {/* 10. Cookies and Personal Information */}
          <section id="cookies-personal-information" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">10. Cookies and Personal Information</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Information collected through Cookies may constitute personal information or personal data under certain laws. Where applicable, Harbor Group USA will handle such information in accordance with our Privacy Policy and applicable federal and state privacy requirements.
            </p>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Our Privacy Policy provides additional information regarding:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600">
              <li>Information collection;</li>
              <li>Use of personal information;</li>
              <li>Disclosure;</li>
              <li>Data retention;</li>
              <li>Security;</li>
              <li>Privacy rights; and</li>
              <li>How to contact us regarding privacy matters.</li>
            </ul>
          </section>

          {/* 11. Cookies Used for Security */}
          <section id="cookies-used-for-security" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">11. Cookies Used for Security</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              Harbor Group USA may use Cookies and Similar Technologies to help:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Detect suspicious activity;</li>
              <li>Prevent fraud;</li>
              <li>Protect accounts and forms;</li>
              <li>Maintain website security;</li>
              <li>Identify automated abuse; and</li>
              <li>Protect the integrity of our systems.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Certain security-related technologies may be necessary for the safe operation of the website.
            </p>
          </section>

          {/* 12. Changes to Cookies */}
          <section id="changes-to-cookies" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">12. Changes to Cookies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-2">
              The Cookies and Similar Technologies used on our website may change over time. We may add, remove, replace, or modify technologies based on:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-navy-600 mb-3">
              <li>Changes to our website;</li>
              <li>Changes to our technology providers;</li>
              <li>Analytics requirements;</li>
              <li>Marketing requirements;</li>
              <li>Security requirements;</li>
              <li>Business operations; or</li>
              <li>Changes in applicable law.</li>
            </ul>
            <p className="text-base leading-relaxed text-navy-600">
              Accordingly, the specific Cookies or technologies used at any particular time may differ from those previously used.
            </p>
          </section>

          {/* 13. Changes to This Cookie Policy */}
          <section id="changes-to-cookie-policy" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">13. Changes to This Cookie Policy</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA may update this Cookie Policy from time to time to reflect changes in our practices, technologies, services, legal requirements, or regulatory obligations.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              The revised Policy will be posted on this website with an updated &quot;Last Updated&quot; date. Where required by applicable law, we may provide additional notice or obtain additional consent.
            </p>
          </section>

          {/* 14. No Guarantee of Third-Party Technologies */}
          <section id="no-guarantee-third-party" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">14. No Guarantee of Third-Party Technologies</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              Harbor Group USA does not guarantee the availability, accuracy, security, or functionality of third-party Cookies or Similar Technologies.
            </p>
            <p className="text-base leading-relaxed text-navy-600">
              Third-party providers may independently modify their technologies, practices, or policies. Users should review the privacy and cookie policies of relevant third-party providers where appropriate.
            </p>
          </section>

          {/* 15. Contact Us */}
          <section id="contact-us" className="scroll-mt-28">
            <h2 className="text-h3 font-bold text-navy-800 mb-3">15. Contact Us</h2>
            <p className="text-base leading-relaxed text-navy-600 mb-3">
              If you have questions regarding this Cookie Policy or our use of Cookies and Similar Technologies, please contact:
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
