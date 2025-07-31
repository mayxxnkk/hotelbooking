import React, { useState } from 'react';
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBooking = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="px-6 md:px-16 pt-40 pb-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">My Bookings</h1>
        <p className="text-gray-500 max-w-3xl">
          Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks
        </p>
      </div>

      {/* Column Labels */}
      <div className="hidden md:grid grid-cols-12 font-medium text-gray-700 border-b pb-3 mb-4">
        <div className="col-span-6">Hotels</div>
        <div className="col-span-4">Date & Timings</div>
        <div className="col-span-2">Payment</div>
      </div>

      {/* Booking Rows */}
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b py-5"
        >
          {/* Hotel Column */}
          <div className="col-span-6 flex gap-4">
            <img
              src={booking.room.images[0]}
              alt="hotel-img"
              className="w-28 h-24 object-cover rounded shadow"
            />
            <div className="flex flex-col justify-between">
              <p className="font-semibold text-lg">
                {booking.hotel.name}
                <span className="text-sm text-gray-500"> ( {booking.room.roomType} )</span>
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                <span>{booking.hotel.address}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={assets.guestsIcon} alt="guest-icon" className="w-4 h-4" />
                <span>Guests: {booking.guests}</span>
              </div>
              <p className="text-base">Total: ${booking.totalPrice}</p>
            </div>
          </div>

          {/* Date & Timings Column */}
          <div className="col-span-4 flex flex-col justify-center">
            <div className="mb-3">
              <p className="font-medium">Check-In:</p>
              <p className="text-gray-500 text-sm">{new Date(booking.checkInDate).toDateString()}</p>
            </div>
            <div>
              <p className="font-medium">Check-Out:</p>
              <p className="text-gray-500 text-sm">{new Date(booking.checkOutDate).toDateString()}</p>
            </div>
          </div>

          {/* Payment Column */}
          <div className="col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
              <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                {booking.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>
            {!booking.isPaid && (
              <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
                Pay Now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
