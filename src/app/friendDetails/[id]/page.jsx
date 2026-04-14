import Image from 'next/image';
import React from 'react';



const friendsPromise = async function () {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const friends = await friendsPromise();
    const friend = friends.find(friend => friend.id == id);
    console.log(friend);

    return (

        <div className='container mx-auto'>
            <div className='bg-white flex flex-col items-center rounded-lg space-y-2'>
                <Image src={friend.picture} width={100} height={100} alt={friend.name} className="rounded-full border-2 border-gray-200" />
                <h1 className='font-semibold text-[#1F2937] text-xl'>{friend.name}</h1>
                <p className= {` rounded-4xl p-2 text-[12px] text-white font-medium capitalize `}>{friend.status}</p>
                <div className='flex gap-3'>
                    {friend.tags.map((tag, ind) => <div key={ind}><p className=' bg-[#CBFADB] rounded-4xl p-2 text-[12px] text-[#244D3F] font-medium'>{tag.toUpperCase()}</p></div>)}
                </div>
                <p>{friend.description}</p>
            </div>
            
        </div>
    );
};

export default FriendDetailsPage;