import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorFallback = () => {
  const error = useRouteError();
  console.error(error); // Logs the error for debugging

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-center">
      <h1 className="text-4xl font-bold text-red-600">Something Went Wrong!</h1>
      <p className="text-lg text-gray-700 mt-4">
        We encountered an error while loading the page.
      </p>
      <p className="mt-2 text-gray-500">{error?.message || "Unknown error"}</p>
      <a href="/" className="mt-6 px-6 py-3 bg-orange text-white rounded-lg">
        Go to Home
      </a>
    </div>
  );
};

export default ErrorFallback;
