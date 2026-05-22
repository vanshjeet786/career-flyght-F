"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function UnifiedDashboard() {
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
        <p className="text-gray-500 font-bold">Loading your Bento...</p>
      </div>
    );
  }

  const firstName = profile?.full_name?.split(' ')[0] || profile?.email?.split('@')[0] || "User";

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{firstName}&apos;s Bento</h1>
          <p className="text-gray-500">Your modular career view.</p>
        </div>
        <div className="bg-black text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E3FF73]"></span> {profile?.level || 'Basic Tier'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-[700px]">

        {/* Radar / Chart */}
        <div className="md:col-span-2 md:row-span-2 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">Competency Profile</h2>
            <button className="text-sm font-bold text-blue-600">Edit</button>
          </div>
          <div className="flex-1 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 border-dashed">
             <div className="text-center text-gray-400">
               <BarChart className="w-12 h-12 mx-auto mb-2 opacity-50" />
               <p className="text-sm font-medium">Radar Chart Visualization Area</p>
               <p className="text-xs text-gray-400 mt-2">Score: {profile?.score || 0}</p>
             </div>
          </div>
        </div>

        {/* Level Stats */}
        <div className="md:col-span-1 md:row-span-1 bg-black text-white rounded-3xl p-6 flex flex-col justify-between">
          <h3 className="font-medium text-gray-400 text-sm">Overall Level</h3>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-bold tracking-tighter">{profile?.level || 'L1'}</span>
            <span className="text-[#E3FF73] text-sm font-bold mb-2">↑ 0.1</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">{profile?.role || 'User'} Tier</p>
        </div>

        {/* Mentoring */}
        <div className="md:col-span-1 md:row-span-2 bg-[#E3FF73] rounded-3xl p-6 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-20"><Calendar className="w-24 h-24" /></div>
          <h3 className="font-bold text-black text-lg mb-6 relative z-10">Next Session</h3>

          <div className="flex-1 flex flex-col justify-center relative z-10">
            <p className="text-sm font-bold text-black/60 uppercase tracking-widest mb-1">OCT 24</p>
            <p className="text-3xl font-bold tracking-tight leading-none mb-4">Sarah <br/>Jenkins</p>
            <div className="flex items-center gap-2 text-sm font-medium bg-white/50 px-3 py-1.5 rounded-lg w-fit">
              <Clock className="w-4 h-4" /> 14:00 EST
            </div>
          </div>

          <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform relative z-10">Reschedule</button>
        </div>

        {/* Action Items */}
        <div className="md:col-span-1 md:row-span-1 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col">
          <h3 className="font-bold text-gray-900 mb-4 text-sm">Action Required</h3>
          <div className="space-y-3 flex-1 overflow-auto">
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800">Complete Onboarding</p>
                <p className="text-xs text-gray-500">Overdue by 1 day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-6 text-white flex items-center justify-between">
          <div>
            <h3 className="font-bold text-xl mb-1">Welcome to CareerFlyght</h3>
            <p className="text-blue-100 text-sm">Start by setting up your career path.</p>
          </div>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">Start Now</button>
        </div>

      </div>
    </div>
  );
}
