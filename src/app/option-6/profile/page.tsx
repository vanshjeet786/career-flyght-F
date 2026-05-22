export default function Option6Profile() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Entity Configuration</h1>
        <p className="text-gray-400">Manage your node parameters.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden">

        <div className="p-8 border-b border-white/5 flex gap-8 items-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-900/40 border border-purple-500/30 flex items-center justify-center">
             <span className="text-2xl font-bold text-purple-400">AM</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Alex Mercer</h2>
            <p className="text-gray-400 font-mono text-sm mb-3">ID: NODE-8A9F-22B</p>
            <div className="flex gap-2">
               <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">Active</span>
               <span className="px-2 py-1 rounded bg-white/5 text-gray-400 text-xs font-bold border border-white/10">Level 2</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Designation</label>
               <input type="text" defaultValue="VP of Engineering" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all" />
            </div>
            <div className="space-y-4">
               <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Comms Link (Email)</label>
               <input type="email" defaultValue="alex.m@network.io" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all" />
            </div>
          </div>

          <div className="space-y-4">
             <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Node Parameters (Bio)</label>
             <textarea
               className="w-full h-32 bg-black/20 border border-white/10 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all resize-none"
               defaultValue="Specializing in scalable architecture and high-velocity team building. Current target trajectory: CTO within 2 cycles."
             ></textarea>
          </div>

          <div className="flex justify-end pt-4">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">Sync Changes</button>
          </div>
        </div>

      </div>
    </div>
  );
}
