"use client";

import React, { useState , useRef} from 'react'
        setFormData({ name: "", email: "", message: "", terms: false }); 
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIssubmiting(false);
    }
  };


  return (
    <>
      <section className="w-full bg-navy-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8" id="limited-med-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> 
          <div className="bg-white p-8 rounded-2xl card-elevated ">
            <h2 className="text-4xl font-extrabold text-navy-800 mb-6 text-center lg:text-left">
              Connect With Us
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your name*</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameInputRef}
                    className={`w-full p-3 rounded-lg focus:ring-accent focus:border-accent border ${
                      nameError ? "border-error" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    onKeyDown={handleNameKeyDown}
                    onPaste={handleNamePaste}
                    aria-describedby={nameError ? "name-error" : undefined}
                    aria-required="true"
                  />
                  {/* Name-specific error directly under the input */}
                  {nameError && (
                    <p id="name-error" className="text-error text-sm mt-1" role="alert">
                      {nameError}
                    </p>
                  )}
                  </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your email*</label>
                  <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" placeholder="you@example.com"  value={formData.email}
                    onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your message</label>
                <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent resize-y" placeholder="How can we help you?"   value={formData.message}
                  onChange={handleInputChange} ></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-navy-600 rounded border-gray-300 focus:ring-accent mt-1"  checked={formData.terms}
                  onChange={handleInputChange} />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <a href="/sms-and-marketing-terms" className="text-navy-600 hover:underline">SMS and Marketing terms and conditions</a>.
                </label>
              </div>
              <button type="submit" className="btn-accent px-10 py-4 font-bold"   disabled={issubmiting}
              >
                {issubmiting ? 'submiting...' : 'SUBMIT'}
              </button>
            </form>
            {error && <div className="mt-4 text-error">{error}</div>}
            {successMessage && <div className="mt-4 text-accent">{successMessage}</div>}
          </div>
          <div className="bg-navy-50 p-8 rounded-2xl card-elevated animate-slideInRight">
            <h2 className="text-4xl font-extrabold text-navy-800 mb-6 text-center lg:text-left">
             Network
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 text-justify">
             Accessing top-notch support for your targeted medical needs is effortless with our extensive network of experienced professionals.
            </p>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Specialized Healthcare Professionals</h3>
            <ul className="space-y-3 text-gray-700 text-left mb-6 text-justify">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient1")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Tap into a network of seasoned professionals with expertise in specific medical fields
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient2")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Ensure tailored guidance for your unique health requirements
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Dedicated Support</h3>
            <ul className="space-y-3 text-navy-500 text-left text-justify">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient3")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Our support team is ready to assist in connecting you with specialists in our network
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="url(#networkIconGradient4)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {gradientStops("networkIconGradient4")}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
               Enjoy peace of mind with our dedicated support for all your targeted medical inquiries and needs
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
