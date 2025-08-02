import React from 'react';

export const CostOptions = () => {


  const coverageBenefits = [
    "Tailored Premium Options",
    "Transparent Coverage Structure",
    "Comprehensive Coverage Scenarios",
  ];

  return (
    <div className={`min-h-screen bg-gray-50 font-inter flex items-center justify-center p-4 sm:p-8`}>
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden md:flex flex-row-reverse">
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <p className={`text-sm font-semibold text-sky-400 mb-2 flex items-center`}>
            <span className="inline-block w-6 h-0.5 bg-sky-400 mr-2 rounded-full"></span>
            Know about Cost Options
          </p>
          <h1 className={`text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-6 leading-tight`}>
            Cost Options and Coverage Scenarios
          </h1>
          <p className={`text-lg text-gray-600 mb-8 leading-relaxed text-justify`}>
            Our Lifestyle Plans offer programs that are good for your Wallet and better for your Well-being. We provide easy, simple, and professional options to suit your financial needs for maintaining a balanced lifestyle.
          </p>
          <ul className="space-y-4">
            {coverageBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full text-sky-500 flex items-center justify-center mr-3`}>
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
        <div className="md:w-1/2 flex items-center justify-center p-4 md:p-0">
          <img
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/lifestyle-Cost-Options.jpeg"
            alt="Doctor's hand with medical icons and 24/7 clock"
            className="w-full h-full object-cover rounded-lg md:rounded-none md:rounded-l-xl shadow-md md:shadow-none"

          />
        </div>

      </div>
    </div>
  );
};
