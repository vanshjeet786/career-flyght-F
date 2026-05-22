export default function Option9Profile() {
  return (
    <div className="p-12 max-w-5xl mx-auto">
      <header className="border-b-4 border-[#1A1A1A] pb-6 mb-12 flex justify-between items-end">
        <h1 className="text-6xl font-black uppercase tracking-tighter">Personal Dossier</h1>
        <p className="font-sans font-bold uppercase tracking-widest text-xs">Form CF-01A</p>
      </header>

      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-8">
           <div className="border-2 border-[#1A1A1A] aspect-[3/4] p-2">
              <div className="w-full h-full bg-[#EAE8E3] border border-[#1A1A1A] overflow-hidden grayscale contrast-125">
                 <img src="https://i.pravatar.cc/400?u=a042581f4e29026704d" alt="Subject Photo" className="w-full h-full object-cover" />
              </div>
           </div>
           <button className="w-full py-4 border-2 border-[#1A1A1A] font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors">
             Update Photograph
           </button>
        </div>

        <div className="md:col-span-8">
          <form className="space-y-10">
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-sans font-bold uppercase tracking-widest text-xs">Given Name</label>
                <input type="text" defaultValue="Alex" className="w-full bg-transparent border-b-2 border-[#1A1A1A] p-2 text-2xl font-bold focus:outline-none focus:bg-[#EAE8E3]" />
              </div>
              <div className="space-y-2">
                <label className="font-sans font-bold uppercase tracking-widest text-xs">Surname</label>
                <input type="text" defaultValue="Mercer" className="w-full bg-transparent border-b-2 border-[#1A1A1A] p-2 text-2xl font-bold focus:outline-none focus:bg-[#EAE8E3]" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-sans font-bold uppercase tracking-widest text-xs">Electronic Mail Address</label>
              <input type="email" defaultValue="alex.mercer@executive.com" className="w-full bg-transparent border-b-2 border-[#1A1A1A] p-2 text-xl font-sans focus:outline-none focus:bg-[#EAE8E3]" />
            </div>

            <div className="grid grid-cols-2 gap-8 border-t-2 border-[#1A1A1A] pt-8">
              <div className="space-y-2">
                <label className="font-sans font-bold uppercase tracking-widest text-xs">Current Designation</label>
                <input type="text" defaultValue="VP of Engineering" className="w-full bg-transparent border-b-2 border-[#1A1A1A] p-2 text-xl focus:outline-none focus:bg-[#EAE8E3]" />
              </div>
              <div className="space-y-2">
                <label className="font-sans font-bold uppercase tracking-widest text-xs">Target Designation</label>
                <input type="text" defaultValue="Chief Technology Officer" className="w-full bg-transparent border-b-2 border-[#1A1A1A] p-2 text-xl focus:outline-none focus:bg-[#EAE8E3]" />
              </div>
            </div>

            <div className="space-y-2 border-t-2 border-[#1A1A1A] pt-8">
              <label className="font-sans font-bold uppercase tracking-widest text-xs">Professional Statement</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-2 border-[#1A1A1A] p-4 text-lg font-light leading-relaxed focus:outline-none focus:bg-[#EAE8E3] resize-none"
                defaultValue="An experienced technical leader with a proven track record of scaling engineering organizations. Seeking to transition into a C-level role to drive enterprise-wide technological strategy."
              ></textarea>
            </div>

            <div className="flex justify-end pt-8">
               <button type="button" className="px-12 py-4 bg-[#1A1A1A] text-[#FAF9F6] border-2 border-[#1A1A1A] font-sans font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-[#1A1A1A] transition-colors">
                 Submit Dossier
               </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
