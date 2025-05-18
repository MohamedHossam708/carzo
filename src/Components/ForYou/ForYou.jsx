import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function ForYou() {
  const [Cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  function getCars() {
    axios.get(`http://arabytak.runasp.net/api/Car/GetAllCars`)
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch new cars:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getCars();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#90949c] to-[#0f172a]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-solid"></div>
      </div>
    );
  }

  return (
    <div className="p-20 bg-gradient-to-tr from-[#0f172a] to-[#90949c] min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Recommended For You
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Cars.map((car, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 transform hover:scale-[1.03]"
            whileHover={{ y: -5 }}
          >
            <div className="h-48 flex items-center justify-center overflow-hidden">
              <img
                src={car.url[0]?.url}
                alt={car.carName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-slate-700">{car.carName}</h2>
              <p className="text-gray-600 text-sm font-semibold mb-2">{car.dealershipName}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {car.status}
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {car.condition}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-slate-800">
                  {car.price.toLocaleString()} EGP
                </span>
                <button className="bg-slate-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
