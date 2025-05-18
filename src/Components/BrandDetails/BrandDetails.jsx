import React, { useEffect, useState } from 'react';
import style from "./BrandDetails.module.css";
import { useParams, useNavigate } from 'react-router-dom'; // ✅ useNavigate
import axios from 'axios';

export default function BrandDetails() {
  const { name } = useParams();
  const [brand, setBrand] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // ✅ hook for programmatic navigation

  // 🔁 Fetch brand data
  function getBrandDetails(name) {
    axios.get(`http://arabytak.runasp.net/api/Car/GetAllCars/${name}`)
      .then((res) => {
        setBrand(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }

  useEffect(() => {
    getBrandDetails(name);
  }, [name]);

  // ✅ Toggle favorites
  const toggleFavorite = async (carId) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(carId);
      return isFavorite
        ? prevFavorites.filter((favId) => favId !== carId)
        : [...prevFavorites, carId];
    });

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
    console.log(car.carId);
    
    const status = car.status.toLowerCase() === 'used' ? 1 : 0;
    navigate(`/car-details/${status}/${car.carId}`);
  };

  if (!brand) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#90949c] to-[#0f172a]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="p-20 mx-auto bg-gradient-to-br from-[#90949c] to-[#0f172a]">
      <h1 className="text-3xl font-bold text-center mb-8 pt-10 text-slate-700">{name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {brand.map((car) => (
          <div
            key={car.carId}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            {/* Favorite Button */}
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-xl z-10"
              onClick={() => toggleFavorite(car.carId)}
              title="Add to Favorites"
            >
              {favorites.includes(car.carId) ? '❤️' : '🤍'}
            </button>

            <div className="h-48 flex items-center justify-center">
              <img
                src={car.url?.[0]?.url || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={car.carName}
                className="w-full h-45 object-cover rounded-md mb-4"
              />
            </div>

            <div className="p-2">
              <h2 className="text-xl font-bold mb-1 text-slate-700">{car.carName}</h2>
              <p className="text-gray-600 text-sm font-semibold mb-3">{car.dealershipName}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {car.status}
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {car.condition}
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-slate-700">
                  {car.price.toLocaleString()} EGP
                </span>
                <button
                  onClick={() => handleViewDetails(car)} // ✅ cleaner
                  className="bg-slate-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
