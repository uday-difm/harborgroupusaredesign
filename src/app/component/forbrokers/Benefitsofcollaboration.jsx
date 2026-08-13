"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DollarSign, Headphones, Users, Unlock } from 'lucide-react';
import { SectionGlow } from '@/common/SectionGlow';

export const Benefitsofcollaboration = () => {
  const benefits = [
    {
      title: "Competitive Rates",
      description: "Stay ahead in the competitive landscape with access to our competitive rates. Our partnerships are designed to empower you with pricing advantages, giving your clients cost-effective options.",
      icon: <DollarSign className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Comprehensive Support",
      description: "Benefit from our dedicated support system. As a partner, you're not alone. Our team is here to assist you in navigating through processes, clarifying queries, and ensuring a smooth collaboration.",
      icon: <Headphones className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Group Buying Power",
      description: "Leverage our collective strength for better deals. Joining forces with The Harbor Group grants you access to group buying power, ensuring competitive rates that stand out in the market.",
      icon: <Users className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Exclusive Access",
      description: "Unlock exclusive resources and information. Being a Harbor Group partner means gaining access to insights, updates, and tools that enhance your capabilities and keep you well-informed.",
      icon: <Unlock className="w-8 h-8" strokeWidth={1.5} />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section-light relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <SectionGlow position="top" color="rgba(26, 46, 91, 0.4)" />

      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto relative z-10">

        {/* Visual Header Banner */}
        <motion.div
          className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply z-10"></div>
          <Image
            src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/home/Benefits-of-collaboration.jpeg"
            alt="Benefits of Collaboration"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Partnership Benefits
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Why Partner With Us?
            </h2>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="card-elevated bg-white p-8 md:p-10 flex flex-col items-start border-l-4 border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-navy-50 text-accent flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-navy-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
