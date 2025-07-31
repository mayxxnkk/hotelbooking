import React from 'react';
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      {/* Header and View All Button */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">Exclusive Offers</h1>
          <p className="text-gray-500 max-w-2xl text-base">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>
        <button className="text-sm text-gray-900 font-medium hover:underline flex items-center gap-1">
          View All Offers  
          <img src={assets.arrowIcon} alt="arrow" className="w-4 h-4" />
        </button>
      </div>

      {/* Offer Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative rounded-xl shadow-md bg-cover bg-center text-white h-72 flex flex-col justify-between p-4"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-xs font-semibold">
              {item.priceOff}% OFF
            </div>

            {/* Content Bottom Section */}
            <div className="mt-auto">
              <p className="text-lg font-bold leading-tight">{item.title}</p>
              <p className="text-sm mt-1 line-clamp-2">{item.description}</p>
              <p className="text-xs text-gray-300 mt-1">Expires {item.expiryDate}</p>

              {/* Button */}
              <button className="mt-3 bg-white text-black text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 hover:bg-gray-200 transition">
                View Offer
                <img src={assets.arrowIcon} alt="arrow-icon" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveOffers;
