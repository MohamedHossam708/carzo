import React from 'react';

export default function Contactus() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-800 px-4 relative overflow-hidden">
      
      {/* خلفية متوهجة أنيقة */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-cyan-300 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -top-10 -left-10"></div>
        <div className="absolute w-80 h-80 bg-sky-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-ping top-1/3 left-1/3"></div>
        <div className="absolute w-80 h-80 bg-blue-500 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-2/3 right-0"></div>
      </div>

      {/* المحتوى */}
      <h1 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-cyan-500 to-sky-400 text-transparent bg-clip-text drop-shadow-lg animate-fade-slide">
        Contact Us
      </h1>

      <p className="text-lg text-center mb-10 max-w-xl text-slate-700 font-medium z-10 animate-fade-in">
        Got a question or feedback? We're always happy to hear from you. Get in touch with our team now!
      </p>

      <div className="text-center z-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-800">Connect via Gmail</h3>
        <p className="text-blue-900 mb-6">Click below to email us directly.</p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=carzo.co@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-sky-600 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow"
        >
          <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18a2 2 0 002 2h16a2 2 0 002-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Send us an Email
        </a>
      </div>

      {/* تعريفات الأنيميشن */}
      <style>
        {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
            50% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.8); }
            100% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
          }

          .animate-fade-slide {
            animation: fadeSlide 1s ease-out;
          }

          .animate-fade-in {
            animation: fadeSlide 1.2s ease-out;
          }

          .animate-glow {
            animation: glow 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}




