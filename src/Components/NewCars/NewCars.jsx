import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'


const NewCars = () => {
  const [Cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://arabytak.runasp.net/api/Car/AllCars/New")
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch new cars:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
      <div className="spinner"></div>
    </div>
  );

  return (
    <div className="p-20 mx-auto bg-gradient-to-t from-[#90949c] to-[#0f172a] min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 pt-10 text-white">New Cars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {Cars.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="h-48 flex items-center justify-center bg-gray-100">
              <img
                src={car.url[0]?.url}
                alt={car.carName}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-slate-800 mb-1">{car.carName}</h2>
              <p className="text-gray-500 text-sm mb-3">{car.dealershipName}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{car.status}</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{car.condition}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-slate-700">
                  {car.price.toLocaleString()} EGP
                </span>
                <button className="bg-slate-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewCars;
