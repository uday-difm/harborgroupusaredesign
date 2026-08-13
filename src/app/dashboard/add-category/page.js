"use client";
import DashboardLayout from '@/app/component/DashboardLayout';
import React, { useState } from "react";
import { FormField } from '@/app/component/dashboard-ui/FormField';
import { useToast } from '@/app/component/dashboard-ui/Toast';

export default function AddCategory() {
  // Initialize as controlled values (never undefined)
  const [category, setCategory] = useState(""); 
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category.trim()) {
      addToast("Please enter a category.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/dashboard/addcategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: category.trim() }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        addToast(data.message || "Category added successfully!", "success");
        setCategory(""); // keep controlled input (empty string)
      } else {
        addToast(data.message || "An error occurred.", "error");
      }
    } catch (error) {
      setLoading(false);
      addToast("Failed to add category. Please try again.", "error");
      console.error(error);
    }
  };

  const handleCancel = () => {
    setCategory("");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-9 max-w-2xl mx-auto">
        <div className="card-elevated p-0 overflow-hidden">
          <div className="border-b border-navy-100 py-5 px-6 bg-navy-50/50">
            <h3 className="text-xl font-bold text-navy-900 font-display">Add Category</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6.5 space-y-6">
              <FormField
                label="Category"
                name="category"
                placeholder="Add Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <div className="flex flex-wrap justify-end gap-4 pt-4">
                {/* Cancel should NOT submit the form */}
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn-secondary"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary min-w-[120px]"
                >
                  {loading ? "Adding..." : "Add"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
