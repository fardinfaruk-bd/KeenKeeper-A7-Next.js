"use client";
import { FriendTimelineContext } from '@/context/FriendContactProvider';
import React, { useContext } from 'react';
import TextImg from '@/assets/text.png';
import CallImg from '@/assets/call.png';
import VideoImg from '@/assets/video.png';
import Image from 'next/image';

const TimelineCard = () => {
    const { friendTimeline } = useContext(FriendTimelineContext);
    console.log(friendTimeline, "timeline card");
    return (
        <div className='flex flex-col gap-5'>
            {friendTimeline.map((item, index) => (
                <div key={index} className='bg-white p-5 rounded-lg shadow-md flex items-center space-x-4 '>
                <Image src ={item.type === 'Text' ? TextImg : item.type === 'Call' ? CallImg : VideoImg} width={50} height={50} alt={TextImg}></Image>
                <div>
                    <h2 c><span className='font-medium text-xl'>{item.type}</span> with {item.name}</h2>
                    <p>{item.time}</p>
                </div>

            </div>
            ))}
        </div>
    );
};

export default TimelineCard;