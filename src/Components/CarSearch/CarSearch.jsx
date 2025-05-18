import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CarSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get('query');

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

  if (loading) return (
    <div className="flex justify-center items-center h-screen  bg-gradient-to-t from-[#90949c] to-[#0f172a]">
      <div className="spinner"></div>
    </div>
  );
  return (
    <div className="container px-40 mx-auto bg-gradient-to-t from-[#0f172a] to-[#90949c]">
      <h1 className="text-3xl font-bold mb-4 text-white pt-25">Search Results for : {query}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map(car => (
            <div key={car.id} className="bg-gradient-to-t  via-white/5 overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-900 transform hover:scale-105 p-2 shadow rounded">
              <img src={car.url?.[0]?.url} alt={car.carName} className="w-full h-50 object-cover rounded" />
              <h2 className="font-bold text-xl text-white pb-3 pt-3">{car.carName}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                        {car.status}
                                    </span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                        {car.condition}
                                    </span>
                                </div>
              <p className="text-lg text-white">{car.dealershipName}</p>
              <p className="text-white font-semibold">{car.price.toLocaleString()} EGP</p>
            </div>
          ))}
        </div>
      ) : (
      

        <div className="flex flex-col items-center justify-center text-center py-16">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="No Results"
          className="w-32 h-32 mb-6 opacity-80"
        />
        <h2 className="text-2xl font-bold text-white mb-2">No Results Found</h2>
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




