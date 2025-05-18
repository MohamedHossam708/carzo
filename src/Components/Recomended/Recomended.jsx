import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Recomended() {

    const [recommend, setRecommend] = useState([])

    useEffect(() => {
        axios.get('http://arabytak.runasp.net/api/Car/GetAllCars')
            .then(response => {
                const allRecommend = response.data || [];
                const shuffled = allRecommend.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 4);
                setRecommend(selected);
            })
            .catch(error => {
                console.error('Error fetching Recommend:', error);
            });
    }, []);

    const cardVariants = {
      hidden: { opacity: 0, scale: 0.85, y: 40 },
      visible: i => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          delay: i * 0.15,
          type: "spring",
          stiffness: 120
        }
      })
    };

    return <>
            <div className="bg-gradient-to-br from-[#90949c] to-[#0f172a]  py-20 px-6">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex justify-between items-center mb-8 p-6">
                    <h1 className="text-4xl font-bold text-center text-white">Recommended for you</h1>
                    <Link to="foryou" className="text-sm text-blue-300 font-semibold hover:underline flex items-center gap-1">
                        View All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recommend.map((foryou) => (
                         <motion.div
                        key={foryou.id} 
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className=" bg-gradient-to-tr  via-white/5 to-transparent rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 transform hover:scale-105">
                            <div className="h-48 flex items-center justify-center">
                                <img
                                    src={foryou.url[0].url}
                                    alt={foryou.carName}
                                    className="w-full h-45 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-1 text-white">
                                    {foryou.carName}
                                </h2>
                                <p className="text-white text-sm font-semibold mb-3">{foryou.dealershipName}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                        {foryou.status}
                                    </span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                        {foryou.condition}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-bold text-white">
                                        {foryou.price ? foryou.price.toLocaleString() : 'Price not available'} EGP
                                    </span>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </>
}
