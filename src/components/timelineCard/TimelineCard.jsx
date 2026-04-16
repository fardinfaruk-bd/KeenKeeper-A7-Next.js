"use client";
import { FriendTimelineContext } from '@/context/FriendContactProvider';
import React, { useContext } from 'react';
import TextImg from '@/assets/text.png';
import CallImg from '@/assets/call.png';
import VideoImg from '@/assets/video.png';
import Image from 'next/image';

import { FcBusinessContact } from 'react-icons/fc';

const TimelineCard = () => {
    const { friendTimeline } = useContext(FriendTimelineContext);
    console.log(friendTimeline, "timeline card");

    if (!friendTimeline || friendTimeline.length === 0) {
        return (
            <div className="min-h-[40vh] sm:min-h-[60vh] my-10 shadow p-10 rounded-md flex flex-col items-center justify-center ">
                <FcBusinessContact className='text-[50px] sm:text-[100px] text-[#244D3F]' /> 
                <h2 className="font-medium text-2xl sm:text-5xl mb-16 text-[#244D3F] flex flex-col items-center gap-4 text-center">
                    No Interactions to display!!
                </h2>
            </div>
        )
    }
    return (
        <div className='flex flex-col gap-5 min-h-[40vh] sm:min-h-[60vh] my-10'>
            {friendTimeline.map((item, index) => (
                <div key={index} className='bg-white p-5 rounded-lg shadow-md flex items-center space-x-4 '>
                    <Image src={item.type === 'Text' ? TextImg : item.type === 'Call' ? CallImg : VideoImg} width={40} height={40} alt={TextImg}></Image>
                    <div>
                        <h2 className='text-[#64748B]'><span className='font-medium text-xl text-black'>{item.type}</span> with {item.name}</h2>
                        <p className='text-[#64748B]'>{item.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimelineCard;