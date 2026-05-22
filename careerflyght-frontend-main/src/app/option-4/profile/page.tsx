"use client";

import { motion } from "framer-motion";
import { User, Mail, Briefcase, Camera } from "lucide-react";

export default function Option4Profile() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto relative min-h-screen">
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111122]/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12"
      >
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6 group cursor-pointer">
            <div className="w-32 h-32 rounded-full border-2 border-white/20 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
                 <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-light text-white">Passenger Manifest</h1>
          <p className="text-slate-400 mt-2">Update your identification and flight preferences.</p>
        </div>

        <form className="space-y-8">
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <User className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                defaultValue="Alex Mercer"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-slate-600"
                placeholder="Full Name"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                defaultValue="alex.mercer@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-slate-600"
                placeholder="Email Address"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Briefcase className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                defaultValue="VP of Engineering"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-slate-600"
                placeholder="Current Role"
              />
            </div>
          </div>

          <div className="pt-6">
            <button type="button" className="w-full py-4 bg-white text-blue-900 rounded-full font-bold hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Update Manifest
            </button>
          </div>
          
        </form>
      </motion.div>
    </div>
  );
}
