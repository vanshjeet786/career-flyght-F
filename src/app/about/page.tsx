"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-12 transition-colors font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Overview
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#E3FF73] inline-block px-4 py-1.5 rounded-full text-black font-semibold text-sm mb-6">
          Our Mission
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
          Engineering the future of career mobility.
        </h1>

        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            CareerFlyght was founded on a simple premise: professional growth shouldn't be a black box.
            For too long, executives and rising professionals have had to rely on intuition, fragmented networks,
            and outdated coaching models to navigate their careers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-16">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <p className="text-gray-600">
                Traditional career coaching is unscalable, subjective, and lacks data-driven insights.
                Professionals often find themselves hitting a ceiling, unsure of the exact competencies
                required to break through to the next echelon of leadership.
              </p>
            </div>
            <div className="bg-black text-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#E3FF73]">Our Solution</h3>
              <p className="text-gray-400">
                A modular, data-driven platform that maps your current competencies against real-world
                industry requirements. We provide the analytics, the curated resources, and the elite
                mentorship network needed to accelerate your trajectory.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6">The Team</h2>
          <p className="text-gray-600 mb-8">
            We are a collective of former executives, data scientists, and product designers who have
            experienced the friction of career mobility firsthand. We built the tool we wished we had.
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-500">© 2024 CareerFlyght. All rights reserved.</p>
          <Link href="/signup" className="text-sm font-bold bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Join the Platform
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
