"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Network } from "lucide-react";

export default function Option6Home() {
  return (
    <div className="h-[calc(100vh-4rem)] flex items-center justify-center relative">
      
      {/* Abstract Node Network Representation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <svg viewBox="0 0 800 600" className="w-full h-full max-w-4xl">
          <circle cx="400" cy="300" r="200" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="300" r="100" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
          
          <motion.circle cx="400" cy="100" r="8" fill="#A855F7" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
          <motion.circle cx="600" cy="300" r="12" fill="#A855F7" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 4 }} />
          <motion.circle cx="250" cy="450" r="6" fill="#A855F7" animate={{ scale: [1, 1.8, 1] }} transition={{ repeat: Infinity, duration: 2.5 }} />
          
          <path d="M400,100 L400,300 M600,300 L400,300 M250,450 L400,300" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Network className="w-4 h-4" /> Spatial Career Mapping
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent"
        >
          Navigate Your <br/> Network.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Visualize your career as interconnected nodes of skills, experiences, and mentorships.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <Link href="/option-6/dashboard" className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-colors">
            Initialize Nodes
          </Link>
          <Link href="/option-6/pricing" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 backdrop-blur-md transition-colors">
            Access Tiers
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
