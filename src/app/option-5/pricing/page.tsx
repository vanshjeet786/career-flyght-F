export default function Option5Pricing() {
  return (
    <div className="p-12 md:p-24 max-w-5xl">
      <div className="mb-16">
        <span className="text-[#2980B9] text-sm tracking-widest uppercase font-bold mb-4 block">Chapter III: The Toll</span>
        <h1 className="text-4xl md:text-5xl font-light text-[#2C3E50]">Investment in the Self</h1>
      </div>

      <div className="space-y-16">
        {/* Tier 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-[#E5E0D8] pb-16">
          <div className="md:w-1/3">
             <h2 className="text-3xl font-bold text-[#2C3E50] mb-2">Basic</h2>
             <p className="text-2xl font-light text-[#7F8C8D]">$375 <span className="text-sm">/ year</span></p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 font-sans font-light text-[#2C3E50]">
             <div className="col-span-2 text-[#7F8C8D] mb-4 italic">The essential foundation for independent navigation.</div>
             <p className="border-t border-[#E5E0D8] pt-2">Interest & Strengths Determinant</p>
             <p className="border-t border-[#E5E0D8] pt-2">Ideal Job Sets</p>
             <p className="border-t border-[#E5E0D8] pt-2">Active Search Access</p>
             <p className="border-t border-[#E5E0D8] pt-2">Quarterly Review</p>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-[#E5E0D8] pb-16">
          <div className="md:w-1/3">
             <h2 className="text-3xl font-bold text-[#2980B9] mb-2">Premium</h2>
             <p className="text-2xl font-light text-[#7F8C8D]">$750 <span className="text-sm">/ year</span></p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 font-sans font-light text-[#2C3E50]">
             <div className="col-span-2 text-[#7F8C8D] mb-4 italic">A guided journey with strategic interventions.</div>
             <p className="border-t border-[#E5E0D8] pt-2">Profile Creation Guidance</p>
             <p className="border-t border-[#E5E0D8] pt-2">Two Counseling Sessions</p>
             <p className="border-t border-[#E5E0D8] pt-2">Weekly Industry Comm.</p>
             <p className="border-t border-[#E5E0D8] pt-2">Free Webinar Access</p>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
             <h2 className="text-3xl font-bold text-[#2C3E50] mb-2">Superior</h2>
             <p className="text-2xl font-light text-[#7F8C8D]">$1500 <span className="text-sm">/ year</span></p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 font-sans font-light text-[#2C3E50]">
             <div className="col-span-2 text-[#7F8C8D] mb-4 italic">The artisan approach to executive mobility.</div>
             <p className="border-t border-[#E5E0D8] pt-2">Exclusive Personal Branding</p>
             <p className="border-t border-[#E5E0D8] pt-2">Unlimited Counseling</p>
             <p className="border-t border-[#E5E0D8] pt-2">Editorial Newsletter Access</p>
             <p className="border-t border-[#E5E0D8] pt-2">Advisory Board</p>
          </div>
        </div>
      </div>
    </div>
  );
}
