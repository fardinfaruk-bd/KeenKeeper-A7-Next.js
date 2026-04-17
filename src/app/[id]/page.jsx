
import MyBtn from '@/components/ui/myBtn/MyBtn';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { MdDeleteOutline, MdOutlineArchive } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import PhoneImg from "../../assets/call.png"
import TextImg from "../../assets/text.png"
import VideoImg from "../../assets/video.png"

export const metadata = {
  title: "Friend Details - KeenKeeper",
  description: "View detailed information about your friend and manage your relationship effectively with KeenKeeper",
};



const friendPromise = async function () {
  const res = await fetch("https://keenkeeper-alpha.vercel.app/data.json", {
    cache: 'no-store'
  });
  return res.json();
};



const FriendDetailsPage = async ({ params }) => {

  const friends = await friendPromise();
  const { id } = await params;
  const friend = friends.find((friend) => String(friend.id) === id);



  if (!friend) {
    notFound();
  }

  const statusColor = {
    "overdue": "badge py-3 bg-[#EF4444]",
    "almost due": "badge py-3 bg-[#FBBF24]",
    "on-track": "badge py-3 bg-green-500",
  };


  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">


        <div className="col-span-1 space-y-4">


          <div className="bg-white rounded-xl shadow p-4 text-center space-y-5 py-10">
            <Image
              src={friend.picture}
              width={100}
              height={100}
              alt={friend.name}
              className="mx-auto rounded-full"
            />
            <h2 className=" font-semibold text-xl">{friend.name}</h2>
            <p className={`rounded-4xl p-2 text-[12px] text-white px-4 font-medium capitalize ${statusColor[friend.status]}`}>{friend.status}</p>
            <div className='flex gap-3 justify-center'>
              {friend.tags.map((tag, ind) => <div key={ind}><p className=' bg-[#CBFADB] rounded-4xl p-2 text-[12px] text-[#244D3F] font-medium'>{tag.toUpperCase()}</p></div>)}
            </div>

            <p className=" text-gray-400  italic">{friend.bio}</p>
            <p className='text-[14px] text-[#64748B]'>Preferred: {friend.email}</p>
          </div>

          <div className="bg-white rounded-xl shadow p-3 space-y-2 border border-[#E9E9E9]">
            <button className="w-full  py-2 rounded-lg font-medium flex items-center gap-1 justify-center"> <RiNotificationSnoozeLine />Snooze 2 Weeks</button>
          </div>
          <div className=" bg-white rounded-xl shadow p-3 space-y-2">
            <button className="w-full  py-2 rounded-lg font-medium flex items-center gap-1 justify-center "> <MdOutlineArchive /> Archive</button>
          </div>
          <div className=" bg-white rounded-xl shadow p-3 space-y-2">
            <button className="w-full  py-2 rounded-lg font-medium text-red-500 flex items-center gap-1 justify-center"><MdDeleteOutline /> Delete</button>
          </div>

        </div>


        <div className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-3 gap-4">


          <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-center items-center text-center">
            <h2 className="text-xl sm:text-[30px] font-bold text-[#244D3F]">{friend.days_since_contact}</h2>
            <p className="text-xs sm:text-[18px] text-[#64748B]">Days Since Contact</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center flex flex-col justify-center items-center">
            <h2 className="text-xl sm:text-[30px] font-bold text-[#244D3F]">{friend.goal}</h2>
            <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
          </div>


          <div className="bg-white p-4 rounded-xl shadow text-center flex flex-col justify-center items-center">
            <h2 className="text-xl sm:text-[30px] font-bold text-[#244D3F]">{friend.next_due_date}</h2>
            <p className="text-xs sm:text-[18px] text-[#64748B]">Next Due</p>
          </div>


          <div className="bg-white p-4 rounded-xl shadow col-span-3 flex justify-between items-center ">
            <div>
              <h3 className="font-medium text-xl text-[#244D3F]">Relationship Goal</h3>
              <p className="text-xs sm:text-[18px] text-[#64748B]">Connect every <span className="font-bold text-[#1F2937]">30 days</span></p>
            </div>
            <button className="btn border px-4 py-1 rounded-lg text-sm">Edit</button>
          </div>


          <div className="bg-white p-4 rounded-xl shadow col-span-3 flex flex-col justify-center">
            <h3 className="text-xl text-[#244D3F] font-medium mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4 ">
              <MyBtn text="Call" img={PhoneImg} friend={friend} />
              <MyBtn text="Text" img={TextImg} friend={friend} />
              <MyBtn text="Video" img={VideoImg} friend={friend} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;