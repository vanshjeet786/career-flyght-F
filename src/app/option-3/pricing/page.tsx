import { Check } from 'lucide-react';

export default function Option3Pricing() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-white mb-4">Subscription & Billing</h1>
        <p className="text-slate-400">Upgrade your tier to unlock advanced features and 1-on-1 mentoring.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Tier 1 */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 flex flex-col">
          <h3 className="text-lg font-medium text-slate-300 mb-2">Basic</h3>
          <div className="text-4xl font-bold text-white mb-6">$375<span className="text-sm font-normal text-slate-500">/yr</span></div>
          <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md font-medium text-sm transition-colors mb-8 border border-slate-700">Current Plan</button>

          <ul className="space-y-3 flex-1">
            {['Self-service profile', 'Basic analytics dashboard', 'Quarterly newsletter', 'Community access'].map((feat, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-400">
                <Check className="w-4 h-4 text-slate-600 shrink-0" /> {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tier 2 */}
        <div className="bg-slate-900 border border-indigo-500/50 rounded-xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(79,70,229,0.15)]">
          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">POPULAR</div>
          <h3 className="text-lg font-medium text-indigo-400 mb-2">Premium</h3>
          <div className="text-4xl font-bold text-white mb-6">$750<span className="text-sm font-normal text-slate-500">/yr</span></div>
          <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium text-sm transition-colors mb-8 shadow-lg shadow-indigo-500/20">Upgrade Now</button>

          <ul className="space-y-3 flex-1">
            {['Everything in Basic', '2 Career Counseling Sessions', 'Advanced Competency Radar', 'Weekly Industry Reports'].map((feat, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300">
                <Check className="w-4 h-4 text-indigo-400 shrink-0" /> {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 flex flex-col">
          <h3 className="text-lg font-medium text-amber-400 mb-2">Superior</h3>
          <div className="text-4xl font-bold text-white mb-6">$1500<span className="text-sm font-normal text-slate-500">/yr</span></div>
          <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md font-medium text-sm transition-colors mb-8 border border-slate-700">Contact Sales</button>

          <ul className="space-y-3 flex-1">
            {['Everything in Premium', 'Unlimited Counseling', 'Executive Branding Package', 'Board Advisory Matchmaking'].map((feat, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-400">
                <Check className="w-4 h-4 text-amber-500/70 shrink-0" /> {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
