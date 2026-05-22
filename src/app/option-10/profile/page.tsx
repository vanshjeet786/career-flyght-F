export default function Option10Profile() {
  return (
    <div className="max-w-4xl mx-auto py-8">

      <div className="border border-[#00ffcc]/50 bg-black/80 p-8 shadow-[0_0_30px_rgba(0,255,204,0.1)] relative">
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00ffcc] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#00ffcc] pointer-events-none"></div>

        <div className="flex items-center gap-8 mb-12 border-b border-[#00ffcc]/20 pb-8">
          <div className="w-24 h-24 bg-gray-900 border-2 border-[#00ffcc] relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 bg-[#00ffcc]/20 mix-blend-overlay"></div>
             <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="Avatar" className="w-full h-full object-cover grayscale" />
             <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="uppercase text-[10px] font-bold text-[#00ffcc]">Change<br/>Avatar</span>
             </div>
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase text-white tracking-widest mb-1">Mercer_A</h1>
            <p className="text-[#00ffcc] uppercase text-sm font-bold tracking-widest">Class: Engineer (VP)</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
               <label className="block uppercase text-[10px] text-gray-500 font-bold mb-2 tracking-widest">First Name</label>
               <input type="text" defaultValue="Alex" className="w-full bg-black border border-[#00ffcc]/30 text-white p-3 font-mono focus:outline-none focus:border-[#00ffcc] transition-colors" />
            </div>
            <div>
               <label className="block uppercase text-[10px] text-gray-500 font-bold mb-2 tracking-widest">Last Name</label>
               <input type="text" defaultValue="Mercer" className="w-full bg-black border border-[#00ffcc]/30 text-white p-3 font-mono focus:outline-none focus:border-[#00ffcc] transition-colors" />
            </div>
            <div className="md:col-span-2">
               <label className="block uppercase text-[10px] text-gray-500 font-bold mb-2 tracking-widest">Comms Link (Email)</label>
               <input type="email" defaultValue="alex.mercer@example.com" className="w-full bg-black border border-[#00ffcc]/30 text-[#00ffcc] p-3 font-mono focus:outline-none focus:border-[#00ffcc] transition-colors" />
            </div>
            <div className="md:col-span-2">
               <label className="block uppercase text-[10px] text-gray-500 font-bold mb-2 tracking-widest">Main Quest (Objective)</label>
               <textarea
                 rows={3}
                 className="w-full bg-black border border-[#00ffcc]/30 text-white p-3 font-mono focus:outline-none focus:border-[#00ffcc] transition-colors resize-none"
                 defaultValue="Target acquired: Chief Technology Officer. Need to grind Exposure (A3) to unlock the C-Suite level."
               ></textarea>
            </div>
          </div>

          <div className="flex justify-end pt-4">
             <button className="px-8 py-3 bg-[#00ffcc]/10 border border-[#00ffcc] text-[#00ffcc] uppercase font-bold hover:bg-[#00ffcc] hover:text-black transition-colors">
               Save Config
             </button>
          </div>
        </div>
      </div>

    </div>
  );
}
