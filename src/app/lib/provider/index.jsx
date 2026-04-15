"use client";
import FriendContactProvider from '@/context/FriendContactProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <FriendContactProvider >
                {children}
            </FriendContactProvider>
        </div>
    );
};

export default Providers;