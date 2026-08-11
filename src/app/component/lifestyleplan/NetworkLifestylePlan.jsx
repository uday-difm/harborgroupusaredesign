import React from 'react';
import Image from 'next/image';


export const NetworkLifestylePlan = () => {
  // Define a light color palette inspired by the logo
  const colors = {
    primaryLightBlue: 'bg-navy-50', // Very light blue for background
    secondaryLightGray: 'bg-navy-50', // Light gray for sections
    accentBlue: 'text-blue-700', // A slightly darker blue for emphasis
    checkmarkGreen: 'text-accent', // Standard green for checkmarks
    darkText: 'text-gray-800', // Dark text for readability
    mediumText: 'text-navy-500', // Medium text for descriptions
  };

  const benefits = [
    "Access expert lifestyle coaches through our network.",
    "Receive tailored guidance for your unique lifestyle challenges.",
    "Benefit from an expansive network covering every corner of the United States.",
    "Find qualified specialists conveniently for accessible lifestyle support.",
    "Our dedicated support team helps you connect with lifestyle coaches and specialists.",
  ];

  return (
    <div className={`min-h-screen bg-navy-50 font-inter flex items-center justify-center p-4 sm:p-8`}>
      <div className="max-w-6xl w-full bg-white card-elevated rounded-card overflow-hidden md:flex">
        {/* Left Section: Content */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
    
          {/* Header */}
          <p className={`text-sm font-semibold text-sky-400 mb-2 flex items-center`}>
            <span className="inline-block w-6 h-0.5 bg-sky-400 mr-2 rounded-full"></span>
           Know about our network
          </p>
          <h1 className={`text-4xl sm:text-5xl font-extrabold text-navy-800 mb-6 leading-tight`}>
            Network
          </h1>

          {/* Introduction */}
          <p className={`text-lg text-navy-500 mb-8 leading-relaxed text-justify`}>
           Accessing support for your lifestyle needs is effortless with our extensive network of experienced professionals.
          </p>

          {/* Benefits List */}
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full text-accent flex items-center justify-center mr-3`}>
                  {/* Checkmark Icon (Inline SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9.75 12.375a.75.75 0 0 1-1.12.02L3.248 11.25a.75.75 0 0 1 1.06-1.06l5.24 5.24L19.708 4.626a.75.75 0 0 1 .208-.001Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className={`text-base text-gray-800 flex-1`}>
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex items-center justify-center p-4 md:p-0">
          <Image 
          width = {600}
          height = {400}
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Lifestyle-network.jpeg" // Path to your main image
            alt="Doctor interacting with patient"
            className="w-full h-full object-cover rounded-lg md:rounded-none md:rounded-r-xl shadow-md md:shadow-none"
           
          />
        </div>
      </div>
    </div>
  );
};

