import React from "react";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mb-12">
          It looks like nothing was found at this location. Maybe try a
          different page?
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-zinc-800 bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
