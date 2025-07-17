import React from 'react';

// Main App component
export const CignaPlans= () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex items-center justify-center font-inter">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center py-6 text-blue-800">Cigna Plans</h1>
        {/* Re-added overflow-x-auto to allow horizontal scrolling for wider content on smaller screens */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider w-1/4">
                  Major Medical Plans
                </th>
                <th scope="col" className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/4">
                  Ultra 9000
                </th>
                <th scope="col" className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/4">
                  Ultra 8000
                </th>
                <th scope="col" className="px-3 py-3 text-center text-xs font-font-medium uppercase tracking-wider w-1/4">
                  Ultra 5000
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Plan Information */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Plan Information
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Network</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Open Access Plus</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Open Access Plus</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Open Access Plus</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Plan Availability</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">All 50 States</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">All 50 States</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">All 50 States</td>
              </tr>

              {/* Benefits Section */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Benefits
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Individual Deductible</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$4,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$3,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$7,000</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Family Deductible</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$7,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$6,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$14,000</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Individual Max Out of Pocket</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$8,500</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$8,500</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$9,100</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Family Max Out of Pocket</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$18,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$18,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$18,200</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Coinsurance</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">70 %</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">70 %</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">60%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Prevention Care</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Covered 100%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Covered 100%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Covered 100%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Lifetime Maximum</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">No Maximum</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">No Maximum</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">No Maximum</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Primary Care Copay</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$30</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$30</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$30</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Specialist Care Copay</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$60</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$60</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$60</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Urgent Care</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$80</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$80</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$80</td>
              </tr>

              {/* Laboratory Section */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Laboratory
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Diagnostic Test</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$30 copay/visit</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$30 copay/visit</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>

              {/* Radiology Services Section */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Radiology Services
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Facility (CT, PET, MRI) up to plan allowance</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Facility: 30% of plan allowance, deductible does not apply</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Facility: 30% of plan allowance, deductible does not apply</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Professional Fees</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Professional: 30% after deductible</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Professional: 30% after deductible</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>

              {/* Facility & Professional Services Section */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Facility & Professional Services
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Emergency Room - Professional Fee</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% after deductible Out of network is subject to plan allowable fee.</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% after deductible Out of network is subject to plan allowable fee.</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Emergency Room - Facility</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% of plan allowable, deductible does not apply</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% of plan allowable, deductible does not apply</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Inpatient Hospital - Physician</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Inpatient - Facility</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Outpatient Hospital - Physician</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% after deductible, subject to plan allowable fee</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% after deductible, subject to plan allowable fee</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Outpatient Hospital - Facility</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% of plan allowable, deductible does not apply</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">30% of plan allowable, deductible does not apply</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Deductible then 30%</td>
              </tr>

              {/* Out of Network Section */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Out of Network
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Deductible</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$7,000/$14,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$6,000/$12,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$10,000/$20,000</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">MOOP</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$18,000/$37,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$18,000/$37,000</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$20,000/$40,000</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Coinsurance</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">40%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">40%</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">40%</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Reimbursement</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Plan Allowable Fee</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Plan Allowable Fee</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Plan Allowable Fee</td>
              </tr>

              {/* Prescription Drug Benefit Section */}
              <tr className="bg-blue-50">
                <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-gray-900" colSpan="4">
                  Prescription Drug Benefit
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Generic</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$15</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$15</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$15</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Preferred Brand</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$50</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$50</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$50</td>
              </tr>
              <tr>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">Non-Preferred Brand</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$100</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-center text-gray-900">$100</td>
                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


