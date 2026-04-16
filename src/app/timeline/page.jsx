
import TimelineCard from '@/components/timelineCard/TimelineCard';
import React from 'react';

export const metadata = {
  title: "Timeline - KeenKeeper",
  description: "View your activity timeline on KeenKeeper",
};

const TimelinePage = () => {
    return (
        <div className='container mx-auto sm:h-screen py-10'>
            <div className="w-[85%] mx-auto space-y-5">
                <h1 className='text-[#1F2937] text-3xl sm:text-5xl font-bold'>Timeline</h1>
                <TimelineCard />
            </div>
        </div>
    );
};

export default TimelinePage;