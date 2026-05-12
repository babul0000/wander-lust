"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const item = session?.user;
    console.log(item);

    const handleSignOut = async() => {
        await authClient.signOut();
    }

    


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

                <ul className='flex items-center gap-5'>
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>

                    {item
                        ? <>
                            <div className='flex justify-center items-center gap-2'>
                                <li>
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={item?.image} />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                            </li>
                            <li>
                                <Button
                                onClick={handleSignOut}
                                    variant="danger" color="danger" >
                                    Sign out
                                </Button>
                            </li>
                            </div>
                        </>

                        :
                        <>
                            <li>
                                <Link href='/login'>Login</Link>
                            </li>
                            <li>
                                <Link href='/signUp'>Sign Up</Link>
                            </li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Navbar;