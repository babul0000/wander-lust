"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = authClient.useSession();
    const item = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    // নেভিগেশন লিংকগুলো এক জায়গায় রাখা হলো যাতে কোড পরিচ্ছন্ন থাকে
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '/destination' },
        { name: 'My Bookings', href: '/myBookings' },
        { name: 'Add Destinations', href: '/app-destinations' },
    ];

    return (
        <nav className='bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 transition-all'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    
                    {/* ১. বাম পাশের মেনু (ডেস্কটপ) */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className="text-gray-600 hover:text-[#15A1BF] font-semibold text-sm transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* ২. মাঝখানে লোগো (সব স্ক্রিনেই সেন্টারে থাকবে) */}
                    <div className='flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2'>
                        <Link href='/'>
                            <Image
                                src='/assets/Wanderlast.png'
                                width={130}
                                height={40}
                                alt='logo'
                                className="object-contain cursor-pointer h-auto w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* ৩. ডান পাশের অথেনটিকেশন বাটন (ডেস্কটপ) */}
                    <div className='hidden md:flex items-center space-x-6'>
                        {item && (
                            <Link href='/profile' className="text-gray-600 hover:text-[#15A1BF] font-semibold text-sm transition-colors">
                                Profile
                            </Link>
                        )}
                        
                        {item ? (

                            <div className='flex items-center gap-4'>
                                <Avatar src={item?.image} size="sm" color="primary" className="cursor-pointer" />
                                <Button
                                    onClick={handleSignOut}
                                    color="danger" 
                                    variant="flat"
                                    size="sm"
                                    className="font-bold uppercase tracking-wider text-xs"
                                    endContent={<FiLogOut />}
                                >
                                    Sign out
                                </Button>
                            </div>
                            
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link href='/login' className="text-gray-600 hover:text-[#15A1BF] font-semibold text-sm transition-colors">
                                    Login
                                </Link>
                                <Link href='/signUp'>
                                    <Button size="sm" className="bg-[#15A1BF] text-white font-bold uppercase tracking-wider text-xs px-5 rounded-xl shadow-sm hover:bg-[#118099] transition-all">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* ৪. মোবাইল স্ক্রিনের টগল বাটন (Hamburger Menu) */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-gray-700 hover:text-[#15A1BF] p-2 focus:outline-none transition-colors'
                        >
                            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* ----------------- মোবাইল ড্রপডাউন মেনু ----------------- */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
                <div className='px-4 pt-4 pb-6 space-y-3 bg-gray-50/50'>
                    
                    {/* লিংকের লুপ */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-[#15A1BF] hover:bg-gray-100/50 px-3 py-2.5 rounded-xl font-semibold text-base transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    {item && (
                        <Link
                            href='/profile'
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-[#15A1BF] hover:bg-gray-100/50 px-3 py-2.5 rounded-xl font-semibold text-base transition-all"
                        >
                            Profile
                        </Link>
                    )}

                    <hr className="border-gray-200 my-2" />

                    {/* মোবাইল অথেনটিকেশন পার্ট */}
                    <div className="px-3 pt-2">
                        {item ? (
                            <div className='flex items-center justify-between bg-white p-3 rounded-xl border border-gray-100'>
                                <div className='flex items-center gap-3'>
                                    <Avatar src={item?.image} size="sm" />
                                    <span className="font-semibold text-sm text-gray-800">{item?.name || 'User'}</span>
                                </div>
                                <Button
                                    onClick={() => { handleSignOut(); setIsOpen(false); }}
                                    color="danger"
                                    variant="light"
                                    size="sm"
                                    className="font-bold text-xs uppercase"
                                >
                                    Sign out
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <Link href='/login' onClick={() => setIsOpen(false)} className="w-full">
                                    <Button variant="bordered" className="w-full font-bold text-gray-700 rounded-xl border-gray-200">
                                        Login
                                    </Button>
                                </Link>
                                <Link href='/signUp' onClick={() => setIsOpen(false)} className="w-full">
                                    <Button className="w-full bg-[#15A1BF] text-white font-bold rounded-xl shadow-sm">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;