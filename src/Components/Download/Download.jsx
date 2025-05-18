import React from 'react'
import style from "./Download.module.css"
import download from "../../assets/images/main.png"
import frame from "../../assets/images/Frame 729.png"
import { motion } from "framer-motion";

export default function Download() {
  return (
    <div className="bg-gradient-to-br from-[#90949c] to-[#0f172a] py-20 px-6">
      <section className="relative md:px-20 overflow-visible rounded-3xl ">

        {/* Background Image */}
        <img
          src={frame}
          alt="Background"
          className="absolute inset-0 w-full mx-auto h-96 object-cover rounded-3xl "
        />

        {/* Overlay content with animation */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left side */}
          <motion.div
            className="text-white max-w-md md:w-1/2 mb-10 md:mb-0 pt-1 pb-20 px-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Download Carzo <br /> for <span className="text-[#a0e2e0] font-bold">FREE</span>
            </h2>
            <p className="text-gray-200 mb-6">
              For faster, easier buying and exclusive news.
            </p>

            <div className="download flex">
              {/* Apple Button */}
              <motion.a
                href="#"
                className="bg-white text-slate-700 flex items-center rounded-lg px-2 py-2 mx-2 hover:bg-gray-600 hover:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="mr-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.33-3.14-2.57C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">Apple Store</div>
                </div>
              </motion.a>

              {/* Google Button */}
              <motion.a
                href="#"
                className="bg-white text-slate-700 flex items-center rounded-lg px-4 py-2 hover:bg-gray-600 hover:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="mr-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Phone image */}
          <motion.div
            className="md:w-1/2 flex justify-center -mt-28 md:-mt-20 z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={download}
              alt="Phone App Preview"
              className="w-[280px] md:w-[320px] drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
