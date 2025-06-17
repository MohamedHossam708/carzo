import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/2023-genesis-g90-live.webp";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About <span className="text-blue-600">Carzo</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 font-medium text-lg leading-8 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Carzo is a modern platform designed to simplify the car buying
            experience in Egypt and the Arab world. Whether you're searching for
            a brand-new model or a high-quality used car, we offer a smart and
            user-friendly way to explore, compare, and choose with confidence.
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-gray-700 text-base font-medium space-y-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <li>Smart filters and advanced search options</li>
            <li>Verified dealers and real car photos</li>
            <li>Seamless comparison of prices and features</li>
            <li>Exclusive deals and offers</li>
            <li>Friendly support and easy navigation</li>
          </motion.ul>

          <Link to="/brands">
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Discover Brands
            </motion.button>
          </Link>
        </motion.div>

        {/* Image with glow effect */}
        <motion.div
          className="lg:w-1/2 relative flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Glow background */}
          <div className="absolute w-4/5 h-4/5 bg-blue-300 blur-[100px] rounded-full opacity-40 z-0"></div>

          {/* Image */}
          <motion.img
            src={aboutImg}
            alt="About Carzo"
            className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-full transition-transform duration-500 hover:scale-105 brightness-110 contrast-110"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

