"use client";
import { FriendTimelineContext } from "@/context/FriendContactProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";



const StatsPage = () => {

  const { friendTimeline } = useContext(FriendTimelineContext);
  console.log(friendTimeline, "timeline card");

  const CallCount = friendTimeline.filter((item) => item.type === "Call").length;
  const MessageCount = friendTimeline.filter((item) => item.type === "Text").length;
  const VideoCallCount = friendTimeline.filter((item) => item.type === "Video").length;
  


  const data = [
    { name: 'Call', value: CallCount, fill: '#244d3f' },
    { name: 'Text', value: MessageCount, fill: '#7f37f5' },
    { name: 'Video', value: VideoCallCount, fill: '#37a163' },
  ];

  if (CallCount === 0 && MessageCount === 0 && VideoCallCount === 0) {
    return (
      <div className="min-h-[60vh] my-10 shadow p-10 rounded-md flex items-center justify-center ">
        <h2 className="font-medium text-5xl mb-16 text-[#244D3F]">
          No interactions to display
        </h2>
      </div>
    )
  }


  return (
    <div className=" my-10 shadow p-10 rounded-md  container mx-auto">
      <h2 className="font-medium text-xl mb-16 text-[#244D3F]">
        By Interaction Type
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatsPage;
