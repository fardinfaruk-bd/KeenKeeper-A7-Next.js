
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { MdDeleteOutline, MdOutlineArchive } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';


const friendPromise = async function () {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}




const FriendDetailsPage = async ({ params }) => {

    const friends = await friendPromise();

    const { id } = await params;

    const friend = friends.find((friend) => String(friend.id) === id);

    if (!friend) {
        notFound();
    }

    const statusColor = {
        "overdue": "bg-[#EF4444]",
        "almost due": "bg-[#FBBF24]",  
        "on-track": "bg-green-500",     
    };


    return (
        <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto grid grid-cols-4 gap-4">

        {/* LEFT SIDE */}
        <div className="col-span-1 space-y-4">

          {/* Profile */}
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Image
              src={friend.picture}
              width={100}
              height={100}
              alt={friend.name}
              className="mx-auto rounded-full"
            />
            <h2 className="mt-2 font-semibold">{friend.name}</h2>

            <p className={`rounded-4xl p-2 text-[12px] text-white px-4 font-medium capitalize ${statusColor[friend.status]}`}>{friend.status}</p>
            <p className="text-xs text-gray-400 mt-2 italic">{friend.bio}</p>
          </div>

          <div className="bg-white rounded-xl shadow p-3 space-y-2">
            <button className="w-full border border-[#E9E9E9] py-2 rounded-lg font-medium flex items-center justify-center"> <RiNotificationSnoozeLine />Snooze 2 Weeks</button>
            <button className="w-full border border-[#E9E9E9] py-2 rounded-lg font-medium flex items-center justify-center "> <MdOutlineArchive /> Archive</button>
            <button className="w-full border border-[#E9E9E9] py-2 rounded-lg font-medium text-red-500 flex items-center justify-center"><MdDeleteOutline /> Delete</button>
          </div>
        </div>

        
        <div className="col-span-3 grid grid-cols-3 gap-4">

          
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h2 className="text-xl font-bold text-blue-500">62</h2>
            <p className="text-xs text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h2 className="text-xl font-bold">30</h2>
            <p className="text-xs text-gray-500">Goal (Days)</p>
          </div>

          
          <div className="bg-white p-4 rounded-xl shadow text-center col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-sm font-semibold">Feb 27, 2026</h2>
            <p className="text-xs text-gray-500">Next Due</p>
          </div>

          
          <div className="bg-white p-4 rounded-xl shadow col-span-3 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-sm">Relationship Goal</h3>
              <p className="text-xs text-gray-500">
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="border px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
          </div>

          
          <div className="bg-white p-4 rounded-xl shadow col-span-3">
            <h3 className="text-sm font-semibold mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="border rounded-xl py-4 hover:bg-gray-100">
                📞 <br /> Call
                 </button>
              <button className="border rounded-xl py-4 hover:bg-gray-100">
                💬 <br /> Text
              </button>
              <button className="border rounded-xl py-4 hover:bg-gray-100">
                🎥 <br /> Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default FriendDetailsPage;