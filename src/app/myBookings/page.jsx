import MyBookingCard from '@/components/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage =async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user;
// console.log(user);

const {token} = await auth.api.getToken({
    headers: await headers()
})


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    // console.log(data);
    
    return (
        <div>
            <h2>my booking page</h2>
            <div>
                {
                    data.map(user => <MyBookingCard key={user._id} booking={user}></MyBookingCard>)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;