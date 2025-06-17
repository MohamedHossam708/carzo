import React from 'react';

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-white ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
        alt="No Results"
        className="w-32 h-32 mb-6 opacity-80"
      />
      <h2 className="text-3xl font-bold text-slate-900 mb-2">No Results Found</h2>
      <p className="text-gray-600 text-sm mb-6 max-w-md">
        We couldn't find any cars matching your search. Try using different keywords or filters.
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
      >
        Back to Home
      </a>
    </div>
  );
}

