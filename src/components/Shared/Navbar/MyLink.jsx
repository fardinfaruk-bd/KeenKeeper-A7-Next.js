"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ href, children }) => {
    const pathname = usePathname();
    return (
        <div>
            <Link href={href} className={`flex items-center gap-2   ${pathname === href ? "bg-[#244D3F] text-white font-bold btn" : "btn border-none text-[#64748B] font-normal"}`}>{children}</Link>
        </div>
    );
};

export default MyLink;