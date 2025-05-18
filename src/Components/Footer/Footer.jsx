import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
  
  {/* <!-- Footer --> */}
  <div className="container p-10 bg-gradient-to-b from-[#0f172a] to-[#90949c]">
<footer className="bg-gradient-to-br from-[#0f172a] to-[#90949c] text-white">
  {/* <!-- Main Footer Content --> */}
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* <!-- Company Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><Link to ="about" className="text-gray-300 hover:text-white">About Us</Link></li>
          <li><Link to ="blog" className="text-gray-300 hover:text-white">Blog</Link></li>
          <li><Link to ="services" className="text-gray-300 hover:text-white">Services</Link></li>
          <li><Link to ="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
        </ul>
      </div>
      
      {/* <!-- Our Services Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
        <ul className="space-y-2">
          <li><Link to ="newCars" className="text-gray-300 hover:text-white">New Cars</Link></li>
          <li><Link to ="usedCars" className="text-gray-300 hover:text-white">Used Cars</Link></li>
          <li><Link to ="sellCars" className="text-gray-300 hover:text-white">Sell Car</Link></li>
          <li><Link to ="carShowrooms" className="text-gray-300 hover:text-white">Car Showrooms</Link></li>
          <li><Link to ="maintenancecompanies" className="text-gray-300 hover:text-white">Maintenance Companies</Link></li>
          <li><Link to ="rescueCompany" className="text-gray-300 hover:text-white">Rescue Companies</Link></li>
        </ul>
      </div>
      
      {/* <!-- Our Brands Section --> */}
      <div>
  <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
  <ul className="space-y-2">
    <li><Link to="/branddetails/Mercedes-Benz" className="text-gray-300 hover:text-white">Mercedes-Benz</Link></li>
    <li><Link to="/branddetails/Audi" className="text-gray-300 hover:text-white">Audi</Link></li>
    <li><Link to="/branddetails/BMW" className="text-gray-300 hover:text-white">BMW</Link></li>
    <li><Link to="/branddetails/KIA" className="text-gray-300 hover:text-white">KIA</Link></li>
    <li><Link to="/branddetails/Nissan" className="text-gray-300 hover:text-white">Nissan</Link></li>
    <li><Link to="/branddetails/Peugeot" className="text-gray-300 hover:text-white">Peugeot</Link></li>
    <li><Link to="/branddetails/Hyundai" className="text-gray-300 hover:text-white">Hyundai</Link></li>
  </ul>
</div>
      
      {/* <!-- Mobile App Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Our Mobile App</h3>
        <div className="space-y-4">
          <Link to ="#" className="bg-gray-800 text-white flex items-center rounded-lg px-4 py-2 hover:bg-gray-700">
            <span className="mr-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.33-3.14-2.57C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </span>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">Apple Store</div>
            </div>
          </Link>
          <Link to ="#" className="bg-gray-800 text-white flex items-center rounded-lg px-4 py-2 hover:bg-gray-700">
            <span className="mr-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
            </span>
            <div>
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </Link>
        </div>
        
        {/* <!-- Social Media Links --> */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link to ="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>
            <Link to ="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
              </svg>
            </Link>
            <Link to ="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </Link>
            <Link to ="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div className="border-t border-white">
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
      <div>
        <p>&copy; 2025 example.com. All rights reserved.</p>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link to ="#" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
        <span className="text-gray-300">•</span>
        <Link to ="#" className="text-gray-300 hover:text-white">Privacy Notice</Link>
      </div>
    </div>
  </div>
</footer>
</div>
  </>
}
