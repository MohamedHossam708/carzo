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
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120
      }
    })
  };

  return (  
    <div className="bg-gradient-to-br from-[#0f172a] to-[#90949c] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
        Explore Our Perimium Brands 
          </h2>
          <Link
             to={`/brands`}
            className="text-sm text-blue-300 font-semibold hover:underline flex items-center gap-1"
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
              className="relative group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl
                         hover:shadow-blue-500/40 transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Light shine effect */}
              <div className="absolute inset-0 bg-white via-white/10 to-transparent opacity-0
                            group-hover:opacity-10 transition duration-700 pointer-events-none animate-pulse" />

              <Link to={`branddetails/${brand.name}`} className="relative z-10 flex flex-col items-center">
                <motion.img
                  src={brand.pictureUrl}
                  alt={brand.name}
                  className="w-16 h-16 object-contain mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <span className="text-white text-sm font-semibold tracking-wide">{brand.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}



