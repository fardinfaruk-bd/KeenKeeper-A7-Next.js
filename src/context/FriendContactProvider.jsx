"use client"
import React, { createContext, useState } from "react";


export const FriendTimelineContext = createContext();


const FriendContactProvider = ({children}) => {

    const [friendTimeline, setFriendTimeline] = useState([]);
    const data = {
        friendTimeline,
        setFriendTimeline
    }
    return (
        <FriendTimelineContext.Provider value={data}> {children}</FriendTimelineContext.Provider>
    );
};

export default FriendContactProvider;