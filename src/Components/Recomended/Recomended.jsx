import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CarCard from '../Ui/CarCard'; // ✅ تأكد من مسار الاستيراد الصحيح

export default function Recomended() {
  const [recommend, setRecommend] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://arabytak.runasp.net/api/Car/GetAllCars')
      .then(response => {
        const allRecommend = response.data || [];
        const shuffled = allRecommend.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setRecommend(selected);
      })
      .catch(error => {
        console.error('Error fetching Recommend:', error);
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
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100,
      }
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-white py-20 px-6 overflow-hidden"
    >
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-white opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="flex justify-between items-center mb-12 px-2">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight drop-shadow-md">
            <span className="text-blue-600">Recommend</span> for You
          </h1>
          <Link
            to="/foryou"
            className="text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1 transition-transform hover:translate-x-1"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {recommend.map((car, index) => (
            <motion.div
              key={car.carId}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CarCard
                car={car}
                isFavorite={favorites.includes(car.carId)}
                onToggleFavorite={toggleFavorite}
                onViewDetails={viewDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

