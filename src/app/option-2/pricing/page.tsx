import { CheckCircle2 } from 'lucide-react';

export default function Option2Pricing() {
  return (
    <div className="p-8 max-w-7xl mx-auto py-20">

      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-serif font-bold text-[#111] mb-6">Invest in your trajectory.</h1>
        <p className="text-xl text-gray-500">Select a membership tier that aligns with your current career stage and future ambitions.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">

        {/* Basic */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="mb-8">
            <h3 className="text-gray-500 font-medium mb-2">Basic</h3>
            <div className="text-4xl font-bold text-[#111]">$375<span className="text-lg text-gray-400 font-normal">/yr</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Interest & Strengths determinant', 'Ideal job sets', 'Active Search', 'Quarterly Review', 'Monthly Newsletter'].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-gray-300" /> {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border border-gray-200 text-[#111] font-medium hover:bg-gray-50 transition-colors">Select Basic</button>
        </div>

        {/* Premium */}
        <div className="bg-[#111] rounded-3xl p-8 shadow-2xl relative transform scale-105 z-10">
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Recommended</span>
          </div>
          <div className="mb-8">
            <h3 className="text-gray-400 font-medium mb-2">Premium</h3>
            <div className="text-4xl font-bold text-white">$750<span className="text-lg text-gray-500 font-normal">/yr</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Profile Creation & Guidance', '2 Career Counseling Sessions', 'Weekly Industry Info', 'Annual Career Webinar (Free)', 'All Basic Features'].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl bg-white text-[#111] font-medium hover:bg-gray-100 transition-colors">Upgrade to Premium</button>
        </div>

        {/* Superior */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="mb-8">
            <h3 className="text-gray-500 font-medium mb-2">Superior</h3>
            <div className="text-4xl font-bold text-[#111]">$1500<span className="text-lg text-gray-400 font-normal">/yr</span></div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Exclusive Personal Branding', 'Unlimited Counseling Sessions', 'Editorial Access', 'Advisory Board Access', 'All Premium Features'].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-gray-300" /> {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border border-gray-200 text-[#111] font-medium hover:bg-gray-50 transition-colors">Select Superior</button>
        </div>

      </div>
    </div>
  );
}
