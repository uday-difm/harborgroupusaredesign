"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { HarborArc } from "@/comman/HarborArc";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const TestimonialSection = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrent(0);

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

  return (
    <section className="bg-surface-alt py-24 font-body border-b border-navy-100/60 relative overflow-hidden">
      <HarborArc position="bottomRight" className="text-navy-200 opacity-10" />
      <motion.div 
        className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Client Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-lg text-navy-600">
            We are proud to have helped so many businesses and individuals find their perfect health plan.
          </p>
        </div>

        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden w-full min-h-[300px] sm:min-h-[260px]">
            {testimonials.length === 0 ? (
              <div className="flex items-center justify-center h-full text-navy-400 font-medium">
                No testimonials yet. Please check back later.
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center"
                  style={{
                    opacity: index === current ? 1 : 0,
                    transform: index === current ? "scale(1) translateY(0)" : "scale(0.96) translateY(12px)",
                    pointerEvents: index === current ? "auto" : "none",
                    zIndex: index === current ? 10 : 1,
                  }}
                >
                  <div className="relative w-full bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-navy-100/80 text-center">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-navy-100 stroke-[1.5] -z-0 pointer-events-none" />

                    {/* Avatar */}
                    {testimonial.image && (
                      <div className="relative z-10 mx-auto mb-4 w-16 h-16 rounded-full overflow-hidden border-2 border-accent shadow-md">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Rating Stars using theme accent color (#C9A24B) */}
                    <div className="flex justify-center mb-3 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>

                    {/* Client Name */}
                    <h3 className="font-bold text-navy-900 font-display text-lg mb-3">
                      {testimonial.name}
                    </h3>

                    {/* Quote Text */}
                    <p className="text-base text-navy-600 leading-relaxed italic max-w-xl mx-auto">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center space-x-2.5 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-accent" : "w-2.5 bg-navy-200 hover:bg-navy-300"
                  }`}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
