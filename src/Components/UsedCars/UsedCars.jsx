import React, { useEffect, useState } from 'react'
import style from "./UsedCars.module.css"
import axios from "axios"
export default function UsedCars() {
 const [Cars, setCars] = useState([]);
 const [loading, setLoading] = useState(true);
 function getCars(){
  axios.get (`http://arabytak.runasp.net/api/Car/AllCars/Used`)
  .then((res)=>{
    setCars(res.data);
   setLoading(false);
  })
  .catch((error) => {
    console.error("Failed to fetch new cars:", error);
    setLoading(false);
  });
  
}
useEffect (()=>{
    getCars()
}, [])  
if (loading) return (
  <div className="flex justify-center items-center h-screen  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
    <div className="spinner"></div>
  </div>
);
  return <>
   
   <div className="p-20 mx-auto  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
      <h1 className="text-5xl font-bold text-center mb-8 pt-10 text-white ">Used Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {Cars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="h-48 flex items-center justify-center">
            <img
          src={car.url[0].url}
          alt={car.carName}
          className="w-full h-45 object-cover rounded-md mb-4"
        />
            </div> 
            <div className="p-2">
              <h2 className="text-xl font-bold mb-1 text-slate-700">
                {car.carName}
              </h2>
              <p className="text-gray-600 text-sm font-semibold mb-3">{car.dealershipName}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {car.status} 
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {car.condition}
                </span>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-slate-700">
                  {/* ${car.price ? car.price.toLocaleString() : 'Price not available'} */}
                  {car.price.toLocaleString()} EGP
                </span>
                <button className="bg-slate-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-300">
                  View Details
                </button>
            
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    

  </>
}
