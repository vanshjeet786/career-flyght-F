"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, BookOpen, Map } from "lucide-react";

export default function Option7Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">

      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#2D3748] mb-2">Control Panel</h1>
          <p className="text-[#718096]">Soft overview of your career metrics.</p>
        </div>
        <div className="px-6 py-3 rounded-2xl shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
           <span className="font-bold text-blue-500">Score: 8.4</span>
        </div>
      </header>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { label: 'Skill Level', val: 'S5', icon: TrendingUp },
          { label: 'Experience', val: 'E4', icon: Award },
          { label: 'Exposure', val: 'A3', icon: Map },
          { label: 'Modules', val: '12', icon: BookOpen },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] flex items-center justify-center text-blue-500 mb-4">
               <stat.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-[#718096] mb-1">{stat.label}</span>
            <span className="text-2xl font-bold text-[#2D3748]">{stat.val}</span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Progress bars */}
        <div className="md:col-span-2 p-8 rounded-3xl shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff]">
          <h2 className="text-xl font-bold text-[#2D3748] mb-8">Development Tracks</h2>

          <div className="space-y-8">
            {[
              { name: 'Technical Acumen', progress: 80 },
              { name: 'Leadership Capabilities', progress: 45 },
              { name: 'Market Influence', progress: 60 }
            ].map((track, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-[#4A5568]">{track.name}</span>
                  <span className="text-blue-500 font-bold">{track.progress}%</span>
                </div>
                <div className="h-4 rounded-full shadow-[inset_2px_2px_5px_#b8bcc2,inset_-2px_-2px_5px_#ffffff] p-1 overflow-hidden">
                   <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: `${track.progress}%` }}
                     transition={{ duration: 1, delay: i * 0.2 }}
                     className="h-full rounded-full bg-blue-500 shadow-[2px_0_5px_rgba(59,130,246,0.5)]"
                   ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action button / Soft card */}
        <div className="p-8 rounded-3xl shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="w-24 h-24 rounded-full shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] mb-6 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] animate-pulse"></div>
          </div>
          <h3 className="font-bold text-[#2D3748] mb-2">Mentoring Session</h3>
          <p className="text-[#718096] text-sm mb-8">Your next session with Sarah J. is ready to be scheduled.</p>
          <button className="w-full py-3 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] font-bold text-blue-500 transition-all">
            Schedule Now
          </button>
        </div>

      </div>
    </div>
  );
}
