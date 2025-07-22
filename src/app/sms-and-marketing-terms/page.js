import React from 'react'

export default function page() {
  return (
    <div>
       <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Subtle background pattern for unique texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm10 10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto  p-8 sm:p-12 lg:p-16  text-gray-800">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center leading-tight">
          SMS and Marketing Terms and Conditions
        </h1>

        {/* Section 1: Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">1. Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to The Harbour Group. These Terms and Conditions govern your use of our SMS (Short Message Service) and marketing communications. By opting into our SMS and marketing services, you agree to these Terms and Conditions in full. If you disagree with these terms or any part of these terms, you must not use our services.
          </p>
        </div>

        {/* Section 2: SMS Services. Opt-In */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">2. SMS Services. Opt-In</h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li><span className="font-semibold">a. Messages:</span> As a subscriber to our SMS services, you agree to receive pre-programmed, automated messages regarding health plan and savings products, services, offers, promotions, and updates from The Harbour Group.</li>
            <li><span className="font-semibold">b. Cost:</span> Message and data rates may apply according to your mobile phone service provider.</li>
            <li><span className="font-semibold">c. Opt-Out:</span> You can opt out of our SMS services at any time by calling our helpline or emailing us at <a href="mailto:smsunsubscribe@harborgroupusa.com" className="text-blue-600 hover:underline">smsunsubscribe@harborgroupusa.com</a>. After opting out, you will receive one final message confirming your opt-out within 48 hours of your opt-out!</li>
          </ul>
        </div>

        {/* Section 3: Marketing Communications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">3. Marketing Communications</h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li><span className="font-semibold">a. Consent:</span> By providing your contact information, you agree to receive marketing communications from us about our insurance products, services, and offers through various channels, including but not limited to email, phone calls, and postal mail.</li>
            <li><span className="font-semibold">b. Unsubscribe:</span> You may unsubscribe from our marketing communications at any time by following the unsubscribe link in our emails, contacting us directly, or using the methods described in our communications.</li>
          </ul>
        </div>

        {/* Section 4: Data Protection and Privacy */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">4. Data Protection and Privacy</h2>
          <p className="text-lg leading-relaxed">
            Your privacy is important to us. All personal information collected through our SMS and marketing services will be handled in accordance with our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please refer to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> for more details.
          </p>
        </div>

        {/* Section 5: Changes to Terms and Conditions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">5. Changes to Terms and Conditions</h2>
          <p className="text-lg leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our SMS and marketing services after such changes constitutes your acceptance of the new Terms and Conditions.
          </p>
        </div>

        {/* Section 6: Governing Law */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">6. Governing Law</h2>
          <p className="text-lg leading-relaxed">
            These Terms and Conditions are governed by State of Florida without regard to its conflict of law provisions.
          </p>
        </div>

        {/* Section 7: Contact Us */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">7. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            For any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:contact@harborgroupusa.com" className="text-blue-600 hover:underline">contact@harborgroupusa.com</a>
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}
