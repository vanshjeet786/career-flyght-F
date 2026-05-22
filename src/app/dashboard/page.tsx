"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    // Check authentication status
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      // Not authenticated, redirect to login
      router.push("/login");
    } else {
      let parsedUser = null;
      try {
        parsedUser = JSON.parse(storedUser);
      } catch (e) {
        console.error("Failed to parse user data", e);
      }

      // Use setTimeout to avoid synchronous setState warning
      setTimeout(() => {
        if (mounted) {
          if (parsedUser) {
            setUser(parsedUser);
          }
          setLoading(false);
        }
      }, 0);
    }

    return () => {
      mounted = false;
    };
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-6">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-black bg-white hover:bg-gray-200"
          >
            Logout
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Welcome back, {user?.name}!</h2>
            <p className="text-zinc-400">
              You have successfully logged into CareerFlyght.
              This is your personal dashboard where you can manage your career ecosystem.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 col-span-1">
            <h3 className="text-lg font-medium mb-4 text-zinc-300">Profile Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-zinc-500">Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
