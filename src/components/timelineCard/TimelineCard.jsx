"use client";
import { FriendTimelineContext } from '@/context/FriendContactProvider';
import React, { useContext, useState } from 'react';
import TextImg from '@/assets/text.png';
import CallImg from '@/assets/call.png';
import VideoImg from '@/assets/video.png';
import Image from 'next/image';
import { FcBusinessContact } from 'react-icons/fc';

const TimelineCard = () => {
    const { friendTimeline } = useContext(FriendTimelineContext);

    // ✅ dropdown filter state (empty = show all)
    const [selectedType, setSelectedType] = useState("");

    // ✅ filtering logic
    const filteredTimeline = selectedType === ""
        ? friendTimeline
        : friendTimeline.filter(item => item.type === selectedType);

    // ✅ empty state
    if (!friendTimeline || friendTimeline.length === 0) {
        return (
            <div className="min-h-[40vh] sm:min-h-[60vh] my-10 shadow p-10 rounded-md flex flex-col items-center justify-center ">
                <FcBusinessContact className='text-[50px] sm:text-[100px] text-[#244D3F]' /> 
                <h2 className="font-medium text-2xl sm:text-5xl mb-16 text-[#244D3F] text-center">
                    No Interactions to display!!
                </h2>
            </div>
        )
    }

    return (
        <div className='my-10'>
            <div className="mb-6 max-w-md">
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="select select-bordered w-full bg-white text-gray-600"
                >
                    <option disabled value="">
                        Filter timeline
                    </option>
                    <option value="">All</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            <div className='flex flex-col gap-5'>
                {filteredTimeline.map((item, index) => (
                    <div key={index} className='bg-white  p-5 rounded-lg shadow-md flex items-center space-x-4 '>
                        <Image src={item.type === 'Text' ? TextImg : item.type === 'Call' ? CallImg : VideoImg} width={40} height={40} alt={TextImg}></Image>
                        <div>
                            <h2 className='text-[#64748B]'><span className='font-medium text-xl text-black'>{item.type}</span> with {item.name}</h2>
                            <p className='text-[#64748B]'>{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TimelineCard;