import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage =async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user;
console.log(user);


    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const data = await res.json();
    console.log(data);
    
    return (
        <div>
            <h2>my booking page</h2>
        </div>
    );
};

export default MyBookingPage;