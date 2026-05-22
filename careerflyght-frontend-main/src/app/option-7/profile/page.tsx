export default function Option7Profile() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#2D3748] mb-2">User Identity</h1>
        <p className="text-[#718096]">Configure your professional presence.</p>
      </div>

      <div className="p-10 rounded-[2rem] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
        
        <div className="flex flex-col items-center mb-12">
           <div className="w-32 h-32 rounded-full shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] p-2 mb-6">
              <div className="w-full h-full rounded-full shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] overflow-hidden">
                <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
              </div>
           </div>
           <button className="px-6 py-2 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] font-bold text-blue-500 transition-all text-sm">
             Change Image
           </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
             <label className="text-sm font-bold text-[#718096] pl-4">First Name</label>
             <input type="text" defaultValue="Alex" className="w-full bg-[#E0E5EC] rounded-xl px-6 py-4 outline-none text-[#2D3748] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_10px_#b8bcc2,inset_-6px_-6px_10px_#ffffff] transition-shadow" />
          </div>
          <div className="space-y-2">
             <label className="text-sm font-bold text-[#718096] pl-4">Last Name</label>
             <input type="text" defaultValue="Mercer" className="w-full bg-[#E0E5EC] rounded-xl px-6 py-4 outline-none text-[#2D3748] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_10px_#b8bcc2,inset_-6px_-6px_10px_#ffffff] transition-shadow" />
          </div>
          <div className="space-y-2 md:col-span-2">
             <label className="text-sm font-bold text-[#718096] pl-4">Email Address</label>
             <input type="email" defaultValue="alex.mercer@example.com" className="w-full bg-[#E0E5EC] rounded-xl px-6 py-4 outline-none text-[#2D3748] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_10px_#b8bcc2,inset_-6px_-6px_10px_#ffffff] transition-shadow" />
          </div>
          <div className="space-y-2 md:col-span-2">
             <label className="text-sm font-bold text-[#718096] pl-4">Target Destination</label>
             <input type="text" defaultValue="Chief Technology Officer" className="w-full bg-[#E0E5EC] rounded-xl px-6 py-4 outline-none text-[#2D3748] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_10px_#b8bcc2,inset_-6px_-6px_10px_#ffffff] transition-shadow" />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
           <button className="px-12 py-4 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] font-bold text-blue-500 transition-all">
             Save Configurations
           </button>
        </div>

      </div>
    </div>
  );
}
