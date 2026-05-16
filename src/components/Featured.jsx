import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { RiContractRightFill } from "react-icons/ri";


const Featured = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/Featured`)
    const destinations = await res.json()
    console.log(destinations);
    
    return (
        <div className="w-11/12 mx-auto">
            <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-gray-100 mb-10">
            
            {/* বাম পাশের টেক্সট (Heading & Subtitle) */}
            <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
                    Featured Destinations
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                    Handpicked travel experiences for the adventure seekers
                </p>
            </div>

            {/* ডান পাশের বাটন (View All Button) */}
            <div className="w-full sm:w-auto shrink-0">
                <Link href='/destination'>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15A1BF] hover:bg-[#118099] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-all duration-300 transform active:scale-95 group">
                        All Destinations 
                        <RiContractRightFill className="text-base group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </Link>
            </div>

        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    destinations.map(destination => <div key={destination._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                    {/* Image Section */}
                    <div className="relative h-[200px] w-full">
                        <Image
                            src={destination.imageUrl}
                            alt={destination.destinationName}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Rating Badge */}
                        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold">
                            <span>4.5</span>
                            <span className="text-yellow-500">★</span>
                        </div>
                    </div>
        
                    {/* Content Section */}
                    <div className="p-4 space-y-3">
                        {/* Location */}
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <HiOutlineLocationMarker className="text-gray-400" />
                            <span>{destination.country}</span>
                        </div>
        
                        {/* Title and Price */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-gray-800 leading-tight">
                                {destination.destinationName} Paradise
                            </h3>
                            <div className="text-right">
                                <span className="text-lg font-bold text-gray-900">${destination.price}</span>
                                <span className="text-xs text-gray-500 block">/Person</span>
                            </div>
                        </div>
        
                        {/* Duration */}
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <HiOutlineCalendar className="text-gray-400" />
                            <span>{destination.duration} Days / {parseInt(destination.duration) + 1} Nights</span>
                        </div>
        
                        {/* Action Link */}
                        <div className="pt-2">
                            <Link href={`/destination/${destination._id}`}>
                            <button className="flex items-center gap-1 text-[#15A1BF] font-bold text-sm uppercase tracking-wider hover:underline">
                                Book Now <FiArrowUpRight />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Featured;