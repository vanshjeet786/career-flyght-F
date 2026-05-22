"use client";

import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Paths that shouldn't use the Bento layout
  const noLayoutPaths = ['/whatcanibe', '/ninthbox', '/admin'];
  const hideLayout = noLayoutPaths.some(path => pathname.startsWith(path));

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#f0f0f0] min-h-screen text-gray-900 font-sans p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto bg-white rounded-[2.5rem] min-h-[calc(100vh-4rem)] shadow-sm border border-gray-100 overflow-hidden flex flex-col">

        {/* Bento Header */}
        <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CF</span>
            </div>
            <span className="font-bold text-xl tracking-tight">CareerFlyght</span>
          </Link>

          <nav className="hidden md:flex bg-gray-100 p-1 rounded-2xl gap-1">
            <Link href="/" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Overview</Link>
            <Link href="/dashboard" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Bento Board</Link>
                        <Link href="/gallery" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Gallery</Link>
            <Link href="/whatcanibe" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">WhatCanIBe</Link>
            <Link href="/ninthbox" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">9thBox</Link>
            <Link href="/pricing" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Plans</Link>
            <Link href="/profile" className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-black">Account</Link>
          </nav>

          <div className="flex items-center gap-4">
             <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-black">Login</Link>
             <Link href="/signup" className="text-sm font-bold bg-black text-white px-4 py-2 rounded-xl">Sign Up</Link>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-gray-50/50 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
