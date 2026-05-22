export default function Option8Pricing() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Upgrade Modules</h1>
        <p className="text-gray-500">Expand your bento board with new capabilities.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Basic Bento */}
        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col">
          <div className="mb-8">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Module 1</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic</h2>
            <div className="text-5xl font-bold tracking-tighter text-black">$375<span className="text-lg font-normal text-gray-500">/yr</span></div>
          </div>
          
          <div className="space-y-4 mb-8 flex-1">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100"><p className="text-sm font-medium text-gray-700">Interest Profile</p></div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100"><p className="text-sm font-medium text-gray-700">Ideal Job Sets</p></div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100"><p className="text-sm font-medium text-gray-700">Unlimited Library</p></div>
          </div>
          
          <button className="w-full py-4 bg-gray-100 text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">Current Module</button>
        </div>

        {/* Premium Bento */}
        <div className="bg-black text-white rounded-[2rem] p-8 flex flex-col relative transform scale-105 z-10 shadow-2xl">
          <div className="absolute -top-4 right-8 bg-[#E3FF73] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
          <div className="mb-8 mt-4">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Module 2</span>
            <h2 className="text-2xl font-bold text-white mb-2">Premium</h2>
            <div className="text-5xl font-bold tracking-tighter text-white">$750<span className="text-lg font-normal text-gray-400">/yr</span></div>
          </div>
          
          <div className="space-y-4 mb-8 flex-1">
            <div className="bg-white/10 p-3 rounded-xl border border-white/5"><p className="text-sm font-medium text-white">2 Counseling Sessions</p></div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/5"><p className="text-sm font-medium text-white">Profile Creation</p></div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/5"><p className="text-sm font-medium text-white">Weekly Industry Intel</p></div>
            <div className="bg-white/5 border border-white/5 p-3 rounded-xl"><p className="text-sm font-medium text-gray-400">+ Module 1 contents</p></div>
          </div>
          
          <button className="w-full py-4 bg-[#E3FF73] text-black rounded-xl font-bold hover:bg-[#d4f556] transition-colors">Install Premium</button>
        </div>

        {/* Superior Bento */}
        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col">
          <div className="mb-8">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Module 3</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Superior</h2>
            <div className="text-5xl font-bold tracking-tighter text-black">$1500<span className="text-lg font-normal text-gray-500">/yr</span></div>
          </div>
          
          <div className="space-y-4 mb-8 flex-1">
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100"><p className="text-sm font-medium text-indigo-900">Unlimited Counseling</p></div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100"><p className="text-sm font-medium text-indigo-900">Exclusive Branding</p></div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100"><p className="text-sm font-medium text-indigo-900">Advisory Board</p></div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100"><p className="text-sm font-medium text-gray-500">+ Module 2 contents</p></div>
          </div>
          
          <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">Request Access</button>
        </div>

      </div>
    </div>
  );
}
