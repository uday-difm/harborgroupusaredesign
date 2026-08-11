"use client";

import React from "react";
import { Users, Briefcase, LifeBuoy, Clock } from "lucide-react";
import { motion, useTransform, useReducedMotion } from "framer-motion";
import { useParallax } from "@/comman/motion/useParallax";
import { useVelocityEffect } from "@/comman/motion/useVelocityEffect";
import { HarborArc } from "@/comman/HarborArc";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 }
  }
};

export default function CoverageSection({
  image = "https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/coverage.webp",
  title = "Comprehensive Coverage, Simplified for You",
  subtitle = "We’re proud to help individuals and businesses discover coverage that truly fits their needs.",
  services = [
    {
      title: "Individual & Family Plans",
      text:
        "Tailored coverage options that fit your lifestyle, needs, and budget ensuring peace of mind for you and your loved ones.",
      icon: <Users className="h-6 w-6 text-accent" />,
    },
    {
      title: "Small Business Solutions",
      text:
        "Smart, affordable group plans designed to support small teams and growing businesses nationwide.",
      icon: <Briefcase className="h-6 w-6 text-accent" />,
    },
    {
      title: "Guided Enrollment Support",
      text:
        "Our licensed advisors make the enrollment process seamless helping you choose the right plan, every time.",
      icon: <LifeBuoy className="h-6 w-6 text-accent" />,
    },
    {
      title: "24/7 Member Assistance",
      text: "Because your health doesn’t wait — access real-time support anytime, anywhere.",
      icon: <Clock className="h-6 w-6 text-accent" />,
    },
  ],
}) {
  const imageParallax = useParallax(10);
  const blobParallax = useParallax(25);
  
  const prefersReduced = useReducedMotion();
  const { skew } = useVelocityEffect(1.5, 4);

  return (
    <section className="bg-navy-900 text-white py-24 font-body relative overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[140px] rounded-full pointer-events-none"></div>
      <HarborArc position="topLeft" className="text-white opacity-5" />

      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Tailored Healthcare Solutions</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-lg text-navy-200 leading-relaxed">{subtitle}</p>

              {/* 2x2 Services Cards */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((s, idx) => (
                  <motion.article
                    key={idx}
                    style={{ skewY: prefersReduced ? 0 : skew }}
                    className="flex flex-col p-6 rounded-2xl border border-navy-800 bg-navy-850/60 backdrop-blur-md shadow-lg hover:border-accent/50 hover:bg-navy-800/80 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center shadow-inner mb-4 group-hover:bg-accent group-hover:border-accent transition-colors">
                      {React.cloneElement(s.icon, { className: "h-5 w-5 text-accent group-hover:text-navy-950 transition-colors" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">{s.title}</h3>
                      <p className="text-sm text-navy-300 mt-2 leading-relaxed">{s.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-800"
              ref={imageParallax.ref}
              style={{ y: imageParallax.y }}
            >
              <img
                src={image}
                alt="Coverage"
                className="w-full h-[420px] lg:h-[560px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
            
            {/* Ambient Blob */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" 
              ref={blobParallax.ref}
              style={{ y: blobParallax.y }}
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
