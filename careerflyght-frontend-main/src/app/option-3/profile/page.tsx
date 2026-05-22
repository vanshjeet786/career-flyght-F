export default function Option3Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-white mb-6">Account Settings</h1>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="border-b border-slate-800 p-6">
          <h2 className="text-lg font-medium text-slate-200">Personal Information</h2>
          <p className="text-sm text-slate-500 mt-1">Update your basic profile details.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold text-slate-400">
              JD
            </div>
            <div>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-sm font-medium border border-slate-700 transition-colors">
                Upload Avatar
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-400">First Name</label>
              <input type="text" defaultValue="John" className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-400">Last Name</label>
              <input type="text" defaultValue="Doe" className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-slate-400">Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 p-4 bg-slate-900/50 flex justify-end">
          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-sm font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
