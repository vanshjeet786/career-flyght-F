import { Target, TrendingUp, Award, Clock } from 'lucide-react';

export default function Option1Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Download Report</button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Profile Completion', value: '85%', icon: Target, color: 'text-blue-600', bg: 'bg-blue-100' },
          { title: 'Skill Level', value: 'S5', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
          { title: 'Mentoring Sessions', value: '3/5', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-100' },
          { title: 'Certifications', value: '2', icon: Award, color: 'text-amber-600', bg: 'bg-amber-100' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Career Levers</h2>
            <div className="space-y-4">
               {[
                 { name: 'Technical Knowledge (S5)', progress: 70 },
                 { name: 'Work Experience (E4)', progress: 85 },
                 { name: 'Exposure (A3)', progress: 60 },
                 { name: 'Values (V4)', progress: 90 },
               ].map((lever, i) => (
                 <div key={i}>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="font-medium text-gray-700">{lever.name}</span>
                     <span className="text-gray-500">{lever.progress}%</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${lever.progress}%` }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
               {[
                 { action: 'Completed "Leadership 101" module', date: '2 days ago' },
                 { action: 'Updated Resume', date: '1 week ago' },
                 { action: 'Attended Webinar: Future of Tech', date: '2 weeks ago' },
               ].map((act, i) => (
                 <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                   <span className="text-gray-800">{act.action}</span>
                   <span className="text-sm text-gray-500">{act.date}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Sidebar content */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-md">
            <h3 className="font-bold text-lg mb-2">Upgrade to Premium</h3>
            <p className="text-blue-100 text-sm mb-4">Get access to 1-on-1 mentoring and exclusive job boards.</p>
            <button className="w-full py-2 bg-white text-blue-600 rounded font-medium text-sm hover:bg-blue-50 transition-colors">View Plans</button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
             <h3 className="font-bold text-gray-900 mb-4">Upcoming Meetings</h3>
             <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded text-center p-2 min-w-[50px]">
                  <div className="text-xs font-bold text-red-500">OCT</div>
                  <div className="text-lg font-bold text-gray-900">24</div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mentoring Session</p>
                  <p className="text-sm text-gray-500">with Sarah Jenkins</p>
                  <p className="text-xs text-gray-400 mt-1">2:00 PM - 3:00 PM</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
