"use client";

import React, { useState } from "react";

import { DateField, Label } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";

const BookCard = () => {
    const {
            data: session,
        } = authClient.useSession()
    
        const item = session?.user;
        console.log(item);

    const [depurturedata, setDepurtureData] = useState(null)
    console.log(new Date(depurturedata));

    const handleBooking = async() => {
        
    }
    
    return (
        <div className="w-[320px] p-6 border border-gray-100 rounded-xl shadow-lg bg-white font-sans text-gray-800">

            <div className="mb-6">
                <p className="text-[14px] text-gray-500">Starting from</p>
                <h1 className="text-4xl font-bold text-[#17a2b8] my-1">$1299</h1>
                <p className="text-[14px] text-gray-500">per person</p>
            </div>

            <div className="mb-6">
                <DateField onChange={setDepurtureData} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <button className="w-full py-3.5 bg-[#17a2b8] hover:bg-[#138496] transition-all text-white font-semibold rounded-md flex justify-center items-center gap-2 mb-6">
                Book Now <HiOutlineArrowNarrowRight size={20} />
            </button>

            <ul className="space-y-3.5 text-[14px] text-gray-600">
                <li className="flex items-center"><FaCheck className="text-green-500 mr-3" /> Free cancellation up to 7 days</li>
                <li className="flex items-center"><FaCheck className="text-green-500 mr-3" /> Travel insurance included</li>
                <li className="flex items-center"><FaCheck className="text-green-500 mr-3" /> 24/7 customer support</li>
            </ul>
        </div>
    );
};

export default BookCard;