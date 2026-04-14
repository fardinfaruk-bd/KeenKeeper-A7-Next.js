"use client";

import Image from 'next/image';
import React from 'react';



const FriendsCard = ({ friend }) => {
    return (
        <div className='bg-white py-10 border border-gray-200 shadow-lg flex flex-col items-center rounded-lg space-y-2 '>
            <Image src={friend.picture} width={100} height={100} alt={friend.name} className='rounded-full border-2 border-gray-200'></Image>
            <h1 className='font-semibold text-[20px] '>{friend.name}</h1>
            <p className='text-[#64748B] text-[12px]'>{friend.days_since_contact}d Ago</p>
            <div className='flex gap-3'>
                {friend.tags.map((tag, ind) => <div key={ind}><p className=' bg-[#CBFADB] rounded-4xl p-2 text-[12px] text-[#244D3F] font-medium'>{tag.toUpperCase()}</p></div>)}
            </div>
            <p className=' bg-[#EF4444] rounded-4xl p-2 text-[12px] text-white font-medium capitalize'>{friend.status}</p>
        </div>
    );
};

export default FriendsCard;