"use client";
import FriendsCard from '@/components/ui/FriendsCard/FriendsCard';
import Spinner from '@/components/ui/loadingSpinner';
import useFriends from '@/hooks/useFriends';
import React from 'react';

const Friends = () => {
    const { friends, loading } = useFriends();

    

    return (
        <>
            <div className='w-[90%] sm:w-[80%] mx-auto space-y-5 py-10'>
                <h1 className='text-[#1F2937] font-semibold text-2xl'>Your Friends</h1>
                {loading === true ?
                <Spinner />
                : <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-20'>
                    {friends.map(friend => <FriendsCard key={friend.id} friend={friend} />)}
                </div>}
            </div>
        </>
    );
};

export default Friends;