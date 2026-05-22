export default function Option9Dashboard() {
  return (
    <div className="p-12">
      <div className="max-w-6xl mx-auto">
        
        <header className="flex justify-between items-end border-b-4 border-[#1A1A1A] pb-6 mb-12">
          <h1 className="text-6xl font-black uppercase tracking-tighter">Executive Summary</h1>
          <div className="text-right font-sans">
            <p className="font-bold uppercase tracking-widest text-xs">Subject</p>
            <p className="text-xl">Alex Mercer</p>
          </div>
        </header>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Main Article / Stats */}
          <div className="md:col-span-8">
            <p className="text-2xl font-light italic mb-12 border-l-4 border-[#1A1A1A] pl-6 leading-relaxed">
              The subject demonstrates strong technical acumen (Level S5) but requires significant intervention in external market exposure (A3) to facilitate the transition to C-suite.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-16">
               <div className="border-t-2 border-[#1A1A1A] pt-4">
                 <p className="font-sans font-bold uppercase tracking-widest text-xs mb-2">Overall Score</p>
                 <p className="text-7xl font-black">8.4</p>
               </div>
               <div className="border-t-2 border-[#1A1A1A] pt-4">
                 <p className="font-sans font-bold uppercase tracking-widest text-xs mb-2">Target Role</p>
                 <p className="text-5xl font-bold">CTO</p>
               </div>
            </div>

            <div className="border-2 border-[#1A1A1A] p-8">
               <h2 className="text-3xl font-bold uppercase mb-8 border-b-2 border-[#1A1A1A] pb-4">Required Actions</h2>
               <ul className="space-y-6 font-sans">
                 <li className="flex gap-4">
                   <span className="font-black text-2xl">01.</span>
                   <div>
                     <h3 className="font-bold text-lg">Schedule Mentorship Session</h3>
                     <p className="text-sm">Review Q3 performance with designated advisor.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <span className="font-black text-2xl">02.</span>
                   <div>
                     <h3 className="font-bold text-lg">Complete Simulation</h3>
                     <p className="text-sm">&quot;Navigating Boardroom Politics&quot; module pending.</p>
                   </div>
                 </li>
                 <li className="flex gap-4 opacity-50">
                   <span className="font-black text-2xl">03.</span>
                   <div>
                     <h3 className="font-bold text-lg line-through">Update Exposure Metrics</h3>
                     <p className="text-sm">Completed on Oct 12, 2024.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>

          {/* Sidebar / Resources */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h3 className="font-sans font-bold uppercase tracking-widest text-xs border-b-2 border-[#1A1A1A] pb-2 mb-6">Competency Radar</h3>
              <div className="aspect-square border-2 border-[#1A1A1A] rounded-full flex items-center justify-center p-8 bg-[repeating-radial-gradient(circle_at_center,transparent_0,transparent_19px,#1A1A1A_20px)] opacity-50">
                 <div className="text-center bg-[#FAF9F6] p-4">Radar Visual</div>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-bold uppercase tracking-widest text-xs border-b-2 border-[#1A1A1A] pb-2 mb-6">Curated Reading</h3>
              <div className="space-y-6">
                <div className="cursor-pointer group">
                  <h4 className="font-bold text-xl group-hover:underline">The Architecture of a CEO CV</h4>
                  <p className="font-sans text-xs uppercase mt-1">Editorial • 12 Min Read</p>
                </div>
                <div className="cursor-pointer group">
                  <h4 className="font-bold text-xl group-hover:underline">Market Presence: A Study</h4>
                  <p className="font-sans text-xs uppercase mt-1">Research • 45 Min Read</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
