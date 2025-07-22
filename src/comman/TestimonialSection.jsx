"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export const TestimonialSection = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrent(index);
    startAutoSlide();
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We are proud to have helped so many businesses and individuals find their perfect health plan.
          </p>
        </div>

        <div
          className="mt-16 relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="relative overflow-hidden w-full" style={{ height: '28rem' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: index === current ? 1 : 0,
                  zIndex: index === current ? 10 : 1,
                }}
              >
                <div className="h-full flex flex-col items-center justify-center p-4">
                  <div className="relative max-w-2xl mx-auto w-full bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
                    {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-gray-50 shadow-md"
                      />
                    </div> */}
                    <div className="mt-12 text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="mt-6">
                        <div className="font-bold text-indigo-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.testimonial}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-sky-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
