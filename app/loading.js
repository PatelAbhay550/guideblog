import React from "react";
import { FaSpinner } from "react-icons/fa";

export default async function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <div className="flex flex-col items-center">
        <FaSpinner className="text-6xl text-green-500 animate-spin mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {"<" + "Loading..." + "/>"}
        </h1>
        <p className="text-lg text-gray-600">
          Please wait while we fetch the latest content.
        </p>
      </div>
    </div>
  );
}
