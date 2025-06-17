import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem('userToken');
      if (!token) {
        console.error('No token found');
        setLoading(false);
        return;
      }

      const res = await axios.get('http://arabytak.runasp.net/api/Favorite', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(res.data.items);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (productId) => {
    try {
      await axios.delete(
        `http://arabytak.runasp.net/api/Favorite/items/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      setFavorites((prev) => prev.filter((item) => item.carId !== productId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center bg-white px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="text-blue-600 text-6xl mb-6"
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          🚗
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Looks like you don't have any favorites yet.
        </h2>
        <p className="text-gray-600 max-w-md text-center">
          Start exploring and add some cool cars to your favorites! Your dream ride is just a click away.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((car) => (
          <div
            key={car.carId}
            className="bg-white rounded-lg shadow-lg p-4 relative border border-gray-200 hover:shadow-lg hover:shadow-blue-400 hover:scale-[1.03] transition-transform duration-300"
          >
            <button
              onClick={() => removeFavorite(car.carId)}
              className="absolute top-2 right-2 text-red-600 text-xl"
              title="Remove from Favorites"
            >
              ❌
            </button>

            {car.pictureUrl ? (
              <img
                src={car.pictureUrl}
                alt={car.name}
                className="w-full h-40 object-cover rounded mb-2"
                onError={(e) =>
                  (e.target.src = 'https://via.placeholder.com/300x200?text=No+Image')
                }
              />
            ) : (
              <img
                src="https://via.placeholder.com/300x200?text=No+Image"
                alt="No image available"
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}

            <h2 className="text-lg font-semibold text-gray-900">{car.name}</h2>
            <p className="text-sm text-gray-600 mb-1">
              Location: {car.location || 'Not specified'}
            </p>
            <p className="text-sm text-gray-600 mb-1">Status: {car.status}</p>
            <p className="text-green-700 font-bold">
              {car.price.toLocaleString()} EGP
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


