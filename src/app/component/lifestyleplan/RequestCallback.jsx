"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
        setFormData({
          name: "",
          email: "",
          message: "",
          terms: false,
        });
        setNameError("");
      } else {
        setError(data.error || "Something went wrong, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-navy-50 font-inter flex flex-col items-center justify-center p-4 sm:p-8`} id="lifestyle-plan-form">
      <div className="max-w-7xl w-full overflow-hidden p-6 sm:p-10 text-center">
        {/* Header Section */}
        <h1 className={`text-4xl sm:text-5xl font-extrabold text-navy-800 mb-4 leading-tight`}>Request a Call Back?</h1>
        <div className="md:flex md:space-x-8 items-stretch">
          <div className="md:w-1/2 mb-8 md:mb-0 relative min-h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Lifestyle-plan-hero-section.jpeg"
              alt="Doctor using a tablet"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Section: Form */}
          <div className="md:w-1/2 text-left">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleNameKeyDown}
                  onPaste={handleNamePaste}
                  aria-required="true"
                  aria-describedby={nameError ? "name-error" : undefined}
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition duration-200 ${
                    nameError ? "border-error border" : "border-gray-300 border"
                  }`}
                />
                {/* name-specific error directly below the input */}
                {nameError && (
                  <p id="name-error" className="text-sm text-error mt-1" role="alert">
                    {nameError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border-gray-300 border focus:ring-2 focus:ring-accent focus:outline-none transition duration-200`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-gray-800 mb-1`}>
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg border-gray-300 border focus:ring-2 focus:ring-accent focus:outline-none transition duration-200`}
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-1 mr-2 rounded text-accent focus:ring-accent"
                />
                <label htmlFor="terms" className={`text-sm text-navy-500`}>
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also agree to our{" "}
                  <a href="/sms-and-marketing-terms" className={`font-semibold text-primary hover:underline`}>
                    SMS and Marketing terms and conditions
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg bg-accent text-white hover:bg-accent-dark transition duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Message Box */}
      {showMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg card-elevated text-center max-w-sm mx-auto">
            <p className="text-lg font-semibold mb-4 text-gray-800">{messageContent}</p>
            <button
              onClick={closeMessageBox}
              className="btn-accent px-10 py-4 font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Display form-wide error message at bottom (kept for general validation) */}
      {error && <div className="mt-4 text-error">{error}</div>}
    </div>
  );
};
