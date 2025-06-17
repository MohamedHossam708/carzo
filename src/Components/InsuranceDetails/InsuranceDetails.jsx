import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import style from './InsuranceDetails.module.css';


export default function InsuranceDetails() {
  let { id } = useParams();

  // الحالة لتخزين بيانات شركة التأمين
  const [company, setCompany] = useState(null);

  // جلب البيانات من الـ API
  function getInsurance(id) {
    axios.get(`http://arabytak.runasp.net/api/Companies/Insurance/${id}`)
      .then((res) => {
        setCompany(res.data);  // تخزين البيانات في الحالة
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }

  // استخدام useEffect لتحميل البيانات عند تغيير الـ id
  useEffect(() => {
    getInsurance(id);
  }, [id]);

  // إذا كانت البيانات لا تزال قيد التحميل
  if (!company) {
    return (
  <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  return (
  <div className="container mx-auto py-10 px-6 bg-white rounded-lg shadow-lg mt-10">
  {/* العنوان */}
  <h2 className="text-5xl font-bold text-center mb-8 text-slate-900 mt-10 pt-4 ">{company.name}</h2>

  {/* الشعار */}
  <div className="text-center mb-8">
    <img
      src={company.pictureUrl}  // عرض الشعار من البيانات
      alt={company.name}
      className="w-48 h-48 object-contain mx-auto rounded-full border-4 border-slate-700 p-2"
    />
  </div>

  {/* الوصف */}
  <h2 className="font-semibold text-slate-700 text-center p-6 bg-gray-100 rounded-3xl mx-6 mb-10">
    {company.description}
  </h2>

  {/* الأزرار */}
  <div className="flex justify-center gap-8 flex-wrap">
    {/* رقم الهاتف */}
    {company.phone && (
      <a
        href={`tel:${company.phone}`}
        className="bg-blue-100 text-blue-700 px-10 py-3 rounded-2xl flex items-center gap-3 font-semibold hover:bg-blue-200 transition"
      >
        <i className="fas fa-phone-alt"></i>
        Phone Number
      </a>
    )}

    {/* WhatsApp */}
    {company.whatsApp && (
      <a
        href={`https://wa.me/${company.whatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-100 text-green-700 px-10 py-3 rounded-2xl flex items-center gap-3 font-semibold hover:bg-green-200 transition"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        WhatsApp
      </a>
    )}

    {/* العنوان */}
    {company.location && (
      <a
        href={`https://www.google.com/maps?q=${company.location}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 text-slate-700 px-10 py-3 rounded-2xl flex items-center gap-3 font-semibold hover:bg-gray-200 transition"
      >
        <i className="fas fa-map-marker-alt"></i>
        Address
      </a>
    )}
  </div>
</div>

  );
}

