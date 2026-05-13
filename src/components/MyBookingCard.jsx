import React from 'react';
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { DeleteDialog } from './AlertDiolog';

const BookingCard = ({ booking }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow mb-4 w-full max-w-5xl">
            
            {/* ছবির অংশ */}
            <div className="w-full md:w-80 h-48 overflow-hidden rounded-lg shrink-0">
                <img 
                    src={booking?.destinationUrl} 
                    alt={booking?.destinationName} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* টেক্সট এবং ডিটেইলস অংশ */}
            <div className="flex-1 w-full">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full w-fit mb-3">
                    <FaRegCheckCircle size={14} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Confirmed</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 capitalize mb-2">
                    {booking?.destinationName}
                </h2>

                <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        <LuCalendarDays className="text-gray-400" />
                        <span>Departure: {new Date(booking?.departureDate).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        <span>Booking ID: {booking?._id?.slice(-8)}</span>
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-[#17a2b8]">
                    ${booking?.destinationPrice}
                </h3>
            </div>

            {/* বাটন অংশ */}
            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
                <DeleteDialog bookingId={booking._id}/>
                {/* <button className="flex-1 md:w-32 flex items-center justify-center gap-2 px-4 py-2.5 border border-red-200 text-red-500 rounded-md hover:bg-red-50 transition-colors font-semibold text-sm">
                    <RiDeleteBin6Line /> Cancel
                </button> */}
                <button className="flex-1 md:w-32 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#17a2b8] text-white rounded-md hover:bg-[#138496] transition-colors font-semibold text-sm">
                    <MdOutlineRemoveRedEye /> View
                </button>
            </div>
        </div>
    );
};

export default BookingCard;