"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";
import React from "react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("message");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Something went wrong</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        {errorMessage || "We encountered an error while trying to authenticate you. Please check your credentials or try again later."}
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Try Again
        </Link>
        <Link
          href="/"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <React.Suspense fallback={<div className="flex justify-center py-10">Loading...</div>}>
      <ErrorContent />
    </React.Suspense>
  );
}
