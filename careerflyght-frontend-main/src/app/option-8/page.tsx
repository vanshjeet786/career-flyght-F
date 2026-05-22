"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Plane, Target, Zap, Users } from "lucide-react";

export default function Option8Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[800px] w-full max-w-7xl">
        
        {/* Main Hero block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2 bg-[#E3FF73] rounded-3xl p-10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <div className="bg-black/10 px-4 py-2 rounded-full text-black font-semibold text-sm">v2.0 Architecture</div>
             <ArrowUpRight className="w-8 h-8 text-black" />
          </div>
          <div>
            <h1 className="text-6xl font-bold tracking-tighter leading-[0.9] mb-6">
              Construct <br/> your legacy.
            </h1>
            <p className="text-black/70 text-lg max-w-sm mb-8 font-medium">
              Modular career development. Analyze your skills, connect with mentors, and upgrade your trajectory.
            </p>
            <div className="flex gap-4">
              <Link href="/option-8/dashboard" className="px-6 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
                Open Dashboard
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Top Right 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 md:row-span-1 bg-black rounded-3xl p-8 text-white flex flex-col justify-between group"
        >
          <Target className="w-8 h-8 text-[#E3FF73]" />
          <div>
            <h3 className="text-xl font-bold mb-1">Precision</h3>
            <p className="text-gray-400 text-sm">Data-driven skill mapping against industry standards.</p>
          </div>
        </motion.div>

        {/* Top Right 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-20"><Plane className="w-32 h-32" /></div>
          <div className="flex-1 flex flex-col justify-end relative z-10">
            <h3 className="text-3xl font-bold mb-4">Executive<br/>Mobility</h3>
            <p className="text-indigo-100 text-sm mb-6">From senior management to the boardroom. We map the flight path.</p>
            <Link href="/option-8/pricing" className="px-4 py-2 bg-white text-indigo-600 rounded-full font-bold text-center text-sm w-fit hover:bg-indigo-50 transition-colors">
              View Access Levels
            </Link>
          </div>
        </motion.div>

        {/* Middle Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between"
        >
          <Users className="w-8 h-8 text-blue-500" />
          <div>
            <h3 className="text-xl font-bold mb-1 text-gray-900">Mentorship</h3>
            <p className="text-gray-500 text-sm">1-on-1 sessions with elite executives.</p>
          </div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 md:row-span-1 bg-white rounded-3xl p-8 border border-gray-200 flex items-center justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Curated Resources</h3>
            <p className="text-gray-500">Access our library of artisanal content, workbooks, and simulations.</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-1 md:row-span-1 bg-gray-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <h3 className="text-lg font-bold mb-2">Create Profile</h3>
          <p className="text-sm text-gray-500 mb-4">Takes 2 minutes.</p>
          <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
