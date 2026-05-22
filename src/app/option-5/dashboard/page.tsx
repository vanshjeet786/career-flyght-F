export default function Option5Dashboard() {
  return (
    <div className="p-12 md:p-24 max-w-6xl">
      <div className="mb-16">
        <span className="text-[#2980B9] text-sm tracking-widest uppercase font-bold mb-4 block">Chapter II: The Path</span>
        <h1 className="text-4xl md:text-5xl font-light text-[#2C3E50]">The Cartography of Your Career</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-12">
          {/* Timeline / Narrative representation */}
          <div className="relative border-l border-[#E5E0D8] pl-8 pb-12">
             <div className="absolute top-0 -left-1.5 w-3 h-3 bg-[#2C3E50] rounded-full"></div>
             <h3 className="text-xl font-bold text-[#2C3E50] mb-2">The Present: Foundation</h3>
             <p className="text-[#7F8C8D] font-sans font-light leading-relaxed">
               You are currently positioned at Level S4 in Technical Knowledge, with strong foundational values (V4). The immediate focus is expanding your &apos;Exposure&apos; beyond internal projects.
             </p>
          </div>

          <div className="relative border-l border-[#E5E0D8] pl-8 pb-12 opacity-70">
             <div className="absolute top-0 -left-1.5 w-3 h-3 bg-[#E5E0D8] rounded-full border-2 border-[#FAF9F6]"></div>
             <h3 className="text-xl font-bold text-[#2C3E50] mb-2 italic">Next Milestone: Q3 2024</h3>
             <p className="text-[#7F8C8D] font-sans font-light leading-relaxed">
               Scheduled Masterclass on &quot;Dealing with Uncertainty&quot;. This will serve as a bridge toward Senior Management (S5).
             </p>
          </div>

          <div className="relative border-l border-[#E5E0D8] pl-8 opacity-40">
             <div className="absolute top-0 -left-1.5 w-3 h-3 bg-[#E5E0D8] rounded-full border-2 border-[#FAF9F6]"></div>
             <h3 className="text-xl font-bold text-[#2C3E50] mb-2 italic">The Destination: 2028</h3>
             <p className="text-[#7F8C8D] font-sans font-light leading-relaxed">
               Top Management / CEO of a smaller organization, orchestrating strategy and sustainability (S7).
             </p>
          </div>
        </div>

        <div>
          <div className="bg-white p-10 shadow-sm border border-[#E5E0D8]">
            <h3 className="text-sm tracking-widest uppercase text-[#95A5A6] mb-8 text-center border-b border-[#E5E0D8] pb-4">Artisanal Resources</h3>

            <ul className="space-y-6">
              {[
                { title: "On Leadership under pressure", author: "Dr. E. Thorne" },
                { title: "The Architecture of a CEO CV", author: "CF Editorial" },
                { title: "Market Presence: A Study", author: "M. Vance" }
              ].map((book, i) => (
                <li key={i} className="group cursor-pointer">
                  <h4 className="text-lg font-bold text-[#2C3E50] group-hover:text-[#2980B9] transition-colors">{book.title}</h4>
                  <p className="text-sm font-sans text-[#7F8C8D] italic">by {book.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
