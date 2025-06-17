import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function BrandDetails() {
  const { name } = useParams();
  const [brand, setBrand] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://arabytak.runasp.net/api/Car/GetAllCars/${name}`)
      .then((res) => setBrand(res.data))
      .catch((err) => console.error('Error fetching data:', err));
  }, [name]);

  const toggleFavorite = async (carId) => {
    setFavorites((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );

    try {
      const response = await axios.post(
        `http://arabytak.runasp.net/api/Favorite/AddItems?ProductId=${carId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      console.log("Favorite API response:", response.data);
    } catch (error) {
      console.error("Error sending favorite to API:", error);
    }
  };

  const handleViewDetails = (car) => {
    const status = car.status.toLowerCase() === 'used' ? 1 : 0;
    navigate(`/car-details/${status}/${car.carId}`);
  };

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

  if (!brand) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="p-20 bg-white min-h-screen">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12 text-slate-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-blue-600">{name}</span> Cars
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {brand.map((car, index) => (
          <motion.div
            key={car.carId}
            custom={index}
            variants={cardVariants}
            className="relative bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-blue-400 hover:shadow-lg hover:scale-[1.03]"
            whileHover={{ y: -5 }}
          >
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-xl z-10"
              onClick={() => toggleFavorite(car.carId)}
              title="Add to Favorites"
            >
              {favorites.includes(car.carId) ? '❤️' : '🤍'}
            </button>

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
                  onClick={() => handleViewDetails(car)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition"
                >
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
