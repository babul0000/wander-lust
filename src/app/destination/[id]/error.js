"use client"

import { useEffect } from "react";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Wanderlust App Error:", error);
    }, [error]);

    return (
        <div className="min-h-[85vh] w-full flex flex-col items-center justify-center bg-white px-4 text-center font-sans antialiased">
            <div className="max-w-md w-full space-y-6 flex flex-col items-center">

                {/* ১. এরর আইকন সেকশন */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-32 h-32 bg-red-50 rounded-full animate-ping opacity-75 duration-1000"></div>
                    <div className="relative p-6 bg-white border-2 border-red-100 shadow-xl rounded-full text-red-500">
                        <FiAlertTriangle size={64} className="stroke-[1.5]" />
                    </div>
                </div>

                {/* ২. টেক্সট ও মেসেজ */}
                <div className="space-y-3 pt-4">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Something Went Wrong!
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed px-4">
                        An unexpected error occurred while loading this page. Don&apos;t worry, your data is safe. Let&apos;s try reloading.
                    </p>
                </div>

                {/* ৩. অ্যাকশন বাটন গ্রুপ */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 bg-[#15A1BF] hover:bg-[#118099] text-white text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 group"
                    >
                        <FiRefreshCw className="text-base group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </button>

                    <Link href="/" className="w-full sm:w-auto">
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm transition-all duration-300 transform active:scale-95">
                            <FiHome className="text-base" />
                            Go Back Home
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}