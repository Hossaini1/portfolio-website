'use client'; 

import "./globals.css"
import { useEffect } from 'react';


export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    console.error("Ein GLOBALER Laufzeitfehler ist aufgetreten:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Critical Error | Ali Naghi Hossaini</title>
        <meta name="robots" content="noindex, follow" />
      </head>
      
      <body className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white shadow-2xl rounded-xl max-w-lg w-full transform transition-all duration-300">
          
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-200 mb-8">
            <svg className="h-12 w-12 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.008v.008H12v-.008z" />
            </svg>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            A Critical System Error Occurred
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            We are experiencing unexpected issues. Please try refreshing the page.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="text-left bg-gray-100 p-3 rounded-md text-red-700 font-mono text-sm mb-8 overflow-x-auto border border-red-300">
              <strong>Details (Dev Only):</strong> {error?.message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-block px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Reload and Try Again
            </button>
            <a 
              href="/" 
              className="inline-block px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-300 ease-in-out"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}