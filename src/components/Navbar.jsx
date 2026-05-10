import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    

    return (

        <div className=' shadow-md '>

            <div className='w-11/12 mx-auto flex justify-between items-center py-5'>
            <ul className='flex gap-5'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/destination'>Destinations</Link>
                </li>
                <li>
                    <Link href='/myBookings'>My Bookings</Link>
                </li>
                <li>
                    <Link href='/app-destinations'>Add-Destinations</Link>
                </li>
            </ul>
            <div>
                <Image 
                src={'/assets/Wanderlast.png'}
                width={150}
                height={150}
                alt='logo'
                ></Image>
            </div>

            <ul className='flex gap-5'>
                <li>
                    <Link href='/profile'>Profile</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/signUp'>Sign Up</Link>
                </li>
                
            </ul>

        </div>
        </div>
    );
};

export default Navbar;