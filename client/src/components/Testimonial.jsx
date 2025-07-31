import React from 'react';
import { testimonials } from '../assets/assets';
import StarRating from '../components/StarRating';

const Testimonial = () => {
  return (
    <div className="bg-slate-50 py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-3">What Our Guests Say</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-md max-w-xs w-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-semibold text-lg text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            <StarRating rating={testimonial.rating} />

            <p className="text-gray-600 text-sm mt-4">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
