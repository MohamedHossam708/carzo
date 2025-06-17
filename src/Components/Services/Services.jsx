import React from 'react'
import { Link } from 'react-router-dom';
import newcar from "../../assets/images/new-cars-image.png"
import usecar from "../../assets/images/used-car.png"
import carshowroom from "../../assets/images/carn-showrooms.png"
import insurance from "../../assets/images/insurancen-companies.png"
import maintance from "../../assets/images/maintenance-companies.png"
import rescue from "../../assets/images/rescue-companies.png"
import sell from "../../assets/images/sell-car.png"
import { motion } from "framer-motion";

export default function Services() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const gradients = [
    "from-purple-400 via-pink-500 to-red-500",
    "from-green-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-orange-400 to-red-400",
    "from-pink-400 via-red-400 to-yellow-400",
    "from-cyan-400 via-blue-400 to-purple-400",
    "from-indigo-400 via-purple-500 to-pink-500",
    "from-teal-400 via-green-500 to-lime-400",
  ];

  return (
    <div className="bg-white px-6 mb-10 mt-20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-extrabold text-gray-900 text-4xl select-none drop-shadow-lg">
            Explore Our <span className="text-blue-600">Services</span>
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[0]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Are You Looking For New Cars?</h2>
                <Link
                  to="/newcars"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={newcar} alt="Blue sports car" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[1]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Are You Looking For Used Cars?</h2>
                <Link
                  to="/usedcars"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={usecar} alt="Used car" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[2]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sell Car</h2>
                <Link
                  to="/selling"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                  tabIndex={-1}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={sell} alt="Orange SUV" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[3]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Showrooms</h2>
                <Link
                  to="/showroom"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                  tabIndex={-1}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={carshowroom} alt="Car models" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[4]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Insurance Companies</h2>
                <Link
                  to="/insurancecompany"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={insurance} alt="Insurance car" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[5]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Maintenance Companies</h2>
                <Link
                  to="/maintenancecompanies"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={maintance} alt="Car maintenance" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59 130 246 / 0.7)" }}
            className={`rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r ${gradients[6]} cursor-pointer transition-shadow duration-300`}
          >
            <div className="flex p-6 bg-white bg-opacity-80 backdrop-blur-md">
              <div className="flex flex-col justify-between flex-1 pr-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Rescue Companies</h2>
                <Link
                  to="/rescuecompany"
                  className="inline-flex items-center justify-center w-36 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md border-2 border-blue-700 shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={rescue} alt="Red rescue jeep" className="object-contain h-36 w-full select-none" draggable={false} />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

