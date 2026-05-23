"use client";

import { motion, useScroll,  } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Plane, Target, Zap, Users, Compass, Shield, BarChart3 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Home() {

  const [randomText, setRandomText] = useState("Construct");
  const words = ["Construct", "Elevate", "Optimize", "Analyze", "Design"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomText(words[Math.floor(Math.random() * words.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const springTransition = { type: "spring" as const, stiffness: 300, damping: 45 };

  const containerRef = useRef(null);
  const { } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="flex flex-col gap-32 pb-32 relative" ref={containerRef}>
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-[-1] min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Hero Section (Original Bento but enhanced for top of page) */}
      <section className="min-h-[80vh] flex items-center justify-center pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[800px] w-full max-w-7xl">
          {/* Main Hero block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}
            className="md:col-span-2 md:row-span-2 bg-[#E3FF73] rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="flex justify-between items-start relative z-10">
              <div className="bg-black/10 px-4 py-2 rounded-full text-black font-semibold text-sm backdrop-blur-md">v2.0 Architecture</div>
              <ArrowUpRight className="w-8 h-8 text-black" />
            </div>
            <div className="relative z-10">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 flex flex-col">
                <motion.span
                  key={randomText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {randomText}
                </motion.span>
                <span>your legacy.</span>
              </h1>
              <p className="text-black/70 text-lg max-w-md mb-8 font-medium">
                Modular career development. Analyze your skills, connect with mentors, and upgrade your trajectory with data-driven precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-black/10 text-black rounded-full font-bold hover:bg-black/20 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Top Right 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-black rounded-3xl p-8 text-white flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Target className="w-8 h-8 text-[#E3FF73] relative z-10" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-1 group-hover:text-[#E3FF73] transition-colors">Precision</h3>
              <p className="text-gray-400 text-sm">Data-driven skill mapping against industry standards.</p>
            </div>
          </motion.div>

          {/* Top Right 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...springTransition, delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700">
              <Plane className="w-32 h-32" />
            </div>
            <div className="flex-1 flex flex-col justify-end relative z-10">
              <h3 className="text-3xl font-bold mb-4">Executive<br/>Mobility</h3>
              <p className="text-indigo-100 text-sm mb-6">From senior management to the boardroom. We map the flight path.</p>
              <Link href="/pricing" className="px-4 py-2 bg-white text-indigo-600 rounded-full font-bold text-center text-sm w-fit hover:bg-indigo-50 transition-colors shadow-lg">
                View Access Levels
              </Link>
            </div>
          </motion.div>

          {/* Middle Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">Mentorship</h3>
              <p className="text-gray-500 text-sm">1-on-1 sessions with elite executives.</p>
            </div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 bg-white rounded-3xl p-8 border border-gray-200 flex items-center justify-between hover:shadow-xl transition-shadow duration-300 group"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-yellow-600 transition-colors">Curated Resources</h3>
              <p className="text-gray-500 max-w-md">Access our exclusive library of artisanal content, interactive workbooks, and real-world simulations.</p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100">
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...springTransition, delay: 0.5 }}
            className="h-full"
          >
            <Link href="/signup" className="h-full bg-gray-900 rounded-3xl p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-black transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-[#E3FF73]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-bold mb-2 text-white relative z-10">Create Profile</h3>
              <p className="text-sm text-gray-400 mb-6 relative z-10">Join 10,000+ executives. Takes 2 minutes.</p>
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-[#E3FF73] group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Breakdown Section */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The architecture of success.</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">We don't just give advice. We provide a structured, modular system to engineer your career trajectory.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Compass, title: "Strategic Navigation", desc: "Interactive career maps that dynamically adjust based on market trends and your personal competency profile.", color: "bg-blue-50 text-blue-600" },
            { icon: BarChart3, title: "Competency Analytics", desc: "Identify your blind spots before they become liabilities with our proprietary 360-degree assessment matrix.", color: "bg-purple-50 text-purple-600" },
            { icon: Shield, title: "Verified Network", desc: "Gain access to a highly curated, private network of executives, board members, and industry thought leaders.", color: "bg-emerald-50 text-emerald-600" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive/Visual Showcase Section */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-900" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E3FF73]/10 rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="relative z-10 max-w-xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold mb-6">
              The Dashboard
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Your command center.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience absolute clarity with our unified dashboard. Track your skill acquisition, manage mentorship sessions, and monitor your career velocity all in one beautifully designed interface.
            </p>
            <ul className="space-y-4 mb-10">
              {['Real-time progression tracking', 'Automated meeting scheduling', 'Secure document vault'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E3FF73]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/gallery" className="text-[#E3FF73] font-bold hover:text-white transition-colors flex items-center gap-2 group">
              Explore interface concepts
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative z-10 w-full max-w-lg perspective-1000"
          >
            {/* Abstract Dashboard Visual */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl transform-gpu">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-24 w-1/3 bg-white/10 rounded-xl" />
                  <div className="h-24 w-2/3 bg-gradient-to-r from-[#E3FF73]/20 to-transparent border border-[#E3FF73]/30 rounded-xl flex items-center p-4">
                     <div className="w-12 h-12 rounded-full border-4 border-[#E3FF73] border-t-transparent animate-spin" />
                  </div>
                </div>
                <div className="h-48 w-full bg-white/5 rounded-xl border border-white/5 p-4 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/20 rounded-t-md" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-1/2 bg-white/5 rounded-lg" />
                  <div className="h-12 w-1/2 bg-white/5 rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">Ready to take flight?</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Join the exclusive platform designed for ambitious professionals who refuse to leave their career trajectory to chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/signup" className="px-10 py-5 bg-[#E3FF73] text-black rounded-full font-bold text-lg hover:bg-[#d4fa41] transition-colors shadow-lg shadow-[#E3FF73]/20 w-full sm:w-auto">
               Create Free Profile
             </Link>
             <span className="text-gray-400 font-medium">or</span>
             <Link href="/pricing" className="px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
               View Pro Plans
             </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
