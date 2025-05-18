import React from 'react'
import style from "./Notfound.module.css"

export default function Notfound() {
  return <>
  
  <div className="flex flex-col items-center justify-center text-center py-16 pt-50  bg-gradient-to-b from-[#90949c] to-[#0f172a] ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="No Results"
          className="w-32 h-32 mb-6 opacity-80"
        />
        <h2 className="text-2xl font-bold text-white mb-2">No Results Found</h2>
        <p className="text-gray-500 mb-6">
          We couldn't find any cars matching your search. Try a different keyword.
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Back to Home
        </a>
      </div>
      
   
  
  
  </>
}
