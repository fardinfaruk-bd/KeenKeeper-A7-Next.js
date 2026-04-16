
import TimelineCard from '@/components/timelineCard/TimelineCard';
import React from 'react';

const TimelinePage = () => {
    return (
        <div className='container mx-auto  min-h-screen py-10 p-30 space-y-5'>
            <h1 className='text-[#1F2937] text-5xl font-bold'>Timeline</h1>
            <TimelineCard />
        </div>
    );
};

export default TimelinePage;