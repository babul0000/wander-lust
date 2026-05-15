"use client";

import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookCard = ({ destination }) => {
    // ১. সেশন ডাটা এবং লোডিং স্টেট নিয়ে আসা
    const { data: session, isPending } = authClient.useSession();
    const item = session?.user;

    const [departureData, setDepartureData] = useState(null);

    const handleBooking = async () => {
        // ২. ইউজার লগইন চেক (সবচেয়ে গুরুত্বপূর্ণ)
        if (!item) {
            alert("বুকিং করার জন্য দয়া করে লগইন করুন।");
            return;
        }

        // ৩. তারিখ চেক
        if (!departureData) {
            alert("দয়া করে যাত্রার তারিখ নির্বাচন করুন।");
            return;
        }


        const bookingData = {
            userId: item.id,
            userImage: item.image,
            userName: item.name,
            destinationId: destination?._id,
            destinationName: destination?.destinationName,
            destinationPrice: destination?.price,
            destinationUrl: destination?.imageUrl,
            destinationCountry: destination?.country,
            departureDate: new Date(departureData),
        };

        console.log("Booking Data Prepared:", bookingData);

        const {data:tokenData} = await authClient.token()

        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        // console.log(data);
        if(data){
            toast.success('successfully booking')
        }

    };


    if (isPending) {
        return (
            <div className="w-[320px] p-6 border border-gray-100 rounded-xl shadow-lg bg-white flex justify-center items-center">
                <p>চেক করা হচ্ছে...</p>
            </div>
        );
    }

    return (
        <div className="w-[320px] p-6 border border-gray-100 rounded-xl shadow-lg bg-white font-sans text-gray-800">
            <div className="mb-6">
                <p className="text-[14px] text-gray-500">Starting from</p>
                <h1 className="text-4xl font-bold text-[#17a2b8] my-1">
                    ${destination?.price || "1299"}
                </h1>
                <p className="text-[14px] text-gray-500">per person</p>
            </div>

            <div className="mb-6">
                <DateField
                    onChange={setDepartureData}
                    className="w-full"
                    name="date"
                >
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <button
                onClick={handleBooking}
                className="w-full py-3.5 bg-[#17a2b8] hover:bg-[#138496] transition-all text-white font-semibold rounded-md flex justify-center items-center gap-2 mb-6"
            >
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