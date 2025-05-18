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
  return <>
  
 
 <div className=" mx-auto py-10  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
       <h2 className="text-4xl font-bold text-center mb-9 text-white pt-10">
      Rescue Companies
       </h2>
 <div className="flex flex-wrap justify-center gap-6 mb-6 ">
         {rescue.slice(0, 3).map((rescue) => (
           <div key={rescue.id}
             className="bg-gray-100 rounded-xl p-4 w-[250px] flex flex-col items-center shadow-sm border-2 border-gray-300"
       >
         <Link to={`/rescuedetails/${rescue.id}`}>
             <img
               src={rescue.pictureUrl}
               alt={rescue.name}
               className="w-50 h-50 object-contain mx-auto rounded-full border-8 border-slate-600 p-2" 
             />
             <p className="text-center  text-slate-700 font-bold">{rescue.name}</p>
             </Link>
           </div>
         ))}
       </div>
 
       <div className="flex justify-center gap-6">
         {rescue.slice(3, 5).map((rescue) => (
           <div
             key={rescue.id}
             className="bg-gray-100 rounded-xl p-4 w-[250px] flex flex-col items-center shadow-sm"
             >
                <Link to={`/rescuedetails/${rescue.id}`}>
             <img
               src={rescue.pictureUrl}
               alt={rescue.name}
               className="w-50 h-50 object-contain mx-auto rounded-full border-8 border-slate-600 p-2" 
             />
             <p className="text-center text-slate-700 font-bold">{rescue.name}</p>
             </Link>
           </div>
         ))}
       </div>
    
       </div>
  
  </>
}
