"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Ein Laufzeitfehler ist aufgetreten:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white shadow-2xl rounded-xl max-w-lg w-full">

        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
          <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Something went wrong
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          An unexpected error occurred. Please try to refresh the page or
          return to the homepage.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="bg-gray-100 p-3 rounded-md text-red-700 font-mono text-sm mb-8">
            <strong>Error:</strong> {error?.message}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Try again
          </button>

          <Link
            href="/"
            className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
