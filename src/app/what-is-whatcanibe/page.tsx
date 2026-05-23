"use client";

import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Target, Compass, BookOpen, Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WhatIsWhatCanIBePage() {
  const springTransition = { type: "spring" as const, stiffness: 300, damping: 45 };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-10 transition-colors font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Overview
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>For Students & Graduates</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight dark:text-white">
            Launch your career with <span className="text-blue-600 dark:text-blue-400">clarity</span>.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            WhatCanIBe is a specialized program under the CareerFlyght umbrella designed specifically for the critical early stages of your professional life. We help you answer the most important question: "What can I be?"
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/whatcanibe" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
              Enter WhatCanIBe Portal
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
          <div className="bg-gray-50 dark:bg-zinc-900/80 rounded-[2.5rem] p-8 border border-gray-100 dark:border-zinc-800 shadow-xl">
             <h3 className="text-2xl font-bold mb-6 dark:text-white">How we help you build your foundation:</h3>
             <ul className="space-y-6">
               {[
                 { icon: Target, title: "Identify Strengths", desc: "Discover your core competencies through targeted assessments." },
                 { icon: Compass, title: "Explore Pathways", desc: "Map your skills to ideal jobs and long-term career goals." },
                 { icon: BookOpen, title: "Skill Development", desc: "Access training libraries and workshops designed for early careers." },
                 { icon: Users, title: "Personal Branding", desc: "Learn how to market yourself effectively to potential employers." }
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
                     <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                     <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
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
        className="mt-24 max-w-4xl mx-auto text-center"
      >
         <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">From Campus to Career</h2>
         <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            The transition from academia to the professional world can be daunting. We break it down into manageable steps: Know Yourself, Manage Yourself, Know Work, and Manage Work. By mastering these early levels, you set the stage for a trajectory of cyclical upward growth.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 text-left">
              <h4 className="text-xl font-bold mb-3 dark:text-white">DIY Tools</h4>
              <p className="text-gray-600 dark:text-gray-400">Free interest profiling, strength assessments, and self-help guides to start your journey independently.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 text-left">
              <h4 className="text-xl font-bold mb-3 dark:text-white">Guided Plans</h4>
              <p className="text-gray-600 dark:text-gray-400">Access to comprehensive training, dedicated career counseling, and job search assistance tailored for fresh talent.</p>
            </div>
         </div>
      </motion.div>
    </div>
  );
}
