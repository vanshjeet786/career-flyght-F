export default function Option9Pricing() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <header className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">Tariffs</h1>
        <p className="font-sans font-bold uppercase tracking-widest text-sm border-b-2 border-[#1A1A1A] pb-4 inline-block">Investment in Professional Mobility</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Basic */}
        <div className="border-2 border-[#1A1A1A] p-8 flex flex-col hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors group cursor-pointer">
          <h3 className="text-3xl font-bold uppercase mb-2">Basic</h3>
          <div className="font-sans font-bold text-4xl mb-8 border-b-2 border-current pb-8">$375 <span className="text-sm font-normal uppercase tracking-widest">/ Annum</span></div>

          <ul className="space-y-4 font-sans text-sm flex-1 mb-8">
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">I.</span> Interest & Strengths Profile</li>
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">II.</span> Ideal Job Sets Matching</li>
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">III.</span> Unlimited Training Library</li>
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">IV.</span> Quarterly Review</li>
          </ul>

          <button className="w-full py-4 border-2 border-current font-sans font-bold uppercase tracking-widest text-sm group-hover:bg-[#FAF9F6] group-hover:text-[#1A1A1A] transition-colors">
            Select Plan
          </button>
        </div>

        {/* Premium */}
        <div className="border-4 border-[#1A1A1A] p-8 flex flex-col bg-[#1A1A1A] text-[#FAF9F6] relative shadow-[12px_12px_0px_#000]">
          <div className="absolute -top-4 -right-4 bg-white text-black font-sans font-bold uppercase tracking-widest text-xs px-4 py-2 border-2 border-[#1A1A1A]">
             Recommended
          </div>
          <h3 className="text-3xl font-bold uppercase mb-2">Premium</h3>
          <div className="font-sans font-bold text-4xl mb-8 border-b-2 border-[#FAF9F6] pb-8">$750 <span className="text-sm font-normal uppercase tracking-widest">/ Annum</span></div>

          <ul className="space-y-4 font-sans text-sm flex-1 mb-8">
            <li className="flex gap-4 border-b border-[#FAF9F6]/20 pb-2"><span className="font-bold">I.</span> Everything in Basic</li>
            <li className="flex gap-4 border-b border-[#FAF9F6]/20 pb-2"><span className="font-bold">II.</span> Two Counseling Sessions</li>
            <li className="flex gap-4 border-b border-[#FAF9F6]/20 pb-2"><span className="font-bold">III.</span> Profile Creation Guidance</li>
            <li className="flex gap-4 border-b border-[#FAF9F6]/20 pb-2"><span className="font-bold">IV.</span> Weekly Industry Comm.</li>
          </ul>

          <button className="w-full py-4 border-2 border-[#FAF9F6] font-sans font-bold uppercase tracking-widest text-sm bg-[#FAF9F6] text-[#1A1A1A] hover:bg-transparent hover:text-[#FAF9F6] transition-colors">
            Upgrade Now
          </button>
        </div>

        {/* Superior */}
        <div className="border-2 border-[#1A1A1A] p-8 flex flex-col hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors group cursor-pointer">
          <h3 className="text-3xl font-bold uppercase mb-2">Superior</h3>
          <div className="font-sans font-bold text-4xl mb-8 border-b-2 border-current pb-8">$1500 <span className="text-sm font-normal uppercase tracking-widest">/ Annum</span></div>

          <ul className="space-y-4 font-sans text-sm flex-1 mb-8">
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">I.</span> Everything in Premium</li>
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">II.</span> Unlimited Counseling</li>
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">III.</span> Exclusive Branding</li>
            <li className="flex gap-4 border-b border-current/20 pb-2"><span className="font-bold">IV.</span> Advisory Board Access</li>
          </ul>

          <button className="w-full py-4 border-2 border-current font-sans font-bold uppercase tracking-widest text-sm group-hover:bg-[#FAF9F6] group-hover:text-[#1A1A1A] transition-colors">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}
