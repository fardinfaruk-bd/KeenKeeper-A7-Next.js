"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const FriendsCard = ({ friend }) => {

    if (!friend) return <div>Friend not found</div>;

    const statusColor = {
        "overdue": "bg-[#EF4444]",
        "almost due": "bg-[#FBBF24]",  
        "on-track": "bg-green-500",     
    };

    
    return (
        <Link href={`/${friend.id}`} className='bg-white py-10 border border-gray-200 shadow-lg flex flex-col items-center rounded-lg space-y-2 '>
            <Image src={friend.picture} width={100} height={100} alt={friend.name} className='rounded-full border-2 border-gray-200'></Image>
            <h1 className='font-semibold text-[20px] '>{friend.name}</h1>
            <p className='text-[#64748B] text-[12px]'>{friend.days_since_contact}d Ago</p>
            <div className='flex gap-3'>
                {friend.tags.map((tag, ind) => <div key={ind}><p className=' bg-[#CBFADB] rounded-4xl p-2 text-[12px] text-[#244D3F] font-medium'>{tag.toUpperCase()}</p></div>)}
            </div>
            <p
                className={`rounded-4xl p-2 text-[12px] text-white px-4 font-medium capitalize ${statusColor[friend.status]}`}
            >
                {friend.status}
            </p>

        </Link>
    );
};

export default FriendsCard;