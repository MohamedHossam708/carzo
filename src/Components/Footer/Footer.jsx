import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
  
  {/* <!-- Footer --> */}
  <footer className="bg-gradient-to-br from-[#334155] to-[#1e293b] text-gray-200">
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
          <ul className="space-y-2">
            {["about", "blog", "services", "contactus"].map(path => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-gray-200 hover:text-white transition duration-300 hover:scale-105 hover:drop-shadow-lg block"
                >
                  {path.replace(/^\w/, c => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Our Services</h3>
          <ul className="space-y-2">
            {["newCars", "usedCars", "selling", "showroom", "maintenancecompanies", "rescueCompany"].map(path => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-gray-200 hover:text-white transition duration-300 hover:scale-105 hover:drop-shadow-lg block"
                >
                  {path.replace(/([A-Z])/g, ' $1')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Our Brands</h3>
          <ul className="space-y-2">
            {["Mercedes-Benz", "Audi", "BMW", "KIA", "Nissan", "Peugeot", "Hyundai"].map(brand => (
              <li key={brand}>
                <Link
                  to={`/branddetails/${brand}`}
                  className="text-gray-200 hover:text-white transition duration-300 hover:scale-105 hover:drop-shadow-lg block"
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* App Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">Our Mobile App</h3>
          <div className="space-y-4">
            {/* Apple Store */}
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 text-white flex items-center rounded-lg px-4 py-2 hover:scale-105 hover:drop-shadow-xl"
            >
              <span className="mr-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              
                </svg>
              </span>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">Apple Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 text-white flex items-center rounded-lg px-4 py-2 hover:scale-105 hover:drop-shadow-xl"
            >
              <span className="mr-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                 
                </svg>
              </span>
              <div>
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-600">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2025 Carzo. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition hover:drop-shadow-md">Terms & Conditions</Link>
          <span>•</span>
          <Link to="#" className="hover:text-white transition hover:drop-shadow-md">Privacy Notice</Link>
        </div>
      </div>
    </div>
  </footer>


  </>
}
