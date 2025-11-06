import React from 'react'

export const EligibilitycriteriaLifestylePlan = () =>{
   
  const eligibilityCriteria = [
    {
      title: "Resident of the United States",
      description: "Our Lifestyle Plans are accessible to individuals and families residing in the United States.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a8.75 8.75 0 0 0 4.715-6.765H18a2.25 2.25 0 0 0 2.25-2.25V12a2.25 2.25 0 0 0-2.25-2.25h-1.115a8.75 8.75 0 0 0-4.716-6.765l-.07-.04-.028-.015a.75.75 0 0 0-.723 0L11.47 3.21l-.07.04A8.75 8.75 0 0 0 6.75 9.75H5.25A2.25 2.25 0 0 0 3 12v.75a2.25 2.25 0 0 0 2.25 2.25h1.115a8.75 8.75 0 0 0 4.716 6.765ZM12 12.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Age Eligibility",
      description: "Tailored to cover individuals of all ages, ensuring coverage throughout various life stages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Ideal for a Balanced Lifestyle",
      description: "Perfect for those who prioritize maintaining a balanced and fulfilling lifestyle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.75 3.75 0 0 0 7.373 0l2.558-9.592a.75.75 0 0 0 .362-.278h1.386a.75.75 0 0 0 0-1.5H2.25ZM10.5 18.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
        </svg>
      ),
    },
    {
      title: "Citizenship",
      description: "US citizenship or legal residency status is a prerequisite for enrollment in our Lifestyle Plans.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1.5-4.5h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5Zm-1.5 6h6a.75.75 0 0 0 0-1.5H7.5a.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
      ), 
    },
  ];

  return (
    <div className={`min-h-screen bg-blue-50 font-inter flex flex-col items-center justify-center p-4 sm:p-8`}>
      <div className="max-w-4xl w-full  overflow-hidden p-6 sm:p-10 text-center">
        <h1 className={`text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-4 leading-tight`}>
       Eligibility Criteria of Lifestyle Plan
        </h1>
        <p className={`text-lg text-gray-600 mb-12 max-w-2xl mx-auto`}>
        Open to individuals and families, our Lifestyle Plans ensure that comprehensive support for your lifestyle needs is within reach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eligibilityCriteria.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className={`w-16 h-16 rounded-full bg-sky-100 text-sky-400 flex items-center justify-center mb-4 shadow-md`}>
                {item.icon}
              </div>
              <h2 className={`text-xl font-semibold text-gray-800 mb-2`}>
                {item.title}
              </h2>
              <p className={`text-base text-gray-600 text-justify`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

