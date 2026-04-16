import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import BannerCard from './BannerCard';

const Banner = () => {
    return (
        <div className='w-[90%] sm:w-[80%]  mx-auto '>
            <div className='space-y-10 pt-20 pb-10 border-b border-gray-400'>
                <div className='text-center space-y-5'>
                    <div className='space-y-4'>
                        <h1 className='text-[#1F2937] text-5xl font-bold'>Friends to keep close in your life</h1>
                        <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships <br /> that matter most.</p>
                    </div>
                    <button className='btn bg-[#244D3F] text-white'><IoIosAdd /> Add A Friend</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <BannerCard text="Total Friends" />
                    <BannerCard text="On Track" />
                    <BannerCard text="Need Attention" />
                    <BannerCard text="Interactions This Month" />
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;