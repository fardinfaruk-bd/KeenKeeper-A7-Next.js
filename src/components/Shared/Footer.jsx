import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className=' bg-[#244D3F] text-white text-center pt-20 pb-10 space-y-9'>
            <div className='w-[90%] sm:w-[80%] mx-auto space-y-9' >
                <div>
                    <h1 className='text-4xl sm:text-6xl font-bold'>KeenKeeper</h1>
                    <p className='text-[#d3dbd9]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className='border-b border-gray-400 space-y-3 pb-5'>
                    <h3 className='font-medium text-xl'>Social Links</h3>
                    <div className='flex-col sm:flex-row flex  gap-5  items-center justify-center'>
                        <div className='w-10 h-10 bg-white text-black flex items-center justify-center text-2xl rounded-full cursor-pointer'>
                            <FiInstagram />
                        </div>
                        <div className='w-10 h-10 bg-white text-black flex items-center justify-center text-2xl rounded-full cursor-pointer'>
                            <FaFacebookSquare />
                        </div>
                        <div className='w-10 h-10 bg-white text-black flex items-center justify-center text-2xl rounded-full cursor-pointer'>
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <div className=' sm:flex  justify-between text-[#d3dbd9c3] text-[16px]'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-5 justify-center'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;