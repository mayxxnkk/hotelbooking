import React from 'react';
import { useNavigate } from 'react-router-dom';

const experiences = [
  {
    title: 'Adventure Tours',
    description: 'Explore mountains, forests, and oceans with guided adventures.',
    image: 'adventure.jpg',
  },
  {
    title: 'Luxury Spa',
    description: 'Relax and rejuvenate with world-class spa treatments.',
    image: 'spa.jpg',
  },
  {
    title: 'Fine Dining',
    description: 'Taste gourmet cuisines from top chefs around the world.',
    image: 'dinning.jpg',
  },
  {
    title: 'Local Culture',
    description: 'Immerse yourself in authentic local culture and traditions.',
    image: 'culture.jpg',
  },
];

const Experience = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f7f8fd] text-gray-800 px-4 py-10 pt-28 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Unforgettable Experiences Await</h1>
          <p className="text-lg text-gray-600">
            Discover unique and memorable experiences during your stay with us.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 cursor-pointer group overflow-hidden"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-gray-600 mb-6">Book your stay now and unlock exclusive experiences!</p>
          <button onClick={()=> navigate('/rooms')} className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold transition">
            Explore Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
