export default function Option10Pricing() {
  return (
    <div className="max-w-6xl mx-auto py-8 h-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 text-white drop-shadow-[0_0_10px_rgba(0,255,204,0.5)]">System Upgrades</h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm">Unlock new features and capabilities.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Tier 1 */}
        <div className="border border-[#00ffcc]/30 bg-black/60 p-8 flex flex-col hover:bg-[#00ffcc]/5 transition-colors group">
          <div className="mb-6">
            <h3 className="uppercase tracking-widest text-[#00ffcc] font-bold text-xl mb-1">Basic License</h3>
            <div className="text-3xl font-black text-white">$375<span className="text-sm text-gray-500 font-normal">/yr</span></div>
          </div>

          <div className="space-y-4 flex-1 mb-8">
            <div className="border-l-2 border-[#00ffcc] pl-3">
              <p className="uppercase text-sm font-bold text-white">Core Mechanics</p>
              <p className="text-xs text-gray-400 mt-1">Interests, Strengths, Job Sets.</p>
            </div>
            <div className="border-l-2 border-[#00ffcc] pl-3">
              <p className="uppercase text-sm font-bold text-white">Training Ground</p>
              <p className="text-xs text-gray-400 mt-1">Unlimited library access.</p>
            </div>
          </div>

          <button className="w-full py-3 border border-gray-600 text-gray-400 uppercase font-bold text-sm bg-gray-900 cursor-not-allowed">
            Currently Active
          </button>
        </div>

        {/* Tier 2 */}
        <div className="border border-[#00ffcc] bg-black/80 p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,255,204,0.15)] transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-[#00ffcc] text-black font-bold uppercase text-[10px] px-3 py-1 tracking-widest">
            Recommended
          </div>
          <div className="mb-6">
            <h3 className="uppercase tracking-widest text-white font-bold text-xl mb-1">Premium License</h3>
            <div className="text-4xl font-black text-[#00ffcc] drop-shadow-[0_0_5px_rgba(0,255,204,0.8)]">$750<span className="text-sm text-gray-400 font-normal">/yr</span></div>
          </div>

          <div className="space-y-4 flex-1 mb-8">
            <div className="border-l-2 border-[#00ffcc] pl-3">
              <p className="uppercase text-sm font-bold text-white">Co-op Mode</p>
              <p className="text-xs text-[#00ffcc] mt-1">2 Mentorship sessions included.</p>
            </div>
            <div className="border-l-2 border-[#00ffcc] pl-3">
              <p className="uppercase text-sm font-bold text-white">Advanced Intel</p>
              <p className="text-xs text-gray-400 mt-1">Weekly industry reports.</p>
            </div>
            <div className="border-l-2 border-[#00ffcc] pl-3">
              <p className="uppercase text-sm font-bold text-white">Character Customization</p>
              <p className="text-xs text-gray-400 mt-1">Profile creation guidance.</p>
            </div>
          </div>

          <button className="w-full py-3 bg-[#00ffcc] text-black uppercase font-bold text-sm hover:bg-white transition-colors">
            Install Upgrade
          </button>
        </div>

        {/* Tier 3 */}
        <div className="border border-purple-500/50 bg-black/60 p-8 flex flex-col hover:bg-purple-500/5 transition-colors group">
          <div className="mb-6">
            <h3 className="uppercase tracking-widest text-purple-400 font-bold text-xl mb-1">Superior License</h3>
            <div className="text-3xl font-black text-white">$1500<span className="text-sm text-gray-500 font-normal">/yr</span></div>
          </div>

          <div className="space-y-4 flex-1 mb-8">
            <div className="border-l-2 border-purple-500 pl-3">
              <p className="uppercase text-sm font-bold text-white">God Mode</p>
              <p className="text-xs text-purple-400 mt-1">Unlimited Mentorship.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-3">
              <p className="uppercase text-sm font-bold text-white">Legendary Skins</p>
              <p className="text-xs text-gray-400 mt-1">Exclusive personal branding.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-3">
              <p className="uppercase text-sm font-bold text-white">Guild Master Access</p>
              <p className="text-xs text-gray-400 mt-1">Advisory board entry.</p>
            </div>
          </div>

          <button className="w-full py-3 border border-purple-500 text-purple-400 uppercase font-bold text-sm hover:bg-purple-500 hover:text-black transition-colors">
            Request Access
          </button>
        </div>

      </div>
    </div>
  );
}
