import "./globals.css"

import type { Metadata } from 'next'; // Import für den Metadaten-Typ


export const metadata: Metadata = {
  title: "404 - Page Not Found | Ali Naghi Hossaini",
  description: "The requested page could not be found. Please return to the homepage to explore Ali Naghi Hossaini's full stack developer portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white shadow-2xl rounded-xl max-w-lg w-full transform transition-all duration-300 hover:shadow-3xl">
        <h1 className="text-8xl font-black text-indigo-700 mb-6 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <a 
          href="/" 
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back to Homepage
        </a>
      </div>
    </div>
  );
}