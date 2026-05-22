export default function Option8Profile() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Account Settings</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Profile Pic Card */}
        <div className="md:col-span-1 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-2xl bg-gray-100 mb-6 overflow-hidden border-4 border-white shadow-lg">
             <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Alex Mercer</h2>
          <p className="text-gray-500 text-sm mb-6">VP of Engineering</p>
          <button className="px-6 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">Change Photo</button>
        </div>

        {/* Form Card */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Details</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">First Name</label>
                <input type="text" defaultValue="Alex" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Last Name</label>
                <input type="text" defaultValue="Mercer" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" defaultValue="alex.mercer@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Career Objective</label>
              <textarea
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                defaultValue="To become CTO of a mid-sized tech company within the next 2 years, focusing on building scalable systems and high-performing teams."
              ></textarea>
            </div>

            <div className="pt-4 flex justify-end">
               <button className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">Save Changes</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
