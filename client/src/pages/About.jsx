import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center p-8 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          About Us
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          We’re a global hotel booking platform helping travelers find, compare, and reserve the perfect stays anywhere in the world. From luxury suites to budget-friendly lodges, we provide access to thousands of properties with verified reviews and real-time availability.
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          Whether you're planning a vacation, business trip, or a spontaneous weekend getaway — we ensure you book with confidence, ease, and transparency.
        </p>

        <button onClick={()=> navigate('/')} className="mt-6 px-6 cursor-pointer py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default About;
