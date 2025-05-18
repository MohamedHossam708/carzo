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
  <div className="flex justify-center items-center h-screen  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
  <div className="spinner"></div>
</div>
  );
  return <>
  <div className="mx-auto py-10  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
      <h2 className="text-4xl font-bold text-center mb-9 pt-15 text-white">
       Maintance Companies
      </h2>
<div className="flex flex-wrap justify-center gap-6 mb-6 ">
        {maintance.slice(0, 3).map((maintance) => (
          <div
            key={maintance.id}
             className="bg-gray-100 rounded-xl p-4 w-[250px] flex flex-col items-center shadow-sm border-2 border-gray-300"
          >
            <Link to={`/maintancedetails/${maintance.id}`}>
            <img
              src={maintance.pictureUrl}
              alt={maintance.name}
            className="w-50 h-50 object-contain mx-auto rounded-full border-8 border-slate-600 p-2"
            />
            <p className="text-center  text-slate-700 font-bold">{maintance.name}</p>
            </Link>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center gap-6">
        {maintance.slice(3, 5).map((maintance) => (
          <div
            key={maintance.id}
            className="bg-gray-100 rounded-xl p-4 w-[250px] flex flex-col items-center shadow-sm border-2 border-gray-300"
            >
                <Link to={`/maintancedetails/${maintance.id}`}>
            <img
              src={maintance.pictureUrl}
              alt={maintance.name}
              className="w-50 h-50 object-contain mx-auto rounded-full border-8 border-slate-600 p-2"
            />
            <p className="text-center text-slate-700 font-bold">{maintance.name}</p>
            </Link>
          </div>
        ))}
      </div>
   
      </div>

  </>
}
