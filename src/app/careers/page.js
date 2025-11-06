"use client";

import Link from 'next/link';
import React, { useState } from 'react'

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!form.terms) {
      setError("You must accept the terms before submiting.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setResult("Form submitted successfully!");
      setForm({ name: "", email: "", subject: "", message: "", terms: false });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <title>Careers at Harbor Group USA | Join Our Team</title>
      <meta name="keywords" content="Harbor Group USA careers, job openings, healthcare jobs, Plans careers, work at Harbor Group, employment opportunities, join our team, health industry jobs" />
      <meta name="description" content="Explore rewarding careers at Harbor Group USA. Join us to deliver top health coverage solutions and make a real impact on lives." />
      <meta property="og:title" content="Careers at Harbor Group USA | Join Our Team" />
      <meta property="og:description" content="Explore rewarding careers at Harbor Group USA. Join us to deliver top health coverage solutions and make a real impact on lives." />
      <link rel="canonical" href="https://harborgroupusa.com/careers/" />
      <meta property="og:url" content="https://harborgroupusa.com/careers/" />
      <meta property="og:image" content="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png" />
      <div
        className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter overflow-hidden"
        style={{
          backgroundImage: `url('https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/careers-page-scaled.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white/70"></div>
        <div className="relative  rounded-3xl  p-8 md:p-12 max-w-6xl w-full text-left transform transition-all duration-700 ease-out animate-fade-in-up md:flex md:items-center md:justify-between z-10">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob-1 hidden md:block"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob-2 hidden md:block"></div>
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider mb-2 animate-slide-in-top">
              Career&apos;s
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-900 mb-6 leading-tight animate-slide-in-left">
              Welcome to Harbor Group USA <span className="text-sky-500">Careers Page!</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed animate-fade-in-delay-text text-justify">
              At Harbor Group USA, we believe in fostering a workplace where talent thrives, innovation flourishes, and employees are empowered to make a real impact in the world of health plans. As a leading provider of Health Plans in the United States, we are dedicated to ensuring the well-being of individuals and families by offering comprehensive and affordable healthcare coverage. Explore careers with us and join a team committed to transforming healthcare.
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg animate-fade-in-delay-form">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in touch with us for career&apos;s</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400"
                  placeholder="Your name*"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400"
                  placeholder="Your email*"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400"
                  placeholder="Subject*"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="bg-transparent appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                  By submiting you allow our team to reach out to you via email or phone as submitted information by you and you also allow to agree to our <Link href="/sms-and-marketing-terms" className="text-blue-600 hover:underline">SMS and Marketing terms and conditions</Link>.
                </label>
              </div>
              {error && <div className="text-red-600 mb-2">{error}</div>}
              {result && <div className="text-green-600 mb-2">{result}</div>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
              >
                {loading ? "submiting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideInTop {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-20px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInDelayText {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes fadeInDelayForm {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes blob1 {
              0%, 100% { transform: translateY(0) translateX(0) scale(1); }
              30% { transform: translateY(-10px) translateX(15px) scale(1.1); }
              60% { transform: translateY(5px) translateX(-10px) scale(0.9); }
            }
            @keyframes blob2 {
              0%, 100% { transform: translateY(0) translateX(0) scale(1); }
              40% { transform: translateY(10px) translateX(-15px) scale(1.1); }
              70% { transform: translateY(-5px) translateX(10px) scale(0.9); }
            }

            .animate-fade-in-up {
              animation: fadeInUp 0.8s ease-out forwards;
            }
            .animate-slide-in-top {
              animation: slideInTop 0.7s ease-out forwards;
            }
            .animate-slide-in-left {
              animation: slideInLeft 0.7s ease-out forwards;
              animation-delay: 0.2s;
              opacity: 0;
            }
            .animate-fade-in-delay-text {
              animation: fadeInDelayText 1s ease-out forwards;
              animation-delay: 0.4s;
              opacity: 0;
            }
            .animate-fade-in-delay-form {
              animation: fadeInDelayForm 1s ease-out forwards;
              animation-delay: 0.6s;
              opacity: 0;
            }
            .animate-blob-1 {
              animation: blob1 10s infinite alternate ease-in-out;
            }
            .animate-blob-2 {
              animation: blob2 12s infinite alternate-reverse ease-in-out;
            }
          `}</style>
      </div>
    </>
  );
}
