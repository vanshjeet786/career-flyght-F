"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, TrendingUp, Shield, Network, ArrowUpRight, Award } from "lucide-react";
import Link from "next/link";

export default function WhatIsNinthBoxPage() {
  const springTransition = { type: "spring" as const, stiffness: 300, damping: 45 };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-10 transition-colors font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Overview
      </Link>

      <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-6">
            <Briefcase className="w-4 h-4" />
            <span>For Senior Executives</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight dark:text-white">
            Cement your <span className="text-indigo-600 dark:text-indigo-400">legacy</span>.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            9thBox is the premier tier of CareerFlyght, tailored exclusively for middle and top management. When you've already achieved success, the next step requires precision, elite networking, and strategic executive mobility.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/ninthbox" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 flex items-center gap-2">
              Enter 9thBox Portal
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springTransition, delay: 0.1 }}
        >
          <div className="bg-gray-900 rounded-[2.5rem] p-8 border border-gray-800 shadow-2xl text-white">
             <h3 className="text-2xl font-bold mb-6">Exclusive 9thBox Offerings:</h3>
             <ul className="space-y-6">
               {[
                 { icon: TrendingUp, title: "Executive Mobility", desc: "Strategic transitions between large and small organizations at the CXO/CEO level." },
                 { icon: Network, title: "Niche Placement", desc: "Confidential talent placement through elite executive search firms." },
                 { icon: Award, title: "High-End Profiling", desc: "Curated personal branding, thought leadership, and advisory board placements." },
                 { icon: Shield, title: "Mentoring & Coaching", desc: "Identification of specialized coaches to develop advanced CXO capabilities." }
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                     <item.icon className="w-6 h-6 text-indigo-400" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg">{item.title}</h4>
                     <p className="text-gray-400">{item.desc}</p>
                   </div>
                 </li>
               ))}
             </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...springTransition, delay: 0.2 }}
        className="mt-24"
      >
        <div className="bg-indigo-50 dark:bg-zinc-900/50 rounded-[3rem] p-10 md:p-16 text-center border border-indigo-100 dark:border-zinc-800">
           <h2 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">Mastering the Highest Levels</h2>
           <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              At the senior management level, the focus shifts from managing work to "Knowing People" and "Managing People". 9thBox provides experiential leadership simulations, case-study led masterclasses, and benchmarking against peers to ensure you remain at the pinnacle of your industry.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Benchmarking", desc: "Constant factual information to benchmark against peers in your industry and function." },
                { title: "Thought Leadership", desc: "Resources and support to publish industry reports, surveys, and professional insights." },
                { title: "Professional Network", desc: "Engage with a curated network of professionals across global markets." }
              ].map((feature, i) => (
                <div key={i} className="bg-white dark:bg-zinc-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-zinc-700">
                   <h4 className="font-bold text-xl mb-3 dark:text-white">{feature.title}</h4>
                   <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </motion.div>
    </div>
  );
}
