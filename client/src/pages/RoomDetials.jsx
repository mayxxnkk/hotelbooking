import React, { useEffect, useState } from "react";
import { facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { assets } from '../assets/assets';

const RoomDetials = () => {
    const {id} = useParams();
    const [room , setRoom] = useState(null)
    const [mainImage , setMainImage] = useState(null)

    useEffect(()=> {
        const room = roomsDummyData.find(room => room._id === id) 
        room && setRoom(room)
        room && setMainImage(room.images[0])
        
    }, [])

    return room && (
        <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
            {/* room detials */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <h1 className="text-4xl md:text-4xl font-playfair">{room.hotel.name} <span className="text-sm">({room.roomType})</span></h1>
                <p className="text-xs rounded-full font-inter py-1.5 px-3 text-white bg-orange-500">20% OFF</p>
            </div>

            {/* room rating */}
            <div className="flex items-center gap-1 mt-2">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
            </div>

            {/* room address */}
            <div className="flex items-center gap-1 text-gray-500 mt-2">
                <img src={assets.locationIcon} alt="" />
                <span>{room.hotel.address}</span>
            </div>
            {/* room images */}
            <div className="flex flex-col lg:flex-row mt-6 gap-6">
                <div className="lg:w-1/2 w-full">
                    <img src={mainImage} alt="" className="w-full rounded-xl shadow-lg object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
                    {room?.images.length > 1 && room.images.map((image , index)=>(
                        <img onClick={()=> setMainImage(image)}
                         key={index} src={image} alt="room-image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image & 'outline-3 outline-orange-500'}`}/>
                    ))}
                </div>
            </div>

            {/* room highlights */}
            <div className="flex flex-col md:flex-row justify-between mt-10">
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-playfair">
                        Experience Luxury Like Never Before
                        </h1>
                        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                            {room.amenities.map((item , index)=> (
                                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                                    <img src={facilityIcons[item]} alt={item} className="w-5 h-5"/>
                                    <p className="text-xs">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* room price */}
                    <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
            </div>

            {/* checkin checkout form */}
            <div className="bg-white shadow-md rounded-xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-5xl mx-auto mt-6">
      
            {/* Check-in */}
            <div className="flex flex-col items-start w-full md:w-auto">
                <label className="text-sm font-semibold text-gray-700 mb-1">Check-In</label>
                <input
                type="date"
                className="text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-10 w-px bg-gray-200" />

            {/* Check-out */}
            <div className="flex flex-col items-start w-full md:w-auto">
                <label className="text-sm font-semibold text-gray-700 mb-1">Check-Out</label>
                <input
                type="date"
                className="text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-10 w-px bg-gray-200" />

            {/* Guests */}
            <div className="flex flex-col items-start w-full md:w-auto">
                <label className="text-sm font-semibold text-gray-700 mb-1">Guests</label>
                <input
                type="number"
                min="1"
                className="text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2 guests"
                />
            </div>

            {/* Button */}
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg text-sm font-medium whitespace-nowrap">
                Check Availability
            </button>
            </div>

            {/* common specs of room  */}
            <div className="mt-25 space-y-4">
                {roomCommonData.map((spec,index)=> (
                    <div key={index} className="flex items-start gap-2">
                        <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
                        <div>
                            <p className="text-base">{spec.title}</p>
                            <p className="text-gray-500">{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
                <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
            </div>

                {/* location / hosted by */}
                <div className="flex flex-col items-start gap-4">
                    <div className="glex gap-4">
                        <img src={room.hotel.owner.image} alt="Host" className="h-14 w-15 md:h-18 md:w-18 rounded-full" />
                        <div>
                            <p className="text-lg md:text-xl">Hosted By {room.hotel.name}</p>
                            <div className="flex items-center mt-1">
                                <StarRating />
                                <p className="ml-2">200+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <button on
                     className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">Contact Now</button>

                </div>


            

        </div>
    ) 
}

export default RoomDetials