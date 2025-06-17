import React, { useEffect, useState } from 'react';
import axios from "axios";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CarCard from '../Ui/CarCard'; // ✅ تأكدي من المسار حسب مكان الملف

export default function UsedCars() {
  const [Cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://arabytak.runasp.net/api/Car/AllCars/Used`)
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch used cars:", error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (carId) => {
    setFavorites((prev) => {
      const updated = prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const viewDetails = (car) => {
    navigate(`/car-details/${car.status}/${car.carId}`);
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

  if (loading) {
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
        <span className="text-blue-600">Used</span> Cars
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Cars.map((car, index) => (
          <motion.div
            key={car.carId}
            custom={index}
            variants={cardVariants}
          >
            <CarCard
              car={car}
              isFavorite={favorites.includes(car.carId)}
              onToggleFavorite={toggleFavorite}
              onViewDetails={viewDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

