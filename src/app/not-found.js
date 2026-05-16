import Link from "next/link";
import { FiCompass, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
    return (
        <div className="min-h-[85vh] w-full flex flex-col items-center justify-center bg-white px-4 text-center font-sans antialiased">
            <div className="max-w-md w-full space-y-6 flex flex-col items-center">

                {/* ১. অ্যানিমেটেড কম্পাস আইকন সেকশন */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-32 h-32 bg-[#EDF9FC] rounded-full animate-pulse"></div>
                    <div className="relative p-6 bg-white border-2 border-gray-100 shadow-xl rounded-full text-[#15A1BF] animate-[spin_8s_linear_infinite]">
                        <FiCompass size={64} className="stroke-[1.5]" />
                    </div>
                </div>

                {/* ২. টেক্সট ও এরর মেসেজ */}
                <div className="space-y-3 pt-4">
                    <h1 className="text-7xl font-extrabold text-gray-900 tracking-tight">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold text-gray-950">
                        You&apos;ve Wandered Off The Map!
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed px-2">
                        The destination you are searching for has gone on its own adventure. Let&apos;s get you back on track to civilization.
                    </p>
                </div>

                {/* ৩. ব্যাক টু হোম বাটন */}
                <div className="pt-4 w-full sm:w-auto">
                    <Link href="/">
                        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15A1BF] hover:bg-[#118099] text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 group">
                            <FiArrowLeft className="text-base group-hover:-translate-x-1 transition-transform" />
                            Return to Home
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}