import Link from 'next/link';
import { ArrowRight, Activity, Target, Zap } from 'lucide-react';

export default function Option3Home() {
  return (
    <div className="space-y-12">
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-10 md:p-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Data-driven career <span className="text-indigo-400">acceleration.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Identify skill gaps, map your trajectory, and connect with elite mentors through our advanced analytics platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/option-3/dashboard" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium transition-colors flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)]">
              Open Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/option-3/pricing" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-md font-medium transition-colors text-sm">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Performance Metrics', desc: 'Track your growth across 6 key career levers with real-time analytics.', icon: Activity, color: 'text-rose-400' },
          { title: 'Goal Setting', desc: 'Define your end-of-career stage and let our algorithm build the pathway.', icon: Target, color: 'text-blue-400' },
          { title: 'Actionable Insights', desc: 'Receive weekly curated resources based on your specific profile gaps.', icon: Zap, color: 'text-amber-400' },
        ].map((feature, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 transition-colors cursor-default">
            <feature.icon className={`w-8 h-8 ${feature.color} mb-4`} />
            <h3 className="text-lg font-semibold text-slate-100 mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
