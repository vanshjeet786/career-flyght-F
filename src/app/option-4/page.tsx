"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Option4Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [50, 0, -50]);

  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(180deg, #050510 0%, #0a0a20 100%)",
      "linear-gradient(180deg, #0a0a20 0%, #1a1a40 100%)",
      "linear-gradient(180deg, #1a1a40 0%, #3b82f6 100%)"
    ]
  );

  return (
    <motion.div ref={containerRef} className="h-[400vh] relative" style={{ background: bgGradient }}>

      {/* Sticky container for the scrollytelling experience */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Stars / Particles */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute flex flex-col items-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            We Are Very Serious About Your Career.
          </h1>
          <p className="text-2xl text-blue-200/80 mb-12">
            How Serious Are You About Yours?
          </p>
          <div className="flex flex-col items-center gap-4 animate-bounce">
            <span className="text-sm uppercase tracking-widest text-white/50 font-medium">Prepare for Takeoff</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute flex flex-col items-center text-center z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Your career isn&apos;t a ladder. <br />
            <span className="font-bold text-blue-400">It&apos;s a flight path.</span>
          </h2>
          <p className="text-xl text-slate-300">
            We analyze your altitude (experience), trajectory (goals), and velocity (skills) to map the perfect route to your destination.
          </p>
        </motion.div>

        {/* Final CTA appearing at the bottom of the scroll */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
          className="absolute flex flex-col items-center z-20"
        >
          <h3 className="text-3xl font-bold mb-8">Ready to chart your course?</h3>
          <div className="flex gap-6">
            <Link href="/option-4/dashboard" className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Begin Journey (Individual)
            </Link>
            <a href="https://chro4sme.com" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 rounded-full font-bold hover:bg-white/10 transition-colors">
              I am an Organization
            </a>
          </div>
        </motion.div>

        {/* Abstract "Plane/Ship" rising */}
        <motion.div
           style={{
             y: useTransform(scrollYProgress, [0, 1], ["100vh", "-50vh"]),
             scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.5])
           }}
           className="absolute bottom-0 z-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-500/20 blur-[60px]"
        />
      </div>

    </motion.div>
  );
}
