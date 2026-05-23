"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { login } from "./actions";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await login(formData);
    setLoading(false);

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success("Successfully logged in!");
      router.push("/dashboard");
    }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tighter text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your details to access your Bento.
          </p>
        </div>
        <form action={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-sm">
                <a href="/forgot-password" className="font-semibold text-black hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="group relative flex w-full justify-center rounded-xl bg-[#E3FF73] px-3 py-3 text-sm font-bold text-black hover:bg-[#d4fa41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3FF73] transition-colors shadow-sm"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="font-bold text-black hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Didn't receive confirmation email?{' '}
            <a href="/resend-confirmation" className="font-bold text-black hover:underline">
              Resend confirmation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
