import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/carzo.png';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/carsearch?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            className="h-11 hover:scale-105 transition-transform duration-200"
            alt="Carzo Logo"
          />
        </div>

        {/* Links */}
       <ul className="flex gap-6 text-slate-800 font-medium text-sm md:text-base">
  {['/', '/brands', '/foryou', '/services', '/about'].map((path, i) => (
    <li key={i}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1'
            : 'hover:text-blue-300 transition'
        }
      >
        {['Home', 'Brands', 'For You', 'Services', 'About'][i]}
      </NavLink>
    </li>
  ))}
</ul>

        {/* Search */}
        <form onSubmit={handleSearch} className="relative w-80">
          <input
            type="search"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-2.5 pr-10 text-gray-900 rounded-full bg-white/40 placeholder-blue-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-2 flex items-center text-blue-600 hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 4.5 4.5a7.5 7.5 0 0 0 12.15 12.15z" />
            </svg>
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-4 text-slate-800 text-lg">
          <NavLink to="/favorite" className="hover:text-blue-400 transition">
            <i className="far fa-heart"></i>
          </NavLink>
          <div className="relative group">
            <NavLink to="#" className="hover:text-blue-400 transition">
              <i className="far fa-user"></i>
            </NavLink>
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
              <NavLink to="/SignIn" className="block px-4 py-2 hover:bg-gray-100">Login</NavLink>
              <NavLink to="/SignUP" className="block px-4 py-2 hover:bg-gray-100">Signup</NavLink>
              <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}





