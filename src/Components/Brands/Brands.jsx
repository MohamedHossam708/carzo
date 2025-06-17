import React, { useEffect, useState } from 'react';
import axios from "axios";
import car from "../../assets/images/59396c538696052eb6fde424dc2212083e50955b.png";
import logo from "../../assets/images/1d98b7ed19ba83f52164bdd957fb4c8ce05c5faa.png";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  function getBrands() {
    axios.get(`http://arabytak.runasp.net/api/Brand/Brands`)
      .then((res) => {
        setBrands(res.data);
      })
      .catch((res) => { });
  }

  useEffect(() => {
    getBrands();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring"
      }
    })
  };

  return (
    <>
      {/* الجزء العلوي - لم يتغير */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex flex-col md:flex-row">
          <img src={logo} className='w-200 bg-white ps-30 pt-20 p-10' alt="Logo" />
          <div className="w-full md:w-1/2 h-64 md:h-auto relative ">
            <img
              src={car}
              alt="Premium car"
              className="w-full h-full object-cover object-center bg-white"
            />
            <div className="absolute inset-0 bg-gradient-to-b"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden">
          <div className="absolute right-0 md:right-1/2 top-0 bottom-0 w-24 md:w-36 bg-gray-100 transform skew-x-12 translate-x-12 md:translate-x-1/2"></div>
        </div>
      </div>

      {/* تعديل هنا فقط */}
      <div className="brand bg-white py-16">
        <h1 className='text-slate-800 text-center font-extrabold text-4xl mb-12'>Explore Our <span className="text-blue-600">Premium Brands</span></h1>
        <div className="container ps-44 pe-44">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 15px rgba(59,130,246,0.6)",
                  borderColor: "rgba(59,130,246,0.8)"
                }}
                className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center transition duration-300 ease-in-out cursor-pointer"
              >
                <Link to={`/branddetails/${brand.name}`} className="flex flex-col items-center">
                  <img
                    src={brand.pictureUrl}
                    className="h-16 object-contain mb-3 transition-transform duration-200 hover:scale-110"
                    alt={brand.name}
                  />
                  <span className="text-sm font-semibold text-slate-700 text-center">{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
