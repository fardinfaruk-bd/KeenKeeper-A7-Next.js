import Image from 'next/image';
import React from 'react';

const MyBtn = ({text, img}) => {
    return (
        <button className="border border-[#E9E9E9] bg-[#F8FAFC] rounded-xl py-4 hover:bg-gray-100 flex flex-col justify-center items-center gap-2">
            <Image src={img} width={32} height={32} alt={text}></Image>
            <p className='text-[18px]'>{text}</p>
        </button>
    );
};

export default MyBtn;