import React from "react";
import { Users, Briefcase, LifeBuoy, Clock } from "lucide-react";
import { motion, useTransform } from "framer-motion";
import { useParallax } from "@/comman/motion/useParallax";
import { useVelocityEffect } from "@/comman/motion/useVelocityEffect";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

// One-file React component (Tailwind CSS expected).
// Usage: <CoverageSection /> or pass props to customize text/image.

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
  
  const { skew, blur } = useVelocityEffect(1.5, 3);
  const velocityBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <section className="section-light">
      <div className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-center"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left: Image with subtle shapes (Order changed for desktop right side bleed) */}
          <div className="order-1 lg:order-2 relative w-full xl:-mr-20">
            <motion.div 
              className="relative rounded-card overflow-hidden shadow-lg img-duotone"
              ref={imageParallax.ref}
              style={{ y: imageParallax.y, skewY: skew, filter: velocityBlur }}
            >
              <img
                src={image}
                alt="Coverage"
                className="w-full h-96 object-cover sm:h-[28rem] lg:h-[34rem] transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            {/* Decorative Element */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-navy-50 rounded-full mix-blend-multiply opacity-50 blur-3xl pointer-events-none" 
              ref={blobParallax.ref}
              style={{ y: blobParallax.y }}
            />
          </div>

          {/* Right: Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h3 className="text-h2 font-display font-bold text-navy-800">
                {title}
              </h3>
              <p className="mt-4 text-lg text-navy-500 leading-relaxed">{subtitle}</p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((s, idx) => (
                  <article
                    key={idx}
                    className={`flex flex-col p-6 rounded-card border transition-all duration-300 ${
                      idx === 0 
                        ? "md:col-span-2 bg-navy-50 border-navy-100" 
                        : idx === 3
                        ? "md:col-span-2 bg-accent/5 border-accent/20"
                        : "bg-white border-navy-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-navy-100 flex items-center justify-center shadow-sm mb-4">
                      {React.cloneElement(s.icon, { strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-800">{s.title}</h4>
                      <p className="text-sm text-navy-500 mt-2 leading-relaxed">{s.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile alternate layout: stacked with subtle divider */}
        <style jsx>{`
          @media (max-width: 1024px) {
            /* ensure image sits on top on small screens */
          }
        `}</style>
      </div>
    </section>
  );
}
