import React from 'react'

export default function HealthPlanQuoteToday() {
   return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">Get In Touch</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                     Get Your Free Health Plan Quote Today!
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="relative">
                        <img 
                            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Get-Your-Free-Health-Plan-Quote-Today.jpeg"
                            alt="Contact Us"
                            className="rounded-2xl shadow-xl w-full h-full object-cover"
                           // onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x750/e0f2fe/1e3a8a?text=Contact'; }}
                        />
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message</label>
                                <textarea id="message" rows="5" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                            </div>
                            <div className="flex items-start">
                                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-sky-600 border-gray-300 rounded mt-1" />
                                <label htmlFor="terms" className="ml-3 block text-sm text-gray-600">
                                    By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="#" className="font-medium text-sky-600 hover:underline">SMS and Marketing terms and conditions.</a>
                                </label>
                            </div>
                            <div>
                                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
