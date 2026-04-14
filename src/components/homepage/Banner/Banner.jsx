import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='container mx-auto '>
            <div className='space-y-10 pt-20 pb-10 border-b border-gray-400'>
                <div className='text-center space-y-5'>
                    <div className='space-y-4'>
                        <h1 className='text-[#1F2937] text-5xl font-bold'>Friends to keep close in your life</h1>
                        <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships <br /> that matter most.</p>
                    </div>
                    <button className='btn bg-[#244D3F] text-white'><IoIosAdd /> Add A Friend</button>
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    <div className='bg-white p-8 text-center rounded-lg shadow-sm'>
                        <h3 className='text-[#244D3F] font-bold text-[32px]'>10</h3>
                        <p className='text-[#64748B] text-[18px]'>Total Friends</p>
                    </div>
                    <div className='bg-white p-8 text-center rounded-lg shadow-sm'>
                        <h3 className='text-[#244D3F] font-bold text-[32px]'>3</h3>
                        <p className='text-[#64748B] text-[18px]'>On Track</p>
                    </div>
                    <div className='bg-white p-8 text-center rounded-lg shadow-sm'>
                        <h3 className='text-[#244D3F] font-bold text-[32px]'>6</h3>
                        <p className='text-[#64748B] text-[18px]'>Need Attention</p>
                    </div>
                    <div className='bg-white p-8 text-center rounded-lg shadow-sm'>
                        <h3 className='text-[#244D3F] font-bold text-[32px]'>12</h3>
                        <p className='text-[#64748B] text-[18px]'>Interaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;