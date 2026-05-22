export default function Option5Profile() {
  return (
    <div className="p-12 md:p-24 max-w-4xl">
      <div className="mb-16">
        <span className="text-[#2980B9] text-sm tracking-widest uppercase font-bold mb-4 block">Epilogue: You</span>
        <h1 className="text-4xl md:text-5xl font-light text-[#2C3E50]">The Protagonist</h1>
      </div>

      <div className="space-y-12">
        <div className="flex gap-8 items-start">
          <div className="w-32 h-32 bg-[#E5E0D8] shrink-0 border border-[#BDC3C7] overflow-hidden grayscale">
             <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="Protagonist" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 font-sans">
             <input 
               type="text" 
               defaultValue="Alexander Mercer" 
               className="text-2xl font-bold text-[#2C3E50] bg-transparent border-b border-[#E5E0D8] w-full focus:outline-none focus:border-[#2980B9] pb-2 mb-4 font-serif"
             />
             <textarea 
               className="w-full h-32 bg-transparent border border-[#E5E0D8] p-4 text-[#7F8C8D] focus:outline-none focus:border-[#2980B9] font-light leading-relaxed resize-none"
               defaultValue="Currently serving as the VP of Engineering at a mid-cap FinTech firm. Seeking transition into a CTO role within the next 24 months, focusing on strategic technological implementation and cross-functional leadership."
             ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-[#E5E0D8] font-sans">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#95A5A6] mb-4">Contact Coordinates</label>
            <input 
               type="email" 
               defaultValue="alexander.m@example.com" 
               className="w-full bg-transparent border-b border-[#E5E0D8] focus:outline-none focus:border-[#2980B9] pb-2 text-[#2C3E50]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-[#95A5A6] mb-4">Industry Classification</label>
            <input 
               type="text" 
               defaultValue="Digital Technology, FinTech" 
               className="w-full bg-transparent border-b border-[#E5E0D8] focus:outline-none focus:border-[#2980B9] pb-2 text-[#2C3E50]"
            />
          </div>
        </div>
        
        <div className="pt-12 text-right">
          <button className="px-8 py-4 bg-transparent border border-[#2C3E50] text-[#2C3E50] uppercase tracking-widest text-sm hover:bg-[#2C3E50] hover:text-white transition-colors">
            Seal Changes
          </button>
        </div>
      </div>
    </div>
  );
}
