import { Search, Bell, Settings2, ArrowUpRight, BarChart, BookOpen, Compass } from 'lucide-react';

export default function Option2Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Navigation / Search bar */}
      <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl w-96 border border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search insights, mentors, or jobs..." className="bg-transparent border-none outline-none text-sm w-full" />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 p-0.5">
             <div className="w-full h-full bg-white rounded-full border-2 border-white overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
             </div>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Welcome Banner */}
          <div className="bg-[#111] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10 w-2/3">
              <h2 className="text-3xl font-serif mb-2">Welcome back, Alex.</h2>
              <p className="text-gray-400 mb-6">Your career trajectory is currently up 12% compared to last quarter.</p>
              <button className="px-6 py-2.5 bg-white text-black rounded-xl font-medium text-sm hover:bg-gray-100 transition-colors">
                View Full Analysis
              </button>
            </div>
            {/* Abstract Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#10B981" d="M47.7,-57.2C59.9,-47.3,66.6,-30.8,69.5,-14.2C72.4,2.3,71.5,19,63.6,32.3C55.7,45.6,40.8,55.5,23.9,62.2C7,68.9,-11.9,72.4,-29.4,68.3C-46.9,64.2,-63.1,52.5,-71.4,36.5C-79.7,20.5,-80.1,0.2,-74.3,-17.7C-68.5,-35.6,-56.5,-51,-42.2,-61.2C-27.9,-71.4,-11.4,-76.4,3.2,-80.1C17.7,-83.8,35.5,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
                </svg>
            </div>
          </div>

          {/* Core Metrics */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between aspect-square">
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                 <Compass className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-gray-500 text-sm font-medium mb-1">Career Clusters</p>
                 <h3 className="text-2xl font-bold text-gray-900">Advanced Mfg.</h3>
               </div>
             </div>

             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between aspect-square">
               <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                 <BarChart className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-gray-500 text-sm font-medium mb-1">Overall Score</p>
                 <div className="flex items-end gap-2">
                   <h3 className="text-4xl font-bold text-gray-900">8.4</h3>
                   <span className="text-sm text-green-500 flex items-center font-medium"><ArrowUpRight className="w-4 h-4" /> 1.2</span>
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-8">

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900">Recommended Resources</h3>
              <button className="text-gray-400 hover:text-gray-900"><Settings2 className="w-4 h-4" /></button>
            </div>

            <div className="space-y-4">
              {[
                { title: 'The Modern Executive', type: 'eBook', time: '45m read' },
                { title: 'Navigating M&A', type: 'Workshop', time: 'Tomorrow' },
                { title: 'Leadership Simulation', type: 'Interactive', time: 'Start' },
              ].map((res, i) => (
                <div key={i} className="group p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:shadow-sm">
                     <BookOpen className="w-5 h-5" />
                   </div>
                   <div className="flex-1">
                     <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{res.title}</h4>
                     <p className="text-xs text-gray-500">{res.type} • {res.time}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
