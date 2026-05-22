export default function Option7Pricing() {
  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#2D3748] mb-4">Subscription Tiers</h1>
        <p className="text-[#718096]">Soft integration into your career journey.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 px-4">

        {/* Basic */}
        <div className="p-8 rounded-[2rem] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-[#4A5568] mb-2">Basic</h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#b8bcc2] to-transparent my-6"></div>
          <div className="text-4xl font-bold text-[#2D3748] mb-8">$375<span className="text-sm font-normal text-[#718096]">/yr</span></div>

          <ul className="space-y-4 mb-8 flex-1 text-[#4A5568]">
            <li>Interest Profile</li>
            <li>Job Sets Matching</li>
            <li>Quarterly Review</li>
          </ul>

          <button className="w-full py-4 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] font-bold text-[#4A5568] transition-all">
            Select
          </button>
        </div>

        {/* Premium */}
        <div className="p-8 rounded-[2rem] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] flex flex-col items-center text-center relative border border-[#E0E5EC]">
          <div className="absolute -top-4 bg-[#E0E5EC] shadow-[2px_2px_4px_#b8bcc2,-2px_-2px_4px_#ffffff] px-4 py-1 rounded-full text-blue-500 font-bold text-sm">
            Premium
          </div>
          <h3 className="text-xl font-bold text-blue-500 mb-2 mt-4">Premium</h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent my-6"></div>
          <div className="text-4xl font-bold text-blue-500 mb-8">$750<span className="text-sm font-normal text-[#718096]">/yr</span></div>

          <ul className="space-y-4 mb-8 flex-1 text-[#4A5568]">
            <li>2 Counseling Sessions</li>
            <li>Weekly Industry Intel</li>
            <li>Profile Creation</li>
            <li className="font-medium text-blue-400">+ Basic Features</li>
          </ul>

          <button className="w-full py-4 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] font-bold text-blue-500 transition-all bg-[#E0E5EC]">
            Upgrade
          </button>
        </div>

        {/* Superior */}
        <div className="p-8 rounded-[2rem] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-[#4A5568] mb-2">Superior</h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#b8bcc2] to-transparent my-6"></div>
          <div className="text-4xl font-bold text-[#2D3748] mb-8">$1500<span className="text-sm font-normal text-[#718096]">/yr</span></div>

          <ul className="space-y-4 mb-8 flex-1 text-[#4A5568]">
            <li>Unlimited Counseling</li>
            <li>Exclusive Branding</li>
            <li>Advisory Board Access</li>
            <li className="font-medium text-[#718096]">+ Premium Features</li>
          </ul>

          <button className="w-full py-4 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] font-bold text-[#4A5568] transition-all">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}
