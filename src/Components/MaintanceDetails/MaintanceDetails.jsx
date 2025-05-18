import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';




export default function MaintanceDetails() {

  let { id } = useParams();

  // الحالة لتخزين بيانات شركة التأمين
  const [company, setCompany] = useState(null);

  // جلب البيانات من الـ API
  function getMaintance(id) {
    axios.get(`http://arabytak.runasp.net/api/Companies/maintenance/${id}`)
      .then((res) => {
        setCompany(res.data);  // تخزين البيانات في الحالة
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }

  // استخدام useEffect لتحميل البيانات عند تغيير الـ id
  useEffect(() => {
    getMaintance(id);
  }, [id]);

  // إذا كانت البيانات لا تزال قيد التحميل
  if (!company) {
    return (
      <div className="flex justify-center items-center h-screen  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
      {/* العنوان */}
      <h2 className="text-5xl font-bold text-center mb-6 text-white pb-4 pt-15 ">{company.name}</h2>

      {/* الشعار */}
      <div className="text-center mb-4">
        <img
          src={company.pictureUrl}  // عرض الشعار من البيانات
          alt={company.name}
          className="w-50 h-50 object-contain mx-auto rounded-full border-8  border-slate-600 p-2" 
        />

      </div>

       <h2 className='font-semibold text-slate-700 text-center p-5 bg-gray-300 rounded-3xl m-6'>{company.description}</h2>
       {/* <h2 className='font-semibold text-slate-700 text-center p-5 bg-gray-300 rounded-3xl'>availabe Services: </h2> */}
       {/* <h2 className='font-semibold text-slate-700 text-center p-5 bg-gray-300 rounded-3xl'>{company.availableServices}</h2> */}
      {/* الأزرار */}
      <div className="flex justify-center gap-6">
        {/* رقم الهاتف */}
  <button className='bg-gray-100 px-11 py-3 my-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-' > 
    {company.phone && (
      <Link to={`tel:${company.phone}`} className="flex items-center gap-2 text-blue-600">
  
  <span className='text-slate-700 font-semibold'>Phone Number</span>
  <i className="fas fa-phone-alt"></i>
      </Link>
    )} 
     
  </button>

        {/* WhatsApp */}
      
        <button className='bg-gray-100 px-14 py-3 my-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-' > 
    {company.phone && (
      <Link to={`https://wa.me/${company.whatsApp}`} className="flex items-center gap-2 text-green-600">
  
  <span className='text-slate-700 font-semibold'>WhatsApp</span>
  <i className="fab fa-whatsapp text-xl"></i>
      </Link>
    )} 
     
  </button>

        {/* العنوان */}
       
        <button className='bg-gray-100 px-14 py-3 my-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-' > 
    {company.phone && (
      <Link to={`https://www.google.com/maps?q=${company.location}`} className="flex items-center gap-2 text-slate-700">
  <span className='font-semibold text-slate-700'>Address</span>
  <i className="fas fa-map-marker-alt"></i>

      </Link>
    )} 
     
  </button>


      </div>
     
    </div>
  );
}
