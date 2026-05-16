import Image from "next/image";
import { FiShield, FiMap, FiPhoneCall, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const AddHome = () => {
    // Why Choose Us ডেটা
    const features = [
        {
            id: 1,
            icon: <FiShield className="text-[#15A1BF] text-2xl" />,
            title: "Safe & Secure",
            desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support."
        },
        {
            id: 2,
            icon: <FiMap className="text-[#15A1BF] text-2xl" />,
            title: "Expert Guides",
            desc: "Local experts who bring destinations to life with authentic cultural insights."
        },
        {
            id: 3,
            icon: <FiPhoneCall className="text-[#15A1BF] text-2xl" />,
            title: "24/7 Support",
            desc: "Round-the-clock customer service to assist you wherever your journey takes you."
        }
    ];

    // Testimonials ডেটা
    const testimonials = [
    {
        id: 1,
        quote: '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
        name: "Michael Chen",
        location: "Singapore",
        // একদম ডিরেক্ট ছবি (পুরুষ)
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" 
    },
    {
        id: 2,
        quote: '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
        name: "Sarah Johnson",
        location: "New York, USA",
        // একদম ডিরেক্ট ছবি (মহিলা)
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
    }
];

    return (
        <div className="w-full bg-white font-sans antialiased">
            
            {/* ----------------- ১. Why Choose Wanderlust Section ----------------- */}
            <div className="bg-[#EDF9FC] py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Choose Wanderlust</h2>
                    <p className="text-gray-500 text-sm mb-12">Your trusted partner for exceptional travel experiences</p>
                    
                    {/* গ্রিড লেআউট */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((item) => (
                            <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col items-start text-left space-y-4">
                                <div className="p-3 bg-[#EDF9FC] rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ----------------- ২. What Travelers Say Section ----------------- */}
            <div className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    
                    {/* হেডার ও নেভিগেশন বাটন */}
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-2">What Travelers Say</h2>
                            <p className="text-gray-500 text-sm">Real experiences from our happy travelers</p>
                        </div>
                        {/* স্লাইডার বাটন (ডিজাইন সেম রাখার জন্য) */}
                        <div className="flex gap-3">
                            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                <FiArrowLeft className="text-lg" />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                <FiArrowRight className="text-lg" />
                            </button>
                        </div>
                    </div>

                    {/* টেস্টিমোনিয়াল কার্ড গ্রিড */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {testimonials.map((user) => (
                            <div key={user.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between gap-6 items-center md:items-stretch">
                                
                                {/* বাম পাশের টেক্সট কন্টেন্ট */}
                                <div className="flex flex-col justify-between flex-grow space-y-6 md:w-3/5">
                                    <p className="text-gray-800 font-medium text-base leading-relaxed">
                                        {user.quote}
                                    </p>
                                    <div>
                                        <h4 className="text-[#15A1BF] font-bold text-sm">— {user.name}</h4>
                                        <p className="text-gray-400 text-xs mt-0.5">{user.location}</p>
                                    </div>
                                </div>

                                {/* ডান পাশের ইমেজ কন্টেন্ট */}
                                <div className="relative w-full h-[240px] md:w-[180px] md:h-auto rounded-xl overflow-hidden shrink-0">
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 180px"
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AddHome;