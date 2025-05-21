import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CarCard from '../Ui/CarCard';
import { FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function DealershipCars() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dealer, setDealer] = useState(null);
  const [cars, setCars] = useState([]);
  const [loadingDealer, setLoadingDealer] = useState(true);
  const [loadingCars, setLoadingCars] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!id) return;

    // Fetch dealer details
    axios
      .get(`http://arabytak.runasp.net/api/Dealership/DealerShipDetails/${id}`)
      .then(res => {
        setDealer(res.data);
        setLoadingDealer(false);
      })
      .catch(err => {
        console.error('Failed to fetch dealer:', err);
        setLoadingDealer(false);
      });

    // Fetch dealer cars
    axios
      .get(`http://arabytak.runasp.net/api/Car/GetAllCars?dealershipid=${id}`)
      .then(res => {
        setCars(res.data);
        setLoadingCars(false);
      })
      .catch(err => {
        console.error('Failed to fetch cars:', err);
        setLoadingCars(false);
      });
  }, [id]);

  const handleToggleFavorite = async (carId) => {
    const token = localStorage.getItem('userToken');

    // Optimistic UI update
    setFavorites(prev => {
      const isFavorite = prev.includes(carId);
      return isFavorite ? prev.filter(favId => favId !== carId) : [...prev, carId];
    });

    try {
      await axios.post(
        `http://arabytak.runasp.net/api/Favorite/AddItems?ProductId=${carId}`,
        null, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error('Failed to add favorite:', error);
      // Revert UI update if API fails
      setFavorites(prev => {
        const isFavorite = prev.includes(carId);
        return isFavorite ? prev.filter(favId => favId !== carId) : [...prev, carId];
      });
    }
  };

  const handleViewDetails = (car) => {
    const status = car.status?.toLowerCase() === 'used' ? 1 : 0;
    navigate(`/car-details/${status}/${car.carId}`);
  };

  if (loadingDealer || loadingCars) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-slate-600 text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (!dealer) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Failed to load dealership details.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mt-12 mx-auto py-10 px-4">
      {/* Dealer Info Section */}
      <div className="w-full bg-white rounded-xl shadow-md p-6 mb-10 flex items-center justify-between gap-8">
        {/* Left: Dealer Image */}
        <div className="flex-shrink-0 w-44 h-44">
          {dealer.pictureUrl ? (
            <img
              src={dealer.pictureUrl}
              alt={dealer.name}
              className="w-full h-full object-cover rounded-full border-4 border-gray-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-full text-sm">
              No Image
            </div>
          )}
        </div>

        {/* Middle: Name & Reviews */}
        <div className="flex-1 px-6 space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-800">{dealer.name}</h1>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            Renting a car brings you freedom, we’ll help you find the best car at a great price.
          </p>

          {/* Ratings & Users */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/30?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="User 1" />
              <img src="https://i.pravatar.cc/30?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="User 2" />
              <img src="https://i.pravatar.cc/30?img=3" className="w-8 h-8 rounded-full border-2 border-white" alt="User 3" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">+2k</div>
            </div>
            <div className="flex items-center space-x-1 text-blue-500">
              {'⭐️⭐️⭐️⭐️⭐️'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
              <span className="text-gray-500 text-sm ml-2">Trusted by 10 million customers</span>
            </div>
          </div>
        </div>

        {/* Right: Dealer Details */}
        <div className="min-w-[350px] flex flex-col gap-6">
          {/* Branches */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-1 flex items-center gap-1"><FaMapMarkerAlt /> Main Branch</p>
              <p className="bg-white p-2 rounded">
                {dealer.branch1 ? (
                  <a
                    href={dealer.branch1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Branch 1 Location
                  </a>
                ) : (
                  'No branch info'
                )}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-1"><FaMapMarkerAlt /> Another Branch</p>
              <p className="bg-white p-2 rounded">
                {dealer.branch2 ? (
                  <a
                    href={dealer.branch2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Branch 2 Location
                  </a>
                ) : (
                  'No branch info'
                )}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-4 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-1 flex items-center gap-1"><FaPhone /> Phone Number</p>
              <p className="bg-white p-2 rounded text-center">+20 {dealer.phone1 || 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-1"><FaWhatsapp /> WhatsApp</p>
              <p className="bg-white p-2 rounded text-center">+20 {dealer.whatsApp1 || 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-1"><FaClock /> Work Start Time</p>
              <p className="bg-white p-2 rounded text-center">10:00 AM</p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-1"><FaClock /> Work End Time</p>
              <p className="bg-white p-2 rounded text-center">11:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      {cars.length === 0 ? (
        <div className="text-center py-20 text-slate-700 text-xl">
          No cars available for this dealership.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map(car => (
            <CarCard
              key={car.carId}
              car={car}
              isFavorite={favorites.includes(car.carId)}
              onToggleFavorite={handleToggleFavorite}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}
