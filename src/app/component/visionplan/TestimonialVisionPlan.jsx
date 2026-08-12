"use client";

import { TestimonialSection } from '@/common/TestimonialSection';
import React, { useEffect, useState } from 'react'

export const TestimonialVisionPlan = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch FAQs data from public folder
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/data/testimonial/visionplan.json'); // Replace with your API endpoint
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {

          console.error('Error fetching testimonials:', error);

        }
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <TestimonialSection testimonials={testimonials} />
    </>
  )
}
