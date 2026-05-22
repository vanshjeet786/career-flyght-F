export default function Option2Profile() {
  return (
    <div className="p-8 max-w-5xl mx-auto py-12 space-y-12">

      <div>
        <h1 className="text-4xl font-serif font-bold text-[#111] mb-2">Profile Configuration</h1>
        <p className="text-gray-500">Manage your personal information and career preferences.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 p-1 mb-4">
              <div className="w-full h-full bg-white rounded-full border-4 border-white overflow-hidden">
                <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="User" />
              </div>
            </div>
            <h2 className="font-bold text-xl text-[#111]">Alex Mercer</h2>
            <p className="text-sm text-gray-500 mb-4">VP of Engineering</p>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Update Photo</button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-[#111] mb-6">Personal Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                <input type="text" defaultValue="Alex" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                <input type="text" defaultValue="Mercer" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" defaultValue="alex.mercer@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-[#111] mb-6">Career Preferences</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Target Role</label>
                <input type="text" defaultValue="CTO" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Industries of Interest</label>
                <input type="text" defaultValue="FinTech, SaaS, AI" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="px-8 py-3 bg-[#111] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">Save Configurations</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
