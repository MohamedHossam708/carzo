import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem('userToken');
      console.log(token);

      const res = await axios.get('http://arabytak.runasp.net/api/Favorite', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(res.data.items);
      console.log(res);
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
      <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#90949c] to-[#0f172a]">
        <div className="spinner"></div>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="bg-gradient-to-br from-[#90949c] to-[#0f172a] min-h-screen flex items-center justify-center">
        <div className="text-center text-white text-xl">No favorite cars yet.</div>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gradient-to-br from-[#90949c] to-[#0f172a] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites?.map((car) => (
          <div key={car.carId} className="bg-white rounded-lg shadow-lg p-1 relative">
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

            <h2 className="text-lg font-semibold text-slate-800">{car.name}</h2>
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
