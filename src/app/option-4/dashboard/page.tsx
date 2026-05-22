"use client";

import { motion } from "framer-motion";
import { Plane, Compass, Cloud, Navigation, Target } from "lucide-react";

export default function Option4Dashboard() {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto space-y-12 relative">

      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <header className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-light text-slate-300">Captain <span className="font-bold text-white">Alex Mercer</span></h1>
          <p className="text-blue-400 mt-2 flex items-center gap-2"><Navigation className="w-4 h-4" /> Cruising Altitude: Senior Level (S5)</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Destination</p>
          <p className="text-xl font-bold">Chief Technology Officer</p>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Main Radar / Trajectory */}
        <div className="lg:col-span-2 space-y-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-[#111122]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden"
           >
             <h2 className="text-xl font-medium mb-6 flex items-center gap-3"><Compass className="w-5 h-5 text-blue-400" /> Career Trajectory Map</h2>

             {/* Abstract Radar Visualization */}
             <div className="aspect-[2/1] relative flex items-end justify-center border-b border-white/20 pb-8">
                {/* Arcs */}
                <div className="absolute bottom-8 w-[80%] h-[160%] rounded-full border border-white/5"></div>
                <div className="absolute bottom-8 w-[60%] h-[120%] rounded-full border border-white/10"></div>
                <div className="absolute bottom-8 w-[40%] h-[80%] rounded-full border border-blue-500/30"></div>

                {/* Current position */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-[40%] left-[60%] w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa]"
                ></motion.div>

                {/* Target position */}
                <div className="absolute bottom-[75%] left-[80%] flex flex-col items-center gap-2">
                  <div className="w-4 h-4 border-2 border-amber-400 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Target: CTO</span>
                </div>

                {/* Connecting path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                   <path d="M 60% 60% Q 70% 40% 80% 25%" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                </svg>
             </div>

             <div className="grid grid-cols-4 gap-4 mt-8">
               {[
                 { label: "Technical", val: "S5", target: "S6" },
                 { label: "Experience", val: "E4", target: "E5" },
                 { label: "Exposure", val: "A3", target: "A5" },
                 { label: "Values", val: "V4", target: "V5" }
               ].map((stat, i) => (
                 <div key={i} className="text-center">
                   <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">{stat.label}</p>
                   <div className="flex items-center justify-center gap-2">
                     <span className="font-bold text-lg">{stat.val}</span>
                     <span className="text-blue-500">→</span>
                     <span className="text-slate-500">{stat.target}</span>
                   </div>
                 </div>
               ))}
             </div>
           </motion.div>
        </div>

        {/* Flight Log / Actions */}
        <div className="space-y-6">
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10"><Plane className="w-24 h-24" /></div>
             <h3 className="text-lg font-bold text-white mb-2 relative z-10">Clearance for Upgrade</h3>
             <p className="text-sm text-blue-200 mb-6 relative z-10">You are ready to transition to the Business Class tier for 1-on-1 coaching.</p>
             <button className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-bold transition-colors relative z-10">
               Request Upgrade
             </button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="bg-[#111122]/50 backdrop-blur-md border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><Cloud className="w-5 h-5 text-slate-400" /> Upcoming Waypoints</h3>

            <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="flex flex-col items-center">
                   <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                   <div className="w-0.5 h-full bg-white/10 my-1"></div>
                 </div>
                 <div className="pb-4">
                   <p className="text-sm font-bold text-white">Leadership Simulation</p>
                   <p className="text-xs text-slate-400 mt-1">Oct 24 • Virtual</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="flex flex-col items-center">
                   <div className="w-3 h-3 border-2 border-slate-500 rounded-full bg-[#050510]"></div>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-300">Mentoring Check-in</p>
                   <p className="text-xs text-slate-500 mt-1">Pending Scheduling</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
