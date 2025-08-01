import React from 'react';

// Main App component
export const BenefitsofLifestylePlan = () => {
  return (
    // Background remains a darker gradient
    <div className="min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100 font-inter py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <BenefitsSection />
    </div>
  );
};

// Component for the Benefits Section
const BenefitsSection = () => {
  // Removed iconGradientDefs as icons will now be white
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white" // Icon color set to white
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Wellness Programs and Fitness Support',
      description:
        'Promote a healthy and active lifestyle with personalized guidance, tailored to your needs.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white" // Icon color set to white
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292V15a4 4 0 110 5.292M12 4.354a4 4 0 100 5.292M12 15a4 4 0 100 5.292"
          />
        </svg>
      ),
      title: 'Mental Health Coverage',
      description:
        'Mental health coverage to address mental well-being with the support and care you deserve.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white" // Icon color set to white
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: 'Preventive Health Services',
      description:
        'Our Plans also cover relationship Health, PTSD Recovery, Social Anxiety Relief and many more.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white" // Icon color set to white
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Tech Care Plans',
      description:
        'We have special Tech Team Plans to cater an unlimited 24/7 Tech Support along with device Protection.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto  p-8 md:p-12 lg:p-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 leading-tight mb-4">
         Benefits of Lifestyle Plan
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
         At Harbor Group USA, we understand the significance of maintaining a balanced and fulfilling lifestyle. Our Lifestyle Plans offer a range of benefits to cater to your specific needs.
        </p>
        {/* <div className="flex justify-center mt-6">
          <span className="inline-block w-24 h-1 bg-sky-400 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-sky-300 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-sky-200 rounded-full"></span>
        </div> */}
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

// Component for individual Benefit Card
const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="flex-shrink-0 p-3 rounded-full mb-4 sm:mb-0 sm:mr-6 bg-gradient-to-br from-sky-400 to-cyan-400"> {/* Icon background gradient */}
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
