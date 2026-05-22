"use client";

import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { User, Mail, Briefcase, Camera, Settings, MapPin, Globe, Shield, Activity, ChevronLeft } from "lucide-react";

export default function EnhancedProfile() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <header className="p-6 md:px-12 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="font-bold text-2xl tracking-tight">Profile</div>
        </div>
        <ThemeSwitcher />
      </header>

      <main className="p-6 md:p-12 max-w-[1400px] mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Identity & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-chart-1/20 to-chart-2/20"></div>
              <div className="relative mt-8">
                <div className="w-32 h-32 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-4xl shadow-md mb-6 relative group-hover:scale-105 transition-transform">
                  JS
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-1">Julian Silva</h2>
              <p className="text-primary font-medium mb-4">Senior Product Architect</p>

              <div className="flex gap-2 w-full justify-center mb-6">
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold">Product</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold">Leadership</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold">L6</span>
              </div>

              <div className="w-full pt-6 border-t border-border/50 space-y-4 text-left">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">julian.silva@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">juliansilva.dev</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm"
            >
               <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Shield className="w-5 h-5 text-chart-4" /> Preferences</h3>
               <div className="space-y-6">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="font-semibold text-sm">Public Profile</p>
                     <p className="text-xs text-muted-foreground">Allow recruiters to see your stats</p>
                   </div>
                   <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                     <div className="absolute right-1 top-1 w-4 h-4 bg-background rounded-full"></div>
                   </div>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="font-semibold text-sm">Mentorship Match</p>
                     <p className="text-xs text-muted-foreground">Open to taking on mentees</p>
                   </div>
                   <div className="w-10 h-6 bg-muted rounded-full relative cursor-pointer">
                     <div className="absolute left-1 top-1 w-4 h-4 bg-muted-foreground rounded-full"></div>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Right Column: Content & Matrix */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><User className="w-6 h-6 text-primary" /> Executive Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic product leader with 8+ years of experience scaling zero-to-one SaaS platforms. Specialized in bridging the gap between deep technical architecture and intuitive user experiences. Currently focusing on transitioning from Senior IC to Director-level management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Activity className="w-6 h-6 text-chart-2" /> Competency Matrix</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Product Strategy", value: 90, color: "bg-chart-1" },
                  { name: "Team Leadership", value: 75, color: "bg-chart-2" },
                  { name: "Technical Arch", value: 85, color: "bg-chart-3" },
                  { name: "Data Analytics", value: 65, color: "bg-chart-4" },
                  { name: "UX Research", value: 80, color: "bg-chart-5" },
                  { name: "Stakeholder Mgmt", value: 70, color: "bg-primary" },
                ].map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${skill.value}%` }} transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2"><Briefcase className="w-6 h-6 text-chart-3" /> Career Milestones</h3>
                <button className="text-sm font-semibold text-primary hover:underline">Add New</button>
              </div>
              <div className="space-y-6">
                {[
                  { role: "Senior Product Architect", company: "Nexus Corp", year: "2023 - Present", desc: "Leading the transition to v2.0 architecture." },
                  { role: "Product Manager", company: "Stellar Dynamics", year: "2020 - 2023", desc: "Launched 3 core enterprise modules." },
                ].map((job, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shrink-0 border border-border group-hover:border-primary transition-colors">
                      <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="pb-6 border-b border-border/50 w-full group-hover:border-primary/30 transition-colors">
                      <h4 className="font-bold text-lg">{job.role}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium text-foreground">{job.company}</span>
                        <span>•</span>
                        <span>{job.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground/80">{job.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
