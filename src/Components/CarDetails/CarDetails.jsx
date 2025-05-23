import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

export default function CarDetails() {
  const { status, carId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    axios
      .get(`http://arabytak.runasp.net/api/Car/${status}/${carId}`)
      .then((res) => {
        console.log(res.data);
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching car details:', err);
        setLoading(false);
      });
  }, [status, carId]);

  const handleBuyNowClick = () => {
    setShowContact(!showContact);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#90949c] to-[#0f172a]">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="text-center text-white mt-20">
        Car not found or API error.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 pb-10">
      {/* Car photo Section */}
      <div className="bg-gray-100 py- px-4 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={car.url?.[0]?.url}
            alt={car.carName}
            className="w-full md:w-[700px] h-auto mx-auto object-cover"
          />
          <h1 className="text-3xl font-bold mt-6">{car.carName}</h1>
          <p className="text-gray-600 mt-2">
            {car.specifications.description || 'Car description goes here.'}
          </p>
        </div>
      </div>

      {/* Dealer Info */}
      <div className="flex justify-center items-center my-8">
        <FaUserCircle className="text-5xl text-slate-500" />
        <div className="ml-4">
          <h2 className="text-lg font-bold">{car.dealershipName}</h2>
        </div>
      </div>

      {/* Car Features Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        <h2 className="text-xl font-semibold mb-4">Car Features</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Feature label="Manufacture Year" value={car.specifications.year} />
          <Feature label="Transmission" value={car.transmission || 'N/A'} />
          <Feature label="Max Speed" value={car.maxSpeed + ' km/h'} />
          <Feature label="Fuel" value={car.specifications.fuel} />
          <Feature label="Engine Capacity" value={car.engineCapacity + ' CC'} />
          <Feature label="Transmission Type" value={car.specifications.transmission} />
          <Feature label="Seats Capacity" value={car.seatCapacity + ' Seats'} />
          <Feature label="Country Of Origin" value={car.specifications.originCountry} />
          <Feature label="Acceleration" value={car.acceleration} />
          <Feature label="Condition" value={car.condition} />
          <Feature label="Status" value={car.status} />
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleBuyNowClick}
          className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-800 transition"
        >
          Buy Now!
        </button>
      </div>

      {/* Contact Info Box */}
      {showContact && (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">{car.dealershipName}</h3>
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${car.phoneNumber}`}
              className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
            >
              📞 Phone {car.phoneNumber}
            </a>
            <a
              href={`https://wa.me/${car.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
            >
              💬 WhatsApp {car.phoneNumber }
            </a>
            <button
              className="bg-gray-700 text-white py-2 rounded-full cursor-default"
            >
              📍 Location {car.location }
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-800 text-white mt-20 py-10 px-6 text-sm text-center">
        <p>© 2025 example.com. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Feature({ label, value }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold mt-1">{value || '—'}</p>
    </div>
  );
}
