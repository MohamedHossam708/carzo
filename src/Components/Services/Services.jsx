import React from 'react'
import style from "./Services.module.css"
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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#90949c] py-20 px-6">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex justify-between items-center mb-6 pb-2">
          <h1 className="font-bold text-white text-3xl">Explore Our Services</h1>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >

          {/* Card 1 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-2xl font-bold text-slate-700">Are You Looking For New Cars?</h2>
                <Link to="/newcars" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={newcar} alt="Blue sports car" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-2xl font-bold text-slate-700">Are You Looking For Used Cars?</h2>
                <Link to="/usedcars" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={usecar} alt="Used car" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-2xl font-bold text-slate-700">Sell Car</h2>
                <Link to="/Selling" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={sell} alt="Orange SUV" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-2xl font-bold text-slate-700">Car Showrooms</h2>
                <Link to="/showroom" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={carshowroom} alt="Car models" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-2xl font-bold text-slate-700">Insurance Companies</h2>
                <Link to="/insurancecompany" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={insurance} alt="Insurance car" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-xl font-bold text-slate-700">Maintenance Companies</h2>
                <Link to="/maintenancecompanies" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={maintance} alt="Car maintenance" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 7 */}
          <motion.div className="bg-gray-200 rounded-lg border-slate-600 border-2 overflow-hidden" variants={item}>
            <div className="flex p-6">
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-xl font-bold text-gray-700">Rescue Companies</h2>
                <Link to="/rescuecompany" className="bg-slate-500 text-white px-4 py-2 rounded flex items-center justify-center w-32 text-sm border-blue-600 border-2">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img src={rescue} alt="Red rescue jeep" className="object-contain h-32 w-full" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
