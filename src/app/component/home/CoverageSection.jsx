import React from "react";
import { Users, Briefcase, LifeBuoy, Clock } from "lucide-react";

// One-file React component (Tailwind CSS expected).
// Usage: <CoverageSection /> or pass props to customize text/image.

export default function CoverageSection({
  image = "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/coverage.webp",
  title = "Comprehensive Coverage, Simplified for You",
  subtitle = "We’re proud to help individuals and businesses discover coverage that truly fits their needs.",
  services = [
    {
      title: "Individual & Family Plans",
      text:
        "Tailored coverage options that fit your lifestyle, needs, and budget ensuring peace of mind for you and your loved ones.",
      icon: <Users className="h-6 w-6 text-sky-500" />,
    },
    {
      title: "Small Business Solutions",
      text:
        "Smart, affordable group plans designed to support small teams and growing businesses nationwide.",
      icon: <Briefcase className="h-6 w-6 text-sky-500" />,
    },
    {
      title: "Guided Enrollment Support",
      text:
        "Our licensed advisors make the enrollment process seamless helping you choose the right plan, every time.",
      icon: <LifeBuoy className="h-6 w-6 text-sky-500" />,
    },
    {
      title: "24/7 Member Assistance",
      text: "Because your health doesn’t wait — access real-time support anytime, anywhere.",
      icon: <Clock className="h-6 w-6 text-sky-500" />,
    },
  ],
}) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with subtle shapes */}
          <div className="order-1 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt="Coverage"
                className="w-full h-96 object-cover sm:h-[28rem] lg:h-[34rem] transform hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
            
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-2 lg:order-2">
            <div className="max-w-xl">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-900">
                {title}
              </h3>
              <p className="mt-4 text-lg text-gray-600">{subtitle}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s, idx) => (
                  <article
                    key={idx}
                    className="flex gap-4 items-start p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-900">{s.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{s.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* <div className="mt-8 flex gap-4">
                <button className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-sky-300">
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Mobile alternate layout: stacked with subtle divider */}
        <style jsx>{`
          @media (max-width: 1024px) {
            /* ensure image sits on top on small screens */
          }
        `}</style>
      </div>
    </section>
  );
}
