'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      
      
      <h1 className="text-7xl md:text-9xl font-bold text-gray-200">
        404
      </h1>

      
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
}