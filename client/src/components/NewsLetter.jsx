import React from "react";
import { assets} from '../assets/assets';

const NewsLetter = () => {
  return (
    <div className="bg-[#1A2238] rounded-xs p-10 md:px-20 text-center text-white space-y-6">
      <h1 className="text-4xl font-bold">Stay Inspired</h1>
      <p className="text-gray-400 max-w-xl mx-auto">
        Join our newsletter and be the first to discover new destinations,
        exclusive offers, and travel inspiration.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-3 w-72 rounded-md bg-[#E7EFFC] text-black focus:outline-none"
        />
         <button className="group bg-black cursor-pointer text-white px-6 py-3 rounded-md flex items-center gap-2">
            Subscribe 
            <span className="text-white transition-all group-hover:translate-x-1">→</span>
        </button>

      </div>

      <p className="text-ms mt-10 text-center text-gray-500">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  );
};

export default NewsLetter;
