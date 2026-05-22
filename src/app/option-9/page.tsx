"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Option9Home() {
  return (
    <div className="flex flex-col md:flex-row h-full border-b-2 border-[#1A1A1A]">

      {/* Left Column - Headline */}
      <div className="md:w-1/2 p-12 border-r-2 border-[#1A1A1A] flex flex-col justify-between">
        <div>
          <span className="font-sans font-bold uppercase tracking-widest text-xs border border-[#1A1A1A] px-2 py-1 mb-8 inline-block">Vol. 1 / Issue 1</span>
          <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-8">
            The <br/> Next <br/> Ascent.
          </h2>
        </div>
        <p className="text-2xl font-light italic max-w-md leading-relaxed">
          &quot;We are very serious about your career. How serious are you about yours?&quot;
        </p>
      </div>

      {/* Right Column - Content */}
      <div className="md:w-1/2 flex flex-col">
        <div className="flex-1 p-12 border-b-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F6] flex flex-col justify-center">
           <h3 className="text-4xl font-bold mb-6">A Platform for the Ambitious.</h3>
           <p className="font-sans text-lg font-light leading-relaxed mb-8 max-w-lg">
             CareerFlyght bridges the gap between your current role and your ultimate destination. Through curated resources, elite mentorship, and data-driven skill mapping, we architect your executive mobility.
           </p>
           <Link href="/option-9/dashboard" className="inline-flex items-center gap-4 font-sans font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all w-fit group">
             Read the full report <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>

        <div className="flex h-64">
           <div className="w-1/2 border-r-2 border-[#1A1A1A] p-8 flex flex-col justify-between hover:bg-[#EAE8E3] transition-colors cursor-pointer">
              <h4 className="font-bold text-2xl">01. Assessment</h4>
              <p className="font-sans text-sm">Determine your current altitude.</p>
           </div>
           <div className="w-1/2 p-8 flex flex-col justify-between hover:bg-[#EAE8E3] transition-colors cursor-pointer">
              <h4 className="font-bold text-2xl">02. Trajectory</h4>
              <p className="font-sans text-sm">Map your route to the boardroom.</p>
           </div>
        </div>
      </div>

    </div>
  );
}
