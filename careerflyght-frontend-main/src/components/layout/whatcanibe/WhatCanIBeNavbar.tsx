"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WhatCanIBeNavbar() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const storedUser = localStorage.getItem("careerflyghtUser");

    setTimeout(() => {
      if (isMounted) {
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {
            console.error("Failed to parse user data", e);
          }
        }
        setMounted(true);
      }
    }, 0);

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("careerflyghtUser");
    setUser(null);
    router.push("/whatcanibe");
  };

  if (!mounted) return null;

  return (
    <nav className="border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/whatcanibe" className="text-xl font-bold text-white flex items-center gap-2">
          <span>What Can I Be</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/whatcanibe/assessment" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Assessment
          </Link>
          <Link href="/whatcanibe/careers" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Careers
          </Link>
          <Link href="/whatcanibe/mentors" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Mentors
          </Link>

          <div className="h-4 w-px bg-zinc-800 mx-2" />

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-300 flex items-center gap-2">
                <User size={16} />
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-medium text-white hover:text-zinc-300 transition-colors">
                Log in
              </Link>
              <Link href="/signup" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
