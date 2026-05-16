import AlertDelete from '@/components/AlertDialog';
import BookCard from '@/components/BookCard';
import EditModal from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineStar } from 'react-icons/hi';
import { FiArrowLeft, FiEdit3, FiTrash2 } from 'react-icons/fi';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const destination = await res.json();

    return (
        <div className="bg-white min-h-screen font-sans antialiased">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ----------------- ১. টপ নেভিগেশন ও একশন বাটন ----------------- */}
        <div className="flex justify-between items-center mb-4">
            <Link href={'/destination'}>
                <button className="flex text-gray-500 hover:text-gray-900 font-semibold text-sm items-center gap-2 transition-colors">
                    <FiArrowLeft className="text-base" /> Back to Destinations
                </button>
            </Link>

            {/* এডিট এবং ডিলিট বাটনের গ্রুপ */}
            <div className='flex gap-3 items-center'>
                <EditModal destination={destination} />
                <AlertDelete destination={destination} />
            </div>
        </div>

        {/* ----------------- ২. মেইন লেআউট গ্রিড (২:১ রেশিও) ----------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* বাম পাশের কন্টেন্ট এরিয়া (কম্প্যাক্ট ডিজাইন) */}
            <div className="lg:col-span-2 space-y-5">
                
                {/* ইমেজ সেকশন (হাইট কমিয়ে কম্প্যাক্ট করা হয়েছে যাতে এক স্ক্রিনে ধরে) */}
                <div className="relative w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <Image
                        src={destination?.imageUrl}
                        alt={destination?.destinationName}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* টাইটেল এবং মেটা ডাটা */}
                <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-gray-500 font-medium text-xs md:text-sm">
                        <HiOutlineLocationMarker className="text-gray-400 text-base" />
                        <span className="capitalize">{destination?.country || "Indonesia"}</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
                        {destination?.destinationName || "Bali"} Paradise
                    </h1>

                    <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-gray-600 pt-0.5">
                        <div className="flex items-center gap-1">
                            <HiOutlineStar className="text-green-600 text-base fill-green-600" />
                            <span className="font-extrabold text-gray-950">4.9</span>
                            <span className="text-gray-400 font-medium">(234 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-bold text-gray-950">
                            <HiOutlineCalendar className="text-gray-500 text-base" />
                            <span>
                                {destination?.duration} Days / {parseInt(destination?.duration) ? parseInt(destination?.duration) + 1 : 1} Nights
                            </span>
                        </div>
                    </div>
                </div>

                {/* ওভারভিউ সেকশন */}
                <div className="pt-1">
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Overview</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium line-clamp-3">
                        {destination?.description || "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets."}
                    </p>
                </div>

                {/* হাইলাইটস সেকশন (ফন্ট সাইজ এবং স্পেসিং কমিয়ে এক লাইনে আনা হয়েছে) */}
                <div className="pt-1">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">Highlights</h2>
                    
                    {/* গ্রিড কলামে টিকমার্ক লিস্ট */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {[
                            "Luxury beachfront accommodation",
                            "Traditional Balinese spa treatment",
                            "Sunrise trek to Mount Batur",
                            "Visit Uluwatu Temple at sunset",
                            "Private beach dinner experience"
                        ].map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700 font-semibold text-xs md:text-sm">
                                <span className="text-green-600 text-base shrink-0">✓</span>
                                <span className="line-clamp-1">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ----------------- ৩. ডান পাশের বুকিংカード এরিয়া ----------------- */}
            <div className="lg:col-span-1 pt-2 lg:pt-0">
                <BookCard destination={destination} />
            </div>

        </div>

    </div>
</div>
    );
};

export default DetailsPage;