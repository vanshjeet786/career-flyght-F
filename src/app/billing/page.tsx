"use client";

import { CreditCard, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export default function BillingPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2 dark:text-white">Billing & Plans</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your subscription and payment methods.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Current Plan Overview */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Current Plan</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">You are currently on the free tier.</p>
              </div>
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-full text-xs font-bold uppercase tracking-wider">
                Basic
              </span>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-950 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 mb-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#E3FF73] dark:bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                   <Zap className="w-6 h-6 text-black" />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white">Free Plan</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Limited access to career tools.</p>
                 </div>
                 <div className="ml-auto text-right">
                   <span className="text-2xl font-bold dark:text-white">$0</span>
                   <span className="text-gray-500 dark:text-gray-400 text-sm">/mo</span>
                 </div>
               </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800 pt-6">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4">Plan Features</h3>
              <ul className="space-y-3">
                {["Basic career profile", "1 assessment per month", "Community access"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#E3FF73] dark:text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Upgrade / Payment Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-black dark:bg-zinc-800 rounded-3xl p-6 text-white shadow-sm relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="font-bold text-lg mb-2 relative z-10">Upgrade to Pro</h3>
            <p className="text-gray-400 text-sm mb-6 relative z-10">Get unlimited assessments, 1-on-1 mentoring, and advanced analytics.</p>

            <Link href="/pricing" className="block w-full py-3 bg-[#E3FF73] dark:bg-green-500 text-black text-center rounded-xl font-bold hover:bg-[#d4fa41] dark:hover:bg-green-400 transition-colors relative z-10">
              View Plans
            </Link>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Payment Method
            </h3>
            <div className="text-center py-6 bg-gray-50 dark:bg-zinc-950 rounded-xl border border-dashed border-gray-200 dark:border-zinc-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">No payment method added.</p>
              <button className="text-sm font-bold text-black dark:text-white hover:underline">
                + Add Card
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
