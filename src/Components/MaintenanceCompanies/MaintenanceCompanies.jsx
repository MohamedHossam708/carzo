import React, { useEffect, useState } from 'react'
import style from "./MaintenanceCompanies.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function MaintenanceCompanies() {
   const [maintance, setMaintance] = useState([]);
   const [loading, setLoading] = useState(true);
   function getMaintance(){
    axios.get (`http://arabytak.runasp.net/api/Companies/maintenance`)
    .then((res)=>{
     setMaintance(res.data)
     setLoading(false);
    })
    .catch((error) => {
      console.error("Failed to fetch new cars:", error);
      setLoading(false);
    });
    
  }
  useEffect (()=>{
    getMaintance()
  }, [])  
  if (loading) return (
<div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
  );
  return <>
 
 <div className="mx-auto py-10 bg-white max-w-7xl px-6 rounded-lg ">
  <h2 className="text-4xl font-extrabold text-center mb-10 mt-10 text-slate-900">
    Maintenance Companies
  </h2>
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    {maintance.slice(0, 3).map((maintance) => (
      <div
        key={maintance.id}
        className="bg-gray-100 rounded-xl p-6  w-[250px]  flex flex-col items-center shadow-md border border-gray-300 transition-transform duration-300 hover:shadow-blue-400 hover:scale-105 cursor-pointer"
      >
        <Link to={`/maintancedetails/${maintance.id}`}>
          <img
            src={maintance.pictureUrl}
            alt={maintance.name}
            className="w-48 h-48 object-contain mx-auto rounded-full border-4 border-slate-700 p-2"
          />
          <p className="text-center text-slate-900 font-bold mt-4">{maintance.name}</p>
        </Link>
      </div>
    ))}
  </div>

  <div className="flex justify-center gap-6">
    {maintance.slice(3, 5).map((maintance) => (
      <div
        key={maintance.id}
        className="bg-gray-100 rounded-xl p-6  w-[250px]  flex flex-col items-center shadow-md border border-gray-300 transition-transform duration-300 hover:shadow-blue-400 hover:scale-105 cursor-pointer"
      >
        <Link to={`/maintancedetails/${maintance.id}`}>
          <img
            src={maintance.pictureUrl}
            alt={maintance.name}
            className="w-48 h-48 object-contain mx-auto rounded-full border-4 border-slate-700 p-2"
          />
          <p className="text-center text-slate-900 font-bold mt-4">{maintance.name}</p>
        </Link>
      </div>
    ))}
  </div>
</div>


  </>
}
