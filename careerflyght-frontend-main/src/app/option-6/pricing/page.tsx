"use client";

import { motion } from "framer-motion";
import { Network, Database, Globe } from "lucide-react";

export default function Option6Pricing() {
  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Access Protocols</h1>
        <p className="text-gray-400">Select your required clearance level for the network.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Node 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="mb-8">
            <Network className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-200 mb-2">Level 1: Basic</h3>
            <div className="text-4xl font-bold text-white mb-2">$375<span className="text-base text-gray-500 font-normal">/yr</span></div>
          </div>
          
          <ul className="space-y-4 mb-8 text-sm text-gray-300">
            <li className="flex gap-3"><span className="text-gray-500">_</span> Active Search DB</li>
            <li className="flex gap-3"><span className="text-gray-500">_</span> Training Library Access</li>
            <li className="flex gap-3"><span className="text-gray-500">_</span> Quarterly Sync</li>
          </ul>
          
          <button className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors">Authorize Basic</button>
        </motion.div>

        {/* Node 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-b from-purple-500/10 to-white/5 border border-purple-500/50 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
          
          <div className="mb-8 relative z-10">
            <Database className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Level 2: Premium</h3>
            <div className="text-4xl font-bold text-white mb-2">$750<span className="text-base text-gray-400 font-normal">/yr</span></div>
          </div>
          
          <ul className="space-y-4 mb-8 text-sm text-white/90 relative z-10">
            <li className="flex gap-3"><span className="text-purple-400">_</span> Profile Matrix Guidance</li>
            <li className="flex gap-3"><span className="text-purple-400">_</span> 2 Counseling Threads</li>
            <li className="flex gap-3"><span className="text-purple-400">_</span> Weekly Intel Streams</li>
            <li className="flex gap-3"><span className="text-purple-400">_</span> All Level 1 Features</li>
          </ul>
          
          <button className="w-full py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-xl font-bold transition-colors shadow-lg shadow-purple-500/20 relative z-10">Authorize Premium</button>
        </motion.div>

        {/* Node 3 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="mb-8">
            <Globe className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-200 mb-2">Level 3: Superior</h3>
            <div className="text-4xl font-bold text-white mb-2">$1500<span className="text-base text-gray-500 font-normal">/yr</span></div>
          </div>
          
          <ul className="space-y-4 mb-8 text-sm text-gray-300">
            <li className="flex gap-3"><span className="text-gray-500">_</span> Unlimited Counseling Threads</li>
            <li className="flex gap-3"><span className="text-gray-500">_</span> Exclusive Branding Protocols</li>
            <li className="flex gap-3"><span className="text-gray-500">_</span> Advisory Board Connect</li>
            <li className="flex gap-3"><span className="text-gray-500">_</span> All Level 2 Features</li>
          </ul>
          
          <button className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors">Request Clearance</button>
        </motion.div>

      </div>
    </div>
  );
}
