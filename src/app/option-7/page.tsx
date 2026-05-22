"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlaneTakeoff } from "lucide-react";

export default function Option7Home() {
  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] text-blue-500 font-medium text-sm">
             <PlaneTakeoff className="w-4 h-4" /> Ready for Boarding
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#2D3748] leading-tight">
            Elevate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Potential.</span>
          </h1>

          <p className="text-lg text-[#718096] max-w-md">
            Seamless career progression mapping through our tactile, intuitive platform. Your trajectory, visualized softly.
          </p>

          <div className="flex gap-6 pt-4">
            <Link href="/option-7/dashboard" className="px-8 py-4 rounded-2xl font-bold text-blue-500 flex items-center gap-2 transition-all shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
              Launch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/option-7/pricing" className="px-8 py-4 rounded-2xl font-bold text-[#718096] transition-all shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
              Explore Plans
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Neumorphic Abstract Art */}
          <div className="w-80 h-80 rounded-full shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] flex items-center justify-center relative">
            <div className="w-64 h-64 rounded-full shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-48 h-48 rounded-full shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] relative flex items-center justify-center"
               >
                 <div className="w-32 h-32 rounded-full shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] bg-gradient-to-tr from-[#E0E5EC] to-[#E0E5EC]/50"></div>
                 {/* Orbiting dot */}
                 <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
               </motion.div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
