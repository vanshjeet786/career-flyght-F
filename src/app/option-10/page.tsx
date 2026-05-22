"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Terminal } from "lucide-react";

export default function Option10Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-4xl border border-[#00ffcc]/30 bg-black/80 backdrop-blur-md p-8 relative shadow-[0_0_50px_rgba(0,255,204,0.1)]">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 font-bold tracking-widest text-sm border border-[#00ffcc]/30">
          INITIALIZING BOOT SEQUENCE
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 0.5 }}
            className="flex gap-4 items-start"
          >
            <Terminal className="w-5 h-5 shrink-0 mt-1" />
            <div>
               <p className="text-[#00ffcc] uppercase mb-2">System analyzing career parameters...</p>
               <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.6 }} className="h-1 bg-[#00ffcc] w-full max-w-md"></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 2.2 }}
            className="pl-9"
          >
            <p className="text-white mb-1">&gt; Warning: Trajectory deviation detected.</p>
            <p className="text-[#ff003c] font-bold">&gt; Action required: Calibrate executive mobility matrix.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 3.5 }}
            className="pl-9 pt-8"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Take <span className="text-[#00ffcc]">Control.</span>
            </h1>
            <p className="text-gray-400 max-w-lg mb-8 uppercase text-sm leading-relaxed tracking-wider">
              CareerFlyght is a gamified simulation platform designed to level up your professional skills, map your skill tree, and unlock C-suite achievements.
            </p>

            <div className="flex gap-6">
              <Link href="/option-10/dashboard" className="px-8 py-4 bg-[#00ffcc] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2 group">
                Enter Cockpit <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/option-10/pricing" className="px-8 py-4 border border-[#00ffcc]/50 text-[#00ffcc] font-bold uppercase tracking-widest hover:bg-[#00ffcc]/10 transition-colors">
                View Upgrades
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
