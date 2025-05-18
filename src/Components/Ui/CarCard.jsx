import React from 'react';

export default function CarCard({ car, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Favorite Button */}
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-xl z-10"
        onClick={() => onToggleFavorite(car.carId)}
        title="Add to Favorites"
      >
        {isFavorite ? '❤️' : '🤍'}
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
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{car.status}</span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{car.condition}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-slate-700">
            {car.price.toLocaleString()} EGP
          </span>
          <button
            onClick={() => onViewDetails(car)}
            className="bg-slate-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
