"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Option5Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="min-h-[200vh] relative p-12 md:p-24 max-w-5xl">

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-24 w-[1px] h-full bg-[#E5E0D8] -z-10"></div>

      <div className="sticky top-24 h-screen">
        <motion.div style={{ y: y1 }} className="mb-8">
          <span className="text-[#2980B9] text-sm tracking-widest uppercase font-bold">Chapter I: The Departure</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-light text-[#2C3E50] leading-[1.1] mb-12">
          Every great career <br />
          <span className="italic font-serif">tells a story.</span>
        </h1>

        <motion.div style={{ y: y2 }} className="max-w-xl">
          <p className="text-xl text-[#7F8C8D] leading-relaxed mb-12 font-sans font-light">
            CareerFlyght is not just a dashboard. It is a narrative of your professional life, meticulously crafted through experiential learning, executive coaching, and strategic foresight.
          </p>

          <div className="flex items-center gap-8">
             <button className="px-8 py-4 bg-[#2C3E50] text-white rounded-none uppercase tracking-widest text-sm hover:bg-[#34495E] transition-colors">
               Begin the Journey
             </button>
             <button className="text-[#2C3E50] uppercase tracking-widest text-sm border-b border-[#2C3E50] pb-1 hover:text-[#2980B9] hover:border-[#2980B9] transition-colors">
               Read the Manifesto
             </button>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
