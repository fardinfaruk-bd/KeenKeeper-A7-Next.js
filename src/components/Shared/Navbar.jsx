import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a> Home</a></li>
                            <li><a>Timeline</a></li>
                            <li><a>Stats</a></li>
                        </ul>
                    </div>
                    <button className=' gap-0 font-bold text-2xl'>Keen<span className='text-[#244D3F]'>Keeper</span></button>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 text-[#64748B]">
                        <li><a><IoHomeOutline /> Home</a></li>
                        <li><a><CiClock2 /> Timeline</a></li>
                        <li><a><GoGraph /> Stats</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;