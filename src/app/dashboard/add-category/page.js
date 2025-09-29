"use client";
import DashboardLayout from '@/app/component/DashboardLayout'
import React, { useState } from "react";

export default function AddCategory() {
  // Initialize as controlled values (never undefined)
  const [category, setCategory] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category.trim()) {
      setMessage("Please enter a category.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/dashboard/addcategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: category.trim() }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage(data.message || "Category added successfully!");
        setCategory(""); // keep controlled input (empty string)
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
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
    setCategory("");
    setMessage("");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Add Category</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Category</label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <input
                    placeholder="Add Category"
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4.5">
                {/* Cancel should NOT submit the form */}
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center rounded bg-sky-400 py-2 px-6 font-medium text-gray hover:shadow-1"
                >
                  {loading ? "Adding..." : "Add"}
                </button>
              </div>
            </div>
          </form>

          {message && (
            <div className="mt-4 text-center text-green-600">{message}</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
