"use client";

import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { Plane, Star, Crown, ChevronLeft, CheckCircle2 } from "lucide-react";

export default function EnhancedPricing() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <header className="p-6 md:px-12 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="font-bold text-2xl tracking-tight">Access Levels</div>
        </div>
        <ThemeSwitcher />
      </header>

      <main className="p-6 md:p-12 max-w-7xl mx-auto py-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Invest in your trajectory.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Transparent pricing. Elite mentorship. Uncapped potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Base Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-card rounded-[2.5rem] p-10 border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-chart-1/10 flex items-center justify-center mb-8">
              <Plane className="w-8 h-8 text-chart-1" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Navigator</h2>
            <p className="text-muted-foreground text-sm mb-6 h-10">Essential tools to map your next career move.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">$29</span>
              <span className="text-muted-foreground font-medium">/month</span>
            </div>
            <button className="w-full py-4 rounded-full border-2 border-border font-bold hover:bg-muted transition-colors mb-8">
              Start Free Trial
            </button>
            <ul className="space-y-4 flex-1">
              {['Basic Skill Assessment', 'Community Access', 'Monthly Webinar', 'Standard Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 shadow-xl scale-105 flex flex-col relative z-10"
          >
            <div className="absolute top-0 right-0 bg-chart-3 text-white px-4 py-1 rounded-bl-2xl rounded-tr-[2.5rem] text-xs font-bold uppercase tracking-wider">
              Recommended
            </div>
            <div className="w-16 h-16 rounded-2xl bg-background/20 flex items-center justify-center mb-8 backdrop-blur-sm">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Captain</h2>
            <p className="text-primary-foreground/80 text-sm mb-6 h-10">For professionals actively scaling their impact.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">$99</span>
              <span className="text-primary-foreground/80 font-medium">/month</span>
            </div>
            <button className="w-full py-4 rounded-full bg-background text-foreground font-bold hover:scale-105 transition-transform mb-8 shadow-md">
              Upgrade to Captain
            </button>
            <ul className="space-y-4 flex-1">
              {['Everything in Navigator', '1 Mentor Session / Month', 'Advanced Analytics', 'Priority Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-card rounded-[2.5rem] p-10 border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-chart-5/10 flex items-center justify-center mb-8">
              <Crown className="w-8 h-8 text-chart-5" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Fleet Command</h2>
            <p className="text-muted-foreground text-sm mb-6 h-10">Executive level coaching and dedicated strategy.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">$499</span>
              <span className="text-muted-foreground font-medium">/month</span>
            </div>
            <button className="w-full py-4 rounded-full border-2 border-border font-bold hover:bg-muted transition-colors mb-8">
              Contact Sales
            </button>
            <ul className="space-y-4 flex-1">
              {['Unlimited Mentorship', 'Custom Growth Plans', 'Boardroom Simulators', '24/7 Concierge Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-chart-5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
