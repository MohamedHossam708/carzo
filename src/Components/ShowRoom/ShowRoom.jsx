
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DealershipCard from '../Ui/DealersCard';

export default function Dealership() {
  const [dealerships, setDealerships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://arabytak.runasp.net/api/Dealership/GetAllDealership')
      .then((res) => {
        setDealerships(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch dealerships:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="p-20 bg-white min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-900">
        <span className="text-blue-600">Car</span> Dealerships
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {dealerships.map((dealer) => (
          <DealershipCard key={dealer.id} dealer={dealer} />
        ))}
      </div>
    </div>
  );
}

