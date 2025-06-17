import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CarSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get('query');
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      axios.get('http://arabytak.runasp.net/api/Car/GetAllCars')
        .then(res => {
          const filtered = res.data.filter(car =>
            car.carName?.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
          setLoading(false);
        })
        .catch(err => {
          console.error('API Error:', err);
          setLoading(false);
        });
    }
  }, [query]);

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

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
    </div>
  );

  return (
    <div className="p-20 bg-white min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-8 text-slate-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Search Results for: <span className="text-blue-600">{query}</span>
      </motion.h1>

      {results.length ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {results.map((car, index) => (
            <motion.div
              key={car.carId}
              custom={index}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-blue-400 hover:shadow-lg hover:scale-[1.03]"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={car.url?.[0]?.url || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={car.carName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-slate-900">{car.carName}</h2>
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
                  <span className="text-lg font-bold text-slate-900">
                    {car.price.toLocaleString()} EGP
                  </span>
                  <button
                    onClick={() => navigate(`/car-details/${car.status}/${car.carId}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Results"
            className="w-32 h-32 mb-6 opacity-80"
          />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No Results Found</h2>
          <p className="text-gray-500 mb-6">
            We couldn't find any cars matching your search. Try a different keyword.
          </p>
          <a
            href="/"
            className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Back to Home
          </a>
        </div>
      )}
    </div>
  );
}





