"use client";

import { motion } from "framer-motion";
import { Crosshair, Zap, Shield, Activity, Lock } from "lucide-react";

export default function Option10Dashboard() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 h-full min-h-[800px]">

      {/* Left Panel: Stats */}
      <div className="col-span-12 md:col-span-3 space-y-6">
        <div className="border border-[#00ffcc]/30 bg-black/60 p-6 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#00ffcc]"></div>
          <h2 className="uppercase tracking-widest text-xs text-gray-500 mb-4 font-bold">Player Stats</h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-1 uppercase font-bold"><span>Skill (S5)</span> <span>82%</span></div>
              <div className="h-2 bg-gray-900 border border-[#00ffcc]/30"><div className="h-full bg-[#00ffcc] w-[82%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1 uppercase font-bold"><span>Exp (E4)</span> <span>95%</span></div>
              <div className="h-2 bg-gray-900 border border-[#00ffcc]/30"><div className="h-full bg-[#00ffcc] w-[95%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1 uppercase font-bold text-[#ff003c]"><span>Exposure (A3)</span> <span>40%</span></div>
              <div className="h-2 bg-gray-900 border border-[#ff003c]/50"><div className="h-full bg-[#ff003c] w-[40%] animate-pulse"></div></div>
            </div>
          </div>
        </div>

        <div className="border border-[#00ffcc]/30 bg-black/60 p-6">
          <h2 className="uppercase tracking-widest text-xs text-gray-500 mb-4 font-bold">Active Buffs</h2>
          <div className="space-y-3">
             <div className="flex items-center gap-3 text-sm border border-[#00ffcc]/20 p-2 bg-[#00ffcc]/5">
               <Zap className="w-4 h-4 text-yellow-400" /> <span className="uppercase">Mentorship Active (+15% XP)</span>
             </div>
             <div className="flex items-center gap-3 text-sm border border-[#00ffcc]/20 p-2 bg-[#00ffcc]/5">
               <Shield className="w-4 h-4 text-blue-400" /> <span className="uppercase">Premium Acc. (Unlocked)</span>
             </div>
          </div>
        </div>
      </div>

      {/* Center Panel: Radar/Map */}
      <div className="col-span-12 md:col-span-6 border border-[#00ffcc]/30 bg-black/60 p-6 flex flex-col relative overflow-hidden">

        {/* Reticle / Radar Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
           <div className="w-96 h-96 rounded-full border border-[#00ffcc]"></div>
           <div className="absolute w-64 h-64 rounded-full border border-[#00ffcc]"></div>
           <div className="absolute w-32 h-32 rounded-full border border-[#00ffcc]"></div>
           <div className="absolute w-full h-[1px] bg-[#00ffcc]"></div>
           <div className="absolute h-full w-[1px] bg-[#00ffcc]"></div>
        </div>

        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="uppercase tracking-widest text-sm font-bold text-white flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-[#00ffcc]" /> Career Trajectory Map
          </h2>
          <span className="bg-[#ff003c] text-white text-xs font-bold px-2 py-1 uppercase animate-pulse">Target Locked</span>
        </div>

        <div className="flex-1 relative z-10 flex items-center justify-center">
           {/* Placeholder for interactive skill tree / map */}
           <div className="text-center">
              <Activity className="w-16 h-16 text-[#00ffcc] mx-auto mb-4 opacity-50" />
              <p className="uppercase tracking-widest text-sm text-gray-400">Initiate scan to view full skill tree.</p>
              <button className="mt-6 px-6 py-2 border border-[#00ffcc] text-[#00ffcc] uppercase text-xs font-bold hover:bg-[#00ffcc] hover:text-black transition-colors">
                Scan Environment
              </button>
           </div>
        </div>
      </div>

      {/* Right Panel: Missions */}
      <div className="col-span-12 md:col-span-3 space-y-6">
        <div className="border border-[#00ffcc]/30 bg-black/60 p-6 h-full flex flex-col">
          <h2 className="uppercase tracking-widest text-xs text-gray-500 mb-4 font-bold flex justify-between">
            <span>Active Quests</span>
            <span>01/03</span>
          </h2>

          <div className="space-y-4 flex-1">

             {/* Quest 1 */}
             <div className="border border-[#00ffcc]/50 bg-[#00ffcc]/10 p-4 relative overflow-hidden group cursor-pointer hover:bg-[#00ffcc]/20 transition-colors">
                <div className="absolute top-0 right-0 bg-[#00ffcc] text-black text-[10px] font-bold px-2 py-0.5 uppercase">Main</div>
                <h3 className="font-bold text-white uppercase text-sm mb-1">Complete Module 4</h3>
                <p className="text-xs text-gray-400 mb-3">Rewards: +500 XP, Exposure A4 unlock</p>
                <div className="flex justify-between text-[10px] uppercase font-bold mb-1"><span>Progress</span><span>0%</span></div>
                <div className="h-1 bg-black border border-[#00ffcc]/30"><div className="h-full bg-[#00ffcc] w-[0%]"></div></div>
             </div>

             {/* Quest 2 */}
             <div className="border border-[#00ffcc]/20 bg-black p-4 relative overflow-hidden group cursor-pointer hover:border-[#00ffcc]/50 transition-colors">
                <div className="absolute top-0 right-0 bg-gray-700 text-white text-[10px] font-bold px-2 py-0.5 uppercase">Side</div>
                <h3 className="font-bold text-gray-300 uppercase text-sm mb-1">Update CV</h3>
                <p className="text-xs text-gray-500 mb-3">Rewards: +100 XP</p>
                <div className="flex justify-between text-[10px] uppercase font-bold mb-1"><span>Progress</span><span>100%</span></div>
                <div className="h-1 bg-black border border-[#00ffcc]/30"><div className="h-full bg-green-500 w-[100%]"></div></div>
             </div>

             {/* Locked Quest */}
             <div className="border border-gray-800 bg-black p-4 relative overflow-hidden opacity-50">
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10">
                  <Lock className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="font-bold text-gray-500 uppercase text-sm mb-1">C-Suite Interview</h3>
                <p className="text-xs text-gray-600 mb-3">Requires Level 10</p>
             </div>

          </div>
        </div>
      </div>

    </div>
  );
}
