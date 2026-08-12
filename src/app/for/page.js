"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ShieldCheck, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HarborArc } from "@/common/HarborArc";
import { SectionGlow } from "@/common/SectionGlow";

const audiences = [
  {
    eyebrow: "For partners",
    title: "For Brokers",
    description:
      "Build stronger client relationships with a broader selection of plans, expert back-office support, and a team that moves at your pace.",
    href: "/for-brokers",
    action: "Explore broker solutions",
    icon: BriefcaseBusiness,
    tone: "dark",
    points: ["Broad carrier access", "Dedicated wholesale support"],
  },
  {
    eyebrow: "For your health",
    title: "For Individuals",
    description:
      "Find health coverage that meets your needs and your budget, with clear guidance from a licensed advisor at every step.",
    href: "/for-individuals",
    action: "Explore individual plans",
    icon: UserRound,
    tone: "light",
    points: ["Plans built around you", "Clear, personal guidance"],
  },
];

export default function ForPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <title>Harbor Group USA | Health Plans & Broker Solutions</title>
      <meta name="keywords" content="health plans, small business health, individual health plans, broker solutions, healthcare coverage, benefits, group health, affordable health plans" />
      <meta name="description" content="Harbor Group USA offers tailored health plans for brokers, individuals, and small businesses. Get comprehensive coverage and expert support." />
      <link rel="canonical" href="https://harborgroupusa.com/for/" />

      <section className="relative overflow-hidden bg-surface pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(201,162,75,0.14),transparent_24rem),radial-gradient(circle_at_10%_90%,rgba(208,212,232,0.7),transparent_30rem)]" />
        <HarborArc position="topRight" className="text-navy-200 opacity-50" />
        <SectionGlow position="bottomLeft" className="opacity-35" />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Who we serve</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-bold leading-[1.02] tracking-tight text-navy-900">
              Coverage guidance, built around your role.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-navy-600">
              Whether you are supporting clients or choosing coverage for yourself, Harbor makes the next step feel clear and considered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-alt py-16 md:py-24 border-y border-navy-100/60">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#455E97 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map(({ eyebrow, title, description, href, action, icon: Icon, tone, points }, index) => {
            const isDark = tone === "dark";
            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative min-h-[380px] overflow-hidden rounded-2xl border p-8 md:p-10 flex flex-col ${isDark ? "bg-navy-900 border-navy-800 text-white" : "bg-white border-navy-100 shadow-lg text-navy-900"}`}
              >
                <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${isDark ? "bg-accent/20" : "bg-navy-100"}`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${isDark ? "bg-white/10 border-white/15 text-accent" : "bg-navy-50 border-navy-100 text-accent"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`mt-8 block text-xs font-bold uppercase tracking-widest ${isDark ? "text-accent" : "text-navy-500"}`}>{eyebrow}</span>
                  <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold ${isDark ? "text-white" : "text-navy-900"}`}>{title}</h2>
                  <p className={`mt-4 max-w-md text-base md:text-lg leading-relaxed ${isDark ? "text-navy-200" : "text-navy-600"}`}>{description}</p>
                  <ul className={`mt-7 space-y-2 text-sm font-semibold ${isDark ? "text-navy-100" : "text-navy-700"}`}>
                    {points.map((point) => <li key={point} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" />{point}</li>)}
                  </ul>
                </div>
                <Link href={href} className={`relative z-10 mt-auto pt-10 inline-flex items-center gap-2 font-bold transition-transform group-hover:translate-x-1 ${isDark ? "text-accent" : "text-navy-900"}`}>
                  {action}<ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
