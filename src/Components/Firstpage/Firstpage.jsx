import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import logo from "../../assets/images/bg.png";
import { Link } from 'react-router-dom';

export default function Firstpage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* صورة الخلفية مع Motion */}
      <motion.img
        src={logo}
        alt="Car"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* طبقة شفافة فوق الصورة */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* المحتوى فوق الصورة */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center pb-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Welcome to <span className="text-blue-500">Carzo</span>
        </motion.h1>

        <motion.div
          className="text-lg md:text-2xl font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                "Find your dream car today",
                "Compare, choose, and drive",
                "Your car journey starts here 🚗"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 2000
            }}
          />
        </motion.div>

        {/* زر CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <Link to="/brands">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition">
              Explore Cars
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}




