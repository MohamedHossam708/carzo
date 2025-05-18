import React, { useEffect, useState } from 'react'
import style from "./InsuranceCompany.module.css"
import axios from 'axios';
import { Link,  useNavigate } from 'react-router-dom';

export default function InsuranceCompany() {
const [insurance, setInsurance] = useState([]);
const [loading, setLoading] = useState(true);

function getInsurance(){
 axios.get (`http://arabytak.runasp.net/api/Companies/GetAllInsurance`)
 .then((res)=>{
 setInsurance(res.data)
  setLoading(false);
 })
 .catch((error) => {
   console.error("Failed to fetch new cars:", error);
   setLoading(false);
 });
 
}
useEffect (()=>{
 getInsurance()
}, [])  

if (loading) return (
  <div className="flex justify-center items-center h-screen  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
    <div className="spinner"></div>
  </div>
);
  
  return <>

<div className=" mx-auto py-1  bg-gradient-to-t from-[#90949c] to-[#0f172a] ">
      <h2 className="text-4xl font-bold text-center mb-9 text-white pt-20">
       Insurance Companies
      </h2>
<div className="flex flex-wrap justify-center gap-6 mb-6 ">
        {insurance.slice(0, 3).map((insurance) => (
          <div key={insurance.id}
            className="bg-gray-100 rounded-xl p-4 w-[250px] flex flex-col items-center shadow-sm border-2 border-gray-300"
      >
        <Link to={`/insurancedetails/${insurance.id}`}>
            <img
              src={insurance.pictureUrl}
              alt={insurance.name}
              className="w-50 h-50 object-contain mx-auto rounded-full border-8 border-slate-600 p-2" 
            />
            <p className="text-center  text-slate-700 font-bold">{insurance.name}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6">
        {insurance.slice(3, 5).map((insurance) => (
          <div
            key={insurance.id}
            className="bg-gray-100 rounded-xl p-4 w-[250px] flex flex-col items-center shadow-sm"
            >
               <Link to={`/insurancedetails/${insurance.id}`}>
            <img
              src={insurance.pictureUrl}
              alt={insurance.name}
              className="w-50 h-50 object-contain mx-auto rounded-full border-8 border-slate-600 p-2" 
            />
            <p className="text-center text-slate-700 font-bold">{insurance.name}</p>
            </Link>
          </div>
        ))}
      </div>
   
      </div>

  </>
}
