"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { AppSidebar } from './AppSidebar';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const handleAuth = (sessionUser: any) => {
      setUser(sessionUser);
      setLoading(false);

      const isAuthRoute = ['/login', '/signup', '/forgot-password', '/resend-confirmation'].includes(pathname);
      if (sessionUser && isAuthRoute) {
        router.push('/dashboard');
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuth(session?.user ?? null);
      }
    );

    // Initial check and re-check on navigation
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleAuth(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth, pathname, router]);

  // Paths that shouldn't use the Bento layout at all
  const noLayoutPaths = ['/whatcanibe', '/ninthbox', '/admin'];
  const hideLayout = noLayoutPaths.some(path => pathname.startsWith(path));

  if (hideLayout) {
    return <>{children}</>;
  }

  // App routes that should use the Sidebar
  const isAppRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/profile') || pathname.startsWith('/billing');

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center dark:bg-zinc-950"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black dark:border-white"></div></div>;
  }

  if (user && isAppRoute) {
    return (
      <div className="bg-[#f0f0f0] dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans p-4 md:p-8 flex justify-center">
        <div className="w-full max-w-[1600px] bg-white dark:bg-zinc-900 rounded-[2.5rem] h-[calc(100vh-4rem)] shadow-sm border border-gray-100 dark:border-zinc-800 flex overflow-hidden">
          <AppSidebar />
          <main className="flex-1 overflow-auto bg-gray-50/50 dark:bg-zinc-950/50 p-6 md:p-10 rounded-r-[2.5rem]">
            {children}
          </main>
        </div>
      </div>
    );
  }

  // Public Layout (Header)
  return (
    <div className="bg-[#f0f0f0] dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto bg-white dark:bg-zinc-900 rounded-[2.5rem] min-h-[calc(100vh-4rem)] shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden flex flex-col">
        {/* Bento Header */}
        <header className="h-20 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between px-8 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-xs">CF</span>
            </div>
            <span className="font-bold text-xl tracking-tight dark:text-white">CareerFlyght</span>
          </Link>

          <nav className="hidden xl:flex bg-gray-100 dark:bg-zinc-800 p-1 rounded-2xl gap-1 items-center">
            <Link href="/" className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Overview</Link>
            <Link href="/pricing" className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Plans</Link>
            <Link href="/about" className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link>
            <Link href="/what-is-whatcanibe" className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">What is WhatCanIBe</Link>
            <Link href="/what-is-ninthbox" className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">What is 9thBox</Link>
            <Link href="/talk-to-us" className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Talk To Us</Link>
            <div className="w-px h-4 bg-gray-300 dark:bg-zinc-600 mx-2" />
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-2">
              <Link href="/whatcanibe" className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">WhatCanIBe</Link>
              <Link href="/ninthbox" className="text-xs font-bold bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">9thBox</Link>
            </div>
             {!user ? (
               <>
                 <Link href="/login" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Login</Link>
                 <Link href="/signup" className="text-sm font-bold bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">Sign Up</Link>
               </>
             ) : (
               <div className="flex items-center gap-3">
                 <Link href="/dashboard" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Go to App</Link>
                 <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{(user.email as string)?.split('@')[0]}</span>
                 <button onClick={async () => { await supabase.auth.signOut(); router.push('/login'); router.refresh(); }} className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Logout</button>
               </div>
             )}
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-gray-50/50 dark:bg-zinc-950/50 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
