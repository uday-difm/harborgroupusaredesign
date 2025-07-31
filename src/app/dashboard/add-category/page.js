"use client";
import DashboardLayout from '@/app/component/DashboardLayout'
import React, { useState } from "react";

export default function AddCategory() {
      const [category, setCategory] = useState( ); // State for input value
  const [loading, setLoading] = useState(false); // Loading state to show loading state
  const [message, setMessage] = useState( ); // To show success or error message

   const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    if (!category) {
      setMessage("Please enter a category.");
      return;
    }

    setLoading(true); // Start loading

    try {
      // Make the API call
      const response = await fetch("/api/dashboard/addcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }), // Send category data
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage(data.message || "Category added successfully!");
        setCategory(""); // Reset the input after successful addition
      } else {
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setLoading(false);
      setMessage("Failed to add category. Please try again.");
      console.error(error);
    }
  };

   const handleCancel = () => {
    setCategory(""); // Reset the input field
    setMessage("");  // Clear any previous messages
  };
  return (
    <>
    <DashboardLayout>
       <div className="flex flex-col gap-9">
      {/* <!-- Contact Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Add Category
          </h3>
        </div>
        <form onSubmit={handleSubmit} >
          
          <div className="p-6.5">

          <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Category
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <input placeholder="Add Category"   className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                 value={category}
                    onChange={(e) => setCategory(e.target.value)} // Capture input
                />
                  
              </div>
            </div>

         
            <div className="flex justify-end gap-4.5">
                <button
                  className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                  type="submit"
                     onClick={handleCancel} // Reset input and message
                  >
                  Cancel
                </button>
                <button
                  className="flex justify-center rounded bg-sky-400 py-2 px-6 font-medium text-gray hover:shadow-1"
                  type="submit"
                disabled={loading} // Disable the button while loading
                >
                  {loading ? "Adding..." : "Add"}
                </button>
               
              </div>
          </div>
        </form>
          {message && (
            <div className="mt-4 text-center text-red-500">
              {message}
            </div>
          )}
      </div>
    </div>
    </DashboardLayout>
    </>
  )
}
