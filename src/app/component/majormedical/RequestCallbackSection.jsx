"use client";

import React from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import Image from 'next/image';

// A reusable component for the form input fields
const FormInput = ({ icon: Icon, type, name, placeholder, isTextArea = false }) => {
  const commonClasses = "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-300";
  
  return (
    <div className="relative" id="lifestyle-plan-form">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows="4"
          className={`${commonClasses} resize-none`}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={commonClasses}
        />
      )}
    </div>
  );
};

export const RequestCallbackSection = () => {
  return (
    <div className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Image Composition --- */}
          <div className="relative h-96 lg:h-[600px] animate-fade-in">
            <div className="relative w-full h-full">
                {/* Background Shapes */}
                <div className="absolute -top-8 -left-8 w-full h-full bg-gray-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-3xl shadow-2xl transform rotate-6"></div>
                
                {/* Image */}
                <div className="absolute inset-4">
                    <Image
                        src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/request-a-call-back.jpeg"
                        alt="A doctor using a tablet for a consultation"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full rounded-2xl shadow-xl"
                    />
                </div>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
              Request a Call Back?
            </h2>
            {/* <p className="mt-4 text-lg text-gray-600">
              Have questions or need assistance? Fill out the form below, and a member of our team will get back to you shortly.
            </p> */}
            
            <form className="mt-10 space-y-6">
                <FormInput icon={User} type="text" name="name" placeholder="Your name*" />
                <FormInput icon={Mail} type="email" name="email" placeholder="Your email*" />
                <FormInput icon={MessageSquare} name="message" placeholder="Your message" isTextArea={true} />

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start space-x-3">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-5 w-5 mt-1 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                    />
                    <div className="text-sm">
                        <label htmlFor="terms" className="text-gray-600">
                         By Submitting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our  <a href="#" className="font-semibold text-sky-600 hover:underline">SMS and Marketing terms and conditions.</a>.
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        SUBMIT
                        <Send className="ml-3 h-5 w-5" />
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* This style block is necessary for the custom animations. */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
