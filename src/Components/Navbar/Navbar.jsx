import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/carzo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/carsearch?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm shadow-md"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div className="flex items-center gap-3" variants={itemVariants}>
          <motion.img
            src={logo}
            className="h-11"
            alt="Carzo Logo"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Links */}
        <motion.ul
          className="flex gap-6 text-white font-medium text-sm md:text-base"
          variants={itemVariants}
        >
          {["/Home", "/brands", "/foryou", "/services", "/about", "/favorite"].map(
            (path, i) => (
              <motion.li key={i} variants={itemVariants}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-bold"
                      : "hover:text-blue-300 transition"
                  }
                >
                  {
                    [
                      "Home",
                      "Brands",
                      "For You",
                      "Services",
                      "About",
                      "Favorite",
                    ][i]
                  }
                </NavLink>
              </motion.li>
            )
          )}
        </motion.ul>

        {/* Search */}
        <motion.form
          onSubmit={handleSearch}
          className="relative w-80"
          variants={itemVariants}
        >
          <motion.input
            type="search"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-2.5 pr-10 text-gray-900 rounded-full bg-white/40 placeholder-blue-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search..."
            whileFocus={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.button
            type="submit"
            className="absolute inset-y-0 right-2 flex items-center text-blue-600"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 4.5 4.5a7.5 7.5 0 0 0 12.15 12.15z"
              />
            </svg>
          </motion.button>
        </motion.form>

        {/* Icons */}
        <motion.div
          className="flex items-center gap-4 text-white text-lg"
          variants={itemVariants}
        >
          <motion.button
            className="hover:text-blue-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <i className="far fa-bell"></i>
          </motion.button>
          <motion.button
            className="hover:text-blue-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <i onClick={()=>navigate("/favorite")} className="far fa-heart"></i>
          </motion.button>
          <div className="relative group">
            <motion.button
              className="hover:text-blue-400 transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="far fa-user"></i>
            </motion.button>
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
              <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Login
              </a>
              <a href="/signup" className="block px-4 py-2 hover:bg-gray-100">
                Signup
              </a>
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
