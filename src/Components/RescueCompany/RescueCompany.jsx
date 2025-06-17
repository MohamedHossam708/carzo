import React, { useEffect, useState } from 'react'
import style from "./RescueCompany.module.css"
import axios from 'axios';
import { Link,  useNavigate } from 'react-router-dom';

export default function RescueCompany() {
  const [rescue, setrescue] = useState([]);
  const [loading, setLoading] = useState(true);
  function getrescue(){
    axios.get (`http://arabytak.runasp.net/api/Companies/RescueCompany`)
    .then((res)=>{
    setrescue(res.data)
     setLoading(false);
    })
    .catch((error) => {
      console.error("Failed to fetch new cars:", error);
      setLoading(false);
    });
    
   }
   useEffect (()=>{
    getrescue()
   }, [])  

   if (loading) return (
   <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
  
);
  return <>
  
 
<div className="mx-auto py-10 bg-white max-w-7xl  rounded-lg ">
  <h2 className="text-4xl font-extrabold text-center mb-10 mt-10 text-slate-900">
    Rescue Companies
  </h2>
  <div className="flex flex-wrap justify-center gap-6 mb-8">
    {rescue.slice(0, 3).map((rescue) => (
      <div
        key={rescue.id}
        className="bg-gray-100 rounded-xl p-6 w-[250px] flex flex-col items-center shadow-md border border-gray-300 transition-transform duration-300 hover:shadow-blue-400 hover:scale-105 cursor-pointer"
      >
        <Link to={`/rescuedetails/${rescue.id}`}>
          <img
            src={rescue.pictureUrl}
            alt={rescue.name}
            className="w-48 h-48 object-contain mx-auto rounded-full border-4 border-slate-700 p-2"
          />
          <p className="text-center text-slate-900 font-bold mt-4">{rescue.name}</p>
        </Link>
      </div>
    ))}
  </div>

  <div className="flex justify-center gap-6">
    {rescue.slice(3, 5).map((rescue) => (
      <div
        key={rescue.id}
        className="bg-gray-100 rounded-xl p-6 w-[250px] flex flex-col items-center shadow-md border border-gray-300 transition-transform duration-300 hover:shadow-blue-400 hover:scale-105 cursor-pointer"
      >
        <Link to={`/rescuedetails/${rescue.id}`}>
          <img
            src={rescue.pictureUrl}
            alt={rescue.name}
            className="w-48 h-48 object-contain mx-auto rounded-full border-4 border-slate-700 p-2"
          />
          <p className="text-center text-slate-900 font-bold mt-4">{rescue.name}</p>
        </Link>
      </div>
    ))}
  </div>
</div>

  
  </>
}
