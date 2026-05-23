"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart, Clock, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile({
        ...profileData,
        email: user.email
      });
      setLoading(false);
    }

    loadData();
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 font-medium animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  const firstName = (profile?.full_name as string)?.split(' ')[0] || (profile?.email as string)?.split('@')[0] || "User";

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight dark:text-white">Welcome back, {firstName}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Here's your career overview.</p>
        </div>
        <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E3FF73] dark:bg-green-500"></span> {(profile?.level as string) || 'Basic Tier'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[700px]">

        {/* Competency Profile */}
        <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 flex flex-col hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg dark:text-white">Competency Profile</h2>
            <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">View details</button>
          </div>
          <div className="flex-1 bg-gray-50 dark:bg-zinc-950 rounded-2xl flex flex-col items-center justify-center border border-gray-100 dark:border-zinc-800">
             <BarChart className="w-16 h-16 text-gray-300 dark:text-zinc-700 mb-4" />
             <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Not enough data to generate chart</p>
             <button className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
               Take Assessment
             </button>
          </div>
        </div>

        {/* Level Stats */}
        <div className="md:col-span-1 md:row-span-1 bg-black dark:bg-zinc-800 text-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <h3 className="font-medium text-gray-400 dark:text-zinc-400 text-sm relative z-10">Current Level</h3>
          <div className="flex items-end gap-2 relative z-10">
            <span className="text-6xl font-bold tracking-tighter">{(profile?.level as string) || 'L1'}</span>
            <span className="text-[#E3FF73] dark:text-green-400 text-sm font-bold mb-2">↑ 0%</span>
          </div>
          <p className="text-xs text-gray-400 mt-2 relative z-10">Goal: {(profile?.role as string) || 'Senior'}</p>
        </div>

        {/* Upcoming Session */}
        <div className="md:col-span-1 md:row-span-2 bg-[#E3FF73] dark:bg-green-500 rounded-3xl p-6 flex flex-col relative overflow-hidden text-black shadow-sm">
          <div className="absolute top-0 right-0 p-6 opacity-10"><Calendar className="w-24 h-24" /></div>
          <h3 className="font-bold text-lg mb-6 relative z-10">Next Session</h3>

          <div className="flex-1 flex flex-col justify-center relative z-10">
            <p className="text-sm font-bold text-black/60 uppercase tracking-widest mb-1">TBD</p>
            <p className="text-2xl font-bold tracking-tight leading-none mb-4">No sessions<br/>scheduled</p>
            <div className="flex items-center gap-2 text-sm font-medium bg-white/40 px-3 py-1.5 rounded-lg w-fit">
              <Clock className="w-4 h-4" /> --:--
            </div>
          </div>

          <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors relative z-10 shadow-md">Book a Mentor</button>
        </div>

        {/* Action Items */}
        <div className="md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 flex flex-col">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm">Action Items</h3>
          <div className="space-y-4 flex-1 overflow-auto">
            <div className="flex gap-3 items-start group cursor-pointer">
              <CheckCircle2 className="w-5 h-5 text-gray-300 dark:text-zinc-600 shrink-0 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Complete Profile</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Add your work history</p>
              </div>
            </div>
            <div className="flex gap-3 items-start group cursor-pointer">
              <CheckCircle2 className="w-5 h-5 text-gray-300 dark:text-zinc-600 shrink-0 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Set Career Goal</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Where do you want to be?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-900 dark:to-indigo-950 rounded-3xl p-6 text-white flex items-center justify-between shadow-sm">
          <div>
            <h3 className="font-bold text-xl mb-1">Career Resources</h3>
            <p className="text-blue-100 dark:text-blue-200 text-sm opacity-90">Explore templates, guides, and more.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 dark:bg-zinc-900 dark:text-blue-400 rounded-xl font-bold text-sm hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            Browse <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
