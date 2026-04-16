'use client'
import { FriendTimelineContext } from '@/context/FriendContactProvider';
import useFriends from '@/hooks/useFriends';
import React, { useContext } from 'react';

const BannerCard = ({text}) => {
    const {friends} = useFriends();
    const { friendTimeline } = useContext(FriendTimelineContext);
    const onTrackFriend = friends.filter(friend => friend.status === "on-track");
    const overdueFriend = friends.filter(friend => friend.status === "overdue");

    const handleNumber = (text) => {
        if (text === "On Track") {
            return onTrackFriend.length;
        }else if (text === "Total Friends") {
            return friends.length;
        }
        else if (text === "Need Attention") {
            return overdueFriend.length;
        }else if (text === "Interactions This Month") {
            return friendTimeline.length;
        }
    };


    return (
        <div className='bg-white p-8 text-center rounded-lg shadow-sm'>
            <h3 className='text-[#244D3F] font-bold text-[32px]'> {handleNumber(text)}</h3>
            <p className='text-[#64748B] text-[18px]'>{text}</p>
        </div>
    );
};

export default BannerCard;