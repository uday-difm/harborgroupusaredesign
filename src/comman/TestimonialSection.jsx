"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

export const TestimonialSection = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrent(0); // Reset to first when testimonials change

    if (intervalRef.current) clearInterval(intervalRef.current);

    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [testimonials]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="section-tint">
      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
        <div className="text-center">
          <h2 className="text-h2 font-display font-bold text-navy-800 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-navy-500 leading-relaxed">
            We are proud to have helped so many businesses and individuals find their perfect health plan.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="relative overflow-hidden w-full" style={{ height: "24rem" }}>
            {testimonials.length === 0 ? (
              <div className="flex items-center justify-center h-full text-navy-400">
                No testimonials yet. Please check back later.
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center"
                  style={{
                    opacity: index === current ? 1 : 0,
                    zIndex: index === current ? 10 : 1,
                  }}
                >
                  <div className="relative max-w-2xl w-full bg-white p-8 pt-16 rounded-card shadow-lg border border-navy-100 text-center mx-4">
                    {/* ✅ Avatar overlapping border */}
                    {testimonial.image && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>
                    )}

                    {/* Stars */}
                    <div className="flex justify-center mb-4 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-current" />
                      ))}
                    </div>

                    {/* Name */}
                    <div className="font-bold text-navy-800 text-lg mb-4">
                      {testimonial.name}
                    </div>

                    {/* Text */}
                    <div className="text-base text-navy-500 leading-relaxed text-justify px-4">{testimonial.testimonial}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Dots */}
          {testimonials.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-accent scale-125" : "bg-navy-200 hover:bg-navy-300"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
