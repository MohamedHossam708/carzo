
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DealershipCard from '../Ui/DealersCard'

export default function Dealership() {
  const [dealerships, setDealerships] = useState([]);
  const [loading, setLoading] = useState(true);

  function getDealerships() {
    axios.get('http://arabytak.runasp.net/api/Dealership/GetAllDealership')
      .then((res) => {
        console.log(res.data);
        
        setDealerships(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch dealerships:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getDealerships();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#90949c] to-[#0f172a]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto py-1 bg-gradient-to-t from-[#90949c] to-[#0f172a]">
      <h2 className="text-4xl font-bold text-center mb-9 text-white pt-20">
        Car Dealerships
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {dealerships.map((dealer) => (
          <DealershipCard key={dealer.id} dealer={dealer} />
        ))}
      </div>
    </div>
  );
}
