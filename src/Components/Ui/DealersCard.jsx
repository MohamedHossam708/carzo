// components/DealershipCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function DealershipCard({ dealer }) {
  return (
    <Link
      to={`/dealershipdetails/${dealer.id}`}
      className="bg-gray-100 rounded-xl p-4 w-[270px] flex flex-col items-center shadow-sm border-2 border-gray-300 hover:shadow-lg transition-transform hover:scale-105"
    >
      {dealer.pictureUrl ? (
        <img
          src={dealer.pictureUrl}
          alt={dealer.name}
          className="w-40 h-40 object-contain mx-auto rounded-full border-8 border-slate-600 p-2"
        />
      ) : (
        <div className="w-40 h-40 flex items-center justify-center bg-gray-300 rounded-full border-8 border-slate-600 text-slate-700 font-semibold">
          No Image
        </div>
      )}

      <p className="text-center text-slate-700 font-bold mt-2">{dealer.name}</p>

      {dealer.phone1 && (
        <p className="text-sm text-slate-600 mt-1">📞 {dealer.phone1}</p>
      )}

      {dealer.branch1 && (
        <p className="text-blue-500 underline text-sm mt-1">📍 Location Available</p>
      )}

      {dealer.facebook && (
        <p className="text-blue-600 text-sm mt-1">🔗 Facebook Linked</p>
      )}
    </Link>
  );
}
