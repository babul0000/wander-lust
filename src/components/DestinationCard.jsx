import Image from 'next/image';
import { HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi'; // react-icons ব্যবহার করলে
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const DestinationCard = ({ destination }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
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
        </div>
    );
};

export default DestinationCard;