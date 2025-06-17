import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CarCard from '../Ui/CarCard';

export default function DealershipCars() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dealer, setDealer] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const [dealerRes, carsRes] = await Promise.all([
          axios.get(`http://arabytak.runasp.net/api/Dealership/DealerShipDetails/${id}`),
          axios.get(`http://arabytak.runasp.net/api/Car/GetAllCars?dealershipid=${id}`)
        ]);
        setDealer(dealerRes.data);
        setCars(carsRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleToggleFavorite = async (carId) => {
    const token = localStorage.getItem('userToken');

    setFavorites(prev =>
      prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
    );

    try {
      await axios.post(
        `http://arabytak.runasp.net/api/Favorite/AddItems?ProductId=${carId}`,
        null,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    }
  };

  const handleViewDetails = (car) => {
    const status = car.status?.toLowerCase() === 'used' ? 1 : 0;
    navigate(`/car-details/${status}/${car.carId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-t from-blue-50 to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  if (!dealer) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">Failed to load dealership details.</div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-10 max-w-7xl mx-auto mt-10">

      {/* Dealer Card */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border border-gray-200 hover:shadow-blue-400 hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image */}
        <div className="w-36 h-36 flex-shrink-0">
          {dealer.pictureUrl ? (
            <img
              src={dealer.pictureUrl}
              alt={dealer.name}
              className="w-full h-full rounded-full object-cover border-4 border-blue-200"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-full font-semibold">
              No Image
            </div>
          )}
        </div>

        {/* Dealer Info */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <h1 className="text-3xl font-extrabold text-blue-900">{dealer.name}</h1>
          <p className="text-gray-700 text-base">
            Renting a car brings you freedom, and we help you find the best car at a great price.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-yellow-400">
            {'⭐️⭐️⭐️⭐️⭐️'.split('').map((s, i) => <span key={i}>{s}</span>)}
            <span className="text-gray-500 text-xs ml-3">Trusted by 10M+ users</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 min-w-[300px]">
          <div>
            <p className="font-semibold flex items-center gap-2 text-blue-700"><FaPhone /> Phone</p>
            <p className="text-blue-600">{dealer.phone1 || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold flex items-center gap-2 text-green-600"><FaWhatsapp /> WhatsApp</p>
            <p className="text-green-600">{dealer.whatsApp1 || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold flex items-center gap-2 text-blue-700"><FaClock /> Open</p>
            <p className="text-blue-800 font-medium">10:00 AM</p>
          </div>
          <div>
            <p className="font-semibold flex items-center gap-2 text-blue-700"><FaClock /> Close</p>
            <p className="text-blue-800 font-medium">11:00 PM</p>
          </div>
        </div>
      </motion.div>

      {/* Branches */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {[dealer.branch1, dealer.branch2].map((branch, i) => (
          <div key={i} className="bg-blue-100 p-5 rounded-md shadow-sm border border-blue-200 hover:bg-blue-200 transition-colors duration-300 cursor-pointer">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2"><FaMapMarkerAlt /> Branch {i + 1}</h3>
            {branch ? (
              <a href={branch} target="_blank" rel="noopener noreferrer" className="text-blue-800 underline">
                View Location
              </a>
            ) : (
              <p className="text-gray-600">No info</p>
            )}
          </div>
        ))}
      </motion.div>

      {/* Cars */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            }
          }
        }}
      >
        {cars.length === 0 ? (
          <p className="text-center text-slate-700 col-span-full">No cars available for this dealership.</p>
        ) : (
          cars.map((car, i) => (
            <motion.div
              key={car.carId}
              custom={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:shadow-blue-400 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 rounded"
            >
              <CarCard
                car={car}
                isFavorite={favorites.includes(car.carId)}
                onToggleFavorite={handleToggleFavorite}
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}




