import { BarChart, TrendingUp, AlertCircle, Book } from 'lucide-react';

export default function Option3Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Analytics Overview</h1>
          <p className="text-sm text-slate-400 mt-1">Your career progression metrics for Q3 2024</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-indigo-500">
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Year to Date</option>
          </select>
          <button className="bg-slate-800 hover:bg-slate-700 text-white text-sm px-4 py-1.5 rounded-md border border-slate-700 transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Overall Readiness', value: '78%', change: '+5.2%', positive: true },
          { label: 'Skills Gap', value: '12%', change: '-2.1%', positive: true },
          { label: 'Network Score', value: '8.4/10', change: '+0.3', positive: true },
          { label: 'Profile Views', value: '142', change: '-12%', positive: false },
        ].map((kpi, i) => (
          <div key={i} className="bg-slate-950 border border-slate-800 rounded-lg p-5">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">{kpi.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-100">{kpi.value}</span>
              <span className={`text-xs font-medium ${kpi.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-lg p-6">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-base font-semibold text-slate-100">Competency Radar</h2>
             <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">Detailed View</button>
           </div>
           {/* Placeholder for a chart */}
           <div className="h-64 w-full flex items-center justify-center border border-slate-800 border-dashed rounded bg-slate-900/50">
             <div className="text-center text-slate-500 flex flex-col items-center">
                <BarChart className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-sm">Chart visualization requires client-side rendering</span>
             </div>
           </div>
        </div>

        {/* Action Items */}
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col">
           <h2 className="text-base font-semibold text-slate-100 mb-4">Required Actions</h2>
           
           <div className="flex-1 space-y-4">
             <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-md flex gap-3">
               <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
               <div>
                 <h4 className="text-sm font-medium text-slate-200">Update Experience Level</h4>
                 <p className="text-xs text-slate-400 mt-1">Your &apos;Exposure&apos; metric (A2) hasn&apos;t been updated in 6 months.</p>
               </div>
             </div>
             
             <div className="p-3 bg-slate-900 border border-slate-800 rounded-md flex gap-3">
               <Book className="w-5 h-5 text-indigo-400 shrink-0" />
               <div>
                 <h4 className="text-sm font-medium text-slate-200">Complete Module 4</h4>
                 <p className="text-xs text-slate-400 mt-1">&quot;Strategic Decision Making&quot; is pending completion.</p>
               </div>
             </div>
             
             <div className="p-3 bg-slate-900 border border-slate-800 rounded-md flex gap-3">
               <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
               <div>
                 <h4 className="text-sm font-medium text-slate-200">Schedule Review</h4>
                 <p className="text-xs text-slate-400 mt-1">Book your Q3 counseling session.</p>
               </div>
             </div>
           </div>
           
           <button className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-md transition-colors border border-slate-700">
             View All Tasks
           </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800">
          <h2 className="text-base font-semibold text-slate-100">Recent Assessments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-900 border-b border-slate-800">
              <tr>
                <th className="px-6 py-3 font-medium">Assessment Type</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Score</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-900/50">
                <td className="px-6 py-4 text-slate-300">Technical Knowledge (S4)</td>
                <td className="px-6 py-4 text-slate-400">Oct 12, 2024</td>
                <td className="px-6 py-4 text-slate-300">85/100</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">Completed</span></td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="px-6 py-4 text-slate-300">Values Alignment (V3)</td>
                <td className="px-6 py-4 text-slate-400">Oct 05, 2024</td>
                <td className="px-6 py-4 text-slate-300">92/100</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">Completed</span></td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="px-6 py-4 text-slate-300">Leadership Simulation</td>
                <td className="px-6 py-4 text-slate-400">-</td>
                <td className="px-6 py-4 text-slate-300">-</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
