import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function PerimiumBrands() {
  const [brand, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://arabytak.runasp.net/api/Brand/Brands')
      .then(response => {
        const allBrand = response.data || [];
        const shuffled = allBrand.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        setBrand(selected);
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
      });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="relative bg-gray-50 py-20 px-6 overflow-hidden">
      {/* خلفية مزخرفة خفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-white to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight drop-shadow-md">
            Explore Our <span className="text-blue-600">Premium Brands</span>
          </h2>
          <Link
            to={`/brands`}
            className="text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1 transition-transform hover:translate-x-1"
          >
            Show All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brand.map((brand, index) => (
         <motion.div
  key={brand.id}
  custom={index}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="relative group p-6 rounded-2xl bg-white border border-slate-200 
             shadow-md transition-all duration-300 hover:scale-105 
             hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] overflow-hidden"
>
  {/* تأثير لمعة متحركة */}
  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-transparent before:via-white/40 before:to-transparent 
                  before:translate-x-[-100%] group-hover:before:animate-shine z-0 rounded-2xl" />

  {/* Border متدرج يظهر على الـ hover */}
  <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                  group-hover:border-blue-400 transition-all duration-500 z-0" />

  <Link to={`branddetails/${brand.name}`} className="relative z-10 flex flex-col items-center">
    <motion.img
      src={brand.pictureUrl}
      alt={brand.name}
      className="w-16 h-16 object-contain mb-3 transition-transform duration-500 
                 group-hover:scale-110 group-hover:rotate-2"
    />
    <span className="text-slate-700 text-sm font-bold tracking-wide">{brand.name}</span>
  </Link>
</motion.div>

          ))}
        </div>
      </div>
    </div>
  );
}




