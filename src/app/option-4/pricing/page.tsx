"use client";

import { motion } from "framer-motion";
import { Plane, Star, Crown } from "lucide-react";

export default function Option4Pricing() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative min-h-screen flex flex-col justify-center">

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">Select your <span className="font-bold text-blue-400">class of service.</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Different altitudes require different levels of support. Choose the tier that matches your career velocity.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">

        {/* Economy / Basic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-[#111122]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/30 transition-colors"
        >
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-300">
             <Plane className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-light text-white mb-2">Economy</h3>
          <div className="text-4xl font-bold text-white mb-2">$375<span className="text-lg font-light text-slate-500">/yr</span></div>
          <p className="text-slate-400 text-sm mb-8 h-10">Essential navigation tools for independent flyers.</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> Interests & Strengths determinant</li>
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> Ideal job sets matching</li>
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> Unlimited Training Library</li>
          </ul>

          <button className="w-full py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-colors">Book Economy</button>
        </motion.div>

        {/* Business / Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-gradient-to-b from-blue-900/40 to-[#111122]/80 backdrop-blur-md border border-blue-500/50 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
        >
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            Most Popular
          </div>
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400">
             <Star className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
          <div className="text-4xl font-bold text-white mb-2">$750<span className="text-lg font-light text-slate-400">/yr</span></div>
          <p className="text-blue-200/70 text-sm mb-8 h-10">Accelerated routing with expert guidance.</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-white/90">
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> Everything in Economy</li>
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> 2 Career Counseling Sessions</li>
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> Weekly Industry Comm.</li>
            <li className="flex items-start gap-3"><span className="text-blue-400">◆</span> Profile Creation & Guidance</li>
          </ul>

          <button className="w-full py-4 bg-blue-500 hover:bg-blue-400 rounded-full font-bold text-white transition-colors shadow-lg shadow-blue-500/25">Upgrade to Business</button>
        </motion.div>

        {/* First Class / Superior */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-[#111122]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/30 transition-colors"
        >
          <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 text-amber-400">
             <Crown className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-light text-white mb-2">First Class</h3>
          <div className="text-4xl font-bold text-white mb-2">$1500<span className="text-lg font-light text-slate-500">/yr</span></div>
          <p className="text-slate-400 text-sm mb-8 h-10">The ultimate executive mobility experience.</p>

          <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
            <li className="flex items-start gap-3"><span className="text-amber-400">◆</span> Everything in Business</li>
            <li className="flex items-start gap-3"><span className="text-amber-400">◆</span> Unlimited Counseling</li>
            <li className="flex items-start gap-3"><span className="text-amber-400">◆</span> Exclusive Branding Sessions</li>
            <li className="flex items-start gap-3"><span className="text-amber-400">◆</span> Advisory Board Access</li>
          </ul>

          <button className="w-full py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-colors">Request First Class</button>
        </motion.div>

      </div>
    </div>
  );
}
