"use client";

import { motion } from "framer-motion";
import { Network, Database, Cpu, Globe } from "lucide-react";

export default function Option6Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Node Status</h1>
          <p className="text-gray-400">System diagnostics and career lever parameters.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-sm font-medium text-purple-400">Sync Active</span>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Spatial Map (Mockup) */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl min-h-[500px] relative overflow-hidden group">
          <h2 className="text-xl font-bold mb-6">Capability Matrix</h2>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-12">
            <svg viewBox="0 0 400 400" className="w-full max-w-md h-full">
              <polygon points="200,50 350,125 350,275 200,350 50,275 50,125" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1"/>
              <polygon points="200,100 280,150 280,240 200,280 120,240 120,150" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" strokeWidth="2"/>

              <line x1="200" y1="200" x2="200" y2="50" stroke="rgba(255,255,255,0.1)" />
              <line x1="200" y1="200" x2="350" y2="125" stroke="rgba(255,255,255,0.1)" />
              <line x1="200" y1="200" x2="350" y2="275" stroke="rgba(255,255,255,0.1)" />
              <line x1="200" y1="200" x2="200" y2="350" stroke="rgba(255,255,255,0.1)" />
              <line x1="200" y1="200" x2="50" y2="275" stroke="rgba(255,255,255,0.1)" />
              <line x1="200" y1="200" x2="50" y2="125" stroke="rgba(255,255,255,0.1)" />
            </svg>

            {/* Labels */}
            <div className="absolute top-8 text-xs text-gray-400">Technical (S5)</div>
            <div className="absolute top-1/4 right-8 text-xs text-gray-400">Experience (E4)</div>
            <div className="absolute bottom-1/4 right-8 text-xs text-gray-400">Exposure (A3)</div>
            <div className="absolute bottom-8 text-xs text-gray-400">Values (V4)</div>
            <div className="absolute bottom-1/4 left-8 text-xs text-gray-400">Network (N3)</div>
            <div className="absolute top-1/4 left-8 text-xs text-gray-400">Influence (I2)</div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-900/20 border border-purple-500/30 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold">System Upgrade Available</h3>
            </div>
            <p className="text-sm text-gray-300 mb-6">Transition to the Superior tier to unlock Advisory Board matchmaking protocols.</p>
            <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">Initiate Protocol</button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="font-bold mb-6 flex items-center gap-2"><Database className="w-4 h-4 text-gray-400" /> Data Logs</h3>
            <div className="space-y-4">
               {[
                 { action: "Module 'Strategy' completed", time: "02:45:11" },
                 { action: "Mentor connection established", time: "11:20:00" },
                 { action: "Skill S4 parameter updated", time: "18:00:05" },
               ].map((log, i) => (
                 <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                   <span className="text-gray-300">{log.action}</span>
                   <span className="text-gray-500 font-mono text-xs">{log.time}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
