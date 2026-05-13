
import AlertDelete from '@/components/AlertDialog';
import BookCard from '@/components/BookCard';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineStar } from 'react-icons/hi';

const DetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const data = await res.json();
    const destination = data;


    return (
        <div className='flex justify-between '>
            <div className="max-w-5xl mx-auto px-4 py-4">
                {/* Top Navigation */}
                <div className="flex justify-between items-center mb-4">
                    <Link href={'/destination'}>
                        <button className="flex text-gray-500 hover:text-gray-800 text-sm items-center gap-2">
                            ← Back to Destinations
                        </button>
                    </Link>

                    {/* Modal পজিশন এখানেও রাখা যায় অথবা টাইটেলের পাশে */}
                    <div className='flex gap-2 items-center'>
                        <EditModal destination={destination} />
                        <AlertDelete destination={destination} />
                    </div>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Side: Image & Content */}
                    <div className="lg:col-span-2">
                        {/* Image Section */}
                        <div className="relative w-full h-[250px] rounded-2xl overflow-hidden mb-6 shadow-sm">
                            <Image
                                src={destination?.imageUrl}
                                alt={destination?.destinationName}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Title & Info Section */}
                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 text-[#15A1BF] font-medium text-sm mb-1">
                                        <HiOutlineLocationMarker />
                                        <span>{destination?.country}</span>
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                        {destination?.destinationName} Paradise
                                    </h1>
                                </div>

                                {/* যদি ব্যাক বাটনের পাশে না রাখতে চান, তবে এখানে টাইটেলের পাশে রাখতে পারেন */}
                                {/* <EditModal /> */}
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <HiOutlineStar className="text-yellow-500" />
                                    <span className="font-bold text-gray-900">4.9</span>
                                    <span className="text-gray-400">(234 reviews)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <HiOutlineCalendar />
                                    <span>{destination?.duration} Days / {parseInt(destination?.duration) + 1} Nights</span>
                                </div>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-base">
                                {destination?.description || "Experience the magic of this destination with pristine beaches and vibrant culture."}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Highlights</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {["Luxury Stays", "Spa Treatment", "Sunrise Trek", "Private Dinner"].map((h, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <span className="w-2 h-2 bg-[#15A1BF] rounded-full"></span>
                                        {h}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Empty for now */}
                    <div className="hidden lg:block"></div>
                </div>


            </div>
            <div className='mt-30 mr-50'>
                <BookCard />
            </div>
        </div>
    );
};

export default DetailsPage;